import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Filter } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { caseStudies } from "./case-studies-data"

export const metadata: Metadata = {
  title: "Case Studies | BIDEV Institute",
  description: "Proof of impact, not promises. Explore our successful projects across government and private sectors.",
}

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
