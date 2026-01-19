"use client"

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
  useTransition,
  type ReactNode,
} from "react"
import { usePathname, useRouter } from "next/navigation"
import { useLocale } from "next-intl"

type Language = "id" | "en"

type TranslationCache = Record<Language, Record<string, string>>

type TranslationEntry = {
  original: string
  lastAuto?: string
}

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (id: string, en: string) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

const TRANSLATION_CACHE_KEY = "bidev-translation-cache"
const SKIP_TAGS = new Set(["SCRIPT", "STYLE", "NOSCRIPT", "IFRAME"])
const AUTO_TRANSLATE_ATTRS = ["placeholder", "aria-label", "title", "alt"] as const

type AttributeItem = {
  element: Element
  attr: (typeof AUTO_TRANSLATE_ATTRS)[number]
  value: string
}

function normalizeLocale(locale: string): Language {
  return locale === "en" ? "en" : "id"
}

function shouldTranslateText(text: string) {
  const trimmed = text.trim()
  if (!trimmed) return false
  if (trimmed.length < 2) return false
  if (!/[A-Za-z]/.test(trimmed)) return false
  if (trimmed.length > 1200) return false
  if (!trimmed.includes(" ") && /^[A-Z0-9&()'.,/-]+$/.test(trimmed)) return false
  return true
}

function createEmptyCache(): TranslationCache {
  return { id: {}, en: {} }
}

function sanitizeCacheSegment(segment: unknown): Record<string, string> {
  if (!segment || typeof segment !== "object") return {}
  return Object.fromEntries(
    Object.entries(segment as Record<string, unknown>).filter(([, value]) => typeof value === "string"),
  )
}

function normalizeTranslationCache(raw: unknown): TranslationCache {
  if (!raw || typeof raw !== "object") return createEmptyCache()

  const parsed = raw as Record<string, unknown>
  if ("id" in parsed || "en" in parsed) {
    return {
      id: sanitizeCacheSegment(parsed.id),
      en: sanitizeCacheSegment(parsed.en),
    }
  }

  return { id: sanitizeCacheSegment(parsed), en: {} }
}

function setLocaleCookie(language: Language) {
  if (typeof document === "undefined") return
  document.cookie = `NEXT_LOCALE=${language}; path=/; max-age=31536000; SameSite=Lax`
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const locale = useLocale()
  const language = normalizeLocale(locale)
  const pathname = usePathname()
  const router = useRouter()
  const [, startTransition] = useTransition()
  const [cacheReady, setCacheReady] = useState(false)
  const translationCacheRef = useRef<TranslationCache>(createEmptyCache())
  const originalTextMapRef = useRef(new Map<Text, TranslationEntry>())
  const originalAttrMapRef = useRef(new Map<Element, Map<string, TranslationEntry>>())
  const observerRef = useRef<MutationObserver | null>(null)
  const translateTimeoutRef = useRef<number | null>(null)
  const isTranslatingRef = useRef(false)
  const pendingTranslateRef = useRef<Language | null>(null)

  useEffect(() => {
    if (typeof window === "undefined") return
    const cachedTranslations = localStorage.getItem(TRANSLATION_CACHE_KEY)
    if (cachedTranslations) {
      try {
        translationCacheRef.current = normalizeTranslationCache(JSON.parse(cachedTranslations))
      } catch {
        translationCacheRef.current = createEmptyCache()
      }
    }

    setCacheReady(true)
  }, [])

  useEffect(() => {
    if (typeof document === "undefined") return
    document.documentElement.lang = language
    document.documentElement.setAttribute("data-language", language)
  }, [language])

  const persistCache = useCallback(() => {
    if (typeof window === "undefined") return
    try {
      localStorage.setItem(TRANSLATION_CACHE_KEY, JSON.stringify(translationCacheRef.current))
    } catch (error) {
      console.error("Failed to persist translation cache", error)
    }
  }, [])

  const cleanOriginalMap = useCallback(() => {
    originalTextMapRef.current.forEach((_, node) => {
      if (!node.isConnected) {
        originalTextMapRef.current.delete(node)
      }
    })
  }, [])

  const cleanOriginalAttrMap = useCallback(() => {
    originalAttrMapRef.current.forEach((_, element) => {
      if (!element.isConnected) {
        originalAttrMapRef.current.delete(element)
      }
    })
  }, [])

  const collectTextNodes = useCallback(() => {
    if (typeof document === "undefined") return []
    const nodes: Text[] = []
    const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT)

    while (walker.nextNode()) {
      const node = walker.currentNode as Text
      const parent = node.parentElement
      if (!parent) continue
      if (parent.closest("[data-no-auto-translate]")) continue
      if (SKIP_TAGS.has(parent.tagName)) continue
      const content = node.textContent
      if (!content || !shouldTranslateText(content)) continue
      nodes.push(node)
    }

    return nodes
  }, [])

  const collectAttributeItems = useCallback(() => {
    if (typeof document === "undefined") return []
    const items: AttributeItem[] = []
    const selector = AUTO_TRANSLATE_ATTRS.map((attr) => `[${attr}]`).join(",")
    const elements = document.querySelectorAll(selector)

    elements.forEach((element) => {
      if (element.closest("[data-no-auto-translate]")) return
      if (SKIP_TAGS.has(element.tagName)) return

      AUTO_TRANSLATE_ATTRS.forEach((attr) => {
        const value = element.getAttribute(attr)
        if (!value || !shouldTranslateText(value)) return
        items.push({ element, attr, value })
      })
    })

    return items
  }, [])

  const fetchTranslations = useCallback(
    async (targetLanguage: Language, texts: string[]) => {
      if (texts.length === 0) return

      const cache =
        translationCacheRef.current[targetLanguage] ?? (translationCacheRef.current[targetLanguage] = {})

      for (let i = 0; i < texts.length; i += 10) {
        const chunk = texts.slice(i, i + 10)
        try {
          const response = await fetch("/api/translate", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ texts: chunk, to: targetLanguage }),
          })

          if (!response.ok) {
            console.error("Translation request failed", await response.text())
            continue
          }

          const data = (await response.json()) as { translations: string[] }
          data.translations.forEach((translated, index) => {
            cache[chunk[index]] = translated
          })
        } catch (error) {
          console.error("Failed to translate chunk", error)
        }
      }

      persistCache()
    },
    [persistCache],
  )

  const translateDom = useCallback(
    async (targetLanguage: Language) => {
      if (typeof document === "undefined") return
      if (isTranslatingRef.current) {
        pendingTranslateRef.current = targetLanguage
        return
      }
      isTranslatingRef.current = true

      try {
        cleanOriginalMap()
        cleanOriginalAttrMap()
        const textNodes = collectTextNodes()
        const attributeItems = collectAttributeItems()
        if (textNodes.length === 0 && attributeItems.length === 0) return

        const cache =
          translationCacheRef.current[targetLanguage] ?? (translationCacheRef.current[targetLanguage] = {})
        const textsToTranslate: string[] = []
        const seen = new Set<string>()

        for (const node of textNodes) {
          const current = node.textContent ?? ""
          const existing = originalTextMapRef.current.get(node)
          if (!existing) {
            originalTextMapRef.current.set(node, { original: current })
          } else if (current !== existing.original && current !== existing.lastAuto) {
            existing.original = current
            existing.lastAuto = undefined
          }

          const original = originalTextMapRef.current.get(node)?.original ?? current
          if (!shouldTranslateText(original)) continue
          if (!seen.has(original) && !cache[original]) {
            seen.add(original)
            textsToTranslate.push(original)
          }
        }

        for (const item of attributeItems) {
          let attrMap = originalAttrMapRef.current.get(item.element)
          if (!attrMap) {
            attrMap = new Map()
            originalAttrMapRef.current.set(item.element, attrMap)
          }

          const existing = attrMap.get(item.attr)
          if (!existing) {
            attrMap.set(item.attr, { original: item.value })
          } else if (item.value !== existing.original && item.value !== existing.lastAuto) {
            existing.original = item.value
            existing.lastAuto = undefined
          }

          const original = attrMap.get(item.attr)?.original ?? item.value
          if (!shouldTranslateText(original)) continue
          if (!seen.has(original) && !cache[original]) {
            seen.add(original)
            textsToTranslate.push(original)
          }
        }

        await fetchTranslations(targetLanguage, textsToTranslate)

        for (const node of textNodes) {
          const entry = originalTextMapRef.current.get(node)
          const original = entry?.original
          if (!original) continue
          const translated = cache[original]
          if (translated && node.textContent !== translated) {
            node.textContent = translated
            entry.lastAuto = translated
          }
        }

        for (const item of attributeItems) {
          const attrMap = originalAttrMapRef.current.get(item.element)
          const entry = attrMap?.get(item.attr)
          const original = entry?.original
          if (!original) continue
          const translated = cache[original]
          if (translated && item.element.getAttribute(item.attr) !== translated) {
            item.element.setAttribute(item.attr, translated)
            entry.lastAuto = translated
          }
        }
      } finally {
        isTranslatingRef.current = false
        if (pendingTranslateRef.current) {
          const pendingLanguage = pendingTranslateRef.current
          pendingTranslateRef.current = null
          void translateDom(pendingLanguage)
        }
      }
    },
    [cleanOriginalAttrMap, cleanOriginalMap, collectAttributeItems, collectTextNodes, fetchTranslations],
  )

  useEffect(() => {
    if (!cacheReady) return
    if (typeof document === "undefined") return

    translateDom(language)

    const observer = new MutationObserver(() => {
      if (translateTimeoutRef.current) {
        window.clearTimeout(translateTimeoutRef.current)
      }
      translateTimeoutRef.current = window.setTimeout(() => {
        translateDom(language)
      }, 150)
    })
    observer.observe(document.body, {
      childList: true,
      subtree: true,
      characterData: true,
      attributes: true,
      attributeFilter: [...AUTO_TRANSLATE_ATTRS],
    })
    observerRef.current = observer

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect()
        observerRef.current = null
      }
      if (translateTimeoutRef.current) {
        window.clearTimeout(translateTimeoutRef.current)
        translateTimeoutRef.current = null
      }
    }
  }, [cacheReady, language, pathname, translateDom])

  const handleSetLanguage = (lang: Language) => {
    if (lang === language) return
    setLocaleCookie(lang)
    startTransition(() => {
      router.refresh()
    })
  }

  const t = (id: string, en: string) => {
    return language === "id" ? id : en
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
