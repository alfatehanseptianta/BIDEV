import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import {
  ArrowRight,
  BadgeCheck,
  Building,
  Calendar,
  ChartNetwork,
  ClipboardList,
  Database,
  GraduationCap,
  MapPin,
  ShieldCheck,
  Sparkles,
  Users,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export const metadata: Metadata = {
  title: "Partners & Network | BIDEV Institute",
  description:
    "A connected partner network spanning academia, data, implementation, and community delivery across Indonesia.",
}

const heroStats = [
  { value: "60+", label: "Partner organizations active in the network" },
  { value: "14", label: "Provinces with live collaboration programs" },
  { value: "120+", label: "Joint outputs published since 2020" },
  { value: "35", label: "Active collaborations delivered each year" },
]

const valuePillars = [
  {
    icon: ShieldCheck,
    title: "Governed data exchange",
    description: "Clear data controller roles, retention rules, and audit trails built into every engagement.",
  },
  {
    icon: BadgeCheck,
    title: "Shared credibility",
    description: "Co-authored outputs, peer review panels, and transparent methodology for trusted evidence.",
  },
  {
    icon: ChartNetwork,
    title: "Multi-actor delivery",
    description: "Researchers, implementers, and community operators coordinated as one delivery system.",
  },
  {
    icon: Sparkles,
    title: "Capacity transfer",
    description: "Playbooks, training, and hands-on mentoring so partners can scale beyond a single project.",
  },
]

const partnerTypes = [
  {
    icon: GraduationCap,
    name: "Academic & Research Partners",
    description:
      "Research labs, centers of excellence, and universities that co-author studies and strengthen peer review.",
    focus: ["Urban economics & demography", "Spatial analytics", "Policy simulation"],
    partners: [
      { name: "Institut Teknologi Bandung (ITB)", logo: "/itb-logo.jpg" },
      { name: "Universitas Padjadjaran (UNPAD)", logo: "/unpad-logo.jpg" },
      { name: "Lembaga Demografi UI", logo: "/lembaga-demografi-ui-logo.jpg" },
      { name: "Center for Urban Studies ITB", logo: "/center-urban-studies-logo.jpg" },
    ],
  },
  {
    icon: Building,
    name: "Implementation Partners",
    description: "Delivery teams, integrators, and field operators who execute multi-city deployments on the ground.",
    focus: ["Field operations & QA", "System integration", "Enumerator training"],
    partners: [
      { name: "PT Data Konsultan Indonesia", logo: "/tech-company-logo.jpg" },
      { name: "Bandung Digital Services", logo: "/digital-services-logo.jpg" },
      { name: "Survey Meter", logo: "/survey-company-logo.jpg" },
    ],
  },
  {
    icon: Database,
    name: "Data & Platform Partners",
    description: "Open data platforms and government data portals that expand analytical reach and interoperability.",
    focus: ["Official statistics", "Open data standards", "Geospatial sources"],
    partners: [
      { name: "BPS Jawa Barat", logo: "/generic-corporate-logo.png" },
      { name: "Satu Data Indonesia", logo: "/satu-data-logo.jpg" },
      { name: "Open Street Map Indonesia", logo: "/osm-logo.jpg" },
    ],
  },
  {
    icon: Users,
    name: "Community Partners",
    description: "Grassroots networks and NGOs that enable trusted data collection and inclusive engagement.",
    focus: ["Household facilitation", "Beneficiary verification", "Community training"],
    partners: [
      { name: "Forum RW Kota Bandung", logo: "/community-forum-logo.jpg" },
      { name: "Yayasan Rumah Zakat", logo: "/rumah-zakat-logo.jpg" },
      { name: "PEKKA", logo: "/pekka-ngo-logo.jpg" },
    ],
  },
]

const networkHubs = [
  { city: "Bandung", focus: "Urban analytics and social protection delivery" },
  { city: "Jakarta", focus: "National policy coordination and donor alignment" },
  { city: "Semarang", focus: "Coastal resilience and climate adaptation planning" },
  { city: "Surabaya", focus: "Mobility, logistics, and industrial transition" },
  { city: "Makassar", focus: "Eastern Indonesia growth city collaboration" },
  { city: "Medan", focus: "Housing access and regional economic planning" },
]

const featuredCollaborations = [
  {
    title: "Bandung Social Protection Diagnostic",
    summary:
      "A joint city-university task force revalidated household vulnerability data and redesigned targeting logic.",
    outcomes: ["Validated 220k household records", "25 subdistrict playbooks delivered", "2025 budget alignment brief"],
    image: "/prakarsa-bandung-case-study-map-visualization.jpg",
    tags: ["City government", "Prakarsa", "Social protection"],
  },
  {
    title: "West Java Data Exchange",
    summary: "Provincial data partners unified multi-sector datasets into a shared API and public dashboards.",
    outcomes: ["18 datasets aligned to one schema", "Monthly governance review cadence", "12 city dashboards launched"],
    image: "/urban-data-dashboard-indonesia-government-platform.jpg",
    tags: ["Data governance", "Provincial", "Open data"],
  },
  {
    title: "Coastal Resilience Studio",
    summary: "NGOs and engineering teams co-designed adaptive options for coastal settlements.",
    outcomes: ["Risk atlas for 6 coastal kecamatan", "Costed adaptation pathways", "Community facilitator toolkit"],
    image: "/publication-climate-resilience-article-thumbnail.jpg",
    tags: ["Climate", "Community", "Urban planning"],
  },
]

const journeySteps = [
  {
    title: "Discovery sprint",
    detail: "Two-week alignment on goals, datasets, and stakeholders with a shared intent brief.",
  },
  {
    title: "Governance setup",
    detail: "Finalize data controller roles, access model, and ethics sign-off before work begins.",
  },
  {
    title: "Co-delivery",
    detail: "Weekly rituals, shared dashboards, and field coordination to keep teams aligned.",
  },
  {
    title: "Scale and handover",
    detail: "Playbooks, training, and joint release so results can continue after the project.",
  },
]

const collaborationSchemes = [
  {
    name: "Research Co-Lab",
    description: "Joint research and publication with co-authorship and shared peer review governance.",
    benefits: ["Co-funded research design", "Shared field access", "Publication strategy alignment", "Shared credibility"],
  },
  {
    name: "Data Stewardship",
    description: "Secure data exchange with retention rules, access controls, and audit-ready documentation.",
    benefits: ["Data minimization review", "API or secure room access", "Governance cadence", "Shared metadata catalog"],
  },
  {
    name: "City Implementation Sprint",
    description: "Pilot deployments that connect local teams, platforms, and policy decision makers.",
    benefits: ["Integrated project plan", "Field QA and training", "City stakeholder workshops", "Impact dashboard"],
  },
  {
    name: "Training & Certification",
    description: "Joint delivery of training programs with certification pathways and local trainers.",
    benefits: ["Co-branded modules", "Trainer of trainers program", "Shared recruitment pipeline", "Evaluation toolkit"],
  },
]

const partnerToolkit = [
  {
    title: "Partnership brief",
    description: "Standard scope, governance map, and workstream menu to speed up alignment.",
    icon: ClipboardList,
  },
  {
    title: "Data sharing protocol",
    description: "Retention, encryption, access tiers, and consent requirements.",
    icon: ShieldCheck,
  },
  {
    title: "Co-publication guide",
    description: "Authorship rules, review cadence, and release approvals.",
    icon: BadgeCheck,
  },
  {
    title: "Field operations pack",
    description: "Enumerator training, QA checklist, and ethics scripts.",
    icon: ClipboardList,
  },
]

const partnerExpectations = [
  "Named focal point with decision authority",
  "Shared access to relevant datasets and metadata",
  "Budget or in-kind resources for delivery support",
  "Agreement on dissemination timeline and ethics protocol",
]

const faqItems = [
  {
    question: "Who can become a partner?",
    answer:
      "Universities, civic labs, NGOs, data platforms, and delivery teams with aligned missions can join the network.",
  },
  {
    question: "How do you handle sensitive data?",
    answer:
      "We apply data minimization, secure rooms or tokenized APIs, and audit trails with clear controller roles.",
  },
  {
    question: "What is a typical engagement length?",
    answer:
      "Discovery is usually 2 to 4 weeks, followed by a 3 to 9 month delivery phase depending on scope.",
  },
  {
    question: "Can we start with a pilot?",
    answer:
      "Yes. We often start with a short pilot to validate data flows, governance, and delivery capacity.",
  },
]

export default function PartnersPage() {
  return (
    <main className="pt-[72px]">
      <section className="relative overflow-hidden bg-foreground text-background">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(1200px_circle_at_20%_0%,rgba(255,255,255,0.18),transparent_60%)]" />
          <div className="absolute -right-24 top-24 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
          <div className="absolute bottom-0 left-0 h-56 w-56 rounded-full bg-white/10 blur-3xl" />
        </div>
        <div className="relative max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-12 items-center">
            <div className="space-y-6">
              <Badge variant="outline" className="border-white/25 text-white bg-white/5">
                Partner Network
              </Badge>
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-balance">
                A networked institute for city-scale impact
              </h1>
              <p className="text-lg md:text-xl text-background/80">
                We build trusted partnerships across research, data, implementation, and community delivery to help
                Indonesian cities move faster with evidence.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/contact?intent=partner">
                  <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
                    Start a partnership
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </Link>
                <Link href="/collaboration">
                  <Button size="lg" variant="outline" className="border-white/30 text-white bg-transparent">
                    Visit collaboration desk
                  </Button>
                </Link>
              </div>
              <div className="grid sm:grid-cols-2 gap-4 pt-4">
                {heroStats.map((stat) => (
                  <div key={stat.label} className="rounded-2xl border border-white/15 bg-white/5 px-4 py-3">
                    <p className="text-2xl font-semibold">{stat.value}</p>
                    <p className="text-sm text-background/70">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="space-y-4">
              <div className="rounded-3xl border border-white/10 bg-white/5 p-4 shadow-[0_24px_70px_rgba(0,0,0,0.45)]">
                <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-white/10">
                  <Image
                    src="/network-diagram-connecting-different-expertise-are.jpg"
                    alt="Network diagram connecting research and delivery partners"
                    fill
                    sizes="(min-width: 1024px) 40vw, 100vw"
                    className="object-cover"
                  />
                </div>
                <div className="mt-4 grid grid-cols-2 gap-3 text-sm text-background/80">
                  <div className="rounded-xl border border-white/10 bg-white/5 p-3">
                    <p className="text-xs uppercase tracking-[0.2em] text-background/60">Focus</p>
                    <p className="font-semibold">City systems and delivery</p>
                  </div>
                  <div className="rounded-xl border border-white/10 bg-white/5 p-3">
                    <p className="text-xs uppercase tracking-[0.2em] text-background/60">Mode</p>
                    <p className="font-semibold">Co-created research + pilots</p>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-3 text-xs text-background/70">
                <Sparkles className="w-4 h-4" />
                We match the right partners for each mission to reduce delivery friction.
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-gradient-to-b from-background via-background to-muted/30">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground font-semibold mb-3">Why partner</p>
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">What makes this network different</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We combine rigorous research, transparent governance, and delivery muscle so partners can move from
              evidence to policy quickly.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {valuePillars.map((pillar) => (
              <Card key={pillar.title} className="border-border/70 bg-background/80 h-full">
                <CardHeader>
                  <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center mb-4">
                    <pillar.icon className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle>{pillar.title}</CardTitle>
                  <CardDescription>{pillar.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-12 items-start">
            <div className="space-y-8">
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground font-semibold mb-3">
                  Network structure
                </p>
                <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">Partner types and collaboration lanes</h2>
                <p className="text-lg text-muted-foreground">
                  Each partnership lane is designed to unlock a specific part of the city delivery chain, from research
                  design to on-the-ground implementation.
                </p>
              </div>
              <div className="space-y-6">
                {partnerTypes.map((type) => (
                  <Card key={type.name} className="border-border/70 bg-muted/20">
                    <CardHeader className="flex flex-row items-start gap-4">
                      <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center">
                        <type.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <CardTitle className="text-xl">{type.name}</CardTitle>
                        <CardDescription>{type.description}</CardDescription>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div>
                        <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground font-semibold mb-3">
                          Focus areas
                        </p>
                        <ul className="grid sm:grid-cols-2 gap-2 text-sm text-muted-foreground">
                          {type.focus.map((item) => (
                            <li key={item} className="flex items-center gap-2">
                              <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="grid sm:grid-cols-2 gap-3">
                        {type.partners.map((partner) => (
                          <div
                            key={partner.name}
                            className="flex items-center gap-3 rounded-xl border border-border/70 bg-background/70 px-3 py-2"
                          >
                            <div className="h-9 w-12 rounded-lg bg-muted/40 flex items-center justify-center">
                              <Image
                                src={partner.logo}
                                alt={partner.name}
                                width={48}
                                height={24}
                                className="object-contain"
                              />
                            </div>
                            <span className="text-xs font-medium text-foreground/80">{partner.name}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
            <div className="space-y-6">
              <Card className="border-border/70 overflow-hidden">
                <div className="relative aspect-[4/3]">
                  <Image
                    src="/bandung-city-urban-data-dashboard-map.jpg"
                    alt="Map view of multi-city partner coverage"
                    fill
                    sizes="(min-width: 1024px) 35vw, 100vw"
                    className="object-cover"
                  />
                </div>
                <CardContent className="pt-4">
                  <p className="text-sm text-muted-foreground">
                    Our partner coverage grows through shared dashboards, policy labs, and field teams anchored in
                    priority cities.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-border/70">
                <CardHeader>
                  <CardTitle className="text-xl">Network hubs</CardTitle>
                  <CardDescription>Regional clusters that anchor delivery and local collaboration.</CardDescription>
                </CardHeader>
                <CardContent className="grid sm:grid-cols-2 gap-3 text-sm text-muted-foreground">
                  {networkHubs.map((hub) => (
                    <div key={hub.city} className="flex gap-3 rounded-xl border border-border/70 bg-muted/30 p-3">
                      <MapPin className="w-4 h-4 text-primary mt-0.5" />
                      <div>
                        <p className="font-semibold text-foreground">{hub.city}</p>
                        <p className="text-xs">{hub.focus}</p>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground font-semibold mb-3">
              Partner highlights
            </p>
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">Recent collaborations</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A snapshot of how partners and BIDEV co-deliver impact across policy, data, and community programs.
            </p>
          </div>
          <div className="grid lg:grid-cols-3 gap-6">
            {featuredCollaborations.map((collab) => (
              <Card key={collab.title} className="overflow-hidden border-border/70 bg-background/80">
                <div className="relative aspect-[4/3]">
                  <Image
                    src={collab.image}
                    alt={collab.title}
                    fill
                    sizes="(min-width: 1024px) 30vw, 100vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
                  <div className="absolute bottom-4 left-4 flex flex-wrap gap-2">
                    {collab.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="bg-white/90 text-foreground">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-xl">{collab.title}</CardTitle>
                  <CardDescription>{collab.summary}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground font-semibold mb-3">
                    Outcomes
                  </p>
                  <ul className="space-y-2">
                    {collab.outcomes.map((outcome) => (
                      <li key={outcome} className="text-sm text-muted-foreground flex items-start gap-2">
                        <span className="w-1.5 h-1.5 mt-2 rounded-full bg-primary flex-shrink-0" />
                        {outcome}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground font-semibold mb-3">
              Partnership journey
            </p>
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">How we move from idea to impact</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A clear process keeps partners aligned, de-risks delivery, and builds long-term capability.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {journeySteps.map((step, index) => (
              <Card key={step.title} className="border-border/70 bg-muted/20">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-semibold">
                      {index + 1}
                    </div>
                    <div>
                      <p className="font-semibold">{step.title}</p>
                      <p className="text-sm text-muted-foreground">{step.detail}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-muted/40">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-[1.1fr_0.9fr] gap-10 items-start">
          <div>
            <div className="mb-8">
              <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground font-semibold mb-3">
                Collaboration models
              </p>
              <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">Flexible schemes for every partner</h2>
              <p className="text-lg text-muted-foreground">
                Choose the structure that matches your institution. Each scheme is supported with templates,
                governance, and a shared delivery rhythm.
              </p>
            </div>
            <Accordion type="single" collapsible className="w-full">
              {collaborationSchemes.map((scheme, idx) => (
                <AccordionItem key={scheme.name} value={`scheme-${idx}`}>
                  <AccordionTrigger className="text-left">
                    <span className="font-semibold text-lg">{scheme.name}</span>
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="text-muted-foreground mb-4">{scheme.description}</p>
                    <div className="bg-background rounded-lg p-4">
                      <p className="font-medium text-sm mb-2">Benefits:</p>
                      <ul className="grid sm:grid-cols-2 gap-2">
                        {scheme.benefits.map((benefit) => (
                          <li key={benefit} className="text-sm text-muted-foreground flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
          <div className="space-y-6">
            <Card className="border-border/70">
              <CardHeader>
                <CardTitle className="text-xl">Partner toolkit</CardTitle>
                <CardDescription>Materials shared after an initial alignment call.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {partnerToolkit.map((item) => (
                  <div key={item.title} className="flex items-start gap-4 rounded-xl border border-border/70 p-4">
                    <div className="w-10 h-10 rounded-2xl bg-primary/10 flex items-center justify-center">
                      <item.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold">{item.title}</p>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
            <Card className="border-border/70">
              <CardHeader>
                <CardTitle className="text-xl">Partner expectations</CardTitle>
                <CardDescription>What we need from collaborators to move quickly.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3 text-sm text-muted-foreground">
                {partnerExpectations.map((item) => (
                  <div key={item} className="flex items-start gap-3 rounded-xl border border-border/70 bg-muted/30 p-3">
                    <Calendar className="w-4 h-4 text-primary mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="max-w-[960px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground font-semibold mb-3">FAQ</p>
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">Common questions from partners</h2>
          </div>
          <Accordion type="single" collapsible className="w-full">
            {faqItems.map((item, idx) => (
              <AccordionItem key={item.question} value={`faq-${idx}`}>
                <AccordionTrigger className="text-left">
                  <span className="font-semibold text-lg">{item.question}</span>
                </AccordionTrigger>
                <AccordionContent>
                  <p className="text-muted-foreground">{item.answer}</p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <section className="relative overflow-hidden py-16 lg:py-24 bg-foreground text-background">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(800px_circle_at_80%_10%,rgba(255,255,255,0.18),transparent_60%)]" />
          <div className="absolute -left-28 bottom-10 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
        </div>
        <div className="relative max-w-[960px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">Ready to join the partner network?</h2>
          <p className="text-lg text-background/80 mb-8">
            Share your goals and assets, and we will propose a collaboration pathway within five business days.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact?intent=partner">
              <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
                Start partnership
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
            <Link href="/case-studies">
              <Button size="lg" variant="outline" className="border-white/30 text-white bg-transparent">
                Explore case studies
              </Button>
            </Link>
          </div>
          <div className="mt-6 flex items-center justify-center gap-2 text-xs text-background/70">
            <ChartNetwork className="w-4 h-4" />
            New partner intakes open each quarter.
          </div>
        </div>
      </section>
    </main>
  )
}
