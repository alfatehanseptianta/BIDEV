"use client"

import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { useLanguage } from "@/lib/language-context"
import Link from "next/link"
import { Quote, ArrowRight, Building, Briefcase, Star } from "lucide-react"

const testimonials = [
  {
    id: 1,
    quoteId:
      "BIDEV membantu kami merancang sistem perlindungan sosial berbasis data yang akurat. Kolaborasi dengan pakar ITB dan UNPAD sangat profesional dan hasil kajian mereka langsung bisa diimplementasikan.",
    quoteEn:
      "BIDEV helped us design an accurate data-driven social protection system. The collaboration with ITB and UNPAD experts was very professional and their study results could be directly implemented.",
    author: "Dr. Ir. Budi Santoso, M.T.",
    role: "Kepala Bappeda",
    roleEn: "Head of Regional Planning Agency",
    organization: "Pemerintah Kota Bandung",
    organizationEn: "Bandung City Government",
    sector: "Government",
    caseStudy: "bandung-social-protection",
    rating: 5,
  },
  {
    id: 2,
    quoteId:
      "Analisis investasi yang diberikan BIDEV sangat komprehensif. Mereka tidak hanya memberikan data, tapi juga membantu kami memahami konteks regulasi dan stakeholder lokal.",
    quoteEn:
      "The investment analysis provided by BIDEV was very comprehensive. They not only provided data, but also helped us understand the local regulatory context and stakeholders.",
    author: "Michael Chen",
    role: "Regional Director",
    roleEn: "Regional Director",
    organization: "Singapore Investment Holdings",
    organizationEn: "Singapore Investment Holdings",
    sector: "Private",
    caseStudy: "jawa-barat-investment",
    rating: 5,
  },
  {
    id: 3,
    quoteId:
      "Platform PRAKARSA benar-benar mengubah cara kami mengelola data sosial. Proses yang dulu memakan waktu berminggu-minggu sekarang bisa diselesaikan dalam hitungan hari.",
    quoteEn:
      "The PRAKARSA platform truly transformed how we manage social data. Processes that used to take weeks can now be completed in days.",
    author: "Hj. Siti Aminah, S.Sos., M.M.",
    role: "Kepala Dinas Sosial",
    roleEn: "Head of Social Affairs Agency",
    organization: "Pemerintah Kabupaten Garut",
    organizationEn: "Garut Regency Government",
    sector: "Government",
    caseStudy: "garut-prakarsa",
    rating: 5,
  },
  {
    id: 4,
    quoteId:
      "Pelatihan capacity building dari BIDEV sangat aplikatif. Materi disampaikan dengan jelas oleh akademisi yang benar-benar paham kondisi lapangan di pemerintahan.",
    quoteEn:
      "The capacity building training from BIDEV was very practical. The material was delivered clearly by academics who truly understand field conditions in government.",
    author: "Drs. Ahmad Hidayat, M.Si.",
    role: "Sekretaris Daerah",
    roleEn: "Regional Secretary",
    organization: "Pemerintah Kota Cimahi",
    organizationEn: "Cimahi City Government",
    sector: "Government",
    caseStudy: "cimahi-training",
    rating: 5,
  },
  {
    id: 5,
    quoteId:
      "Roadmap smart city yang disusun BIDEV menjadi acuan utama pembangunan digital kami untuk 5 tahun ke depan. Sangat terstruktur dan realistis.",
    quoteEn:
      "The smart city roadmap prepared by BIDEV has become the main reference for our digital development for the next 5 years. Very structured and realistic.",
    author: "Ir. Dedi Kurniawan, M.T.",
    role: "Kepala Dinas Kominfo",
    roleEn: "Head of Communication & Information Agency",
    organization: "Pemerintah Kota Bekasi",
    organizationEn: "Bekasi City Government",
    sector: "Government",
    caseStudy: "bekasi-smart-city",
    rating: 5,
  },
  {
    id: 6,
    quoteId:
      "Sebagai investor asing, kami sangat terbantu dengan advisory services BIDEV dalam memahami lanskap bisnis dan regulasi di Indonesia.",
    quoteEn:
      "As a foreign investor, we were greatly helped by BIDEV's advisory services in understanding the business landscape and regulations in Indonesia.",
    author: "Tanaka Hiroshi",
    role: "CEO",
    roleEn: "CEO",
    organization: "Japan Urban Development Corp.",
    organizationEn: "Japan Urban Development Corp.",
    sector: "Private",
    caseStudy: "japan-investment",
    rating: 5,
  },
]

export default function TestimonialsPage() {
  const { t, language } = useLanguage()

  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="pt-[72px] bg-[#0F3D2E]">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
          <div className="max-w-3xl">
            <p className="text-sm uppercase tracking-widest text-[#B89B5E] font-semibold mb-4">
              {t("Testimoni Klien", "Client Testimonials")}
            </p>
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold text-[#F7F5EF] leading-tight">
              {t("Apa Kata Mereka", "What They Say")}
            </h1>
            <p className="mt-6 text-xl text-[#F7F5EF]/80">
              {t(
                "Dengarkan langsung dari klien kami tentang pengalaman bekerja sama dengan BIDEV dalam berbagai proyek pembangunan.",
                "Hear directly from our clients about their experience working with BIDEV on various development projects.",
              )}
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-muted/30 border-b border-border">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <p className="text-4xl font-bold text-primary mb-1">50+</p>
              <p className="text-sm text-muted-foreground">{t("Klien Pemerintah", "Government Clients")}</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-primary mb-1">25+</p>
              <p className="text-sm text-muted-foreground">{t("Klien Swasta", "Private Clients")}</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-primary mb-1">98%</p>
              <p className="text-sm text-muted-foreground">{t("Tingkat Kepuasan", "Satisfaction Rate")}</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-primary mb-1">4.9/5</p>
              <p className="text-sm text-muted-foreground">{t("Rating Rata-rata", "Average Rating")}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-24 sm:py-32 bg-background">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filter */}
          <div className="flex items-center gap-4 mb-12">
            <span className="text-sm text-muted-foreground">{t("Filter:", "Filter:")}</span>
            <Badge variant="secondary" className="cursor-pointer hover:bg-primary hover:text-primary-foreground">
              {t("Semua", "All")}
            </Badge>
            <Badge variant="outline" className="cursor-pointer hover:bg-primary hover:text-primary-foreground">
              <Building className="w-3 h-3 mr-1" />
              {t("Pemerintah", "Government")}
            </Badge>
            <Badge variant="outline" className="cursor-pointer hover:bg-primary hover:text-primary-foreground">
              <Briefcase className="w-3 h-3 mr-1" />
              {t("Swasta", "Private")}
            </Badge>
          </div>

          {/* Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="bg-card rounded-xl border border-border p-6 hover:shadow-lg transition-all duration-300 flex flex-col"
              >
                {/* Quote */}
                <Quote className="w-8 h-8 text-primary/20 mb-4" />
                <p className="text-muted-foreground leading-relaxed mb-6 flex-1">
                  "{language === "id" ? testimonial.quoteId : testimonial.quoteEn}"
                </p>

                {/* Rating */}
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                  ))}
                </div>

                {/* Author */}
                <div className="flex items-start gap-3 pt-4 border-t border-border">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                    <span className="text-sm font-semibold text-primary">
                      {testimonial.author
                        .split(" ")
                        .map((n) => n[0])
                        .slice(0, 2)
                        .join("")}
                    </span>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground text-sm">{testimonial.author}</p>
                    <p className="text-xs text-muted-foreground">
                      {language === "id" ? testimonial.role : testimonial.roleEn}
                    </p>
                    <p className="text-xs text-primary">
                      {language === "id" ? testimonial.organization : testimonial.organizationEn}
                    </p>
                  </div>
                </div>

                {/* Case Study Link */}
                {testimonial.caseStudy && (
                  <Link
                    href={`/case-studies/${testimonial.caseStudy}`}
                    className="mt-4 text-sm text-primary hover:underline flex items-center gap-1"
                  >
                    {t("Lihat Studi Kasus", "View Case Study")}
                    <ArrowRight className="w-3 h-3" />
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-primary-foreground mb-4">
            {t("Siap Menjadi Klien Kami Berikutnya?", "Ready to Be Our Next Client?")}
          </h2>
          <p className="text-lg text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            {t(
              "Bergabunglah dengan puluhan instansi pemerintah dan perusahaan yang telah mempercayakan proyek mereka kepada BIDEV.",
              "Join dozens of government agencies and companies who have entrusted their projects to BIDEV.",
            )}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/request">
              <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
                {t("Ajukan Proposal", "Request Proposal")}
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
            <Link href="/case-studies">
              <Button
                size="lg"
                variant="outline"
                className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 bg-transparent"
              >
                {t("Lihat Studi Kasus", "View Case Studies")}
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
