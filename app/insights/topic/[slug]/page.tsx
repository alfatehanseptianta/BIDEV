"use client"

import type React from "react"

import { use } from "react"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { useLanguage } from "@/lib/language-context"
import Link from "next/link"
import { ArrowRight, FileText, Users, BookOpen, Briefcase, TrendingUp } from "lucide-react"

const topicData: Record<
  string,
  {
    titleId: string
    titleEn: string
    descId: string
    descEn: string
    icon: React.ElementType
    color: string
    publications: { title: string; type: string; date: string; slug: string }[]
    experts: { name: string; title: string; slug: string }[]
    services: { name: string; slug: string }[]
    caseStudies: { title: string; slug: string }[]
  }
> = {
  "urban-data": {
    titleId: "Data Perkotaan",
    titleEn: "Urban Data",
    descId:
      "Eksplorasi mendalam tentang tata kelola data perkotaan, integrasi sistem, dan pemanfaatan data untuk pengambilan keputusan berbasis bukti.",
    descEn:
      "Deep exploration of urban data governance, system integration, and data utilization for evidence-based decision making.",
    icon: TrendingUp,
    color: "bg-blue-500",
    publications: [
      {
        title: "Framework Tata Kelola Data Perkotaan Indonesia",
        type: "Policy Brief",
        date: "2025-01",
        slug: "urban-data-framework",
      },
      {
        title: "Best Practices Integrasi Data Antar OPD",
        type: "Research Report",
        date: "2024-11",
        slug: "data-integration-best-practices",
      },
      {
        title: "Standar Interoperabilitas Data Kota Cerdas",
        type: "Technical Guide",
        date: "2024-09",
        slug: "smart-city-data-standards",
      },
    ],
    experts: [
      { name: "Dr. Ahmad Fauzi, M.T", title: "Data Science Lead", slug: "ahmad-fauzi" },
      { name: "Prof. Dr. Andika Pratama, PhD", title: "Urban Planning Expert", slug: "andika-pratama" },
    ],
    services: [
      { name: "Digital Systems & IT Projects", slug: "digital-systems" },
      { name: "Policy & Development Consulting", slug: "policy-consulting" },
    ],
    caseStudies: [
      { title: "Jakarta Data Governance Transformation", slug: "jakarta-data-governance" },
      { title: "Bandung Smart City Data Integration", slug: "bandung-smart-city" },
    ],
  },
  housing: {
    titleId: "Perumahan",
    titleEn: "Housing",
    descId:
      "Kajian komprehensif tentang kebijakan perumahan, backlog, pembiayaan, dan solusi hunian terjangkau untuk masyarakat Indonesia.",
    descEn:
      "Comprehensive study of housing policy, backlog, financing, and affordable housing solutions for Indonesian communities.",
    icon: BookOpen,
    color: "bg-green-500",
    publications: [
      {
        title: "Analisis Backlog Perumahan Jawa Barat 2025",
        type: "Research Report",
        date: "2025-01",
        slug: "housing-backlog-analysis",
      },
      {
        title: "Model Pembiayaan Perumahan Inklusif",
        type: "Policy Brief",
        date: "2024-10",
        slug: "inclusive-housing-finance",
      },
    ],
    experts: [
      { name: "Dr. Ratna Permata, M.Si", title: "Housing Policy Researcher", slug: "ratna-permata" },
      { name: "Prof. Dr. Andika Pratama, PhD", title: "Urban Planning Expert", slug: "andika-pratama" },
    ],
    services: [
      { name: "Policy & Development Consulting", slug: "policy-consulting" },
      { name: "Research & Field Studies", slug: "research" },
    ],
    caseStudies: [{ title: "Bandung Affordable Housing Strategy", slug: "bandung-housing" }],
  },
  mobility: {
    titleId: "Mobilitas",
    titleEn: "Mobility",
    descId:
      "Solusi transportasi perkotaan, Transit-Oriented Development, dan sistem mobilitas berkelanjutan untuk kota-kota Indonesia.",
    descEn:
      "Urban transportation solutions, Transit-Oriented Development, and sustainable mobility systems for Indonesian cities.",
    icon: Briefcase,
    color: "bg-orange-500",
    publications: [
      {
        title: "TOD Implementation Guide for Indonesian Cities",
        type: "Technical Guide",
        date: "2024-12",
        slug: "tod-implementation",
      },
      {
        title: "Multi-Modal Transportation Integration",
        type: "Policy Brief",
        date: "2024-08",
        slug: "multimodal-transport",
      },
    ],
    experts: [
      { name: "Dr. Hendra Saputra, M.T", title: "Transportation Engineer", slug: "hendra-saputra" },
      { name: "Prof. Bambang Wijaya, Ph.D", title: "Infrastructure Specialist", slug: "bambang-wijaya" },
    ],
    services: [
      { name: "Roadmap & Masterplan Development", slug: "roadmap-development" },
      { name: "Research & Field Studies", slug: "research" },
    ],
    caseStudies: [{ title: "Bandung Urban Mobility Masterplan", slug: "bandung-mobility" }],
  },
  "social-protection": {
    titleId: "Perlindungan Sosial",
    titleEn: "Social Protection",
    descId:
      "Sistem jaring pengaman sosial, targeting berbasis data, dan program perlindungan sosial yang efektif dan inklusif.",
    descEn: "Social safety net systems, data-based targeting, and effective and inclusive social protection programs.",
    icon: Users,
    color: "bg-purple-500",
    publications: [
      {
        title: "Data-Driven Social Protection Targeting",
        type: "Research Report",
        date: "2025-01",
        slug: "social-targeting",
      },
      {
        title: "Unified Database for Social Programs",
        type: "Policy Brief",
        date: "2024-11",
        slug: "unified-social-database",
      },
    ],
    experts: [
      { name: "Dr. Siti Rahayu, M.Sc", title: "Economics Researcher", slug: "siti-rahayu" },
      { name: "Prof. Dr. Dewi Anggraini", title: "Public Policy Expert", slug: "dewi-anggraini" },
    ],
    services: [
      { name: "PRAKARSA", slug: "prakarsa" },
      { name: "Research & Field Studies", slug: "research" },
    ],
    caseStudies: [{ title: "Bandung Social Protection System", slug: "bandung-social-protection" }],
  },
}

export default function TopicHubPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = use(params)
  const { t, language } = useLanguage()
  const topic = topicData[resolvedParams.slug]

  if (!topic) {
    return (
      <main className="min-h-screen">
        <section className="pt-[72px] min-h-[60vh] flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-foreground mb-4">{t("Topik tidak ditemukan", "Topic not found")}</h1>
            <Link href="/publications">
              <Button>{t("Kembali ke Publikasi", "Back to Publications")}</Button>
            </Link>
          </div>
        </section>
        <Footer />
      </main>
    )
  }

  const Icon = topic.icon

  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="pt-[72px] bg-[#0F3D2E]">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
          <div className="flex items-start gap-6">
            <div className={`w-16 h-16 ${topic.color} rounded-xl flex items-center justify-center shrink-0`}>
              <Icon className="w-8 h-8 text-white" />
            </div>
            <div>
              <p className="text-sm uppercase tracking-widest text-[#B89B5E] font-semibold mb-2">
                {t("Pusat Topik", "Topic Hub")}
              </p>
              <h1 className="font-serif text-4xl sm:text-5xl font-bold text-[#F7F5EF] leading-tight mb-4">
                {language === "id" ? topic.titleId : topic.titleEn}
              </h1>
              <p className="text-lg text-[#F7F5EF]/80 max-w-2xl">{language === "id" ? topic.descId : topic.descEn}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Content Grid */}
      <section className="py-16 sm:py-24 bg-background">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-12">
              {/* Publications */}
              <div>
                <div className="flex items-center justify-between mb-6">
                  <h2 className="font-semibold text-xl text-foreground flex items-center gap-2">
                    <FileText className="w-5 h-5 text-primary" />
                    {t("Publikasi Terkait", "Related Publications")}
                  </h2>
                  <Link href="/publications" className="text-sm text-primary hover:underline">
                    {t("Lihat semua", "View all")}
                  </Link>
                </div>
                <div className="space-y-4">
                  {topic.publications.map((pub, index) => (
                    <Link
                      key={index}
                      href={`/publications/${pub.slug}`}
                      className="block p-4 bg-card rounded-lg border border-border hover:border-primary/30 hover:shadow-md transition-all"
                    >
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <Badge variant="secondary" className="mb-2">
                            {pub.type}
                          </Badge>
                          <h3 className="font-medium text-foreground hover:text-primary transition-colors">
                            {pub.title}
                          </h3>
                        </div>
                        <span className="text-xs text-muted-foreground shrink-0">{pub.date}</span>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Case Studies */}
              <div>
                <div className="flex items-center justify-between mb-6">
                  <h2 className="font-semibold text-xl text-foreground flex items-center gap-2">
                    <Briefcase className="w-5 h-5 text-primary" />
                    {t("Studi Kasus", "Case Studies")}
                  </h2>
                  <Link href="/case-studies" className="text-sm text-primary hover:underline">
                    {t("Lihat semua", "View all")}
                  </Link>
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  {topic.caseStudies.map((cs, index) => (
                    <Link
                      key={index}
                      href={`/case-studies/${cs.slug}`}
                      className="group p-4 bg-card rounded-lg border border-border hover:border-primary/30 hover:shadow-md transition-all"
                    >
                      <h3 className="font-medium text-foreground group-hover:text-primary transition-colors mb-2">
                        {cs.title}
                      </h3>
                      <span className="text-sm text-primary flex items-center gap-1">
                        {t("Baca selengkapnya", "Read more")}
                        <ArrowRight className="w-3 h-3" />
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Experts */}
              <div className="bg-card rounded-xl border border-border p-6">
                <h3 className="font-semibold text-lg text-foreground mb-4 flex items-center gap-2">
                  <Users className="w-5 h-5 text-primary" />
                  {t("Pakar Terkait", "Related Experts")}
                </h3>
                <div className="space-y-4">
                  {topic.experts.map((expert, index) => (
                    <Link
                      key={index}
                      href={`/board-of-experts/${expert.slug}`}
                      className="flex items-center gap-3 group"
                    >
                      <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                        <span className="text-sm font-semibold text-primary">
                          {expert.name
                            .split(" ")
                            .map((n) => n[0])
                            .slice(0, 2)
                            .join("")}
                        </span>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                          {expert.name}
                        </p>
                        <p className="text-xs text-muted-foreground">{expert.title}</p>
                      </div>
                    </Link>
                  ))}
                </div>
                <Link href="/board-of-experts" className="block mt-4">
                  <Button variant="outline" className="w-full bg-transparent">
                    {t("Lihat Semua Pakar", "View All Experts")}
                  </Button>
                </Link>
              </div>

              {/* Services */}
              <div className="bg-card rounded-xl border border-border p-6">
                <h3 className="font-semibold text-lg text-foreground mb-4 flex items-center gap-2">
                  <Briefcase className="w-5 h-5 text-primary" />
                  {t("Layanan Terkait", "Related Services")}
                </h3>
                <div className="space-y-2">
                  {topic.services.map((service, index) => (
                    <Link
                      key={index}
                      href={`/services/${service.slug}`}
                      className="block p-3 bg-muted/50 rounded-lg hover:bg-muted transition-colors text-sm text-foreground"
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Newsletter CTA */}
              <div className="bg-primary rounded-xl p-6 text-primary-foreground">
                <h3 className="font-semibold text-lg mb-2">{t("Ikuti Perkembangan", "Stay Updated")}</h3>
                <p className="text-sm text-primary-foreground/80 mb-4">
                  {t(
                    "Dapatkan insight terbaru tentang topik ini langsung ke email Anda.",
                    "Get the latest insights on this topic delivered to your inbox.",
                  )}
                </p>
                <Link href="/newsletter">
                  <Button className="w-full bg-accent text-accent-foreground hover:bg-accent/90">
                    {t("Berlangganan Newsletter", "Subscribe to Newsletter")}
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Other Topics */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-semibold text-xl text-foreground mb-6">{t("Topik Lainnya", "Other Topics")}</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
            {Object.entries(topicData)
              .filter(([slug]) => slug !== resolvedParams.slug)
              .map(([slug, data]) => {
                const TopicIcon = data.icon
                return (
                  <Link
                    key={slug}
                    href={`/insights/topic/${slug}`}
                    className="p-4 bg-card rounded-lg border border-border hover:border-primary/30 hover:shadow-md transition-all flex items-center gap-3"
                  >
                    <div className={`w-10 h-10 ${data.color} rounded-lg flex items-center justify-center shrink-0`}>
                      <TopicIcon className="w-5 h-5 text-white" />
                    </div>
                    <span className="font-medium text-foreground">
                      {language === "id" ? data.titleId : data.titleEn}
                    </span>
                  </Link>
                )
              })}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
