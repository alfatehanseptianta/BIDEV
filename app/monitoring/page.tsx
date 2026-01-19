import type { Metadata } from "next"
import Link from "next/link"
import {
  Activity,
  CalendarCheck,
  ClipboardCheck,
  Shield,
  Target,
  TrendingUp,
  ArrowRight,
  BarChart3,
  CheckCircle2,
} from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Monitoring & Evaluation | BIDEV Institute",
  description:
    "Policy tracking retainers, quarterly reviews, and outcome dashboards that keep reforms accountable after the project ends.",
}

const retainerPlans = [
  {
    name: "Quarterly Steward",
    duration: "6-month retainer",
    idealFor: "Pilots that need structured follow-up",
    features: [
      "Quarterly KPI reviews with decision makers",
      "Light-touch dashboard refresh and commentary",
      "Issue log + mitigation tracker",
    ],
  },
  {
    name: "Policy Tracking Office",
    duration: "12-month retainer",
    idealFor: "City-wide programs and donor-funded initiatives",
    features: [
      "Monthly performance clinics and escalation tree",
      "Evidence memos for steering committees",
      "Integrated data ingest + governance rituals",
    ],
  },
  {
    name: "Impact Observatory",
    duration: "18-month blended support",
    idealFor: "Prakarsa deployments & complex reforms",
    features: [
      "Dedicated analyst squad embedded with client",
      "Automated dashboards with API / data warehouse hooks",
      "Outcome harvesting + independent evaluation partner",
    ],
  },
]

const reportingSuite = [
  {
    title: "Executive cockpit",
    icon: Activity,
    description: "A single page view covering adoption, service levels, and fiscal burn against milestones.",
  },
  {
    title: "Evidence log",
    icon: ClipboardCheck,
    description: "Traceability for every recommendation with citations, data lineage, and owner notes.",
  },
  {
    title: "Community pulse",
    icon: BarChart3,
    description: "RW / kelurahan snapshots, satisfaction signals, and beneficiary feedback loops.",
  },
]

const serviceStack = [
  {
    title: "Data & tooling",
    items: ["Secure dashboard hosting", "Automated data refresh", "Quality gates & anomaly alerts"],
  },
  {
    title: "People & rituals",
    items: ["Steering committee facilitation", "Quarterly policy briefings", "Capability transfer sessions"],
  },
  {
    title: "Insight to action",
    items: ["Decision memos with next actions", "Escalation of blockers", "Implementation playbooks"],
  },
]

export default function MonitoringPage() {
  return (
    <main className="pt-[72px]">
      {/* Hero */}
      <section className="bg-foreground text-background py-20 lg:py-28">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <Badge className="mb-4 bg-accent text-accent-foreground">Monitoring & Evaluation</Badge>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance">
              From delivery to measurable outcomes
            </h1>
            <p className="text-lg md:text-xl text-background/80 mb-8">
              Keep programs on course with structured retainer support, living dashboards, and evidence memos that feed
              your steering committee.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/request?type=proposal">
                <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
                  Book a monitoring brief
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
              <Link href="/case-studies">
                <Button size="lg" variant="outline" className="bg-transparent border-background/30 text-background">
                  See impact stories
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Retainer plans */}
      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground font-semibold mb-3">
              Packages
            </p>
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">Choose your monitoring cadence</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Every retainer connects dashboards, operating rituals, and escalation pathways so policy promises remain
              visible after launch.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {retainerPlans.map((plan) => (
              <Card key={plan.name} className="h-full flex flex-col border border-border/80">
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    {plan.name}
                    <Badge variant="secondary">{plan.duration}</Badge>
                  </CardTitle>
                  <CardDescription>{plan.idealFor}</CardDescription>
                </CardHeader>
                <CardContent className="flex-1">
                  <ul className="space-y-3">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Reporting suite */}
      <section className="py-16 lg:py-24">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-[1.1fr,0.9fr] gap-12">
            <div>
              <Badge variant="outline" className="mb-3">
                Live evidence
              </Badge>
              <h2 className="font-serif text-3xl font-bold mb-4">Dashboards built for executives, not just analysts</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Data flows from Prakarsa, bespoke surveys, or legacy MIS into a structured storyline that decision
                makers can consume in under five minutes.
              </p>
              <div className="space-y-4">
                {reportingSuite.map((item) => (
                  <div key={item.title} className="flex items-start gap-4 p-4 rounded-2xl border border-border/80">
                    <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center">
                      <item.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold">{item.title}</p>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <Card className="border border-border/70 shadow-[0_20px_60px_rgba(15,61,46,0.08)]">
              <CardHeader>
                <CardTitle>What gets delivered</CardTitle>
                <CardDescription>Sample artefacts included in every retainer.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {serviceStack.map((stack) => (
                  <div key={stack.title} className="p-4 rounded-2xl bg-muted/40 border border-border/60">
                    <p className="font-semibold mb-2 flex items-center gap-2">
                      <TrendingUp className="w-4 h-4 text-primary" />
                      {stack.title}
                    </p>
                    <ul className="space-y-1">
                      {stack.items.map((item) => (
                        <li key={item} className="text-sm text-muted-foreground">
                          • {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Governance */}
      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground font-semibold mb-3">
              Governance kit
            </p>
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">The operating rhythm</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Monitoring is only as strong as the cadence that surrounds it. We set up rituals that align government
              desks, donors, and delivery teams.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Kick-off alignment",
                description: "Define KPIs, data owners, and escalation tiers within the first two weeks.",
                icon: Shield,
              },
              {
                title: "Operating cadence",
                description: "Monthly performance clinics plus quarterly steering packages ready to present.",
                icon: CalendarCheck,
              },
              {
                title: "Policy tracker",
                description: "Digital issue log linking obstacles to responsible agencies and regulatory levers.",
                icon: Target,
              },
            ].map((milestone) => (
              <Card key={milestone.title}>
                <CardContent className="p-6 flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center">
                    <milestone.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold">{milestone.title}</p>
                    <p className="text-sm text-muted-foreground">{milestone.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-24 bg-primary text-primary-foreground">
        <div className="max-w-[960px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">Ready to keep momentum after launch?</h2>
          <p className="text-lg text-primary-foreground/80 mb-8">
            Tell us about your roadmap, and we will craft a monitoring stack that fits your institution’s rhythm.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/request?type=proposal">
              <Button size="lg" className="bg-background text-foreground hover:bg-background/90">
                Request monitoring support
              </Button>
            </Link>
            <Link href="/downloads">
              <Button
                size="lg"
                variant="outline"
                className="border-primary-foreground/40 text-primary-foreground hover:bg-primary-foreground/10 bg-transparent"
              >
                Download capability deck
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
