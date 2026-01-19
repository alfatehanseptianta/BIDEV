"use client"

import { Footer } from "@/components/footer"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/lib/language-context"
import { ArrowRight, Briefcase, FileText, Users } from "lucide-react"
import Link from "next/link"
import { topicData } from "../topic-data"

type TopicHubPageClientProps = {
  slug: string
}

export default function TopicHubPageClient({ slug }: TopicHubPageClientProps) {
  const { t, language } = useLanguage()
  const topic = topicData[slug]

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
              .filter(([entrySlug]) => entrySlug !== slug)
              .map(([entrySlug, data]) => {
                const TopicIcon = data.icon
                return (
                  <Link
                    key={entrySlug}
                    href={`/insights/topic/${entrySlug}`}
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
