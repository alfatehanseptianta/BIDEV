
import type { Metadata } from "next"
import Link from "next/link"
import {
  ArrowRight,
  Briefcase,
  Building2,
  CalendarDays,
  ChartLine,
  Clock,
  GraduationCap,
  Handshake,
  Laptop,
  Leaf,
  Map,
  MapPin,
  ShieldCheck,
  Sparkles,
  Users,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export const metadata: Metadata = {
  title: "Careers | BIDEV Institute",
  description:
    "Join BIDEV as a fellow, intern, or visiting researcher. Build a policy career across research, data, and urban innovation.",
}

const heroHighlights = [
  { icon: MapPin, text: "Bandung based, hybrid teams" },
  { icon: Users, text: "Small squads, high ownership" },
  { icon: Clock, text: "Research sprints every 6 weeks" },
]

const metrics = [
  { value: "45+", label: "Policy projects delivered" },
  { value: "18", label: "Partner cities and provinces" },
  { value: "120+", label: "Publications and briefs" },
  { value: "70+", label: "Alumni across public sector" },
]

const values = [
  {
    icon: ChartLine,
    title: "Evidence first",
    description: "We test assumptions with data, fieldwork, and clear methods before we recommend action.",
  },
  {
    icon: ShieldCheck,
    title: "Integrity by design",
    description: "Transparent methods, ethical review, and careful stewardship of sensitive data.",
  },
  {
    icon: Handshake,
    title: "Co-create with partners",
    description: "We build with governments, communities, and civil society so solutions can scale.",
  },
  {
    icon: Leaf,
    title: "Sustainable impact",
    description: "We prioritize long-term capacity, not short-term outputs.",
  },
]

const focusAreas = [
  {
    icon: Building2,
    title: "Urban governance and finance",
    description: "City budgeting, public services, and institutional reforms that improve delivery.",
    tags: ["City budgeting", "Service delivery", "Regulatory reform"],
  },
  {
    icon: Map,
    title: "Spatial data and GIS",
    description: "Mapping cities with GIS, satellite data, and mobility insights.",
    tags: ["Risk mapping", "Urban mobility", "Land use planning"],
  },
  {
    icon: Users,
    title: "Social protection and inclusion",
    description: "Program targeting, social registry design, and impact evaluation.",
    tags: ["Targeting", "Program evaluation", "Behavioral insights"],
  },
  {
    icon: Leaf,
    title: "Climate and resilience",
    description: "Urban resilience planning, climate adaptation, and vulnerability analysis.",
    tags: ["Resilience plans", "Climate finance", "Risk scenarios"],
  },
  {
    icon: Laptop,
    title: "Digital public services",
    description: "Build data products and workflows that make policy execution faster.",
    tags: ["Service design", "Data pipelines", "Digital tools"],
  },
  {
    icon: ChartLine,
    title: "Policy analytics and evaluation",
    description: "Forecasting, scenario modeling, and evidence dashboards.",
    tags: ["Impact modeling", "Dashboards", "Decision support"],
  },
]

const perks = [
  {
    icon: Laptop,
    title: "Hybrid work model",
    description: "Bandung base with 2-3 office days and flexible focus time.",
  },
  {
    icon: Sparkles,
    title: "Learning budget",
    description: "Courses, certifications, and conference support every year.",
  },
  {
    icon: Handshake,
    title: "Mentorship and peer review",
    description: "Weekly research clinics and constructive feedback loops.",
  },
  {
    icon: ShieldCheck,
    title: "Responsible research",
    description: "Clear ethics review and data governance for every project.",
  },
  {
    icon: MapPin,
    title: "Fieldwork exposure",
    description: "Partner with city teams and communities across Indonesia.",
  },
  {
    icon: Users,
    title: "Strong alumni network",
    description: "Stay connected with BIDEV alumni in public, private, and civic sectors.",
  },
]

const hiringSteps = [
  {
    title: "Apply and screen",
    timing: "Week 1",
    description: "Submit your CV, a writing sample, and a short motivation note.",
  },
  {
    title: "Case task",
    timing: "Week 2",
    description: "Short take-home task to understand how you think and build solutions.",
  },
  {
    title: "Panel interview",
    timing: "Week 3",
    description: "Meet the hiring panel, review your approach, and align on expectations.",
  },
  {
    title: "Offer and onboarding",
    timing: "Week 4",
    description: "Reference check, offer, and a structured onboarding plan.",
  },
]

const toolStack = ["R / Python", "Stata", "QGIS", "Power BI", "SQL", "Notion", "Miro"]

const programs = [
  {
    icon: GraduationCap,
    name: "Research Fellowship",
    duration: "6-12 months",
    description:
      "For early-career researchers (fresh S2/S3) to work on BIDEV projects with mentorship from senior experts.",
    benefits: [
      "Monthly stipend",
      "Access to BIDEV network",
      "Co-authorship opportunities",
      "Professional development training",
      "Conference participation support",
    ],
    requirements: [
      "Master's or PhD degree (recent graduate)",
      "Strong research methodology skills",
      "Interest in urban/social policy",
      "Excellent writing skills (ID/EN)",
    ],
  },
  {
    icon: Briefcase,
    name: "Internship Program",
    duration: "3-6 months",
    description: "For S1/S2 students to gain hands-on experience in policy research and data analysis.",
    benefits: [
      "Monthly allowance",
      "Practical project experience",
      "Mentorship from experts",
      "Certificate of completion",
      "Potential fellowship pathway",
    ],
    requirements: [
      "Currently enrolled S1/S2 student",
      "Min. semester 5 (S1) or semester 2 (S2)",
      "GPA min. 3.25",
      "Available for min. 20 hours/week",
    ],
  },
  {
    icon: Users,
    name: "Visiting Researcher",
    duration: "1-3 months",
    description: "For established researchers to collaborate on joint projects or access BIDEV resources.",
    benefits: [
      "Desk space and facilities",
      "Access to BIDEV data resources",
      "Collaboration opportunities",
      "Joint publication potential",
      "Network access",
    ],
    requirements: [
      "Active researcher at academic institution",
      "Relevant research agenda",
      "Letter of support from home institution",
      "Defined collaboration scope",
    ],
  },
]

const openRoles = [
  {
    title: "Research Associate - Social Protection",
    type: "Full-time",
    location: "Bandung",
    department: "Research",
    posted: "2026-01-10",
    deadline: "2026-02-10",
    description: "Support research projects on social protection, poverty analysis, and program targeting.",
    requirements: [
      "S2 in Social Sciences, Economics, or related",
      "2+ years research experience",
      "Strong quantitative skills (R/Stata)",
    ],
  },
  {
    title: "Data Analyst - Prakarsa",
    type: "Full-time",
    location: "Bandung",
    department: "Prakarsa",
    posted: "2026-01-05",
    deadline: "2026-02-05",
    description: "Analyze urban data, build dashboards, and support Prakarsa platform development.",
    requirements: [
      "S1 in Data Science, Statistics, or related",
      "Proficient in Python/R and SQL",
      "Experience with GIS tools",
    ],
  },
  {
    title: "Policy Designer - Urban Mobility",
    type: "Full-time",
    location: "Bandung / Hybrid",
    department: "Innovation",
    posted: "2026-01-08",
    deadline: "2026-02-08",
    description: "Design policy pilots, co-create with stakeholders, and improve urban mobility services.",
    requirements: [
      "3+ years in service or policy design",
      "Experience running co-creation workshops",
      "Comfortable with prototyping and user research",
    ],
  },
  {
    title: "GIS Specialist - Resilience Mapping",
    type: "Contract",
    location: "Bandung / Field",
    department: "Spatial Lab",
    posted: "2026-01-06",
    deadline: "2026-02-06",
    description: "Build spatial datasets and maps for climate risk and resilience planning.",
    requirements: [
      "Advanced QGIS or ArcGIS skills",
      "Remote sensing or hazard mapping experience",
      "Able to support field data collection",
    ],
  },
  {
    title: "Project Coordinator",
    type: "Contract",
    location: "Bandung",
    department: "Operations",
    posted: "2026-01-12",
    deadline: "2026-02-12",
    description: "Coordinate multi-stakeholder projects, manage timelines, and ensure deliverable quality.",
    requirements: ["S1 any field", "3+ years project management experience", "Government sector experience preferred"],
  },
  {
    title: "Research Engineer - Evidence Platform",
    type: "Full-time",
    location: "Bandung / Hybrid",
    department: "Technology",
    posted: "2026-01-14",
    deadline: "2026-02-14",
    description: "Build data pipelines and tools that help researchers ship policy insights faster.",
    requirements: [
      "Experience with Python and SQL",
      "Familiar with APIs and data pipelines",
      "Interest in policy research workflows",
    ],
  },
]

const testimonials = [
  {
    quote: "The fellowship gave me space to publish and still ship policy tools used by city teams.",
    name: "Nadia A.",
    role: "Research Fellow, 2024",
  },
  {
    quote: "Small squads mean you are trusted early. You own analysis from framing to presentation.",
    name: "Raka P.",
    role: "Data Analyst, Prakarsa",
  },
  {
    quote: "Mentorship here is real. Weekly clinics sharpened my methods and storytelling.",
    name: "Putri L.",
    role: "Former Intern, now Research Associate",
  },
]

const faqs = [
  {
    question: "What is the selection process?",
    answer:
      "Our selection process typically includes: (1) CV and application review, (2) Written assessment or case study, (3) Interview with hiring team, (4) Reference check. The process takes 2-4 weeks from application to offer.",
  },
  {
    question: "Are positions remote or office-based?",
    answer:
      "Most positions are hybrid, with 2-3 days in our Bandung office. Some roles may require more field work or client site visits. Fully remote arrangements are considered for specific roles.",
  },
  {
    question: "Can I apply to multiple roles?",
    answer:
      "Yes. Choose one primary role in the form and mention other roles you are excited about in your cover letter.",
  },
  {
    question: "What should I include in my application?",
    answer:
      "Include your CV, a writing sample or portfolio, and a short note about a policy problem you want to work on.",
  },
  {
    question: "Do you sponsor visas for international candidates?",
    answer:
      "For Visiting Researcher positions, we can support visa applications. For employment positions, candidates must have valid Indonesian work authorization.",
  },
  {
    question: "What career development opportunities exist?",
    answer:
      "We provide training budgets, conference participation, publication support, and clear progression pathways. Fellows often transition to full-time roles or receive recommendations for further studies.",
  },
]

export default function CareersPage() {
  return (
    <main className="pt-[72px]">
      {/* Hero */}
      <section className="relative overflow-hidden bg-foreground text-background py-20 lg:py-28">
        <div className="absolute inset-0">
          <div className="absolute -top-24 right-0 h-72 w-72 rounded-full bg-accent/20 blur-3xl" />
          <div className="absolute bottom-0 left-0 h-72 w-72 rounded-full bg-primary/20 blur-3xl" />
        </div>
        <div className="relative max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[1.15fr,0.85fr] items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-background/20 bg-background/10 px-4 py-1 text-sm text-background/80 mb-6">
                <Sparkles className="w-4 h-4" />
                {openRoles.length} open roles for 2026 intake
              </div>
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance">
                Build Your Career in Policy Impact
              </h1>
              <p className="text-lg md:text-xl text-background/80 mb-8">
                Join a team of researchers, analysts, and policy experts working on Indonesia's most pressing urban and
                social challenges.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="#open-roles">
                  <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
                    View Open Roles
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </Link>
                <Link href="#programs">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-background/30 text-background hover:bg-background/10 bg-transparent"
                  >
                    Fellowship Programs
                  </Button>
                </Link>
              </div>
              <div className="mt-8 flex flex-wrap gap-3">
                {heroHighlights.map((item) => (
                  <div
                    key={item.text}
                    className="inline-flex items-center gap-2 rounded-full border border-background/20 bg-background/10 px-4 py-1 text-sm text-background/80"
                  >
                    <item.icon className="w-4 h-4" />
                    {item.text}
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-2xl border border-background/15 bg-background/5 p-6 lg:p-8 backdrop-blur">
              <h3 className="font-serif text-2xl font-semibold mb-3">Work that travels</h3>
              <p className="text-sm text-background/80 mb-6">
                Move from insight to action with policy labs, data products, and co-created solutions.
              </p>
              <div className="grid gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-background/10 flex items-center justify-center">
                    <CalendarDays className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm text-background/70">Next intake</p>
                    <p className="text-lg font-semibold">Feb 2026</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-background/10 flex items-center justify-center">
                    <Building2 className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm text-background/70">Home base</p>
                    <p className="text-lg font-semibold">Bandung, hybrid</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-background/10 flex items-center justify-center">
                    <Briefcase className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm text-background/70">Roles open</p>
                    <p className="text-lg font-semibold">{openRoles.length} positions</p>
                  </div>
                </div>
              </div>
              <div className="mt-6">
                <p className="text-sm text-background/70 mb-2">Core toolkit</p>
                <div className="flex flex-wrap gap-2">
                  {toolStack.map((tool) => (
                    <span
                      key={tool}
                      className="inline-flex items-center rounded-full border border-background/20 bg-background/10 px-3 py-1 text-xs text-background/80"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Metrics */}
      <section className="py-12 lg:py-16">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-8">
            <div>
              <h2 className="font-serif text-3xl md:text-4xl font-bold mb-2">Impact in numbers</h2>
              <p className="text-muted-foreground max-w-2xl">
                A snapshot of our policy work and the community you will join.
              </p>
            </div>
            <Link href="#open-roles" className="text-sm text-primary hover:underline">
              Explore open roles
            </Link>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {metrics.map((metric) => (
              <Card key={metric.label} className="border-foreground/10">
                <CardContent className="p-6">
                  <div className="font-serif text-3xl font-semibold mb-2">{metric.value}</div>
                  <p className="text-sm text-muted-foreground">{metric.label}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 lg:py-24 bg-muted/40">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">Our values</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We are a research studio that blends rigor, empathy, and delivery.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => (
              <Card key={value.title} className="h-full">
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <value.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">{value.title}</h3>
                  <p className="text-sm text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Focus Areas */}
      <section className="py-16 lg:py-24">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">What you will work on</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              From analytics to fieldwork, our teams work across the policy lifecycle.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {focusAreas.map((area) => (
              <Card key={area.title} className="flex flex-col">
                <CardHeader>
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <area.icon className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle>{area.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col">
                  <p className="text-sm text-muted-foreground mb-4">{area.description}</p>
                  <div className="mt-auto flex flex-wrap gap-2">
                    {area.tags.map((tag) => (
                      <Badge key={tag} variant="outline">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Programs */}
      <section id="programs" className="py-16 lg:py-24 bg-muted/40">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">Programs</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Multiple pathways to join BIDEV, from student internships to research fellowships.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {programs.map((program) => (
              <Card key={program.name} className="flex flex-col">
                <CardHeader>
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <program.icon className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="flex items-center justify-between gap-4">
                    <span>{program.name}</span>
                    <Badge variant="secondary">{program.duration}</Badge>
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col">
                  <p className="text-muted-foreground mb-6">{program.description}</p>

                  <div className="mb-6">
                    <h4 className="font-semibold text-sm mb-3">Benefits:</h4>
                    <ul className="space-y-2">
                      {program.benefits.map((benefit) => (
                        <li key={benefit} className="text-sm text-muted-foreground flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0 mt-1.5" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-auto">
                    <h4 className="font-semibold text-sm mb-3">Requirements:</h4>
                    <ul className="space-y-2">
                      {program.requirements.map((req) => (
                        <li key={req} className="text-sm text-muted-foreground flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0 mt-1.5" />
                          {req}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Life at BIDEV */}
      <section className="py-16 lg:py-24">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.8fr,1.2fr] items-start">
            <div>
              <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">Life at BIDEV</h2>
              <p className="text-lg text-muted-foreground mb-6">
                We build a calm, ambitious environment where research quality and human pace can co-exist.
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                <Badge variant="secondary">Hybrid</Badge>
                <Badge variant="secondary">Bandung HQ</Badge>
                <Badge variant="secondary">Learning budget</Badge>
                <Badge variant="secondary">Fieldwork</Badge>
              </div>
              <Card className="border-foreground/10">
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-3">Work model</h3>
                  <ul className="space-y-3 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0 mt-1.5" />
                      Hybrid schedule with core collaboration days in Bandung.
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0 mt-1.5" />
                      Research sprints with clear goals, demo days, and peer review.
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0 mt-1.5" />
                      Direct access to policymakers, communities, and partner networks.
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
            <div className="grid gap-6 sm:grid-cols-2">
              {perks.map((perk) => (
                <Card key={perk.title} className="h-full">
                  <CardContent className="p-6">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                      <perk.icon className="w-5 h-5 text-primary" />
                    </div>
                    <h3 className="font-semibold mb-2">{perk.title}</h3>
                    <p className="text-sm text-muted-foreground">{perk.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Hiring Process */}
      <section className="py-16 lg:py-24 bg-muted/40">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">Hiring process</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A transparent, fast process so you know what to expect.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {hiringSteps.map((step, idx) => (
              <Card key={step.title} className="h-full">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center font-semibold">
                      {idx + 1}
                    </div>
                    <Badge variant="outline">{step.timing}</Badge>
                  </div>
                  <h3 className="font-semibold mb-2">{step.title}</h3>
                  <p className="text-sm text-muted-foreground">{step.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Open Roles */}
      <section id="open-roles" className="py-16 lg:py-24 bg-muted">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">Open Roles</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Current opportunities to join our team. We're always looking for talented individuals.
            </p>
          </div>

          <div className="space-y-4">
            {openRoles.map((role) => (
              <Card key={role.title} className="hover:border-primary/30 transition-colors">
                <CardContent className="p-6">
                  <div className="flex flex-col lg:flex-row lg:items-center gap-6">
                    <div className="flex-1">
                      <div className="flex flex-wrap gap-2 mb-2">
                        <Badge>{role.type}</Badge>
                        <Badge variant="outline">{role.department}</Badge>
                      </div>
                      <h3 className="font-serif text-xl font-semibold mb-2">{role.title}</h3>
                      <p className="text-sm text-muted-foreground mb-3">{role.description}</p>
                      <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          {role.location}
                        </span>
                        <span className="flex items-center gap-1">
                          <CalendarDays className="w-4 h-4" />
                          Posted:{" "}
                          {new Date(role.posted).toLocaleDateString("id-ID", {
                            day: "numeric",
                            month: "short",
                            year: "numeric",
                          })}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          Deadline:{" "}
                          {new Date(role.deadline).toLocaleDateString("id-ID", {
                            day: "numeric",
                            month: "short",
                            year: "numeric",
                          })}
                        </span>
                      </div>
                      <ul className="mt-4 grid gap-2 text-sm text-muted-foreground sm:grid-cols-2">
                        {role.requirements.map((req) => (
                          <li key={req} className="flex items-start gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0 mt-1.5" />
                            {req}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="flex-shrink-0">
                      <Link href={`/careers/apply?role=${encodeURIComponent(role.title)}`}>
                        <Button>
                          Apply Now
                          <ArrowRight className="ml-2 w-4 h-4" />
                        </Button>
                      </Link>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {openRoles.length === 0 && (
            <Card>
              <CardContent className="p-12 text-center">
                <p className="text-muted-foreground mb-4">No open roles at the moment.</p>
                <p className="text-sm text-muted-foreground">
                  Send your CV to{" "}
                  <a href="mailto:careers@bidev.id" className="text-primary hover:underline">
                    careers@bidev.id
                  </a>{" "}
                  for future opportunities.
                </p>
              </CardContent>
            </Card>
          )}
        </div>
      </section>

      {/* Talent Community */}
      <section className="py-16 lg:py-24">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="border-primary/20 bg-primary/5">
            <CardContent className="p-8 lg:p-10">
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
                <div>
                  <h3 className="font-serif text-2xl font-semibold mb-2">Join the talent community</h3>
                  <p className="text-muted-foreground max-w-xl">
                    Share your profile and get early notice on research openings, fellowships, and internships.
                  </p>
                </div>
                <div className="flex flex-wrap gap-3">
                  <Link href="/careers/apply?role=Talent%20Community">
                    <Button>Join Talent Community</Button>
                  </Link>
                  <a href="mailto:careers@bidev.id">
                    <Button variant="outline">Email Us</Button>
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 lg:py-24 bg-muted/40">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">Team voices</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Stories from researchers and analysts who have grown with BIDEV.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {testimonials.map((testimonial) => (
              <Card key={testimonial.name} className="h-full">
                <CardContent className="p-6 flex flex-col h-full">
                  <p className="text-sm text-muted-foreground mb-6">"{testimonial.quote}"</p>
                  <div className="mt-auto">
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 lg:py-24">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
            </div>

            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq) => (
                <AccordionItem key={faq.question} value={faq.question}>
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
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">Don't see a fit?</h2>
          <p className="text-lg text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            We're always looking for talented researchers, analysts, and policy experts. Send us your CV and tell us how
            you'd like to contribute.
          </p>
          <a href="mailto:careers@bidev.id">
            <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
              Send Your CV
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </a>
        </div>
      </section>
    </main>
  )
}
