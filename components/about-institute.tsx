"use client"

import Link from "next/link"
import {
  Target,
  Lightbulb,
  Rocket,
  ArrowRight,
  Users,
  Briefcase,
  Database,
  BookOpen,
  FileText,
  MapPin,
  GraduationCap,
} from "lucide-react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

const differentiators = [
  {
    icon: Target,
    title: "Talent Coordination",
    description: "Matched mission teams from ITB, UNPAD, UI, and industry partners curated per brief.",
    details: "We assemble cross-disciplinary squads with clear roles, a mission lead, and shared delivery milestones.",
    points: ["Expert roster matched to the brief", "Dedicated mission lead and governance cadence", "Capacity backfill when needs shift"],
  },
  {
    icon: Lightbulb,
    title: "Evidence-first Delivery",
    description: "Strategy, policy, and pilots anchored on live datasets and measurable KPIs.",
    details: "We treat data as the backbone of every decision, translating research into operational dashboards and action.",
    points: ["Baseline data and KPI definitions", "Experiment design with measurable outcomes", "Continuous monitoring during delivery"],
  },
  {
    icon: Rocket,
    title: "Execution-ready Programs",
    description: "From concept to PMO, including procurement support and change management.",
    details: "We convert research into execution plans with procurement-ready scopes and real-world implementation support.",
    points: ["Program roadmap with work packages", "Procurement and partner onboarding", "Change management and training"],
  },
  {
    icon: Users,
    title: "Stakeholder Alignment",
    description: "Structured engagement with agencies, campuses, and investors to keep decisions clear.",
    details: "We run alignment rituals that reduce friction and keep every mission accountable across partners.",
    points: ["Stakeholder mapping and comms plan", "Decision logs and approval checkpoints", "Risk register with shared ownership"],
  },
]

const instituteStats = [
  { label: "Advisory missions", value: "120+", icon: Briefcase },
  { label: "Data pilots launched", value: "24", icon: Database },
  { label: "Knowledge assets", value: "80+", icon: BookOpen },
  { label: "Policy briefs", value: "45+", icon: FileText },
  { label: "Partner cities", value: "30+", icon: MapPin },
  { label: "Training cohorts", value: "18+", icon: GraduationCap },
]

export function AboutInstitute() {
  return (
    <section className="relative py-24 sm:py-32">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-white via-white/80 to-transparent" />
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-[1.05fr,0.95fr] gap-10 lg:gap-16 items-center">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-primary font-semibold mb-4">About the Institute</p>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-foreground leading-tight text-balance">
              Think tank precision. Delivery studio energy.
            </h2>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              BIDEV bridges the gap between academic research and execution. We run discovery sprints, design policy,
              and operate implementation squads so cities and investors can move with clarity.
            </p>
            <div className="mt-10 relative">
              <div className="absolute -inset-4 rounded-[32px] bg-gradient-to-br from-primary/10 via-transparent to-accent/20 blur-2xl" />
              <div className="relative rounded-[28px] border border-border/70 bg-card/80 p-6 sm:p-8 shadow-[0_20px_60px_rgba(15,61,46,0.12)]">
                <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
                  <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Institute at a glance</p>
                  <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-primary/70">
                    <span className="h-2 w-2 rounded-full bg-primary/60" />
                    Impact signals
                  </span>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-6 text-center">
                  {instituteStats.map((stat) => (
                    <div
                      key={stat.label}
                      className="group rounded-2xl border border-border/70 bg-card/70 px-4 py-5 shadow-[0_10px_30px_rgba(15,61,46,0.08)] transition hover:-translate-y-1 hover:border-primary/40 hover:shadow-[0_18px_40px_rgba(15,61,46,0.14)]"
                    >
                      <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                        <stat.icon className="h-5 w-5" />
                      </div>
                      <p className="text-2xl font-semibold text-foreground">{stat.value}</p>
                      <p className="mt-1 text-xs uppercase tracking-[0.2em] text-muted-foreground">{stat.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 mt-8 text-primary font-semibold hover:text-primary/80 transition-colors"
            >
              Read our story
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="relative">
            <div className="absolute -inset-6 bg-gradient-to-br from-primary/10 to-accent/20 blur-3xl rounded-[40px]" />
            <div className="relative rounded-[28px] border border-border/70 bg-card/95 p-6 sm:p-8 shadow-[0_30px_80px_rgba(15,61,46,0.12)]">
              <div className="relative mb-6 overflow-hidden rounded-3xl border border-border/60">
                <img
                  src="/housing-policy-planning-meeting-indonesia.jpg"
                  alt="Policy planning workshop"
                  className="h-56 w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-black/35 via-transparent to-transparent" />
                <div className="absolute bottom-4 right-4 hidden sm:block">
                  <div className="h-24 w-24 overflow-hidden rounded-2xl border border-white/40 shadow-[0_18px_45px_rgba(0,0,0,0.25)]">
                    <img
                      src="/urban-data-visualization-charts-map-business.jpg"
                      alt="Urban data visualization"
                      className="h-full w-full object-cover"
                    />
                  </div>
                </div>
              </div>
              <div className="mb-6 rounded-2xl border border-border/60 bg-muted/40 px-5 py-4">
                <p className="text-xs uppercase tracking-[0.35em] text-muted-foreground">Operating principles</p>
                <p className="mt-2 text-base text-muted-foreground leading-relaxed">
                  Multi-disciplinary squads, transparent governance, and embedded knowledge transfer for every mission.
                </p>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                {differentiators.map((item) => (
                  <Dialog key={item.title}>
                    <DialogTrigger asChild>
                      <button
                        type="button"
                        className="group h-full rounded-2xl border border-border/80 bg-card px-4 py-4 text-left transition hover:-translate-y-0.5 hover:border-primary/50 hover:shadow-[0_18px_45px_rgba(15,61,46,0.12)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                      >
                        <div className="flex gap-4">
                          <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0 transition group-hover:bg-primary/15">
                            <item.icon className="w-5 h-5 text-primary" />
                          </div>
                          <div>
                            <h3 className="text-base font-semibold text-foreground">{item.title}</h3>
                            <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                          </div>
                        </div>
                        <div className="mt-3 inline-flex items-center text-[11px] font-semibold uppercase tracking-[0.3em] text-primary/70">
                          View details
                        </div>
                      </button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-xl rounded-2xl border-border/70 bg-card/95">
                      <DialogHeader className="gap-3">
                        <div className="flex items-center gap-3">
                          <div className="w-11 h-11 rounded-2xl bg-primary/10 flex items-center justify-center">
                            <item.icon className="w-5 h-5 text-primary" />
                          </div>
                          <DialogTitle className="text-xl">{item.title}</DialogTitle>
                        </div>
                        <DialogDescription className="text-sm text-muted-foreground">
                          {item.description}
                        </DialogDescription>
                      </DialogHeader>
                      <p className="text-sm text-muted-foreground leading-relaxed">{item.details}</p>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        {item.points.map((point) => (
                          <li key={point} className="flex gap-3">
                            <span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary/70" />
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    </DialogContent>
                  </Dialog>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
