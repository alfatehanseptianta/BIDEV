"use client"

import Link from "next/link"
import { useState, useRef, useEffect } from "react"
import { Menu, Search, Globe, ChevronDown } from "lucide-react"
import { useTranslations } from "next-intl"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet"
import { useLanguage } from "@/lib/language-context"

interface NavChild {
  href: string
  labelKey: string
}

interface NavLink {
  href: string
  labelKey: string
  children?: NavChild[]
}

const navLinks: NavLink[] = [
  {
    href: "/about",
    labelKey: "about",
    children: [
      { href: "/about", labelKey: "aboutBidev" },
      { href: "/how-we-work", labelKey: "howWeWork" },
      { href: "/expertise", labelKey: "expertiseAreas" },
      { href: "/governance", labelKey: "governance" },
      { href: "/partners", labelKey: "partners" },
      { href: "/annual-report", labelKey: "annualReport" },
      { href: "/careers", labelKey: "careers" },
    ],
  },
  {
    href: "/board-of-experts",
    labelKey: "boardOfExperts",
  },
  {
    href: "/services",
    labelKey: "services",
    children: [
      { href: "/services", labelKey: "servicesAll" },
      { href: "/solutions", labelKey: "solutionsByProblem" },
      { href: "/case-studies", labelKey: "caseStudies" },
      { href: "/testimonials", labelKey: "clientTestimonials" },
      { href: "/for-government", labelKey: "forGovernment" },
      { href: "/for-private", labelKey: "forPrivate" },
    ],
  },
  {
    href: "/prakarsa",
    labelKey: "prakarsa",
    children: [
      { href: "/prakarsa", labelKey: "prakarsaOverview" },
      { href: "/prakarsa/features", labelKey: "prakarsaFeatures" },
      { href: "/prakarsa/packages", labelKey: "prakarsaPackages" },
      { href: "/prakarsa/security", labelKey: "prakarsaSecurity" },
      { href: "/prakarsa/demo", labelKey: "prakarsaDemo" },
    ],
  },
  {
    href: "/publications",
    labelKey: "insights",
    children: [
      { href: "/publications", labelKey: "publications" },
      { href: "/gallery", labelKey: "gallery" },
      { href: "/insights/topic/urban-data", labelKey: "topicHubs" },
      { href: "/newsletter", labelKey: "newsletter" },
      { href: "/products", labelKey: "knowledgeProducts" },
      { href: "/methodology", labelKey: "methodologyLibrary" },
      { href: "/downloads", labelKey: "downloadCenter" },
    ],
  },
  {
    href: "/events",
    labelKey: "events",
  },
  {
    href: "/integrity",
    labelKey: "trust",
    children: [
      { href: "/integrity", labelKey: "integrityCenter" },
      { href: "/quality", labelKey: "qualityAssurance" },
      { href: "/standards", labelKey: "ethicsStandards" },
      { href: "/credentials", labelKey: "credentials" },
      { href: "/data-policy", labelKey: "dataPolicy" },
      { href: "/security", labelKey: "security" },
    ],
  },
]

function NavDropdown({ link, t }: { link: NavLink; t: (key: string) => string }) {
  const [isOpen, setIsOpen] = useState(false)
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)
  const dropdownRef = useRef<HTMLDivElement>(null)

  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
    }
    setIsOpen(true)
  }

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsOpen(false)
    }, 150)
  }

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
    }
  }, [])

  return (
    <div ref={dropdownRef} className="relative" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <button className="px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted rounded-md transition-colors flex items-center gap-1">
        {t(`links.${link.labelKey}`)}
        <ChevronDown className={`w-3 h-3 transition-transform ${isOpen ? "rotate-180" : ""}`} />
      </button>
      {isOpen && link.children && (
        <div className="absolute top-full left-0 mt-1 w-56 bg-popover border border-border rounded-lg shadow-lg py-2 z-50">
          {link.children.map((child) => (
            <Link
              key={child.href}
              href={child.href}
              className="block px-4 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
              onClick={() => setIsOpen(false)}
            >
              {t(`links.${child.labelKey}`)}
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}

export function Navbar() {
  const { language, setLanguage } = useLanguage()
  const t = useTranslations("Navbar")
  const [langOpen, setLangOpen] = useState(false)
  const langTimeoutRef = useRef<NodeJS.Timeout | null>(null)
  const [isScrolled, setIsScrolled] = useState(false)
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const doc = document.documentElement
      const total = doc.scrollHeight - doc.clientHeight
      const current = doc.scrollTop
      setIsScrolled(current > 12)
      setScrollProgress(total > 0 ? (current / total) * 100 : 0)
    }

    handleScroll()
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleLangEnter = () => {
    if (langTimeoutRef.current) clearTimeout(langTimeoutRef.current)
    setLangOpen(true)
  }

  const handleLangLeave = () => {
    langTimeoutRef.current = setTimeout(() => setLangOpen(false), 150)
  }

  return (
    <header
      data-no-auto-translate
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/90 border-b border-border/80 shadow-[0_12px_40px_rgba(15,61,46,0.12)] backdrop-blur-xl"
          : "bg-background/60 border-b border-transparent backdrop-blur-md"
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-[78px] gap-4">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg">B</span>
            </div>
            <div className="hidden sm:block">
              <span className="font-bold text-lg text-foreground tracking-tight">BIDEV</span>
              <span className="text-[10px] text-muted-foreground block -mt-0.5 leading-tight">Institute</span>
            </div>
          </Link>

          {/* Desktop Navigation - Hover Dropdowns */}
          <nav className="hidden xl:flex items-center gap-0.5 px-2 py-1 rounded-full border border-border/60 bg-white/60 backdrop-blur-md shadow-[0_10px_30px_rgba(15,61,46,0.05)]">
            {navLinks.map((link) =>
              link.children ? (
                <NavDropdown key={link.href} link={link} t={t} />
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className="px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted rounded-md transition-colors"
                >
                  {t(`links.${link.labelKey}`)}
                </Link>
              ),
            )}
          </nav>

          {/* Right Side Actions */}
          <div className="flex items-center gap-2">
            {/* Language Switcher - Hover */}
            <div className="relative hidden sm:block" onMouseEnter={handleLangEnter} onMouseLeave={handleLangLeave}>
              <button className="flex items-center gap-1.5 px-3 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-muted rounded-md transition-colors">
                <Globe className="w-4 h-4" />
                <span>{language === "id" ? "ID" : "EN"}</span>
                <ChevronDown className={`w-3 h-3 transition-transform ${langOpen ? "rotate-180" : ""}`} />
              </button>
              {langOpen && (
                <div className="absolute top-full right-0 mt-1 w-40 bg-popover border border-border rounded-lg shadow-lg py-2 z-50">
                  <button
                    onClick={() => {
                      setLanguage("id")
                      setLangOpen(false)
                    }}
                    className={`block w-full text-left px-4 py-2 text-sm transition-colors ${
                      language === "id"
                        ? "bg-primary/10 text-primary font-medium"
                        : "text-muted-foreground hover:text-foreground hover:bg-muted"
                    }`}
                  >
                    {t("language.indonesian")}
                  </button>
                  <button
                    onClick={() => {
                      setLanguage("en")
                      setLangOpen(false)
                    }}
                    className={`block w-full text-left px-4 py-2 text-sm transition-colors ${
                      language === "en"
                        ? "bg-primary/10 text-primary font-medium"
                        : "text-muted-foreground hover:text-foreground hover:bg-muted"
                    }`}
                  >
                    {t("language.english")}
                  </button>
                </div>
              )}
            </div>

            {/* Search */}
            <Link href="/search">
              <Button variant="ghost" size="icon" className="hidden sm:flex text-muted-foreground">
                <Search className="w-4 h-4" />
              </Button>
            </Link>

            {/* CTA Button */}
            <Link href="/request" className="hidden lg:block">
              <Button className="bg-accent text-accent-foreground hover:bg-accent/90 font-semibold">
                {t("actions.consultExperts")}
              </Button>
            </Link>

            {/* Mobile Menu */}
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="xl:hidden">
                  <Menu className="w-5 h-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-full sm:w-[400px] overflow-y-auto">
                <div className="flex flex-col h-full pt-8">
                  <nav className="flex flex-col gap-1">
                    {navLinks.map((link) =>
                      link.children ? (
                        <div key={link.href} className="space-y-1">
                          <p className="px-4 py-2 text-sm font-semibold text-foreground">
                            {t(`links.${link.labelKey}`)}
                          </p>
                          {link.children.map((child) => (
                            <SheetClose asChild key={child.href}>
                              <Link
                                href={child.href}
                                className="px-4 py-2 pl-8 text-sm text-muted-foreground hover:text-foreground hover:bg-muted rounded-lg transition-colors block"
                              >
                                {t(`links.${child.labelKey}`)}
                              </Link>
                            </SheetClose>
                          ))}
                        </div>
                      ) : (
                        <SheetClose asChild key={link.href}>
                          <Link
                            href={link.href}
                            className="px-4 py-3 text-base font-medium text-foreground hover:bg-muted rounded-lg transition-colors"
                          >
                            {t(`links.${link.labelKey}`)}
                          </Link>
                        </SheetClose>
                      ),
                    )}
                    <SheetClose asChild>
                      <Link
                        href="/rfp"
                        className="px-4 py-3 text-base font-medium text-foreground hover:bg-muted rounded-lg transition-colors"
                      >
                        {t("actions.submitRfp")}
                      </Link>
                    </SheetClose>
                    <SheetClose asChild>
                      <Link
                        href="/media"
                        className="px-4 py-3 text-base font-medium text-foreground hover:bg-muted rounded-lg transition-colors"
                      >
                        {t("actions.media")}
                      </Link>
                    </SheetClose>
                  </nav>
                  <div className="mt-auto pb-8 space-y-4">
                    <div className="flex items-center gap-2 px-4">
                      <Globe className="w-4 h-4 text-muted-foreground" />
                      <button
                        onClick={() => setLanguage("id")}
                        className={`text-sm ${language === "id" ? "font-semibold text-foreground" : "text-muted-foreground"}`}
                      >
                        ID
                      </button>
                      <span className="text-muted-foreground">/</span>
                      <button
                        onClick={() => setLanguage("en")}
                        className={`text-sm ${language === "en" ? "font-semibold text-foreground" : "text-muted-foreground"}`}
                      >
                        EN
                      </button>
                    </div>
                    <SheetClose asChild>
                      <Link href="/request" className="block px-4">
                        <Button className="w-full bg-accent text-accent-foreground hover:bg-accent/90 font-semibold">
                          {t("actions.consultExperts")}
                        </Button>
                      </Link>
                    </SheetClose>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 h-0.5 w-full bg-transparent">
        <span
          className="block h-full bg-gradient-to-r from-primary/40 via-accent/40 to-primary/20 transition-[width] duration-300"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>
    </header>
  )
}
