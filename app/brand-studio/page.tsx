import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, FileText, Palette, Sparkles, Camera, LaptopMinimal, PenSquare } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Brand Studio for Experts | BIDEV Institute",
  description:
    "Concierge creative services that turn peer-reviewed expertise into sales-ready stories, decks, and digital profiles.",
}

const featureBlocks = [
  {
    title: "Profile & CV polish",
    description: "Narrative, tone, and bilingual CV templates aligned with procurement requirements.",
    icon: FileText,
  },
  {
    title: "Deck & data storytelling",
    description: "Custom slide systems, iconography, and before/after comparisons for proposals.",
    icon: Palette,
  },
  {
    title: "Infographic lab",
    description: "Visual explanations for complex policy models, published as PNG, PDF, and social cuts.",
    icon: PenSquare,
  },
  {
    title: "Digital identity kit",
    description: "Personal microsite, email signature, and business card ready for events or investor roadshows.",
    icon: LaptopMinimal,
  },
]

const packages = [
  {
    name: "Essential Launch",
    price: "Delivered in 2 weeks",
    highlights: [
      "Signature CV + biography (ID/EN)",
      "LinkedIn refresh + portrait editing",
      "Mini slide deck (10 slides)",
    ],
  },
  {
    name: "Flagship Story",
    price: "Delivered in 4 weeks",
    highlights: [
      "Research spotlight booklet",
      "Infographic set (3x)",
      "Speaking kit: intro video script + keynotes",
    ],
  },
  {
    name: "Faculty-in-a-box",
    price: "Delivered in 6 weeks",
    highlights: [
      "Personal microsite with booking link",
      "Custom iconography & chart library",
      "Quarterly refresh retainer",
    ],
  },
]

const workflow = [
  { step: "Brief & positioning", detail: "45-minute intake covering signature work, target audiences, and tone." },
  { step: "Visual language sprint", detail: "Mood boards, color tokens, and photography guidelines shared in FigJam." },
  { step: "Build & review", detail: "BIDEV studio designs artefacts while experts focus on research and delivery." },
  { step: "Enablement", detail: "Handover call + Loom tutorials, plus upload to CRM and sales toolkit." },
]

export default function BrandStudioPage() {
  return (
    <main className="pt-[72px]">
      {/* Hero */}
      <section className="bg-foreground text-background py-20 lg:py-28">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <Badge className="mb-4 bg-accent text-accent-foreground">Brand Studio</Badge>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance">
              We market professors like premium products
            </h1>
            <p className="text-lg md:text-xl text-background/80 mb-8">
              BIDEV’s internal studio crafts profiles, decks, and digital kits so Board of Experts members can focus on
              policy work while staying presentation-ready.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/request?type=meeting">
                <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
                  Request Brand Studio slot
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
              <Link href="/board-of-experts">
                <Button size="lg" variant="outline" className="bg-transparent border-background/30 text-background">
                  View expert marketplace
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Feature grid */}
      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground font-semibold mb-3">
              What we deliver
            </p>
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">Full-stack creative support</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Every artefact is peer reviewed for accuracy before it reaches proposals, investors, or the press.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {featureBlocks.map((feature) => (
              <Card key={feature.title} className="border border-border/80">
                <CardContent className="p-6 flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold">{feature.title}</p>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Packages */}
      <section className="py-16 lg:py-24">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-3">
              Curated packages
            </Badge>
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">Pick the narrative lift you need</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {packages.map((pkg) => (
              <Card key={pkg.name} className="border border-border/70 h-full flex flex-col">
                <CardHeader>
                  <CardTitle>{pkg.name}</CardTitle>
                  <CardDescription>{pkg.price}</CardDescription>
                </CardHeader>
                <CardContent className="flex-1">
                  <ul className="space-y-3 text-sm text-muted-foreground">
                    {pkg.highlights.map((item) => (
                      <li key={item}>• {item}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Workflow */}
      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground font-semibold mb-3">
              Operating model
            </p>
            <h2 className="font-serif text-3xl font-bold mb-4">White-glove process for busy experts</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {workflow.map((phase, index) => (
              <Card key={phase.step} className="border border-border/80">
                <CardContent className="p-6 flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-semibold">
                    {index + 1}
                  </div>
                  <div>
                    <p className="font-semibold">{phase.step}</p>
                    <p className="text-sm text-muted-foreground">{phase.detail}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Showcase */}
      <section className="py-16 lg:py-24">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-[1.1fr,0.9fr] gap-12 items-center">
          <div>
            <Badge variant="outline" className="mb-3">
              Proof points
            </Badge>
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">Assets ready for BD, procurement, and media</h2>
            <p className="text-lg text-muted-foreground mb-6">
              We maintain brand consistency across all touchpoints—from the PDF shared with a city mayor to the social
              cut that introduces an expert at a forum.
            </p>
            <ul className="space-y-4 text-sm text-muted-foreground">
              <li>• Portrait sessions and retouching coordinated with brand palette</li>
              <li>• Article templates for op-eds or newsletter takeovers</li>
              <li>• Quote cards and animated stats for webinars</li>
            </ul>
          </div>
          <Card className="border border-border/80 shadow-[0_20px_60px_rgba(15,61,46,0.08)]">
            <CardHeader>
              <CardTitle>Studio deliverable sampler</CardTitle>
              <CardDescription>Available for download inside the expert portal.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {[
                { title: "Portrait kit + usage rights", icon: Camera },
                { title: "10-slide modular pitch deck", icon: Palette },
                { title: "Infographic set + social snippets", icon: Sparkles },
              ].map((asset) => (
                <div
                  key={asset.title}
                  className="flex items-center justify-between p-4 rounded-2xl border border-border/60"
                >
                  <div className="flex items-center gap-3">
                    <asset.icon className="w-5 h-5 text-primary" />
                    <span className="font-medium">{asset.title}</span>
                  </div>
                  <Badge variant="secondary">Preview</Badge>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-24 bg-primary text-primary-foreground">
        <div className="max-w-[900px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">Ready to become a sales-ready academic?</h2>
          <p className="text-lg text-primary-foreground/80 mb-8">
            Reserve a slot in the Brand Studio calendar or ask the coordination desk to include creative support in your
            next engagement.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/request?type=meeting">
              <Button size="lg" className="bg-background text-foreground hover:bg-background/90">
                Talk to the studio lead
              </Button>
            </Link>
            <Link href="/board-of-experts">
              <Button
                size="lg"
                variant="outline"
                className="border-primary-foreground/40 text-primary-foreground hover:bg-primary-foreground/10 bg-transparent"
              >
                Meet experts we support
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
