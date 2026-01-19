import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Filter } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export const metadata: Metadata = {
  title: "Case Studies | BIDEV Institute",
  description: "Proof of impact, not promises. Explore our successful projects across government and private sectors.",
}

const caseStudies = [
  {
    slug: "prakarsa-bandung-pilot",
    title: "Prakarsa Pilot Implementation in Bandung",
    summary: "City-wide social protection data platform deployment across 151 kelurahan with real-time RW-level input.",
    coverImage: "/bandung-city-urban-data-dashboard-map.jpg",
    type: "Prakarsa",
    sector: "Government",
    location: "Kota Bandung",
    topics: ["Social Protection", "Data Governance"],
    metrics: [
      { label: "RW Onboarded", value: "1,500+" },
      { label: "Datasets Integrated", value: "12" },
      { label: "Policy Recommendations", value: "28" },
    ],
    duration: "8 months",
    teamSize: 12,
    featured: true,
  },
  {
    slug: "jabar-housing-roadmap",
    title: "West Java Affordable Housing Roadmap",
    summary: "Comprehensive housing policy framework and implementation roadmap for 27 kabupaten/kota.",
    coverImage: "/housing-urban-planning-architecture-blueprint.jpg",
    type: "Roadmap",
    sector: "Government",
    location: "Provinsi Jawa Barat",
    topics: ["Housing", "Urban Planning"],
    metrics: [
      { label: "Areas Analyzed", value: "27" },
      { label: "Stakeholders Engaged", value: "150+" },
      { label: "Programs Designed", value: "8" },
    ],
    duration: "6 months",
    teamSize: 8,
    featured: true,
  },
  {
    slug: "investment-feasibility-study",
    title: "Urban Investment Feasibility Analysis",
    summary: "Due diligence and market assessment for mixed-use development project in Greater Bandung area.",
    coverImage: "/investment-analysis-business-charts-graphs.jpg",
    type: "Research",
    sector: "Private",
    location: "Bandung Raya",
    topics: ["Investment", "Market Analysis"],
    metrics: [
      { label: "Market Size Assessed", value: "Rp 2.5T" },
      { label: "Risk Factors Identified", value: "15" },
      { label: "ROI Scenarios", value: "4" },
    ],
    duration: "3 months",
    teamSize: 5,
    featured: false,
  },
  {
    slug: "mobility-training-program",
    title: "Urban Mobility Planning Capacity Building",
    summary: "Comprehensive training program for Dinas Perhubungan staff on data-driven transport planning.",
    coverImage: "/transportation-training-workshop-professional.jpg",
    type: "Training",
    sector: "Government",
    location: "Kota Bandung",
    topics: ["Mobility", "Capacity Building"],
    metrics: [
      { label: "Officers Trained", value: "45" },
      { label: "Modules Delivered", value: "6" },
      { label: "Satisfaction Score", value: "4.8/5" },
    ],
    duration: "2 months",
    teamSize: 4,
    featured: false,
  },
  {
    slug: "esg-advisory-manufacturing",
    title: "ESG Strategy for Manufacturing Company",
    summary: "Sustainability framework and implementation roadmap for leading textile manufacturer.",
    coverImage: "/sustainable-manufacturing-factory-green-environmen.jpg",
    type: "Advisory",
    sector: "Private",
    location: "Jawa Barat",
    topics: ["ESG", "Sustainability"],
    metrics: [
      { label: "Emission Reduction Target", value: "30%" },
      { label: "ESG Metrics Defined", value: "24" },
      { label: "Quick Wins Identified", value: "12" },
    ],
    duration: "4 months",
    teamSize: 6,
    featured: false,
  },
  {
    slug: "social-registry-integration",
    title: "Social Registry System Integration",
    summary: "IT project to integrate multiple social assistance databases into unified beneficiary registry.",
    coverImage: "/database-system-integration-technology-software.jpg",
    type: "IT Project",
    sector: "Government",
    location: "Kota Cimahi",
    topics: ["Data Governance", "Social Protection"],
    metrics: [
      { label: "Systems Integrated", value: "5" },
      { label: "Records Validated", value: "125K+" },
      { label: "Processing Time Reduced", value: "70%" },
    ],
    duration: "5 months",
    teamSize: 8,
    featured: false,
  },
]

const typeOptions = ["All Types", "Prakarsa", "Roadmap", "Research", "Training", "Advisory", "IT Project"]
const sectorOptions = ["All Sectors", "Government", "Private"]
const topicOptions = [
  "All Topics",
  "Social Protection",
  "Housing",
  "Mobility",
  "Data Governance",
  "Investment",
  "ESG",
  "Urban Planning",
]

export default function CaseStudiesPage() {
  return (
    <main className="pt-[72px]">
      {/* Hero */}
      <section className="bg-foreground text-background py-20 lg:py-28">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance">
              Proof of impact, not promises.
            </h1>
            <p className="text-lg md:text-xl text-background/80 mb-8">
              Explore how we've helped government institutions and private organizations achieve measurable outcomes
              through evidence-based approaches.
            </p>
            <Link href="/request?type=proposal">
              <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
                Request Similar Program
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 border-b border-border sticky top-[72px] bg-background/95 backdrop-blur-sm z-40">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center gap-4">
            <div className="flex items-center gap-2 text-muted-foreground">
              <Filter className="w-4 h-4" />
              <span className="text-sm font-medium">Filter:</span>
            </div>
            <Select defaultValue="All Types">
              <SelectTrigger className="w-[160px]">
                <SelectValue placeholder="Type" />
              </SelectTrigger>
              <SelectContent>
                {typeOptions.map((option) => (
                  <SelectItem key={option} value={option}>
                    {option}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Select defaultValue="All Sectors">
              <SelectTrigger className="w-[160px]">
                <SelectValue placeholder="Sector" />
              </SelectTrigger>
              <SelectContent>
                {sectorOptions.map((option) => (
                  <SelectItem key={option} value={option}>
                    {option}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Select defaultValue="All Topics">
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Topic" />
              </SelectTrigger>
              <SelectContent>
                {topicOptions.map((option) => (
                  <SelectItem key={option} value={option}>
                    {option}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-16 lg:py-24">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {caseStudies.map((caseStudy) => (
              <Card
                key={caseStudy.slug}
                className="group overflow-hidden border-border hover:border-primary/30 transition-all hover:shadow-lg"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={caseStudy.coverImage || "/placeholder.svg"}
                    alt={caseStudy.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 flex gap-2">
                    <Badge variant="secondary" className="bg-background/90 text-foreground">
                      {caseStudy.type}
                    </Badge>
                    <Badge variant="outline" className="bg-background/90 border-primary text-primary">
                      {caseStudy.sector}
                    </Badge>
                  </div>
                </div>
                <CardContent className="p-6">
                  <p className="text-sm text-muted-foreground mb-2">{caseStudy.location}</p>
                  <h3 className="font-serif text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                    {caseStudy.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-2">{caseStudy.summary}</p>

                  {/* Metrics */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {caseStudy.metrics.slice(0, 2).map((metric, idx) => (
                      <Badge key={idx} variant="secondary" className="text-xs">
                        {metric.value} {metric.label}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-border">
                    <span className="text-sm text-muted-foreground">
                      {caseStudy.duration} · {caseStudy.teamSize} experts
                    </span>
                    <Link href={`/case-studies/${caseStudy.slug}`}>
                      <Button variant="ghost" size="sm" className="text-primary">
                        View details
                        <ArrowRight className="ml-1 w-3 h-3" />
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Band */}
      <section className="py-16 bg-muted">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">Have a similar challenge?</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Tell us about your project and we'll match you with the right experts and approach.
          </p>
          <Link href="/request?type=proposal">
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
              Tell us your challenge
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </Link>
        </div>
      </section>
    </main>
  )
}
