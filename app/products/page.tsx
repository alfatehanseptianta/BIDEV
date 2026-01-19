"use client"

import type React from "react"

import { useState } from "react"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { useLanguage } from "@/lib/language-context"
import Link from "next/link"
import { Search, BookOpen, Video, FileText, Download, Lock, ArrowRight, Users, Clock } from "lucide-react"

const products = [
  {
    id: "urban-data-governance-module",
    titleId: "Modul Tata Kelola Data Perkotaan",
    titleEn: "Urban Data Governance Module",
    descId:
      "Panduan komprehensif untuk membangun sistem tata kelola data di tingkat kota, mencakup kebijakan, standar, dan implementasi teknis.",
    descEn:
      "Comprehensive guide to building data governance systems at city level, covering policy, standards, and technical implementation.",
    type: "module",
    format: "PDF + Video",
    duration: "8 jam",
    durationEn: "8 hours",
    audience: ["Government", "IT Managers"],
    topics: ["Data Governance", "Smart City", "Policy"],
    price: "free",
    thumbnail: "/data-governance-module-urban-planning.jpg",
  },
  {
    id: "social-protection-targeting",
    titleId: "Toolkit Targeting Perlindungan Sosial",
    titleEn: "Social Protection Targeting Toolkit",
    descId: "Framework dan tools untuk merancang sistem targeting penerima manfaat program sosial berbasis data.",
    descEn: "Framework and tools for designing data-based social program beneficiary targeting systems.",
    type: "toolkit",
    format: "PDF + Excel Templates",
    duration: "4 jam",
    durationEn: "4 hours",
    audience: ["Government", "Social Workers"],
    topics: ["Social Protection", "Data Analysis", "Targeting"],
    price: "premium",
    thumbnail: "/social-protection-toolkit-government.jpg",
  },
  {
    id: "smart-city-readiness",
    titleId: "Assessment Kesiapan Smart City",
    titleEn: "Smart City Readiness Assessment",
    descId: "Instrumen penilaian mandiri untuk mengukur kesiapan kota dalam implementasi smart city.",
    descEn: "Self-assessment instrument to measure city readiness for smart city implementation.",
    type: "assessment",
    format: "Interactive Web Tool",
    duration: "2 jam",
    durationEn: "2 hours",
    audience: ["Government", "City Planners"],
    topics: ["Smart City", "Assessment", "Planning"],
    price: "free",
    thumbnail: "/smart-city-assessment-dashboard.jpg",
  },
  {
    id: "investment-briefing-template",
    titleId: "Template Briefing Investasi Daerah",
    titleEn: "Regional Investment Briefing Template",
    descId: "Template standar untuk menyusun investment briefing yang menarik bagi investor.",
    descEn: "Standard template for preparing investment briefings that appeal to investors.",
    type: "template",
    format: "PowerPoint + Word",
    duration: "1 jam",
    durationEn: "1 hour",
    audience: ["Government", "Investment Agencies"],
    topics: ["Investment", "Economic Development", "Marketing"],
    price: "free",
    thumbnail: "/investment-briefing-presentation-template.jpg",
  },
  {
    id: "policy-brief-writing",
    titleId: "Panduan Penulisan Policy Brief",
    titleEn: "Policy Brief Writing Guide",
    descId: "Panduan langkah demi langkah untuk menulis policy brief yang efektif dan berbasis bukti.",
    descEn: "Step-by-step guide to writing effective evidence-based policy briefs.",
    type: "guide",
    format: "PDF + Examples",
    duration: "3 jam",
    durationEn: "3 hours",
    audience: ["Researchers", "Government", "NGOs"],
    topics: ["Policy Writing", "Research Communication", "Advocacy"],
    price: "free",
    thumbnail: "/policy-brief-writing-guide-document.jpg",
  },
  {
    id: "stakeholder-mapping",
    titleId: "Framework Pemetaan Stakeholder",
    titleEn: "Stakeholder Mapping Framework",
    descId: "Tools dan metodologi untuk memetakan dan menganalisis stakeholder dalam proyek pembangunan.",
    descEn: "Tools and methodology for mapping and analyzing stakeholders in development projects.",
    type: "toolkit",
    format: "PDF + Miro Template",
    duration: "2 jam",
    durationEn: "2 hours",
    audience: ["Consultants", "Project Managers"],
    topics: ["Stakeholder Analysis", "Project Management", "Engagement"],
    price: "premium",
    thumbnail: "/stakeholder-mapping-framework-diagram.jpg",
  },
]

const typeIcons: Record<string, React.ElementType> = {
  module: BookOpen,
  toolkit: FileText,
  assessment: FileText,
  template: FileText,
  guide: BookOpen,
  video: Video,
}

export default function ProductsPage() {
  const { t, language } = useLanguage()
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedType, setSelectedType] = useState<string | null>(null)

  const filteredProducts = products.filter((product) => {
    const matchesSearch =
      searchQuery === "" ||
      (language === "id" ? product.titleId : product.titleEn).toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.topics.some((topic) => topic.toLowerCase().includes(searchQuery.toLowerCase()))

    const matchesType = selectedType === null || product.type === selectedType

    return matchesSearch && matchesType
  })

  const types = [...new Set(products.map((p) => p.type))]

  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="pt-[72px] bg-[#0F3D2E]">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
          <div className="max-w-3xl">
            <p className="text-sm uppercase tracking-widest text-[#B89B5E] font-semibold mb-4">
              {t("Produk Pengetahuan", "Knowledge Products")}
            </p>
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold text-[#F7F5EF] leading-tight">
              {t("Modul & Toolkit", "Modules & Toolkits")}
            </h1>
            <p className="mt-6 text-xl text-[#F7F5EF]/80">
              {t(
                "Akses koleksi modul pelatihan, toolkit, dan template yang dikembangkan oleh pakar kami untuk mendukung praktisi pembangunan.",
                "Access our collection of training modules, toolkits, and templates developed by our experts to support development practitioners.",
              )}
            </p>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 bg-muted/30 border-b border-border sticky top-[72px] z-40">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                placeholder={t("Cari modul atau toolkit...", "Search modules or toolkits...")}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
            <div className="flex items-center gap-2 flex-wrap">
              <Badge
                variant={selectedType === null ? "default" : "outline"}
                className="cursor-pointer"
                onClick={() => setSelectedType(null)}
              >
                {t("Semua", "All")}
              </Badge>
              {types.map((type) => (
                <Badge
                  key={type}
                  variant={selectedType === type ? "default" : "outline"}
                  className="cursor-pointer capitalize"
                  onClick={() => setSelectedType(type)}
                >
                  {type}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16 sm:py-24 bg-background">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-sm text-muted-foreground mb-8">
            {t(`Menampilkan ${filteredProducts.length} produk`, `Showing ${filteredProducts.length} products`)}
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map((product) => {
              const Icon = typeIcons[product.type] || FileText
              return (
                <div
                  key={product.id}
                  className="group bg-card rounded-xl border border-border overflow-hidden hover:shadow-xl hover:border-primary/30 transition-all duration-300"
                >
                  {/* Thumbnail */}
                  <div className="aspect-[3/2] bg-muted relative overflow-hidden">
                    <img
                      src={product.thumbnail || "/placeholder.svg"}
                      alt={language === "id" ? product.titleId : product.titleEn}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    {product.price === "premium" && (
                      <Badge className="absolute top-3 right-3 bg-accent text-accent-foreground">
                        <Lock className="w-3 h-3 mr-1" />
                        Premium
                      </Badge>
                    )}
                    {product.price === "free" && (
                      <Badge className="absolute top-3 right-3 bg-primary text-primary-foreground">
                        {t("Gratis", "Free")}
                      </Badge>
                    )}
                  </div>

                  {/* Content */}
                  <div className="p-5">
                    <div className="flex items-center gap-2 mb-3">
                      <Icon className="w-4 h-4 text-primary" />
                      <Badge variant="secondary" className="capitalize text-xs">
                        {product.type}
                      </Badge>
                    </div>

                    <h3 className="font-semibold text-lg text-foreground mb-2 group-hover:text-primary transition-colors">
                      {language === "id" ? product.titleId : product.titleEn}
                    </h3>

                    <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                      {language === "id" ? product.descId : product.descEn}
                    </p>

                    {/* Meta */}
                    <div className="flex items-center gap-4 text-xs text-muted-foreground mb-4">
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {language === "id" ? product.duration : product.durationEn}
                      </span>
                      <span className="flex items-center gap-1">
                        <Users className="w-3 h-3" />
                        {product.audience[0]}
                      </span>
                    </div>

                    {/* Topics */}
                    <div className="flex flex-wrap gap-1 mb-4">
                      {product.topics.slice(0, 3).map((topic) => (
                        <span key={topic} className="text-xs px-2 py-1 bg-muted rounded text-muted-foreground">
                          {topic}
                        </span>
                      ))}
                    </div>

                    {/* CTA */}
                    <Button
                      className={`w-full ${
                        product.price === "premium"
                          ? "bg-accent text-accent-foreground hover:bg-accent/90"
                          : "bg-primary text-primary-foreground hover:bg-primary/90"
                      }`}
                    >
                      {product.price === "premium" ? (
                        <>
                          {t("Minta Akses", "Request Access")}
                          <Lock className="w-4 h-4 ml-2" />
                        </>
                      ) : (
                        <>
                          {t("Unduh Gratis", "Download Free")}
                          <Download className="w-4 h-4 ml-2" />
                        </>
                      )}
                    </Button>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground mb-4">
            {t("Butuh Modul Khusus?", "Need Custom Modules?")}
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            {t(
              "Kami dapat mengembangkan modul pelatihan khusus sesuai kebutuhan organisasi Anda.",
              "We can develop custom training modules tailored to your organization's needs.",
            )}
          </p>
          <Link href="/request">
            <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
              {t("Hubungi Kami", "Contact Us")}
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  )
}
