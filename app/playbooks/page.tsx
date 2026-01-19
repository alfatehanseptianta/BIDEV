"use client"

import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { useLanguage } from "@/lib/language-context"
import Link from "next/link"
import { Download, ArrowRight, BookOpen, MapPin, TrendingUp, Shield, Users, Building } from "lucide-react"

const playbooks = [
  {
    id: "urban-data-playbook",
    titleId: "Playbook Tata Kelola Data Perkotaan",
    titleEn: "Urban Data Governance Playbook",
    descId:
      "Panduan langkah demi langkah untuk membangun sistem tata kelola data di tingkat kota, dari audit hingga implementasi.",
    descEn: "Step-by-step guide to building data governance systems at city level, from audit to implementation.",
    icon: TrendingUp,
    pages: 48,
    topics: ["Data Governance", "Smart City", "Policy"],
    targetId: "Pemerintah Kota/Kabupaten",
    targetEn: "City/Regency Government",
    thumbnail: "/urban-data-playbook-cover.jpg",
  },
  {
    id: "investment-readiness",
    titleId: "Checklist Kesiapan Investasi Daerah",
    titleEn: "Regional Investment Readiness Checklist",
    descId:
      "Instrumen penilaian mandiri untuk mengukur kesiapan daerah dalam menarik investasi, lengkap dengan rekomendasi perbaikan.",
    descEn:
      "Self-assessment instrument to measure regional readiness to attract investment, complete with improvement recommendations.",
    icon: Building,
    pages: 24,
    topics: ["Investment", "Economic Development", "Assessment"],
    targetId: "DPMPTSP, Bappeda",
    targetEn: "Investment Agency, Planning Agency",
    thumbnail: "/investment-readiness-checklist-cover.jpg",
  },
  {
    id: "social-protection-targeting",
    titleId: "Playbook Targeting Perlindungan Sosial",
    titleEn: "Social Protection Targeting Playbook",
    descId:
      "Metodologi dan tools untuk merancang sistem targeting penerima manfaat program sosial yang akurat dan berbasis data.",
    descEn:
      "Methodology and tools for designing accurate, data-based beneficiary targeting systems for social programs.",
    icon: Shield,
    pages: 36,
    topics: ["Social Protection", "Data Analysis", "Targeting"],
    targetId: "Dinas Sosial, Bappeda",
    targetEn: "Social Affairs Agency, Planning Agency",
    thumbnail: "/social-protection-playbook-cover.jpg",
  },
  {
    id: "stakeholder-engagement",
    titleId: "Playbook Engagement Stakeholder",
    titleEn: "Stakeholder Engagement Playbook",
    descId: "Framework dan teknik untuk memetakan, menganalisis, dan melibatkan stakeholder dalam proyek pembangunan.",
    descEn: "Framework and techniques for mapping, analyzing, and engaging stakeholders in development projects.",
    icon: Users,
    pages: 32,
    topics: ["Stakeholder Analysis", "Engagement", "Project Management"],
    targetId: "Project Manager, Konsultan",
    targetEn: "Project Manager, Consultant",
    thumbnail: "/stakeholder-engagement-playbook-cover.jpg",
  },
  {
    id: "bandung-urban-mobility",
    titleId: "Playbook Mobilitas Kota Bandung",
    titleEn: "Bandung Urban Mobility Playbook",
    descId:
      "Studi kasus dan rekomendasi untuk pengembangan sistem transportasi perkotaan berkelanjutan di Kota Bandung.",
    descEn: "Case study and recommendations for sustainable urban transportation system development in Bandung City.",
    icon: MapPin,
    pages: 52,
    topics: ["Urban Mobility", "Transportation", "TOD"],
    targetId: "Dinas Perhubungan, Bappeda",
    targetEn: "Transportation Agency, Planning Agency",
    thumbnail: "/bandung-mobility-playbook-cover.jpg",
  },
  {
    id: "smart-city-implementation",
    titleId: "Playbook Implementasi Smart City",
    titleEn: "Smart City Implementation Playbook",
    descId: "Panduan praktis untuk merencanakan, membangun, dan mengevaluasi inisiatif smart city di Indonesia.",
    descEn: "Practical guide for planning, building, and evaluating smart city initiatives in Indonesia.",
    icon: BookOpen,
    pages: 64,
    topics: ["Smart City", "Digital Transformation", "Innovation"],
    targetId: "Pemerintah Kota/Kabupaten",
    targetEn: "City/Regency Government",
    thumbnail: "/smart-city-playbook-cover.jpg",
  },
]

export default function PlaybooksPage() {
  const { t, language } = useLanguage()

  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="pt-[72px] bg-[#0F3D2E]">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
          <div className="max-w-3xl">
            <p className="text-sm uppercase tracking-widest text-[#B89B5E] font-semibold mb-4">
              {t("Panduan Praktis", "Practical Guides")}
            </p>
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold text-[#F7F5EF] leading-tight">
              {t("City Playbooks", "City Playbooks")}
            </h1>
            <p className="mt-6 text-xl text-[#F7F5EF]/80">
              {t(
                "Panduan praktis dan actionable untuk membantu pemerintah daerah dan praktisi pembangunan menyelesaikan tantangan spesifik.",
                "Practical and actionable guides to help local governments and development practitioners address specific challenges.",
              )}
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-8 bg-muted/30 border-b border-border">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-muted-foreground">
              {t(`${playbooks.length} playbooks tersedia`, `${playbooks.length} playbooks available`)}
            </p>
            <div className="flex items-center gap-2">
              <Badge variant="secondary">{t("Gratis untuk Pemerintah", "Free for Government")}</Badge>
            </div>
          </div>
        </div>
      </section>

      {/* Playbooks Grid */}
      <section className="py-16 sm:py-24 bg-background">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {playbooks.map((playbook) => {
              const Icon = playbook.icon
              return (
                <div
                  key={playbook.id}
                  className="group bg-card rounded-xl border border-border overflow-hidden hover:shadow-xl hover:border-primary/30 transition-all duration-300 flex flex-col"
                >
                  {/* Thumbnail */}
                  <div className="aspect-[4/3] bg-gradient-to-br from-primary/20 to-primary/5 relative overflow-hidden flex items-center justify-center">
                    <Icon className="w-20 h-20 text-primary/30 group-hover:scale-110 transition-transform duration-300" />
                    <Badge className="absolute top-3 right-3 bg-primary text-primary-foreground">
                      {playbook.pages} {t("halaman", "pages")}
                    </Badge>
                  </div>

                  {/* Content */}
                  <div className="p-6 flex-1 flex flex-col">
                    <h3 className="font-semibold text-lg text-foreground mb-2 group-hover:text-primary transition-colors">
                      {language === "id" ? playbook.titleId : playbook.titleEn}
                    </h3>

                    <p className="text-sm text-muted-foreground mb-4 flex-1">
                      {language === "id" ? playbook.descId : playbook.descEn}
                    </p>

                    {/* Topics */}
                    <div className="flex flex-wrap gap-1 mb-4">
                      {playbook.topics.map((topic) => (
                        <Badge key={topic} variant="secondary" className="text-xs">
                          {topic}
                        </Badge>
                      ))}
                    </div>

                    {/* Target */}
                    <p className="text-xs text-muted-foreground mb-4">
                      <span className="font-semibold">{t("Target:", "Target:")}</span>{" "}
                      {language === "id" ? playbook.targetId : playbook.targetEn}
                    </p>

                    {/* CTA */}
                    <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                      <Download className="w-4 h-4 mr-2" />
                      {t("Unduh Playbook", "Download Playbook")}
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
            {t("Butuh Playbook Khusus?", "Need a Custom Playbook?")}
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            {t(
              "Kami dapat mengembangkan playbook khusus untuk tantangan spesifik kota atau organisasi Anda.",
              "We can develop custom playbooks for your city or organization's specific challenges.",
            )}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/request">
              <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
                {t("Diskusikan Kebutuhan Anda", "Discuss Your Needs")}
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
            <Link href="/products">
              <Button size="lg" variant="outline" className="bg-transparent">
                {t("Lihat Produk Lainnya", "View Other Products")}
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
