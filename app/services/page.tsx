import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  Dialog,
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
  ClipboardList,
  UserCheck,
  FileText,
  CheckCircle,
} from "lucide-react"
import Link from "next/link"

const services = [
  {
    slug: "expert-speaker",
    icon: Mic,
    title: "Expert Speaker & Resource Person",
    summary:
      "Access our network of distinguished academics for keynotes, seminars, panel discussions, and expert consultations.",
    outputs: ["Keynote presentations", "Panel moderation", "Q&A sessions", "Post-event briefings"],
    idealFor: ["Government", "Private"],
    duration: "1-4 hours",
    image: "/professional-indonesian-man-professor-formal-portr.jpg",
    imageAlt: "Expert speaker session",
  },
  {
    slug: "policy-consulting",
    icon: FileSearch,
    title: "Policy & Development Consulting",
    summary:
      "Strategic advisory services for urban planning, regulatory frameworks, and development policy formulation.",
    outputs: ["Policy assessment", "Regulatory analysis", "Strategy recommendations", "Implementation guidance"],
    idealFor: ["Government", "Private"],
    duration: "2-12 weeks",
    image: "/policy-brief-writing-guide-document.jpg",
    imageAlt: "Policy consulting documentation",
  },
  {
    slug: "training",
    icon: GraduationCap,
    title: "Training & Capacity Building",
    summary: "Customized training programs and modular learning products for government officials and professionals.",
    outputs: ["Training modules", "Workshop facilitation", "Learning materials", "Certification programs"],
    idealFor: ["Government", "Private"],
    duration: "1-5 days",
    image: "/professional-training-workshop-urban-planning.jpg",
    imageAlt: "Capacity building workshop",
  },
  {
    slug: "roadmap-development",
    icon: MapPin,
    title: "Roadmap & Masterplan Development",
    summary: "Comprehensive urban and regional planning services from concept to implementation strategy.",
    outputs: ["Masterplan documents", "Implementation roadmaps", "Stakeholder analysis", "Feasibility studies"],
    idealFor: ["Government"],
    duration: "8-24 weeks",
    image: "/bandung-mobility-playbook-cover.jpg",
    imageAlt: "Urban roadmap playbook",
  },
  {
    slug: "research",
    icon: BarChart3,
    title: "Research & Field Studies",
    summary:
      "Rigorous academic research and pilot projects addressing local policy challenges with data-driven insights.",
    outputs: ["Research reports", "Policy briefs", "Data analysis", "Academic publications"],
    idealFor: ["Government", "Academic"],
    duration: "3-12 months",
    image: "/journal-article-urban-planning-thumbnail.jpg",
    imageAlt: "Research publication preview",
  },
  {
    slug: "digital-systems",
    icon: Laptop,
    title: "Digital Systems & IT Projects",
    summary: "Smart city solutions, data dashboards, and digital infrastructure for modern urban governance.",
    outputs: ["Platform development", "Dashboard systems", "Data integration", "Technical documentation"],
    idealFor: ["Government"],
    duration: "3-12 months",
    image: "/urban-data-dashboard-indonesia-government-platform.jpg",
    imageAlt: "Smart city platform dashboard",
  },
  {
    slug: "investment-advisory",
    icon: Building,
    title: "Investment Advisory",
    summary: "Site selection analysis, policy risk assessment, and stakeholder mapping for investors.",
    outputs: ["Market analysis", "Risk assessment", "Stakeholder mapping", "Investment recommendations"],
    idealFor: ["Private"],
    duration: "4-8 weeks",
    image: "/investment-analysis-business-charts-graphs.jpg",
    imageAlt: "Investment advisory analysis",
  },
  {
    slug: "stakeholder-engagement",
    icon: Users,
    title: "Stakeholder Engagement",
    summary: "Community consultation, public hearings, and multi-stakeholder coordination services.",
    outputs: ["Consultation reports", "Public hearing facilitation", "Stakeholder analysis", "Engagement strategy"],
    idealFor: ["Government", "Private"],
    duration: "2-8 weeks",
    image: "/stakeholder-engagement-playbook-cover.jpg",
    imageAlt: "Stakeholder engagement playbook",
  },
  {
    slug: "market-entry",
    icon: FileText,
    title: "Market Entry Consulting",
    summary: "Comprehensive support for businesses entering Indonesian markets, including regulatory navigation.",
    outputs: ["Market assessment", "Regulatory guidance", "Partner identification", "Entry strategy"],
    idealFor: ["Private"],
    duration: "4-12 weeks",
    image: "/investment-briefing-presentation-template.jpg",
    imageAlt: "Market entry briefing",
  },
  {
    slug: "impact-assessment",
    icon: BarChart3,
    title: "Impact Assessment",
    summary: "Social, environmental, and economic impact evaluation for development projects and policies.",
    outputs: ["Impact reports", "Baseline studies", "Monitoring frameworks", "Evaluation metrics"],
    idealFor: ["Government", "Private"],
    duration: "4-16 weeks",
    image: "/publication-climate-resilience-article-thumbnail.jpg",
    imageAlt: "Impact assessment report",
  },
]

const engagementSteps = [
  {
    icon: ClipboardList,
    title: "Brief",
    description: "Share your project requirements and objectives with our team.",
  },
  {
    icon: UserCheck,
    title: "Match Experts",
    description: "We identify and propose the best experts for your specific needs.",
  },
  {
    icon: FileText,
    title: "Proposal",
    description: "Receive a detailed proposal with scope, timeline, and deliverables.",
  },
  {
    icon: CheckCircle,
    title: "Delivery",
    description: "Expert team executes the project with regular updates and milestones.",
  },
]

export default function ServicesPage() {
  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="pt-[72px] bg-[#0F3D2E]">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
          <div className="max-w-3xl">
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold text-[#F7F5EF] leading-tight">
              What We Deliver
            </h1>
            <p className="mt-6 text-xl text-[#F7F5EF]/80">
              From policy research to implementation support, BIDEV provides comprehensive solutions for government and
              private sector clients seeking evidence-based urban development expertise.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Link href="/contact?intent=proposal">
                <Button size="lg" className="bg-[#B89B5E] text-[#1C1C1C] hover:bg-[#B89B5E]/90">
                  Request Proposal
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
              <Link href="/board-of-experts">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-[#F7F5EF]/30 text-[#F7F5EF] hover:bg-[#F7F5EF]/10 bg-transparent"
                >
                  Consult Experts
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Service Grid */}
      <section className="py-24 sm:py-32 bg-background">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <p className="text-sm uppercase tracking-widest text-primary font-semibold mb-4">Service Catalogue</p>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground">Full Range of Services</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {services.map((service) => (
              <Dialog key={service.slug}>
                <DialogTrigger asChild>
                  <button
                    type="button"
                    className="group p-6 bg-card rounded-xl border border-border hover:border-primary/30 hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 transition-all duration-300 text-left"
                    aria-label={`Open details for ${service.title}`}
                  >
                    <div className="relative mb-5 aspect-[16/9] overflow-hidden rounded-lg border border-border/60">
                      <img src={service.image} alt={service.imageAlt} className="h-full w-full object-cover" />
                      <div className="absolute inset-0 bg-gradient-to-tr from-black/20 via-transparent to-transparent" />
                    </div>
                    <div className="flex items-start gap-5">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center shrink-0 group-hover:bg-primary transition-colors">
                        <service.icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-start justify-between gap-4 mb-2">
                          <h3 className="font-semibold text-lg text-foreground group-hover:text-primary transition-colors">
                            {service.title}
                          </h3>
                          <span className="text-xs text-muted-foreground shrink-0">{service.duration}</span>
                        </div>
                        <p className="text-sm text-muted-foreground mb-4">{service.summary}</p>
                        <div className="flex items-center justify-between">
                          <div className="flex flex-wrap gap-1">
                            {service.idealFor.map((tag) => (
                              <Badge key={tag} variant="secondary" className="text-xs">
                                {tag}
                              </Badge>
                            ))}
                          </div>
                          <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                        </div>
                      </div>
                    </div>
                  </button>
                </DialogTrigger>
                <DialogContent className="overflow-hidden p-0 sm:max-w-2xl">
                  <DialogHeader className="bg-gradient-to-br from-[#0F3D2E] to-[#0B2B20] px-6 py-5 text-[#F7F5EF] text-left">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-2xl bg-white/15 flex items-center justify-center shrink-0">
                        <service.icon className="w-5 h-5 text-[#F7F5EF]" />
                      </div>
                      <div className="space-y-2">
                        <DialogTitle className="text-xl font-semibold text-[#F7F5EF]">
                          {service.title}
                        </DialogTitle>
                        <DialogDescription className="text-[#F7F5EF]/80">
                          {service.summary}
                        </DialogDescription>
                      </div>
                    </div>
                  </DialogHeader>
                  <div className="p-6 grid gap-5">
                    <div className="relative overflow-hidden rounded-2xl border border-border/60">
                      <img src={service.image} alt={service.imageAlt} className="h-40 w-full object-cover" />
                      <div className="absolute inset-0 bg-gradient-to-tr from-black/30 via-transparent to-transparent" />
                    </div>
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div>
                        <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Ideal for</p>
                        <div className="mt-3 flex flex-wrap gap-2">
                          {service.idealFor.map((tag) => (
                            <Badge key={tag} variant="secondary" className="text-xs">
                              {tag}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      <div>
                        <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Typical duration</p>
                        <p className="mt-3 text-sm font-semibold text-foreground">{service.duration}</p>
                      </div>
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Key outcomes</p>
                      <ul className="mt-3 space-y-2">
                        {service.outputs.map((item) => (
                          <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                            <span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary/70 shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <DialogFooter className="sm:justify-start">
                      <Button asChild>
                        <Link href={`/services/${service.slug}`}>
                          Read more
                          <ArrowRight className="w-4 h-4" />
                        </Link>
                      </Button>
                    </DialogFooter>
                  </div>
                </DialogContent>
              </Dialog>
            ))}
          </div>
        </div>
      </section>

      {/* How Engagement Works */}
      <section className="py-24 sm:py-32 bg-muted/30">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-sm uppercase tracking-widest text-primary font-semibold mb-4">How Engagement Works</p>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground">Simple 4-Step Process</h2>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {engagementSteps.map((step, index) => (
              <div key={index} className="relative">
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <step.icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <span className="text-5xl font-bold text-muted/50 absolute -top-4 left-1/2 -translate-x-1/2 -z-10">
                    {index + 1}
                  </span>
                  <h3 className="font-semibold text-lg text-foreground mb-2">{step.title}</h3>
                  <p className="text-sm text-muted-foreground">{step.description}</p>
                </div>
                {index < engagementSteps.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-[60%] w-[80%] border-t-2 border-dashed border-border" />
                )}
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/contact?intent=proposal">
                <Button size="lg" className="bg-[#B89B5E] text-[#1C1C1C] hover:bg-[#B89B5E]/90">
                  Request Proposal
                </Button>
              </Link>
              <Link href="/contact?intent=consult">
                <Button size="lg" variant="outline">
                  Consult with Experts
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
