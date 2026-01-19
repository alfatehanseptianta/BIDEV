import type { Metadata } from "next"
import Link from "next/link"
import {
  ArrowRight,
  BadgeCheck,
  CheckCircle2,
  Clock,
  FileText,
  LineChart,
  MessageSquare,
  RefreshCcw,
  Shield,
  Users,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export const metadata: Metadata = {
  title: "How We Work | BIDEV Institute",
  description: "From problem to measurable outcomes. Learn about our services and transparent process.",
}

const serviceHighlights = [
  {
    slug: "expert-speaker",
    name: "Expert Speaker & Resource Person",
    duration: "1-4 hours",
    description:
      "Access our network of distinguished academics for keynotes, seminars, panel discussions, and expert consultations.",
    idealFor: ["Government", "Private"],
    deliverables: ["Keynote presentations", "Panel moderation", "Q&A sessions", "Post-event briefings"],
    image: "/professional-indonesian-man-professor-formal-portr.jpg",
    imageAlt: "Expert speaker session",
  },
  {
    slug: "policy-consulting",
    name: "Policy & Development Consulting",
    duration: "2-12 weeks",
    description:
      "Strategic advisory services for urban planning, regulatory frameworks, and development policy formulation.",
    idealFor: ["Government", "Private"],
    deliverables: ["Policy assessment", "Regulatory analysis", "Strategy recommendations", "Implementation guidance"],
    image: "/policy-brief-writing-guide-document.jpg",
    imageAlt: "Policy consulting documentation",
  },
  {
    slug: "training",
    name: "Training & Capacity Building",
    duration: "1-5 days",
    description: "Customized training programs and modular learning products for government officials and professionals.",
    idealFor: ["Government", "Private"],
    deliverables: ["Training modules", "Workshop facilitation", "Learning materials", "Certification programs"],
    image: "/professional-training-workshop-urban-planning.jpg",
    imageAlt: "Capacity building workshop",
  },
  {
    slug: "roadmap-development",
    name: "Roadmap & Masterplan Development",
    duration: "8-24 weeks",
    description: "Comprehensive urban and regional planning services from concept to implementation strategy.",
    idealFor: ["Government"],
    deliverables: ["Masterplan documents", "Implementation roadmaps", "Stakeholder analysis", "Feasibility studies"],
    image: "/bandung-mobility-playbook-cover.jpg",
    imageAlt: "Urban roadmap playbook",
  },
  {
    slug: "research",
    name: "Research & Field Studies",
    duration: "3-12 months",
    description:
      "Rigorous academic research and pilot projects addressing local policy challenges with data-driven insights.",
    idealFor: ["Government", "Academic"],
    deliverables: ["Research reports", "Policy briefs", "Data analysis", "Academic publications"],
    image: "/journal-article-urban-planning-thumbnail.jpg",
    imageAlt: "Research publication preview",
  },
  {
    slug: "digital-systems",
    name: "Digital Systems & IT Projects",
    duration: "3-12 months",
    description: "Smart city solutions, data dashboards, and digital infrastructure for modern urban governance.",
    idealFor: ["Government"],
    deliverables: ["Platform development", "Dashboard systems", "Data integration", "Technical documentation"],
    image: "/urban-data-dashboard-indonesia-government-platform.jpg",
    imageAlt: "Smart city platform dashboard",
  },
  {
    slug: "investment-advisory",
    name: "Investment Advisory",
    duration: "4-8 weeks",
    description: "Site selection analysis, policy risk assessment, and stakeholder mapping for investors.",
    idealFor: ["Private"],
    deliverables: ["Market analysis", "Risk assessment", "Stakeholder mapping", "Investment recommendations"],
    image: "/investment-analysis-business-charts-graphs.jpg",
    imageAlt: "Investment advisory analysis",
  },
  {
    slug: "stakeholder-engagement",
    name: "Stakeholder Engagement",
    duration: "2-8 weeks",
    description: "Community consultation, public hearings, and multi-stakeholder coordination services.",
    idealFor: ["Government", "Private"],
    deliverables: ["Consultation reports", "Public hearing facilitation", "Stakeholder analysis", "Engagement strategy"],
    image: "/stakeholder-engagement-playbook-cover.jpg",
    imageAlt: "Stakeholder engagement playbook",
  },
  {
    slug: "market-entry",
    name: "Market Entry Consulting",
    duration: "4-12 weeks",
    description: "Comprehensive support for businesses entering Indonesian markets, including regulatory navigation.",
    idealFor: ["Private"],
    deliverables: ["Market assessment", "Regulatory guidance", "Partner identification", "Entry strategy"],
    image: "/investment-briefing-presentation-template.jpg",
    imageAlt: "Market entry briefing",
  },
  {
    slug: "impact-assessment",
    name: "Impact Assessment",
    duration: "4-16 weeks",
    description: "Social, environmental, and economic impact evaluation for development projects and policies.",
    idealFor: ["Government", "Private"],
    deliverables: ["Impact reports", "Baseline studies", "Monitoring frameworks", "Evaluation metrics"],
    image: "/publication-climate-resilience-article-thumbnail.jpg",
    imageAlt: "Impact assessment report",
  },
]
const workflowSteps = [
  {
    step: 1,
    title: "Intake & Scoping",
    description:
      "We start by understanding your challenge, context, and objectives through a structured intake process.",
    icon: MessageSquare,
    outputs: ["Problem statement", "Scope definition", "Success criteria", "Timeline expectations"],
    duration: "3-5 days",
  },
  {
    step: 2,
    title: "Expert Matching",
    description: "We match you with the right experts from our Board based on expertise, experience, and availability.",
    icon: Users,
    outputs: ["Lead expert assignment", "Team composition", "Expert profiles", "Engagement terms"],
    duration: "3-5 days",
  },
  {
    step: 3,
    title: "Proposal & Contract",
    description: "We develop a detailed proposal aligned with your TOR, including milestones and deliverables.",
    icon: FileText,
    outputs: ["Detailed proposal", "Work breakdown", "Milestone schedule", "Contract agreement"],
    duration: "5-7 days",
  },
  {
    step: 4,
    title: "Delivery",
    description: "We execute the work with regular steering meetings and quality assurance gates.",
    icon: CheckCircle2,
    outputs: ["Regular updates", "Draft deliverables", "QA reviews", "Stakeholder presentations"],
    duration: "Per engagement",
  },
  {
    step: 5,
    title: "Handover & Enablement",
    description: "We ensure proper knowledge transfer through training and comprehensive documentation.",
    icon: Shield,
    outputs: ["Final deliverables", "Training sessions", "Documentation pack", "Handover report"],
    duration: "1-2 weeks",
  },
  {
    step: 6,
    title: "Post-Project Support",
    description: "Optional retainer for ongoing monitoring, questions, and implementation support.",
    icon: Clock,
    outputs: ["Advisory availability", "Progress monitoring", "Issue resolution", "Impact assessment"],
    duration: "Optional",
  },
]

const slaItems = [
  {
    label: "Initial Response",
    value: "Within 48 hours",
    description: "First acknowledgment of inquiry",
    icon: Clock,
  },
  {
    label: "Proposal Turnaround",
    value: "5-7 business days",
    description: "From scoping to proposal submission",
    icon: FileText,
  },
  {
    label: "Progress Reports",
    value: "Bi-weekly",
    description: "Regular status updates during engagement",
    icon: LineChart,
  },
  {
    label: "Revision Rounds",
    value: "2 included",
    description: "Standard revision rounds per deliverable",
    icon: RefreshCcw,
  },
  {
    label: "QA Checkpoints",
    value: "Per milestone",
    description: "Quality assurance review gates",
    icon: BadgeCheck,
  },
  {
    label: "Post-Handover Support",
    value: "30 days",
    description: "Complimentary support after project close",
    icon: Shield,
  },
]

const faqs = [
  {
    question: "What payment terms do you offer?",
    answer:
      "Standard payment terms are 30% upon contract signing, 40% at mid-project milestone, and 30% upon final delivery. For government clients, we can accommodate procurement-aligned payment schedules. All engagements include clear deliverable acceptance criteria.",
  },
  {
    question: "How do you handle confidentiality and data protection?",
    answer:
      "All engagements include a standard NDA. For sensitive projects, we implement additional data handling protocols including secure file sharing, access controls, and data retention policies aligned with national regulations.",
  },
  {
    question: "Can you work within government procurement frameworks?",
    answer:
      "Yes, we are experienced in government procurement processes. We can provide standard documentation including company profiles, past performance records, and can work with TOR/KAK formats. Visit our Government Procurement page for ready-to-use templates.",
  },
  {
    question: "What happens if deliverables don't meet expectations?",
    answer:
      "Each deliverable goes through a formal acceptance process with clear criteria defined upfront. We include two revision rounds per deliverable. If significant issues arise, we have an escalation protocol involving senior leadership from both sides.",
  },
  {
    question: "How do you ensure quality across different experts?",
    answer:
      "All deliverables go through our internal QA process including peer review by senior experts, methodology alignment checks, and editorial review. We maintain standardized templates and quality guidelines across all engagements.",
  },
  {
    question: "Can you scale up team size mid-project if needed?",
    answer:
      "Yes, our Board of Experts model allows flexible team scaling. If scope expansion is identified, we can bring in additional experts with proper change management. Any team changes are discussed and agreed upon with the client.",
  },
]

export default function HowWeWorkPage() {
  return (
    <main className="pt-[72px]">
      {/* Hero */}
      <section className="bg-foreground text-background py-20 lg:py-28">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance">
              From problem to measurable outcomes.
            </h1>
            <p className="text-lg md:text-xl text-background/80 mb-8">
              Transparent process, clear deliverables, and accountable execution. Here's how we turn your challenges
              into results.
            </p>
            <Link href="/request?type=proposal">
              <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
                Request Proposal
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Service Highlights */}
      <section className="py-16 lg:py-24">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <Carousel opts={{ align: "start", loop: true }} className="relative">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between mb-10">
              <div className="max-w-2xl">
                <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">Service Highlights</h2>
                <p className="text-lg text-muted-foreground">
                  Browse our service offerings and pick the engagement that fits your needs and timeline.
                </p>
              </div>
              <div className="flex items-center gap-2">
                <CarouselPrevious className="static size-10 translate-y-0 rounded-full border-border/70 bg-white/80 shadow-sm hover:bg-white" />
                <CarouselNext className="static size-10 translate-y-0 rounded-full border-border/70 bg-white/80 shadow-sm hover:bg-white" />
              </div>
            </div>

            <CarouselContent className="pb-6">
              {serviceHighlights.map((service) => (
                <CarouselItem key={service.slug}>
                  <Card className="overflow-hidden border-border/70 bg-card/95 shadow-[0_20px_60px_rgba(15,61,46,0.08)]">
                    <div className="relative aspect-[16/6] overflow-hidden">
                      <img src={service.image} alt={service.imageAlt} className="h-full w-full object-cover" />
                      <div className="absolute inset-0 bg-gradient-to-tr from-black/35 via-black/5 to-transparent" />
                    </div>
                    <CardContent className="p-8">
                      <div className="grid lg:grid-cols-2 gap-8">
                        <div>
                          <Badge variant="secondary" className="mb-4">
                            {service.duration}
                          </Badge>
                          <h3 className="font-serif text-2xl font-bold mb-4">{service.name}</h3>
                          <p className="text-muted-foreground mb-6">{service.description}</p>
                          <div className="mb-6">
                            <h4 className="font-semibold mb-3">Ideal For:</h4>
                            <div className="flex flex-wrap gap-2">
                              {service.idealFor.map((item, idx) => (
                                <Badge key={idx} variant="secondary">
                                  {item}
                                </Badge>
                              ))}
                            </div>
                          </div>
                        </div>
                        <div className="bg-muted/70 rounded-xl p-6">
                          <h4 className="font-semibold mb-4">Key Deliverables:</h4>
                          <ul className="space-y-3">
                            {service.deliverables.map((item, idx) => (
                              <li key={idx} className="flex items-center gap-3">
                                <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                      <div className="mt-6 flex flex-wrap gap-3">
                        <Button asChild className="bg-accent text-accent-foreground hover:bg-accent/90">
                          <Link href={`/request?type=proposal&service=${service.slug}`}>
                            Pilih layanan ini
                            <ArrowRight className="ml-2 w-4 h-4" />
                          </Link>
                        </Button>
                        <Button asChild variant="outline">
                          <Link href="/services">Lihat semua layanan</Link>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </section>

      {/* Step-by-Step Flow */}
      <section className="py-16 lg:py-24 bg-muted">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">Our Process</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A structured approach that ensures clarity, accountability, and results.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {workflowSteps.map((step) => (
              <Card key={step.step} className="relative overflow-hidden">
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-4 mb-2">
                    <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-lg">
                      {step.step}
                    </div>
                    <Badge variant="outline">{step.duration}</Badge>
                  </div>
                  <CardTitle className="flex items-center gap-2">
                    <step.icon className="w-5 h-5 text-primary" />
                    {step.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">{step.description}</p>
                  <div className="space-y-2">
                    {step.outputs.map((output, idx) => (
                      <p key={idx} className="text-xs text-muted-foreground flex items-center gap-2">
                        <CheckCircle2 className="w-3 h-3 text-primary" />
                        {output}
                      </p>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* SLA & Governance */}
      <section className="py-16 lg:py-24">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">Service Level Commitments</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Clear expectations and accountability standards for every engagement.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {slaItems.map((item, idx) => (
              <Card key={idx}>
                <CardContent className="p-6 text-center">
                  <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <item.icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <p className="text-2xl font-bold text-primary mb-2">{item.value}</p>
                  <p className="font-semibold mb-1">{item.label}</p>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 lg:py-24 bg-muted">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
              <p className="text-lg text-muted-foreground">
                Common questions about procurement, payments, and working with us.
              </p>
            </div>

            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, idx) => (
                <AccordionItem key={idx} value={`item-${idx}`}>
                  <AccordionTrigger className="text-left font-medium">{faq.question}</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-24 bg-primary text-primary-foreground">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">Ready to get started?</h2>
          <p className="text-lg text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Tell us about your challenge and we'll respond within 48 hours with next steps.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/request?type=proposal">
              <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
                Request Proposal
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
            <Link href="/for-government/procurement">
              <Button
                size="lg"
                variant="outline"
                className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 bg-transparent"
              >
                Government Procurement Info
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}

