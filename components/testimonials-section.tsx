"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Briefcase, Building2, Quote, Star } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel"
import { useLanguage } from "@/lib/language-context"
import { cn } from "@/lib/utils"

const metrics = [
  {
    labelId: "Rating rata-rata",
    labelEn: "Average rating",
    value: "4.9/5",
    subId: "Dari 75+ proyek",
    subEn: "Across 75+ projects",
  },
  {
    labelId: "Tingkat kepuasan",
    labelEn: "Satisfaction rate",
    value: "98%",
    subId: "Pemerintah dan swasta",
    subEn: "Government and private",
  },
]

const testimonials = [
  {
    id: 1,
    sector: "government",
    serviceId: "Perlindungan sosial berbasis data",
    serviceEn: "Data-driven social protection",
    quoteId:
      "BIDEV membantu kami merancang sistem perlindungan sosial berbasis data yang akurat. Kolaborasi dengan pakar ITB dan UNPAD sangat profesional dan hasil kajian mereka langsung bisa diimplementasikan.",
    quoteEn:
      "BIDEV helped us design an accurate data-driven social protection system. Their collaboration with ITB and UNPAD experts was professional and the findings were ready to implement.",
    author: "Dr. Ir. Budi Santoso, M.T.",
    roleId: "Kepala Bappeda",
    roleEn: "Head of Regional Planning Agency",
    organizationId: "Pemerintah Kota Bandung",
    organizationEn: "Bandung City Government",
    rating: 5,
    initials: "BS",
    avatar: "/indonesian-male-engineer-portrait.jpg",
    avatarAlt: "Portrait of Dr. Ir. Budi Santoso",
  },
  {
    id: 2,
    sector: "private",
    serviceId: "Analisis investasi regional",
    serviceEn: "Regional investment analysis",
    quoteId:
      "Analisis investasi yang diberikan BIDEV sangat komprehensif. Mereka tidak hanya memberikan data, tapi juga membantu kami memahami konteks regulasi dan pemangku kepentingan lokal.",
    quoteEn:
      "The investment analysis from BIDEV was comprehensive. They provided data and helped us understand local regulations and stakeholder dynamics.",
    author: "Michael Chen",
    roleId: "Regional Director",
    roleEn: "Regional Director",
    organizationId: "Singapore Investment Holdings",
    organizationEn: "Singapore Investment Holdings",
    rating: 5,
    initials: "MC",
    avatar: "/indonesian-male-executive-professional-portrait.jpg",
    avatarAlt: "Portrait of Michael Chen",
  },
  {
    id: 3,
    sector: "government",
    serviceId: "Platform PRAKARSA",
    serviceEn: "PRAKARSA platform",
    quoteId:
      "Platform PRAKARSA benar-benar mengubah cara kami mengelola data sosial. Proses yang dulu memakan waktu berminggu-minggu sekarang bisa diselesaikan dalam hitungan hari.",
    quoteEn:
      "The PRAKARSA platform transformed how we manage social data. Processes that used to take weeks now finish in days.",
    author: "Hj. Siti Aminah, S.Sos., M.M.",
    roleId: "Kepala Dinas Sosial",
    roleEn: "Head of Social Affairs Agency",
    organizationId: "Pemerintah Kabupaten Garut",
    organizationEn: "Garut Regency Government",
    rating: 5,
    initials: "SA",
    avatar: "/indonesian-female-professor-portrait.jpg",
    avatarAlt: "Portrait of Hj. Siti Aminah",
  },
  {
    id: 4,
    sector: "government",
    serviceId: "Capacity building aparatur",
    serviceEn: "Capacity building program",
    quoteId:
      "Pelatihan capacity building dari BIDEV sangat aplikatif. Materi disampaikan dengan jelas oleh akademisi yang benar-benar paham kondisi lapangan.",
    quoteEn:
      "BIDEV's capacity building program was highly practical. The material was clear and delivered by academics who understand field realities.",
    author: "Drs. Ahmad Hidayat, M.Si.",
    roleId: "Sekretaris Daerah",
    roleEn: "Regional Secretary",
    organizationId: "Pemerintah Kota Cimahi",
    organizationEn: "Cimahi City Government",
    rating: 5,
    initials: "AH",
    avatar: "/indonesian-male-professor-portrait.jpg",
    avatarAlt: "Portrait of Drs. Ahmad Hidayat",
  },
  {
    id: 5,
    sector: "government",
    serviceId: "Roadmap smart city",
    serviceEn: "Smart city roadmap",
    quoteId:
      "Roadmap smart city yang disusun BIDEV menjadi acuan utama pembangunan digital kami untuk 5 tahun ke depan. Sangat terstruktur dan realistis.",
    quoteEn:
      "The smart city roadmap from BIDEV has become the main reference for our digital development for the next five years. Very structured and realistic.",
    author: "Ir. Dedi Kurniawan, M.T.",
    roleId: "Kepala Dinas Kominfo",
    roleEn: "Head of Communication and Information Agency",
    organizationId: "Pemerintah Kota Bekasi",
    organizationEn: "Bekasi City Government",
    rating: 5,
    initials: "DK",
    avatar: "/professional-indonesian-male-professor-urban-plann.jpg",
    avatarAlt: "Portrait of Ir. Dedi Kurniawan",
  },
  {
    id: 6,
    sector: "private",
    serviceId: "Advisory investor asing",
    serviceEn: "Foreign investor advisory",
    quoteId:
      "Sebagai investor asing, kami sangat terbantu dengan advisory services BIDEV dalam memahami lanskap bisnis dan regulasi di Indonesia.",
    quoteEn:
      "As a foreign investor, we were greatly helped by BIDEV's advisory services in understanding the business landscape and regulations in Indonesia.",
    author: "Tanaka Hiroshi",
    roleId: "CEO",
    roleEn: "CEO",
    organizationId: "Japan Urban Development Corp.",
    organizationEn: "Japan Urban Development Corp.",
    rating: 5,
    initials: "TH",
    avatar: "/professional-indonesian-male-economist-government.jpg",
    avatarAlt: "Portrait of Tanaka Hiroshi",
  },
]

export function TestimonialsSection() {
  const { t } = useLanguage()
  const [api, setApi] = useState<CarouselApi | null>(null)
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [snapCount, setSnapCount] = useState(testimonials.length)

  useEffect(() => {
    if (!api) return

    const update = () => {
      setSelectedIndex(api.selectedScrollSnap())
      setSnapCount(api.scrollSnapList().length)
    }

    update()
    api.on("select", update)
    api.on("reInit", update)

    return () => {
      api.off("select", update)
      api.off("reInit", update)
    }
  }, [api])

  useEffect(() => {
    if (!api || typeof window === "undefined") return
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return

    const intervalId = window.setInterval(() => {
      api.scrollNext()
    }, 6500)

    return () => window.clearInterval(intervalId)
  }, [api])

  return (
    <section className="relative py-24 sm:py-32">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-white/60 to-transparent" />
        <div className="absolute -top-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-primary/15 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-80 w-80 translate-x-1/3 rounded-full bg-accent/20 blur-3xl" />
      </div>
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <Carousel opts={{ align: "start", loop: true }} setApi={setApi} className="relative">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between mb-12">
            <div className="max-w-2xl">
              <Badge variant="secondary" className="mb-4 uppercase tracking-[0.3em] text-[10px]">
                {t("Testimoni klien", "Client testimonials")}
              </Badge>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-foreground text-balance">
                {t(
                  "Suara lembaga dan mitra yang berkolaborasi dengan BIDEV",
                  "Voices from institutions partnering with BIDEV",
                )}
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                {t(
                  "Pengalaman nyata dari pemerintah, investor, dan kampus yang menggunakan layanan BIDEV untuk mempercepat kebijakan dan implementasi.",
                  "Real-world feedback from governments, investors, and universities using BIDEV to accelerate policy and delivery.",
                )}
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-4">
              {metrics.map((metric) => (
                <div
                  key={metric.value}
                  className="rounded-2xl border border-border/70 bg-card/80 px-4 py-3 shadow-[0_12px_35px_rgba(15,61,46,0.08)]"
                >
                  <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
                    {t(metric.labelId, metric.labelEn)}
                  </p>
                  <p className="mt-2 text-2xl font-semibold text-foreground">{metric.value}</p>
                  <p className="text-xs text-muted-foreground">{t(metric.subId, metric.subEn)}</p>
                </div>
              ))}
              <div className="flex items-center gap-2">
                <CarouselPrevious className="static size-10 translate-y-0 rounded-full border-border/70 bg-white/80 shadow-sm hover:bg-white" />
                <CarouselNext className="static size-10 translate-y-0 rounded-full border-border/70 bg-white/80 shadow-sm hover:bg-white" />
              </div>
            </div>
          </div>

          <CarouselContent className="pb-6">
            {testimonials.map((testimonial) => {
              const isGovernment = testimonial.sector === "government"
              const SectorIcon = isGovernment ? Building2 : Briefcase
              const sectorLabel = isGovernment ? t("Pemerintah", "Government") : t("Swasta", "Private")

              return (
                <CarouselItem
                  key={testimonial.id}
                  className="sm:basis-[85%] md:basis-1/2 xl:basis-1/3 2xl:basis-1/4"
                >
                  <article className="group flex h-full flex-col rounded-[28px] border border-border/70 bg-card/95 shadow-[0_20px_60px_rgba(15,61,46,0.08)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_30px_70px_rgba(15,61,46,0.12)]">
                    <div className="rounded-[22px] border border-border/70 bg-gradient-to-br from-primary/10 via-white to-accent/20 px-5 py-4">
                      <div className="flex items-center justify-between gap-3">
                        <div className="flex items-center gap-3">
                          <div
                            className={cn(
                              "flex h-10 w-10 items-center justify-center rounded-2xl border border-white/70",
                              isGovernment ? "bg-primary/10 text-primary" : "bg-accent/20 text-accent",
                            )}
                          >
                            <SectorIcon className="h-5 w-5" />
                          </div>
                          <div>
                            <p className="text-sm font-semibold text-foreground">
                              {t(testimonial.serviceId, testimonial.serviceEn)}
                            </p>
                            <p className="text-xs text-muted-foreground">{sectorLabel}</p>
                          </div>
                        </div>
                        <Badge
                          variant="outline"
                          className={cn(
                            "uppercase tracking-[0.3em] text-[10px]",
                            isGovernment
                              ? "border-primary/30 bg-primary/5 text-primary"
                              : "border-accent/30 bg-accent/20 text-accent-foreground",
                          )}
                        >
                          {sectorLabel}
                        </Badge>
                      </div>
                    </div>
                    <div className="flex h-full flex-col px-5 pb-6 pt-5">
                      <div className="mb-4 flex items-center justify-between">
                        <Quote className="h-6 w-6 text-primary/20" />
                        <div className="flex items-center gap-1 text-accent">
                          {Array.from({ length: testimonial.rating }).map((_, index) => (
                            <Star key={index} className="h-4 w-4 fill-accent text-accent" />
                          ))}
                        </div>
                      </div>
                      <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                        "{t(testimonial.quoteId, testimonial.quoteEn)}"
                      </p>
                      <div className="mt-6 flex items-start gap-3 border-t border-border/70 pt-4">
                        <div className="relative flex h-11 w-11 shrink-0 items-center justify-center overflow-hidden rounded-full border border-border/70 bg-muted">
                          {testimonial.avatar ? (
                            <Image
                              src={testimonial.avatar}
                              alt={testimonial.avatarAlt}
                              fill
                              sizes="44px"
                              className="object-cover"
                            />
                          ) : (
                            <span className="text-sm font-semibold text-primary">{testimonial.initials}</span>
                          )}
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-foreground">{testimonial.author}</p>
                          <p className="text-xs text-muted-foreground">{t(testimonial.roleId, testimonial.roleEn)}</p>
                          <p className="text-xs text-primary">
                            {t(testimonial.organizationId, testimonial.organizationEn)}
                          </p>
                        </div>
                      </div>
                    </div>
                  </article>
                </CarouselItem>
              )
            })}
          </CarouselContent>
        </Carousel>

        <div className="mt-6 flex items-center justify-center gap-2">
          {Array.from({ length: snapCount }).map((_, index) => (
            <button
              key={index}
              type="button"
              onClick={() => api?.scrollTo(index)}
              className={cn(
                "h-2.5 rounded-full transition-all",
                selectedIndex === index ? "w-8 bg-primary" : "w-2.5 bg-border",
              )}
              aria-label={t(`Ke slide ${index + 1}`, `Go to slide ${index + 1}`)}
            />
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <Link href="/testimonials">
            <Button size="lg" className="h-12 rounded-full bg-primary px-8 text-primary-foreground">
              {t("Lihat semua testimoni", "View all testimonials")}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
