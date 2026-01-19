import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import {
  ArrowRight,
  Download,
  Users,
  Award,
  TrendingUp,
  MapPin,
  BookOpen,
  Target,
  Calendar,
  CheckCircle2,
  Sparkles,
  Lightbulb,
  Globe2,
  Home,
  Route,
  Leaf,
  FileText,
  Database,
  ShieldCheck,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export const metadata: Metadata = {
  title: "Annual Report 2025 | BIDEV Institute",
  description: "Impact metrics, project highlights, and financial transparency from BIDEV Institute's 2025 operations.",
}

const tocItems = [
  {
    title: "Executive Summary",
    description: "Headline outcomes in three signals.",
    href: "#executive-summary",
  },
  {
    title: "Impact Metrics",
    description: "2025 KPIs, reach, and growth.",
    href: "#impact",
  },
  {
    title: "Focus Areas",
    description: "Strategic pillars and delivery themes.",
    href: "#focus-areas",
  },
  {
    title: "Project Highlights",
    description: "Flagship projects and outcomes.",
    href: "#project-highlights",
  },
  {
    title: "Knowledge Products",
    description: "Playbooks, briefs, and tools.",
    href: "#knowledge-products",
  },
  {
    title: "Timeline",
    description: "Major milestones across 2025.",
    href: "#timeline",
  },
  {
    title: "Financial Overview",
    description: "Revenue mix and client profile.",
    href: "#financials",
  },
  {
    title: "Looking Ahead",
    description: "2026 priorities and commitments.",
    href: "#looking-ahead",
  },
  {
    title: "Downloads",
    description: "Full report and datasets.",
    href: "#downloads",
  },
]

const reportResources = [
  {
    title: "Annual Report 2025 (English)",
    description: "Full narrative, financials, and case studies.",
    href: "/reports/bidev-annual-report-2025-en.pdf",
    format: "PDF",
    icon: FileText,
  },
  {
    title: "Annual Report 2025 (Indonesia)",
    description: "Ringkasan lengkap dalam Bahasa Indonesia.",
    href: "/reports/bidev-annual-report-2025-id.pdf",
    format: "PDF",
    icon: FileText,
  },
  {
    title: "Urban Indicators 2025",
    description: "City benchmarking dataset snapshot.",
    href: "/datasets/urban-indicators-2025.csv",
    format: "CSV",
    icon: Database,
  },
  {
    title: "Prakarsa Snapshot 2025",
    description: "Anonymized RW-level summary data.",
    href: "/datasets/prakarsa-city-snapshot-2025.csv",
    format: "CSV",
    icon: Database,
  },
]

const assurancePoints = [
  "Three-step validation workflow with audit trail",
  "Anonymized household records and privacy safeguards",
  "Independent peer review for flagship policy briefs",
]

const impactMetrics = [
  { label: "Projects Completed", value: "52", change: "+18%", icon: CheckCircle2 },
  { label: "Cities Served", value: "18", change: "+4", icon: MapPin },
  { label: "Experts Engaged", value: "72", change: "+10", icon: Users },
  { label: "Publications Released", value: "36", change: "+22%", icon: BookOpen },
  { label: "Training Participants", value: "520+", change: "+15%", icon: Award },
  { label: "Data Points Collected", value: "2.6M", change: "Prakarsa + Regsosek", icon: TrendingUp },
]

const projectHighlights = [
  {
    title: "Prakarsa Citywide Deployment",
    description:
      "Successful deployment of Prakarsa platform across 151 kelurahan in Bandung, creating the first comprehensive RW-level social data system.",
    impact: "1,850 RW data coordinators trained, 14 government databases integrated",
    image: "/urban-data-dashboard-indonesia-government-platform.jpg",
    category: "Flagship Project",
  },
  {
    title: "West Java Housing Roadmap",
    description:
      "Developed comprehensive affordable housing strategy for 27 kabupaten/kota, informing provincial policy direction.",
    impact: "9 housing programs designed, 170+ stakeholders engaged",
    image: "/housing-policy-planning-meeting-indonesia.jpg",
    category: "Policy Research",
  },
  {
    title: "Urban Mobility Training Program",
    description:
      "Delivered capacity building program for transportation planning officers from 12 cities across Indonesia.",
    impact: "140 officers trained, 7 curriculum modules developed",
    image: "/professional-training-workshop-urban-planning.jpg",
    category: "Training",
  },
]

const financialHighlights = [
  { category: "Project Revenue", amount: "Rp 13.6 B", percentage: 75 },
  { category: "Training & Events", amount: "Rp 3.1 B", percentage: 17 },
  { category: "Publications & Products", amount: "Rp 1.5 B", percentage: 8 },
]

const executiveSummary = [
  {
    title: "Evidence to Policy",
    description: "Converted multi-source urban datasets into actionable policy decisions.",
    metric: "14 integrated datasets",
    icon: Lightbulb,
  },
  {
    title: "Capacity at Scale",
    description: "Strengthened local planning teams through structured training and mentoring.",
    metric: "520+ participants trained",
    icon: Users,
  },
  {
    title: "Delivery Momentum",
    description: "Delivered complex research-to-implementation projects on time and at scale.",
    metric: "52 projects completed",
    icon: Sparkles,
  },
]

const focusAreas = [
  {
    title: "Urban Data Systems",
    description: "Build interoperable data pipelines that power city decision-making.",
    metric: "151 kelurahan mapped",
    highlights: ["Prakarsa 2.0 rollout", "RW-level dashboards", "Open data standards"],
    icon: Globe2,
  },
  {
    title: "Housing & Livability",
    description: "Design evidence-based housing strategies and financing pathways.",
    metric: "27 districts supported",
    highlights: ["Affordability index", "Policy roadmap", "Developer engagement"],
    icon: Home,
  },
  {
    title: "Mobility & Access",
    description: "Improve accessibility through multimodal planning and training.",
    metric: "14 cities trained",
    highlights: ["Transit audits", "Complete streets toolkit", "Accessibility indicators"],
    icon: Route,
  },
  {
    title: "Climate Resilience",
    description: "Prepare cities for climate risks with practical adaptation tools.",
    metric: "5 risk atlases",
    highlights: ["Heat mapping", "Flood resilience plans", "Green infrastructure pilots"],
    icon: Leaf,
  },
]

const knowledgeProducts = [
  {
    title: "Urban Data Playbook 2025",
    type: "Guidebook",
    description: "Operational blueprint for interoperable city data systems.",
    metric: "92 pages",
    image: "/urban-data-playbook-cover.jpg",
  },
  {
    title: "Mobility Playbook: Bandung",
    type: "Toolkit",
    description: "Design standards for complete streets and transit access.",
    metric: "6 modules",
    image: "/bandung-mobility-playbook-cover.jpg",
  },
  {
    title: "Smart City Implementation Framework",
    type: "Policy Brief",
    description: "Governance model and delivery roadmap for city programs.",
    metric: "Policy brief",
    image: "/smart-city-playbook-cover.jpg",
  },
  {
    title: "Social Protection Targeting Kit",
    type: "Toolkit",
    description: "Guidance for eligibility rules, data checks, and grievances.",
    metric: "Toolkit",
    image: "/social-protection-playbook-cover.jpg",
  },
]

const recognition = [
  {
    title: "Top 10 Urban Innovation Initiative",
    organization: "Indonesia Development Awards",
    year: "2025",
  },
  {
    title: "Excellence in Evidence-Based Policy",
    organization: "National Planning Forum",
    year: "2025",
  },
  {
    title: "Open Data Leadership",
    organization: "Civic Data Summit",
    year: "2024",
  },
]

const partnerLogos = [
  { name: "ITB", logo: "/itb-logo.jpg" },
  { name: "Universitas Padjadjaran", logo: "/unpad-logo.jpg" },
  { name: "Lembaga Demografi UI", logo: "/lembaga-demografi-ui-logo.jpg" },
  { name: "Satu Data", logo: "/satu-data-logo.jpg" },
  { name: "OpenStreetMap", logo: "/osm-logo.jpg" },
  { name: "PEKKA", logo: "/pekka-ngo-logo.jpg" },
  { name: "Rumah Zakat", logo: "/rumah-zakat-logo.jpg" },
  { name: "Digital Services Lab", logo: "/digital-services-logo.jpg" },
  { name: "Community Forum", logo: "/community-forum-logo.jpg" },
  { name: "Tech Partner", logo: "/tech-company-logo.jpg" },
]

const partnerNetwork = [
  "West Java Province",
  "Bandung City",
  "Bappenas",
  "World Bank",
  "UNDP",
  "GIZ",
  "KfW",
  "Private Developers",
]

const clientDistribution = [
  { type: "Government", percentage: 58 },
  { type: "Private Sector", percentage: 30 },
  { type: "Development Partners", percentage: 12 },
]

const yearHighlights = [
  { month: "January", event: "Released Prakarsa 2.1 interoperability toolkit" },
  { month: "March", event: "Urban data partnership with World Bank and Bappenas" },
  { month: "May", event: "Expanded Urban Data Masterclass to 6 cohorts" },
  { month: "July", event: "Bandung achieved citywide RW data coverage" },
  { month: "September", event: "Published West Java Housing Roadmap" },
  { month: "November", event: "BIDEV Annual Urban Forum 2025" },
]

const lookingAhead = [
  "Expand Prakarsa to 7 new cities",
  "Launch BIDEV Fellowship Program (first cohort 2026)",
  "Open Climate Resilience Lab with three pilot cities",
  "Establish Jakarta delivery office",
]

export default function AnnualReportPage() {
  return (
    <main className="pt-[72px]">
      {/* Hero */}
      <section className="bg-foreground text-background py-20 lg:py-28">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-accent text-accent-foreground">Annual Report</Badge>
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance">
                2025 Year in Review
              </h1>
              <p className="text-lg md:text-xl text-background/80 mb-8">
                A year of growth, impact, and deepening commitment to evidence-based urban development. Explore our
                achievements, learnings, and vision for the future.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90" asChild>
                  <a href="/reports/bidev-annual-report-2025-en.pdf" download>
                    <Download className="mr-2 w-4 h-4" />
                    Download Report (EN)
                  </a>
                </Button>
                <Link href="#impact">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-background/30 text-background hover:bg-background/10 bg-transparent"
                  >
                    View Highlights
                  </Button>
                </Link>
              </div>
            </div>

            <div className="relative aspect-[4/3] rounded-xl overflow-hidden">
              <Image
                src="/annual-report-cover-modern-urban-development-insti.jpg"
                alt="BIDEV Annual Report 2025"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Table of Contents */}
      <section id="toc" className="py-12 lg:py-16">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-8 items-start">
            <div>
              <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">Report Navigation</h2>
              <p className="text-lg text-muted-foreground max-w-2xl">
                Jump to key sections, explore highlights, or grab the full report and datasets.
              </p>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
                {tocItems.map((item, idx) => (
                  <Link
                    key={item.title}
                    href={item.href}
                    className="group rounded-xl border border-border/70 bg-background p-4 transition hover:border-primary/40 hover:shadow-md"
                  >
                    <div className="flex items-center justify-between text-xs text-muted-foreground mb-3">
                      <span>Section {String(idx + 1).padStart(2, "0")}</span>
                      <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                    </div>
                    <p className="font-semibold text-foreground mb-1">{item.title}</p>
                    <p className="text-xs text-muted-foreground">{item.description}</p>
                  </Link>
                ))}
              </div>
            </div>

            <Card className="h-full">
              <CardHeader>
                <CardTitle>Report Resources</CardTitle>
                <CardDescription>Download the full report, data packs, and snapshots.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {reportResources.map((resource) => (
                  <div
                    key={resource.title}
                    className="flex items-start gap-3 rounded-lg border border-border/70 bg-background p-3"
                  >
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <resource.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div className="flex-1">
                      <p className="font-medium">{resource.title}</p>
                      <p className="text-xs text-muted-foreground">{resource.description}</p>
                    </div>
                    <div className="flex flex-col items-end gap-2">
                      <Badge variant="secondary" className="text-[10px]">
                        {resource.format}
                      </Badge>
                      <Button size="sm" variant="outline" asChild>
                        <a href={resource.href} download>
                          Download
                        </a>
                      </Button>
                    </div>
                  </div>
                ))}

                <div className="rounded-lg border border-primary/10 bg-primary/5 p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <ShieldCheck className="w-4 h-4 text-primary" />
                    <p className="text-sm font-semibold text-primary">Methodology & Assurance</p>
                  </div>
                  <ul className="space-y-1 text-xs text-muted-foreground">
                    {assurancePoints.map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-primary mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Executive Summary */}
      <section id="executive-summary" className="py-12 lg:py-16 bg-muted/40">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-3">Executive Summary</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A snapshot of how BIDEV transformed data, partnerships, and expertise into measurable impact.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {executiveSummary.map((item) => (
              <Card key={item.title} className="h-full">
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-serif text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground mb-4">{item.description}</p>
                  <p className="text-sm font-semibold text-primary">{item.metric}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Metrics */}
      <section id="impact" className="py-16 lg:py-24">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">2025 Impact at a Glance</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Key metrics that demonstrate our reach and impact throughout the year.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {impactMetrics.map((metric) => (
              <Card key={metric.label} className="text-center">
                <CardContent className="pt-6">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3">
                    <metric.icon className="w-6 h-6 text-primary" />
                  </div>
                  <p className="text-3xl font-bold text-primary mb-1">{metric.value}</p>
                  <p className="text-sm text-muted-foreground mb-2">{metric.label}</p>
                  <Badge variant="secondary" className="text-xs">
                    {metric.change}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Focus Areas */}
      <section id="focus-areas" className="py-16 lg:py-24">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">Impact Focus Areas</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our work is organized around four strategic areas that connect data, policy, and city delivery.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {focusAreas.map((area) => (
              <Card key={area.title} className="h-full">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <area.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">{area.metric}</p>
                      <h3 className="font-serif text-xl font-bold">{area.title}</h3>
                    </div>
                  </div>
                  <p className="text-muted-foreground mb-4">{area.description}</p>
                  <ul className="space-y-2 text-sm">
                    {area.highlights.map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-primary mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Project Highlights */}
      <section id="project-highlights" className="py-16 lg:py-24 bg-muted">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">Project Highlights</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Key projects that defined our year and demonstrated impact.
            </p>
          </div>

          <div className="space-y-8">
            {projectHighlights.map((project, idx) => (
              <Card key={idx} className="overflow-hidden">
                <div className="grid lg:grid-cols-2">
                  <div className="relative aspect-video lg:aspect-auto">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardContent className="p-8 flex flex-col justify-center">
                    <Badge className="w-fit mb-4">{project.category}</Badge>
                    <h3 className="font-serif text-2xl font-bold mb-3">{project.title}</h3>
                    <p className="text-muted-foreground mb-4">{project.description}</p>
                    <div className="p-4 bg-primary/5 rounded-lg border border-primary/10">
                      <p className="text-sm font-medium text-primary">Impact: {project.impact}</p>
                    </div>
                  </CardContent>
                </div>
              </Card>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link href="/case-studies">
              <Button variant="outline">
                View All Case Studies
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Knowledge Products */}
      <section id="knowledge-products" className="py-16 lg:py-24 bg-muted/40">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 items-start">
            <div>
              <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">Knowledge Products</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Practical tools, datasets, and briefs that help partners make informed urban decisions.
              </p>
              <div className="grid sm:grid-cols-2 gap-5">
                {knowledgeProducts.map((item) => (
                  <Card key={item.title} className="overflow-hidden group">
                    <div className="relative aspect-[4/3]">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                    <CardContent className="p-5">
                      <div className="flex items-center justify-between mb-2">
                        <Badge variant="secondary">{item.type}</Badge>
                        <span className="text-xs text-muted-foreground">{item.metric}</span>
                      </div>
                      <h3 className="font-semibold mb-2">{item.title}</h3>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
              <div className="mt-6">
                <Link href="/publications">
                  <Button variant="outline">
                    Browse All Publications
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </Link>
              </div>
            </div>
            <div>
              <h3 className="font-serif text-2xl font-bold mb-4">Recognition</h3>
              <p className="text-muted-foreground mb-6">
                External acknowledgements that reflect the quality and relevance of our work.
              </p>
              <div className="space-y-4">
                {recognition.map((item) => (
                  <Card key={item.title}>
                    <CardContent className="p-5">
                      <p className="text-xs text-muted-foreground mb-1">{item.year}</p>
                      <h4 className="font-semibold">{item.title}</h4>
                      <p className="text-sm text-muted-foreground">{item.organization}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
              <div className="mt-8">
                <h4 className="font-semibold mb-3">Partners & Ecosystem</h4>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {partnerLogos.map((partner) => (
                    <div
                      key={partner.name}
                      className="rounded-lg border border-border/70 bg-background p-3 flex items-center justify-center"
                    >
                      <div className="relative h-10 w-full">
                        <Image src={partner.logo} alt={partner.name} fill className="object-contain opacity-80" />
                      </div>
                    </div>
                  ))}
                </div>
                <div className="flex flex-wrap gap-2 mt-4">
                  {partnerNetwork.map((partner) => (
                    <Badge key={partner} variant="outline">
                      {partner}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Year Timeline */}
      <section id="timeline" className="py-16 lg:py-24">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">2025 Highlights Timeline</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Key milestones and achievements throughout the year.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-border" />

              <div className="space-y-6">
                {yearHighlights.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-6 relative">
                    <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center flex-shrink-0 relative z-10">
                      <Calendar className="w-5 h-5" />
                    </div>
                    <Card className="flex-1">
                      <CardContent className="p-4">
                        <p className="font-semibold text-primary mb-1">{item.month}</p>
                        <p className="text-muted-foreground">{item.event}</p>
                      </CardContent>
                    </Card>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Financial & Distribution */}
      <section id="financials" className="py-16 lg:py-24 bg-muted">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">Financial Overview</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Transparency in our operations and resource allocation.
            </p>
          </div>

          <Tabs defaultValue="revenue" className="max-w-4xl mx-auto">
            <TabsList className="grid w-full grid-cols-2 mb-8">
              <TabsTrigger value="revenue">Revenue Breakdown</TabsTrigger>
              <TabsTrigger value="clients">Client Distribution</TabsTrigger>
            </TabsList>

            <TabsContent value="revenue">
              <Card>
                <CardHeader>
                  <CardTitle>Revenue by Category</CardTitle>
                  <CardDescription>Total Revenue 2025: Rp 18.2 Billion</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  {financialHighlights.map((item, idx) => (
                    <div key={idx}>
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-medium">{item.category}</span>
                        <span className="text-muted-foreground">{item.amount}</span>
                      </div>
                      <Progress value={item.percentage} className="h-3" />
                      <p className="text-xs text-muted-foreground mt-1">{item.percentage}% of total</p>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="clients">
              <Card>
                <CardHeader>
                  <CardTitle>Client Distribution</CardTitle>
                  <CardDescription>By client segment in 2025</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  {clientDistribution.map((item, idx) => (
                    <div key={idx}>
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-medium">{item.type}</span>
                        <span className="text-muted-foreground">{item.percentage}%</span>
                      </div>
                      <Progress value={item.percentage} className="h-3" />
                    </div>
                  ))}
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Looking Ahead */}
      <section id="looking-ahead" className="py-16 lg:py-24">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4" variant="outline">
                2026 Vision
              </Badge>
              <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">Looking Ahead</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Building on our 2025 momentum, we're setting ambitious goals for 2026 to expand our impact and deepen
                our commitment to evidence-based development.
              </p>
              <ul className="space-y-4">
                {lookingAhead.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold flex-shrink-0">
                      {idx + 1}
                    </div>
                    <span className="font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <Card className="bg-foreground text-background">
              <CardContent className="p-8">
                <Target className="w-12 h-12 text-accent mb-6" />
                <h3 className="font-serif text-2xl font-bold mb-4">Our 2026 Commitment</h3>
                <p className="text-background/70 mb-6">
                  We remain committed to bridging knowledge, policy, and impact. Our growth will be guided by our core
                  values of evidence-based practice, independence, and stakeholder respect.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-accent" />
                    Maintain quality standards across all engagements
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-accent" />
                    Strengthen expert network with 20+ new experts
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-accent" />
                    Publish 40+ knowledge products
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Download CTA */}
      <section id="downloads" className="py-16 lg:py-24 bg-primary text-primary-foreground">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">Download the Full Report</h2>
          <p className="text-lg text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Get the complete 2025 Annual Report with detailed financials, project descriptions, and our full 2026
            strategic plan.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90" asChild>
              <a href="/reports/bidev-annual-report-2025-en.pdf" download>
                <Download className="mr-2 w-4 h-4" />
                Download PDF (English)
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 bg-transparent"
              asChild
            >
              <a href="/reports/bidev-annual-report-2025-id.pdf" download>
                <Download className="mr-2 w-4 h-4" />
                Download PDF (Indonesia)
              </a>
            </Button>
          </div>
          <p className="text-sm text-primary-foreground/60 mt-6">Previous reports: 2024 | 2023 | 2022</p>
        </div>
      </section>
    </main>
  )
}
