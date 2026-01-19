"use client"

import Link from "next/link"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import {
  Mic,
  FileSearch,
  GraduationCap,
  MapPin,
  BarChart3,
  Laptop,
  Building,
  Users,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  X,
} from "lucide-react"

const services = [
  {
    slug: "expert-speaker",
    icon: Mic,
    title: "Expert Speaker & Resource Person",
    description: "Keynotes, seminars, and thought partnership with senior academics and practitioners.",
    details:
      "Bring senior academics into your event or strategy workshop to sharpen narratives, align stakeholders, and turn research into action.",
    highlights: ["Keynote and panel moderation", "Executive briefings and Q&A", "Thought partnership for leadership teams"],
    idealFor: "Gov / Private",
  },
  {
    slug: "policy-consulting",
    icon: FileSearch,
    title: "Policy & Development Consulting",
    description: "Regulatory reviews, institutional reform, and playbooks tied to measurable KPIs.",
    details:
      "We translate evidence into regulatory and institutional reform with practical rollout plans tied to performance metrics.",
    highlights: ["Policy assessments and regulatory reviews", "Institutional reform playbooks", "KPI-linked implementation guidance"],
    idealFor: "Gov / Private",
  },
  {
    slug: "training",
    icon: GraduationCap,
    title: "Training & Capacity Building",
    description: "Modular learning products, masterclasses, and coaching embedded in live projects.",
    details:
      "Hands-on training that blends classroom learning, case labs, and coaching embedded in live programs.",
    highlights: ["Modular training and masterclasses", "Coaching embedded in live projects", "Learning tools and evaluations"],
    idealFor: "Gov / Private",
  },
  {
    slug: "roadmap-development",
    icon: MapPin,
    title: "Roadmap & Masterplan Development",
    description: "City and provincial planning, spatial analysis, and multi-year investment scenarios.",
    details:
      "We map priorities, spatial trade-offs, and multi-year investment sequences so teams can execute with clarity.",
    highlights: ["Spatial analysis and scenario planning", "Implementation roadmaps and sequencing", "Investment and program prioritization"],
    idealFor: "Government",
  },
  {
    slug: "research",
    icon: BarChart3,
    title: "Research & Field Studies",
    description: "Mixed-method studies, pilots, and monitoring frameworks anchored on open + proprietary data.",
    details:
      "Field-based evidence gathering, pilots, and monitoring frameworks to validate what works before scale.",
    highlights: ["Mixed-method data collection", "Pilot program evaluation", "Monitoring and learning frameworks"],
    idealFor: "Gov / Academic",
  },
  {
    slug: "digital-systems",
    icon: Laptop,
    title: "Digital Systems & IT Projects",
    description: "Smart city platforms, dashboards, and product management for internal teams.",
    details:
      "We design and deliver data platforms, dashboards, and tech roadmaps that modernize urban operations.",
    highlights: ["Smart city platforms and dashboards", "Data integration and governance", "Product management support"],
    idealFor: "Government",
  },
  {
    slug: "investment-advisory",
    icon: Building,
    title: "Investment Advisory",
    description: "Impact due diligence, policy risk assessments, and stakeholder mapping for investors.",
    details:
      "Decision support for investors with policy risk analysis, impact due diligence, and stakeholder mapping.",
    highlights: ["Market and policy risk analysis", "Stakeholder mapping and due diligence", "Investment recommendations"],
    idealFor: "Private",
  },
  {
    slug: "stakeholder-engagement",
    icon: Users,
    title: "Stakeholder Engagement",
    description: "Public consultation, facilitation, and change-management for complex coalitions.",
    details:
      "Engagement plans, public consultations, and facilitation to build alignment across complex coalitions.",
    highlights: ["Public consultation facilitation", "Stakeholder mapping and alignment", "Change management support"],
    idealFor: "Gov / Private",
  },
]

export function WhatWeDo() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)
  const activeService = activeIndex !== null ? services[activeIndex] : null
  const lastIndex = services.length - 1
  const hasPrev = activeIndex !== null && activeIndex > 0
  const hasNext = activeIndex !== null && activeIndex < lastIndex

  const handleOpenChange = (open: boolean) => {
    if (!open) {
      setActiveIndex(null)
    }
  }

  const handlePrev = () => {
    setActiveIndex((current) => {
      if (current === null || current <= 0) {
        return current
      }
      return current - 1
    })
  }

  const handleNext = () => {
    setActiveIndex((current) => {
      if (current === null || current >= lastIndex) {
        return current
      }
      return current + 1
    })
  }

  return (
    <section id="services" className="py-24 sm:py-32">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-[0.9fr,1.1fr] gap-10 lg:gap-16 mb-12">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-primary font-semibold mb-4">Core services</p>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-foreground text-balance">
              End-to-end solutions for urban development mandates
            </h2>
            <p className="mt-6 text-lg text-muted-foreground">
              From rapid diagnostics and policy advisory to implementation squads, we plug into your workflow with the
              right mix of researchers, field teams, and digital talent.
            </p>
            <div className="mt-8 rounded-3xl border border-border/80 bg-card/90 px-5 py-4 grid gap-3">
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Engagement formats</span>
                <span className="text-sm font-semibold text-foreground">Brief &gt; Sprint &gt; PMO</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {["Advisory pods", "Resident experts", "Embedded PMO"].map((item) => (
                  <span key={item} className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="rounded-[32px] border border-border/80 bg-gradient-to-br from-card to-muted/40 p-6 shadow-[0_25px_70px_rgba(15,61,46,0.08)]">
            <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground mb-4">Service catalog</p>
            <div className="relative mb-6 overflow-hidden rounded-2xl border border-border/60">
              <img
                src="/urban-data-dashboard-indonesia-government-platform.jpg"
                alt="Urban data dashboard interface"
                className="h-48 w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-[#0F3D2E]/45 via-transparent to-transparent" />
              <div className="absolute bottom-3 left-3 rounded-full bg-white/90 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#0F3D2E]">
                Integrated delivery
              </div>
            </div>
            <Dialog open={activeIndex !== null} onOpenChange={handleOpenChange}>
              <div className="grid md:grid-cols-2 gap-4">
                {services.map((service, index) => (
                  <DialogTrigger asChild key={service.slug}>
                    <button
                      type="button"
                      onClick={() => setActiveIndex(index)}
                      className="group rounded-2xl border border-border/60 bg-card px-4 py-5 text-left hover:border-primary/50 hover:-translate-y-1 hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 transition-all"
                      aria-label={`Open details for ${service.title}`}
                    >
                      <div className="w-11 h-11 rounded-2xl bg-primary/10 flex items-center justify-center mb-4">
                        <service.icon className="w-5 h-5 text-primary" />
                      </div>
                      <h3 className="text-base font-semibold text-foreground group-hover:text-primary transition-colors">
                        {service.title}
                      </h3>
                      <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{service.description}</p>
                      <p className="mt-4 text-xs font-semibold text-primary uppercase tracking-[0.3em]">
                        {service.idealFor}
                      </p>
                    </button>
                  </DialogTrigger>
                ))}
              </div>
              {activeService && (
                <DialogContent className="relative overflow-hidden p-0 sm:max-w-2xl" showCloseButton={false}>
                  <DialogHeader className="relative bg-gradient-to-br from-[#0F3D2E] to-[#0B2B20] px-6 py-5 text-[#F7F5EF] text-left">
                    <div className="flex items-start gap-4 pr-12">
                      <div className="w-12 h-12 rounded-2xl bg-white/15 flex items-center justify-center shrink-0">
                        <activeService.icon className="w-5 h-5 text-[#F7F5EF]" />
                      </div>
                      <div className="space-y-2">
                        <DialogTitle className="text-xl font-semibold text-[#F7F5EF]">
                          {activeService.title}
                        </DialogTitle>
                        <DialogDescription className="text-[#F7F5EF]/80">
                          {activeService.description}
                        </DialogDescription>
                      </div>
                    </div>
                    <DialogClose asChild>
                      <button
                        type="button"
                        className="absolute right-4 top-4 inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white transition hover:bg-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
                        aria-label="Close dialog"
                      >
                        <X className="h-4 w-4" />
                      </button>
                    </DialogClose>
                  </DialogHeader>
                  <div className="p-6 grid gap-5">
                    <p className="text-sm text-muted-foreground leading-relaxed">{activeService.details}</p>
                    <div>
                      <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Ideal for</p>
                      <p className="mt-2 text-sm font-semibold text-foreground">{activeService.idealFor}</p>
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Key outcomes</p>
                      <ul className="mt-3 space-y-2">
                        {activeService.highlights.map((item) => (
                          <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                            <span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary/70 shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <DialogFooter className="sm:justify-start">
                      <Button asChild>
                        <Link href={`/services/${activeService.slug}`}>
                          Read more
                          <ArrowRight className="w-4 h-4" />
                        </Link>
                      </Button>
                    </DialogFooter>
                  </div>
                  <div className="pointer-events-none absolute inset-y-0 left-3 flex items-center">
                    <button
                      type="button"
                      onClick={handlePrev}
                      disabled={!hasPrev}
                      className="pointer-events-auto inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#0F3D2E]/20 bg-white text-[#0F3D2E] shadow-md transition hover:bg-[#0F3D2E]/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0F3D2E]/40 disabled:opacity-40 disabled:pointer-events-none"
                      aria-label="Previous service"
                    >
                      <ChevronLeft className="h-5 w-5" />
                    </button>
                  </div>
                  <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center">
                    <button
                      type="button"
                      onClick={handleNext}
                      disabled={!hasNext}
                      className="pointer-events-auto inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#0F3D2E]/20 bg-white text-[#0F3D2E] shadow-md transition hover:bg-[#0F3D2E]/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0F3D2E]/40 disabled:opacity-40 disabled:pointer-events-none"
                      aria-label="Next service"
                    >
                      <ChevronRight className="h-5 w-5" />
                    </button>
                  </div>
                </DialogContent>
              )}
            </Dialog>
          </div>
        </div>

        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between border border-border/70 rounded-3xl px-6 py-5 bg-card/80">
          <div>
            <p className="font-semibold text-foreground">Need a tailored scope?</p>
            <p className="text-sm text-muted-foreground">
              Share context, objectives, and success metrics. We will return with recommended service blocks and expert
              combinations.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/services"
              className="inline-flex items-center text-sm font-semibold text-primary hover:text-primary/80"
            >
              View all services
              <ArrowRight className="w-4 h-4 ml-1" />
            </Link>
            <Link href="/request" className="inline-flex items-center rounded-full bg-primary px-5 py-2 text-sm font-semibold text-primary-foreground hover:bg-primary/90">
              Build a scope with us
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
