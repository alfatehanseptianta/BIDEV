import { NextResponse } from "next/server"
import { translate } from "@vitalets/google-translate-api"
import { defaultLocale, locales, type Locale } from "@/i18n/config"

export const runtime = "nodejs"

const corsHeaders = {
  "Access-Control-Allow-Origin": process.env.TRANSLATE_ALLOWED_ORIGIN ?? "*",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type",
}

interface TranslateRequestBody {
  texts: string[]
  to?: string
  from?: string
}

function resolveLocale(value: unknown): Locale | undefined {
  if (typeof value !== "string") return undefined
  return locales.includes(value as Locale) ? (value as Locale) : undefined
}

function resolveSource(value: unknown): Locale | "auto" {
  if (value === "auto") return "auto"
  return resolveLocale(value) ?? "auto"
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as TranslateRequestBody
    if (!body || !Array.isArray(body.texts)) {
      return NextResponse.json({ error: "Invalid payload" }, { status: 400, headers: corsHeaders })
    }

    const target = resolveLocale(body.to) ?? defaultLocale
    const source = resolveSource(body.from)
    const translations: string[] = []

    for (const rawText of body.texts) {
      if (typeof rawText !== "string" || !rawText.trim()) {
        translations.push(rawText ?? "")
        continue
      }

      try {
        const response = await translate(rawText, { from: source, to: target })
        translations.push(response.text)
      } catch (error) {
        console.error("Translation error:", error)
        translations.push(rawText)
      }
    }

    return NextResponse.json({ translations }, { headers: corsHeaders })
  } catch (error) {
    console.error("Translation API failure:", error)
    return NextResponse.json({ error: "Translation service unavailable" }, { status: 500, headers: corsHeaders })
  }
}

export function OPTIONS() {
  return new Response(null, { status: 204, headers: corsHeaders })
}
