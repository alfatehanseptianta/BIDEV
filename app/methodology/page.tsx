"use client"

import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { useLanguage } from "@/lib/language-context"
import Link from "next/link"
import {
  Download,
  ArrowRight,
  Target,
  BarChart3,
  Users,
  Search,
  GitBranch,
  Layers,
  LineChart,
  CheckSquare,
} from "lucide-react"

const methodologies = [
  {
    id: "pestle",
    name: "PESTLE Analysis",
    descId: "Analisis faktor Politik, Ekonomi, Sosial, Teknologi, Legal, dan Lingkungan untuk memahami konteks makro.",
    descEn:
      "Analysis of Political, Economic, Social, Technological, Legal, and Environmental factors to understand macro context.",
    category: "Strategic Analysis",
    icon: Target,
    applications: ["Policy Analysis", "Market Entry", "Strategic Planning"],
  },
  {
    id: "swot",
    name: "SWOT Analysis",
    descId: "Identifikasi Kekuatan, Kelemahan, Peluang, dan Ancaman untuk perencanaan strategis.",
    descEn: "Identification of Strengths, Weaknesses, Opportunities, and Threats for strategic planning.",
    category: "Strategic Analysis",
    icon: Layers,
    applications: ["Strategic Planning", "Organizational Assessment", "Project Design"],
  },
  {
    id: "stakeholder-mapping",
    name: "Stakeholder Mapping",
    descId: "Pemetaan dan analisis pemangku kepentingan berdasarkan pengaruh dan kepentingan.",
    descEn: "Mapping and analysis of stakeholders based on influence and interest.",
    category: "Engagement",
    icon: Users,
    applications: ["Project Management", "Policy Development", "Community Engagement"],
  },
  {
    id: "anp-mcda",
    name: "ANP / MCDA",
    descId: "Analytic Network Process dan Multi-Criteria Decision Analysis untuk pengambilan keputusan kompleks.",
    descEn: "Analytic Network Process and Multi-Criteria Decision Analysis for complex decision making.",
    category: "Decision Analysis",
    icon: GitBranch,
    applications: ["Site Selection", "Priority Setting", "Resource Allocation"],
  },
  {
    id: "theory-of-change",
    name: "Theory of Change",
    descId: "Framework untuk mendesain dan mengevaluasi intervensi pembangunan berbasis hasil.",
    descEn: "Framework for designing and evaluating outcome-based development interventions.",
    category: "Program Design",
    icon: LineChart,
    applications: ["Program Design", "Impact Evaluation", "Grant Proposals"],
  },
  {
    id: "me-framework",
    name: "M&E Framework Design",
    descId: "Desain sistem Monitoring & Evaluasi dengan indikator SMART dan data collection plan.",
    descEn: "Monitoring & Evaluation system design with SMART indicators and data collection plan.",
    category: "Monitoring & Evaluation",
    icon: CheckSquare,
    applications: ["Project Monitoring", "Performance Management", "Impact Assessment"],
  },
  {
    id: "data-validation",
    name: "Data Validation Protocol",
    descId: "Protokol standar untuk validasi dan quality assurance data primer dan sekunder.",
    descEn: "Standard protocol for validation and quality assurance of primary and secondary data.",
    category: "Data Quality",
    icon: Search,
    applications: ["Research", "Data Analysis", "Reporting"],
  },
  {
    id: "cost-benefit",
    name: "Cost-Benefit Analysis",
    descId: "Analisis biaya-manfaat untuk evaluasi kelayakan proyek dan kebijakan.",
    descEn: "Cost-benefit analysis for project and policy feasibility evaluation.",
    category: "Economic Analysis",
    icon: BarChart3,
    applications: ["Investment Decisions", "Policy Evaluation", "Project Appraisal"],
  },
]

const categories = [...new Set(methodologies.map((m) => m.category))]

export default function MethodologyPage() {
  const { t, language } = useLanguage()

  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="pt-[72px] bg-[#0F3D2E]">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
          <div className="max-w-3xl">
            <p className="text-sm uppercase tracking-widest text-[#B89B5E] font-semibold mb-4">
              {t("Framework & Standar", "Frameworks & Standards")}
            </p>
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold text-[#F7F5EF] leading-tight">
              {t("Perpustakaan Metodologi", "Methodology Library")}
            </h1>
            <p className="mt-6 text-xl text-[#F7F5EF]/80">
              {t(
                "Standar metodologi yang kami gunakan dalam setiap proyek untuk memastikan kualitas dan konsistensi output.",
                "Methodological standards we use in every project to ensure quality and consistency of outputs.",
              )}
            </p>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="py-12 bg-muted/30 border-b border-border">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-start gap-8">
            <div className="flex-1">
              <h2 className="font-semibold text-xl text-foreground mb-3">
                {t("Pendekatan Berbasis Bukti", "Evidence-Based Approach")}
              </h2>
              <p className="text-muted-foreground">
                {t(
                  "Setiap proyek BIDEV mengikuti standar metodologi yang ketat untuk memastikan hasil yang dapat dipertanggungjawabkan secara akademis dan praktis.",
                  "Every BIDEV project follows rigorous methodological standards to ensure academically and practically accountable results.",
                )}
              </p>
            </div>
            <div className="flex gap-4">
              <div className="text-center">
                <p className="text-3xl font-bold text-primary">8+</p>
                <p className="text-sm text-muted-foreground">{t("Framework", "Frameworks")}</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-primary">100%</p>
                <p className="text-sm text-muted-foreground">{t("Peer-reviewed", "Peer-reviewed")}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Methodologies by Category */}
      <section className="py-16 sm:py-24 bg-background">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          {categories.map((category) => (
            <div key={category} className="mb-16 last:mb-0">
              <h2 className="font-semibold text-xl text-foreground mb-6 pb-2 border-b border-border">{category}</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {methodologies
                  .filter((m) => m.category === category)
                  .map((method) => {
                    const Icon = method.icon
                    return (
                      <div
                        key={method.id}
                        className="group bg-card rounded-xl border border-border p-6 hover:shadow-lg hover:border-primary/30 transition-all"
                      >
                        <div className="flex items-start gap-4">
                          <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center shrink-0 group-hover:bg-primary transition-colors">
                            <Icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors" />
                          </div>
                          <div className="flex-1">
                            <h3 className="font-semibold text-lg text-foreground mb-2">{method.name}</h3>
                            <p className="text-sm text-muted-foreground mb-4">
                              {language === "id" ? method.descId : method.descEn}
                            </p>
                            <div className="flex flex-wrap gap-1 mb-4">
                              {method.applications.map((app) => (
                                <Badge key={app} variant="secondary" className="text-xs">
                                  {app}
                                </Badge>
                              ))}
                            </div>
                            <Button variant="outline" size="sm" className="bg-transparent">
                              <Download className="w-4 h-4 mr-2" />
                              {t("Unduh One-Pager", "Download One-Pager")}
                            </Button>
                          </div>
                        </div>
                      </div>
                    )
                  })}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* QA Process */}
      <section className="py-16 sm:py-24 bg-muted/30">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground mb-4">
              {t("Proses Penjaminan Mutu", "Quality Assurance Process")}
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t(
                "Setiap output melewati 4 tahap QA untuk memastikan standar kualitas tertinggi.",
                "Every output goes through 4 QA stages to ensure the highest quality standards.",
              )}
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              {
                step: 1,
                titleId: "Draft Internal",
                titleEn: "Internal Draft",
                descId: "Tim proyek menyusun draft awal berdasarkan data dan analisis.",
                descEn: "Project team prepares initial draft based on data and analysis.",
              },
              {
                step: 2,
                titleId: "Review Internal",
                titleEn: "Internal Review",
                descId: "Quality controller internal mereview metodologi dan konsistensi.",
                descEn: "Internal quality controller reviews methodology and consistency.",
              },
              {
                step: 3,
                titleId: "Peer Review",
                titleEn: "Peer Review",
                descId: "Pakar eksternal mereview substansi dan validitas temuan.",
                descEn: "External experts review substance and validity of findings.",
              },
              {
                step: 4,
                titleId: "Final QA",
                titleEn: "Final QA",
                descId: "Pemeriksaan akhir format, bahasa, dan kelengkapan dokumen.",
                descEn: "Final check of format, language, and document completeness.",
              },
            ].map((stage) => (
              <div key={stage.step} className="bg-card rounded-xl border border-border p-6 text-center">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl font-bold text-primary-foreground">{stage.step}</span>
                </div>
                <h3 className="font-semibold text-foreground mb-2">
                  {language === "id" ? stage.titleId : stage.titleEn}
                </h3>
                <p className="text-sm text-muted-foreground">{language === "id" ? stage.descId : stage.descEn}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link href="/quality">
              <Button variant="outline" className="bg-transparent">
                {t("Pelajari Lebih Lanjut", "Learn More")}
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-primary-foreground mb-4">
            {t("Butuh Pendekatan Khusus?", "Need a Custom Approach?")}
          </h2>
          <p className="text-lg text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            {t(
              "Konsultasikan kebutuhan metodologi spesifik proyek Anda dengan tim pakar kami.",
              "Consult your project's specific methodological needs with our expert team.",
            )}
          </p>
          <Link href="/request">
            <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
              {t("Konsultasi Metodologi", "Methodology Consultation")}
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  )
}
