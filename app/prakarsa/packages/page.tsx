import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, Check, HelpCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

export const metadata: Metadata = {
  title: "Prakarsa Packages | BIDEV Institute",
  description: "Prakarsa deployment packages: Pilot, Citywide, and Enterprise options for your needs.",
}

const packages = [
  {
    name: "Pilot",
    description: "Perfect for testing Prakarsa in 1-3 kecamatan before full deployment.",
    coverage: "1-3 Kecamatan",
    timeline: "3-4 months",
    popular: false,
    features: [
      { name: "Platform deployment", included: true },
      { name: "Up to 100 RW coverage", included: true },
      { name: "Basic dashboard", included: true },
      { name: "Operator training (1 batch)", included: true },
      { name: "Data governance framework", included: true },
      { name: "3-month support", included: true },
      { name: "Custom analytics", included: false },
      { name: "API integration", included: false },
      { name: "Multi-year support", included: false },
    ],
    deliverables: [
      "Deployed platform in pilot area",
      "Trained operators (up to 20)",
      "Basic SOP documentation",
      "Pilot evaluation report",
    ],
  },
  {
    name: "Citywide",
    description: "Full city deployment covering all kelurahan with comprehensive support.",
    coverage: "All Kelurahan",
    timeline: "6-8 months",
    popular: true,
    features: [
      { name: "Platform deployment", included: true },
      { name: "Unlimited RW coverage", included: true },
      { name: "Advanced dashboard", included: true },
      { name: "Operator training (multiple batches)", included: true },
      { name: "Data governance framework", included: true },
      { name: "12-month support", included: true },
      { name: "Custom analytics", included: true },
      { name: "API integration", included: true },
      { name: "Multi-year support", included: false },
    ],
    deliverables: [
      "City-wide platform deployment",
      "Comprehensive training program",
      "Full SOP and governance docs",
      "Custom dashboard configuration",
      "Integration with 2 existing systems",
    ],
  },
  {
    name: "Enterprise",
    description: "For provinces or multi-city deployment with full integration and long-term support.",
    coverage: "Multi-City / Provincial",
    timeline: "12+ months",
    popular: false,
    features: [
      { name: "Platform deployment", included: true },
      { name: "Unlimited RW coverage", included: true },
      { name: "Advanced dashboard", included: true },
      { name: "Operator training (multiple batches)", included: true },
      { name: "Data governance framework", included: true },
      { name: "12-month support", included: true },
      { name: "Custom analytics", included: true },
      { name: "API integration", included: true },
      { name: "Multi-year support", included: true },
    ],
    deliverables: [
      "Multi-city platform deployment",
      "Provincial coordination dashboard",
      "Enterprise training academy",
      "Full system integration",
      "Dedicated success manager",
      "Custom feature development",
    ],
  },
]

const addons = [
  {
    name: "Additional Training Batch",
    description: "Extra training session for 20 operators",
    note: "Recommended for high-turnover areas",
  },
  {
    name: "Custom Analytics Module",
    description: "Bespoke analytics for specific policy questions",
    note: "Includes 3 custom dashboards",
  },
  {
    name: "System Integration",
    description: "Integration with existing government systems",
    note: "Per system integration",
  },
  {
    name: "Extended Support",
    description: "Additional year of technical support",
    note: "Includes updates and maintenance",
  },
  {
    name: "On-Site Support",
    description: "Dedicated on-site technical support",
    note: "Full-time or part-time options",
  },
]

export default function PrakarsaPackagesPage() {
  return (
    <main className="pt-[72px]">
      {/* Hero */}
      <section className="bg-foreground text-background py-20 lg:py-28">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-accent font-semibold mb-4">Prakarsa Platform</p>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance">
              Packages for Every Scale
            </h1>
            <p className="text-lg md:text-xl text-background/80 mb-8">
              From pilot projects to province-wide deployments. Choose the package that fits your needs and budget.
            </p>
          </div>
        </div>
      </section>

      {/* Packages */}
      <section className="py-16 lg:py-24">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <TooltipProvider>
            <div className="grid lg:grid-cols-3 gap-8">
              {packages.map((pkg, idx) => (
                <Card key={idx} className={`relative flex flex-col ${pkg.popular ? "border-primary border-2" : ""}`}>
                  {pkg.popular && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                      <Badge className="bg-primary text-primary-foreground">Most Popular</Badge>
                    </div>
                  )}
                  <CardHeader>
                    <CardTitle className="font-serif text-2xl">{pkg.name}</CardTitle>
                    <CardDescription>{pkg.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="flex-1 flex flex-col">
                    <div className="mb-6">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-sm text-muted-foreground">Coverage:</span>
                        <Badge variant="secondary">{pkg.coverage}</Badge>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-sm text-muted-foreground">Timeline:</span>
                        <Badge variant="outline">{pkg.timeline}</Badge>
                      </div>
                    </div>

                    <div className="mb-6">
                      <p className="font-semibold text-sm mb-3">Features:</p>
                      <ul className="space-y-2">
                        {pkg.features.map((feature, fidx) => (
                          <li key={fidx} className="flex items-center gap-2 text-sm">
                            <Check
                              className={`w-4 h-4 flex-shrink-0 ${feature.included ? "text-primary" : "text-muted-foreground/30"}`}
                            />
                            <span className={feature.included ? "" : "text-muted-foreground/50"}>{feature.name}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mb-6">
                      <p className="font-semibold text-sm mb-3">Deliverables:</p>
                      <ul className="space-y-2">
                        {pkg.deliverables.map((item, didx) => (
                          <li key={didx} className="text-sm text-muted-foreground flex items-start gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0 mt-1.5" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mt-auto pt-6 border-t">
                      <p className="text-center text-sm text-muted-foreground mb-4">Pricing upon request</p>
                      <Link href="/prakarsa/demo">
                        <Button className="w-full" variant={pkg.popular ? "default" : "outline"}>
                          Request Quote
                          <ArrowRight className="ml-2 w-4 h-4" />
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TooltipProvider>
        </div>
      </section>

      {/* Add-ons */}
      <section className="py-16 lg:py-24 bg-muted">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">Available Add-ons</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Customize your package with additional services and support.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {addons.map((addon, idx) => (
              <Card key={idx}>
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="font-semibold">{addon.name}</h3>
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger>
                          <HelpCircle className="w-4 h-4 text-muted-foreground" />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>{addon.note}</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </div>
                  <p className="text-sm text-muted-foreground">{addon.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-24 bg-primary text-primary-foreground">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">Not sure which package?</h2>
          <p className="text-lg text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Let us help you determine the right package based on your city's size, budget, and objectives.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/prakarsa/demo">
              <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
                Schedule Consultation
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
            <Link href="/case-studies/prakarsa-bandung-pilot">
              <Button
                size="lg"
                variant="outline"
                className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 bg-transparent"
              >
                See Bandung Case Study
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
