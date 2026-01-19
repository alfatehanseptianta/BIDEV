import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, ArrowLeft, Download, Calendar, Users, MapPin, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export const metadata: Metadata = {
  title: "Case Study Detail | BIDEV Institute",
  description: "Detailed case study showcasing our impact and methodology.",
}

const caseStudyData = {
  slug: "prakarsa-bandung-pilot",
  title: "Prakarsa Pilot Implementation in Bandung",
  summary: "City-wide social protection data platform deployment across 151 kelurahan with real-time RW-level input.",
  coverImage: "/bandung-city-urban-data-dashboard-aerial-view.jpg",
  type: "Prakarsa",
  sector: "Government",
  location: "Kota Bandung, Jawa Barat",
  topics: ["Social Protection", "Data Governance", "Urban Planning"],
  duration: "8 months",
  teamSize: 12,
  client: "Pemerintah Kota Bandung",
  year: "2024",
  challenge: {
    title: "The Challenge",
    content:
      "Kota Bandung faced significant challenges in coordinating social protection programs across multiple OPDs. Data was fragmented across 12 different systems, leading to beneficiary duplication, exclusion errors, and inefficient resource allocation. The city needed a unified platform that could provide real-time visibility into social conditions at the neighborhood level while enabling data-driven policy decisions.",
    painPoints: [
      "12 separate data systems with no interoperability",
      "30% estimated beneficiary duplication across programs",
      "4-6 month delay in data updates from ground level",
      "No standardized vulnerability assessment methodology",
    ],
  },
  approach: {
    title: "Our Approach",
    steps: [
      {
        phase: "Phase 1: Assessment & Design",
        duration: "6 weeks",
        description:
          "Conducted comprehensive data landscape assessment, stakeholder mapping, and platform architecture design.",
        outputs: ["Data ecosystem map", "Stakeholder analysis", "Technical architecture", "Implementation roadmap"],
      },
      {
        phase: "Phase 2: Platform Development",
        duration: "12 weeks",
        description:
          "Built the Prakarsa platform with RW-level input interfaces, validation workflows, and dashboard analytics.",
        outputs: ["Mobile input app", "Validation system", "Analytics dashboard", "Integration APIs"],
      },
      {
        phase: "Phase 3: Pilot Deployment",
        duration: "8 weeks",
        description: "Deployed in 3 pilot kecamatan with intensive training and change management support.",
        outputs: ["Trained operators", "Standard operating procedures", "Pilot evaluation report"],
      },
      {
        phase: "Phase 4: Citywide Rollout",
        duration: "12 weeks",
        description: "Scaled to all 151 kelurahan with phased onboarding and continuous support.",
        outputs: ["Full deployment", "Performance monitoring", "Sustainability plan"],
      },
    ],
  },
  deliverables: [
    { name: "Prakarsa Platform", description: "Fully deployed social protection data platform", downloadable: false },
    {
      name: "Data Governance Framework",
      description: "Policies and procedures for data management",
      downloadable: true,
    },
    { name: "Training Modules", description: "6 training modules for different user roles", downloadable: true },
    { name: "Policy Recommendations", description: "28 evidence-based policy recommendations", downloadable: true },
  ],
  results: {
    title: "Results & Impact",
    narrative:
      "Within 8 months of full deployment, the Prakarsa platform transformed how Kota Bandung approaches social protection. Decision-makers now have real-time visibility into social conditions, enabling faster response to emerging needs and more equitable resource allocation.",
    metrics: [
      { label: "RW Coverage", value: "1,561", subtext: "100% of RW onboarded" },
      { label: "Data Sources Integrated", value: "12", subtext: "Previously siloed systems" },
      { label: "Policy Recommendations", value: "28", subtext: "Implemented by OPDs" },
      { label: "Processing Time Reduction", value: "85%", subtext: "From 6 months to 2 weeks" },
    ],
    outcomes: [
      "Reduced beneficiary duplication by 45%",
      "Identified 12,000 previously excluded vulnerable households",
      "Enabled proactive intervention during flood season",
      "Standardized vulnerability assessment across all kelurahan",
    ],
  },
  timeline: [
    { date: "Jan 2024", milestone: "Project kickoff & assessment" },
    { date: "Mar 2024", milestone: "Platform architecture approved" },
    { date: "May 2024", milestone: "Pilot deployment in 3 kecamatan" },
    { date: "Jul 2024", milestone: "Pilot evaluation complete" },
    { date: "Aug 2024", milestone: "Citywide rollout begins" },
    { date: "Oct 2024", milestone: "Full deployment achieved" },
  ],
  team: [
    {
      name: "Dr. Andi Setiawan",
      role: "Project Lead",
      expertise: "Urban Data Systems",
      avatar: "/indonesian-male-professor-portrait.jpg",
    },
    {
      name: "Dr. Siti Rahmawati",
      role: "Policy Advisor",
      expertise: "Social Protection",
      avatar: "/indonesian-female-professor-portrait.jpg",
    },
    {
      name: "Ir. Budi Santoso",
      role: "Technical Lead",
      expertise: "GIS & Data Integration",
      avatar: "/indonesian-male-engineer-portrait.jpg",
    },
  ],
  dataGovernance: {
    title: "Data Governance & Privacy",
    items: [
      "All personal data encrypted at rest and in transit",
      "Role-based access control with audit logging",
      "Data retention policy aligned with national regulations",
      "Regular privacy impact assessments conducted",
      "Community consent obtained for RW-level data collection",
    ],
  },
  lessons: [
    "Early engagement with RW-level stakeholders is critical for data quality",
    "Change management requires as much investment as technology",
    "Iterative deployment allows for rapid learning and adaptation",
    "Cross-OPD coordination needs formal governance structure",
  ],
  relatedCases: [
    { slug: "jabar-housing-roadmap", title: "West Java Affordable Housing Roadmap", type: "Roadmap" },
    { slug: "social-registry-integration", title: "Social Registry System Integration", type: "IT Project" },
  ],
  relatedServices: [
    { slug: "prakarsa-deployment", title: "Prakarsa Deployment" },
    { slug: "policy-consulting", title: "Policy Consulting" },
    { slug: "it-development", title: "IT System Development" },
  ],
}

export default function CaseStudyDetailPage() {
  const cs = caseStudyData

  return (
    <main className="pt-[72px]">
      {/* Hero */}
      <section className="relative">
        <div className="absolute inset-0 h-[400px] lg:h-[500px]">
          <Image src={cs.coverImage || "/placeholder.svg"} alt={cs.title} fill className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-background/20" />
        </div>
        <div className="relative max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-8">
          <Link
            href="/case-studies"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Case Studies
          </Link>
          <div className="pt-[200px] lg:pt-[280px]">
            <div className="flex flex-wrap gap-2 mb-4">
              <Badge className="bg-primary text-primary-foreground">{cs.type}</Badge>
              <Badge variant="outline">{cs.sector}</Badge>
              {cs.topics.map((topic) => (
                <Badge key={topic} variant="secondary">
                  {topic}
                </Badge>
              ))}
            </div>
            <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold mb-4 max-w-4xl">{cs.title}</h1>
            <p className="text-lg text-muted-foreground mb-6 max-w-3xl">{cs.summary}</p>
            <div className="flex flex-wrap gap-6 text-sm text-muted-foreground mb-8">
              <span className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                {cs.location}
              </span>
              <span className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                {cs.duration} · {cs.year}
              </span>
              <span className="flex items-center gap-2">
                <Users className="w-4 h-4" />
                {cs.teamSize} experts
              </span>
            </div>
            <Link href="/request?type=proposal&ref=case-study">
              <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
                Request Similar Program
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Challenge */}
      <section className="py-16 lg:py-24 border-t border-border">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="font-serif text-2xl md:text-3xl font-bold mb-6">{cs.challenge.title}</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">{cs.challenge.content}</p>
            </div>
            <div className="bg-destructive/5 border border-destructive/20 rounded-xl p-6">
              <h3 className="font-semibold text-destructive mb-4">Key Pain Points</h3>
              <ul className="space-y-3">
                {cs.challenge.painPoints.map((point, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm">
                    <span className="w-6 h-6 rounded-full bg-destructive/10 text-destructive flex items-center justify-center flex-shrink-0 text-xs font-medium">
                      {idx + 1}
                    </span>
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Approach */}
      <section className="py-16 lg:py-24 bg-muted">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-2xl md:text-3xl font-bold mb-12">{cs.approach.title}</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {cs.approach.steps.map((step, idx) => (
              <Card key={idx} className="relative">
                <CardContent className="p-6">
                  <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold mb-4">
                    {idx + 1}
                  </div>
                  <h3 className="font-semibold mb-1">{step.phase}</h3>
                  <p className="text-sm text-accent font-medium mb-3">{step.duration}</p>
                  <p className="text-sm text-muted-foreground mb-4">{step.description}</p>
                  <div className="space-y-1">
                    {step.outputs.map((output, oidx) => (
                      <p key={oidx} className="text-xs text-muted-foreground flex items-center gap-2">
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

      {/* Results */}
      <section className="py-16 lg:py-24">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-2xl md:text-3xl font-bold mb-6">{cs.results.title}</h2>
          <p className="text-lg text-muted-foreground mb-12 max-w-3xl">{cs.results.narrative}</p>

          {/* Metrics */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {cs.results.metrics.map((metric, idx) => (
              <Card key={idx} className="bg-primary/5 border-primary/20">
                <CardContent className="p-6 text-center">
                  <p className="text-4xl font-bold text-primary mb-1">{metric.value}</p>
                  <p className="font-medium mb-1">{metric.label}</p>
                  <p className="text-sm text-muted-foreground">{metric.subtext}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Outcomes */}
          <div className="bg-muted rounded-xl p-8">
            <h3 className="font-semibold mb-6">Key Outcomes</h3>
            <div className="grid md:grid-cols-2 gap-4">
              {cs.results.outcomes.map((outcome, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>{outcome}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 lg:py-24 bg-muted">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-2xl md:text-3xl font-bold mb-8">Project Team</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {cs.team.map((member, idx) => (
              <Card key={idx}>
                <CardContent className="p-6 flex items-center gap-4">
                  <Avatar className="w-16 h-16">
                    <AvatarImage src={member.avatar || "/placeholder.svg"} alt={member.name} />
                    <AvatarFallback>
                      {member.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="font-semibold">{member.name}</h3>
                    <p className="text-sm text-primary">{member.role}</p>
                    <p className="text-sm text-muted-foreground">{member.expertise}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Deliverables */}
      <section className="py-16 lg:py-24">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-2xl md:text-3xl font-bold mb-8">Deliverables</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {cs.deliverables.map((item, idx) => (
              <Card key={idx}>
                <CardContent className="p-6 flex items-center justify-between">
                  <div>
                    <h3 className="font-semibold mb-1">{item.name}</h3>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </div>
                  {item.downloadable && (
                    <Button variant="outline" size="sm">
                      <Download className="w-4 h-4 mr-2" />
                      Preview
                    </Button>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Data Governance */}
      <section className="py-16 lg:py-24 bg-foreground text-background">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-2xl md:text-3xl font-bold mb-8">{cs.dataGovernance.title}</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {cs.dataGovernance.items.map((item, idx) => (
              <div key={idx} className="flex items-start gap-3 bg-background/10 rounded-lg p-4">
                <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                <span className="text-sm">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lessons Learned */}
      <section className="py-16 lg:py-24">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-2xl md:text-3xl font-bold mb-8">Lessons Learned</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {cs.lessons.map((lesson, idx) => (
              <div key={idx} className="flex items-start gap-4 p-6 bg-muted rounded-xl">
                <span className="w-8 h-8 rounded-full bg-accent text-accent-foreground flex items-center justify-center font-bold flex-shrink-0">
                  {idx + 1}
                </span>
                <p className="text-muted-foreground">{lesson}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related */}
      <section className="py-16 lg:py-24 bg-muted">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h3 className="font-serif text-xl font-semibold mb-6">Related Case Studies</h3>
              <div className="space-y-4">
                {cs.relatedCases.map((item, idx) => (
                  <Link key={idx} href={`/case-studies/${item.slug}`} className="block">
                    <Card className="hover:border-primary/30 transition-colors">
                      <CardContent className="p-4 flex items-center justify-between">
                        <div>
                          <Badge variant="secondary" className="mb-2">
                            {item.type}
                          </Badge>
                          <h4 className="font-medium">{item.title}</h4>
                        </div>
                        <ArrowRight className="w-4 h-4 text-muted-foreground" />
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>
            </div>
            <div>
              <h3 className="font-serif text-xl font-semibold mb-6">Related Services</h3>
              <div className="space-y-4">
                {cs.relatedServices.map((item, idx) => (
                  <Link key={idx} href={`/services/${item.slug}`} className="block">
                    <Card className="hover:border-primary/30 transition-colors">
                      <CardContent className="p-4 flex items-center justify-between">
                        <h4 className="font-medium">{item.title}</h4>
                        <ArrowRight className="w-4 h-4 text-muted-foreground" />
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-24 bg-primary text-primary-foreground">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">Ready to achieve similar results?</h2>
          <p className="text-lg text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Let's discuss how we can help you address your challenges with evidence-based approaches.
          </p>
          <Link href="/request?type=proposal">
            <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
              Request Similar Program
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </Link>
        </div>
      </section>
    </main>
  )
}
