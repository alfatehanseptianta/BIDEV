"use client"

import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/lib/language-context"
import Link from "next/link"
import {
  Target,
  Database,
  Building2,
  TrendingUp,
  Home,
  Car,
  Shield,
  Leaf,
  ArrowRight,
  Users,
  FileText,
  BarChart3,
} from "lucide-react"

const solutions = [
  {
    slug: "social-targeting",
    icon: Target,
    titleId: "Targeting Program Sosial Berbasis Data",
    titleEn: "Data-Driven Social Program Targeting",
    problemId:
      "Data penerima manfaat tidak akurat, banyak inclusion/exclusion error, dan sulit memverifikasi kelayakan.",
    problemEn: "Beneficiary data is inaccurate, high inclusion/exclusion errors, and difficulty verifying eligibility.",
    approachId: "Integrasi data RW, validasi lapangan, scoring berbasis bukti, dashboard monitoring.",
    approachEn: "RW data integration, field validation, evidence-based scoring, monitoring dashboard.",
    services: ["prakarsa", "research", "digital-systems"],
    experts: ["siti-rahayu", "ahmad-fauzi"],
    caseStudy: "bandung-social-protection",
  },
  {
    slug: "urban-data",
    icon: Database,
    titleId: "Tata Kelola Data Perkotaan",
    titleEn: "Urban Data Governance",
    problemId: "Data tersebar di banyak OPD, tidak terintegrasi, sulit diakses untuk pengambilan keputusan.",
    problemEn: "Data scattered across agencies, not integrated, difficult to access for decision-making.",
    approachId: "Audit data, standarisasi format, data warehouse, API integration, governance framework.",
    approachEn: "Data audit, format standardization, data warehouse, API integration, governance framework.",
    services: ["policy-consulting", "digital-systems", "roadmap-development"],
    experts: ["ahmad-fauzi", "andika-pratama"],
    caseStudy: "jakarta-data-governance",
  },
  {
    slug: "investment-readiness",
    icon: TrendingUp,
    titleId: "Kesiapan Investasi Daerah",
    titleEn: "Regional Investment Readiness",
    problemId: "Investor kesulitan memahami regulasi lokal, perizinan lambat, data potensi daerah tidak tersedia.",
    problemEn: "Investors struggle with local regulations, slow permits, regional potential data unavailable.",
    approachId: "Regulatory mapping, investment profiling, one-stop briefing, stakeholder connection.",
    approachEn: "Regulatory mapping, investment profiling, one-stop briefing, stakeholder connection.",
    services: ["investment-advisory", "policy-consulting", "market-entry"],
    experts: ["dewi-anggraini", "bambang-wijaya"],
    caseStudy: "jawa-barat-investment",
  },
  {
    slug: "affordable-housing",
    icon: Home,
    titleId: "Kebijakan Perumahan Terjangkau",
    titleEn: "Affordable Housing Policy",
    problemId: "Backlog perumahan tinggi, harga tidak terjangkau, program subsidi tidak tepat sasaran.",
    problemEn: "High housing backlog, unaffordable prices, subsidy programs not well-targeted.",
    approachId: "Demand-supply analysis, policy review, financing scheme design, beneficiary targeting.",
    approachEn: "Demand-supply analysis, policy review, financing scheme design, beneficiary targeting.",
    services: ["policy-consulting", "research", "roadmap-development"],
    experts: ["ratna-permata", "andika-pratama"],
    caseStudy: "housing-policy-study",
  },
  {
    slug: "urban-mobility",
    icon: Car,
    titleId: "Mobilitas & Transportasi Perkotaan",
    titleEn: "Urban Mobility & Transportation",
    problemId: "Kemacetan parah, angkutan umum tidak terintegrasi, emisi kendaraan tinggi.",
    problemEn: "Severe congestion, unintegrated public transport, high vehicle emissions.",
    approachId: "Transport modeling, TOD planning, route optimization, multi-modal integration strategy.",
    approachEn: "Transport modeling, TOD planning, route optimization, multi-modal integration strategy.",
    services: ["roadmap-development", "policy-consulting", "research"],
    experts: ["hendra-saputra", "bambang-wijaya"],
    caseStudy: "bandung-mobility",
  },
  {
    slug: "governance-reform",
    icon: Shield,
    titleId: "Reformasi Tata Kelola Pemerintahan",
    titleEn: "Governance Reform",
    problemId: "Birokrasi lambat, pelayanan publik tidak efisien, akuntabilitas rendah.",
    problemEn: "Slow bureaucracy, inefficient public services, low accountability.",
    approachId: "Process mapping, SOP redesign, e-government strategy, capacity building.",
    approachEn: "Process mapping, SOP redesign, e-government strategy, capacity building.",
    services: ["policy-consulting", "training", "digital-systems"],
    experts: ["dewi-anggraini", "andika-pratama"],
    caseStudy: "governance-reform",
  },
  {
    slug: "climate-resilience",
    icon: Leaf,
    titleId: "Ketahanan Iklim Kota",
    titleEn: "Urban Climate Resilience",
    problemId: "Banjir berulang, urban heat island, mitigasi bencana tidak memadai.",
    problemEn: "Recurring floods, urban heat islands, inadequate disaster mitigation.",
    approachId: "Risk assessment, adaptation planning, green infrastructure design, early warning systems.",
    approachEn: "Risk assessment, adaptation planning, green infrastructure design, early warning systems.",
    services: ["research", "roadmap-development", "policy-consulting"],
    experts: ["maya-kusuma", "bambang-wijaya"],
    caseStudy: "climate-resilience",
  },
  {
    slug: "local-economic-development",
    icon: Building2,
    titleId: "Pengembangan Ekonomi Lokal",
    titleEn: "Local Economic Development",
    problemId: "UMKM stagnan, rantai pasok tidak efisien, akses pasar terbatas.",
    problemEn: "Stagnant MSMEs, inefficient supply chains, limited market access.",
    approachId: "Value chain analysis, cluster development, market linkage, capacity building.",
    approachEn: "Value chain analysis, cluster development, market linkage, capacity building.",
    services: ["research", "policy-consulting", "training"],
    experts: ["siti-rahayu", "dewi-anggraini"],
    caseStudy: "local-economy",
  },
]

export default function SolutionsPage() {
  const { t } = useLanguage()

  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="pt-[72px] bg-[#0F3D2E]">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
          <div className="max-w-3xl">
            <p className="text-sm uppercase tracking-widest text-[#B89B5E] font-semibold mb-4">
              {t("Solusi berdasarkan Masalah", "Solutions by Problem")}
            </p>
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold text-[#F7F5EF] leading-tight">
              {t("Kami Membantu Anda Menyelesaikan", "We Help You Solve")}
            </h1>
            <p className="mt-6 text-xl text-[#F7F5EF]/80">
              {t(
                "Jangan bingung memilih layanan. Ceritakan masalah Anda, kami rekomendasikan solusi lengkap: layanan, pakar, dan studi kasus relevan.",
                "Don't be confused choosing services. Tell us your problem, we'll recommend complete solutions: services, experts, and relevant case studies.",
              )}
            </p>
          </div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-24 sm:py-32 bg-background">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8">
            {solutions.map((solution) => (
              <div
                key={solution.slug}
                className="group bg-card rounded-xl border border-border p-8 hover:shadow-xl hover:border-primary/30 transition-all duration-300"
              >
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-primary transition-colors">
                    <solution.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-xl text-foreground mb-2">
                      {t(solution.titleId, solution.titleEn)}
                    </h3>
                  </div>
                </div>

                {/* Problem */}
                <div className="mb-4">
                  <p className="text-xs uppercase tracking-wider text-destructive font-semibold mb-2">
                    {t("Masalah", "Problem")}
                  </p>
                  <p className="text-sm text-muted-foreground">{t(solution.problemId, solution.problemEn)}</p>
                </div>

                {/* Approach */}
                <div className="mb-6">
                  <p className="text-xs uppercase tracking-wider text-primary font-semibold mb-2">
                    {t("Pendekatan", "Approach")}
                  </p>
                  <p className="text-sm text-muted-foreground">{t(solution.approachId, solution.approachEn)}</p>
                </div>

                {/* Meta */}
                <div className="flex items-center gap-4 pt-4 border-t border-border">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <FileText className="w-4 h-4" />
                    <span>
                      {solution.services.length} {t("layanan", "services")}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Users className="w-4 h-4" />
                    <span>
                      {solution.experts.length} {t("pakar", "experts")}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <BarChart3 className="w-4 h-4" />
                    <span>{t("Studi kasus", "Case study")}</span>
                  </div>
                </div>

                {/* CTA */}
                <div className="mt-6">
                  <Link href={`/request?solution=${solution.slug}`}>
                    <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                      {t("Konsultasikan Solusi Ini", "Consult This Solution")}
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground mb-4">
            {t("Masalah Anda Tidak Ada di Daftar?", "Your Problem Not Listed?")}
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            {t(
              "Hubungi tim kami untuk konsultasi gratis. Kami akan membantu mengidentifikasi solusi yang tepat untuk kebutuhan Anda.",
              "Contact our team for a free consultation. We'll help identify the right solution for your needs.",
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
