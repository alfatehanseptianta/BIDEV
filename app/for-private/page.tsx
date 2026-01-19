import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Users, BarChart3, ArrowRight, TrendingUp, Globe } from "lucide-react"
import Link from "next/link"
import { PrivateContactForm } from "@/components/private-contact-form"

const services = [
  {
    icon: TrendingUp,
    title: "Investment Advisory",
    description:
      "Strategic guidance for property and infrastructure investments in Indonesian cities, backed by academic research and local expertise.",
    outputs: ["Market analysis reports", "Risk assessment", "Stakeholder mapping", "Investment recommendations"],
    image: "/investment-analysis-business-charts-graphs.jpg",
    imageAlt: "Investment analysis dashboard",
  },
  {
    icon: Globe,
    title: "Market Entry Consulting",
    description:
      "Comprehensive support for businesses entering Indonesian markets, including regulatory navigation and partner identification.",
    outputs: ["Market entry strategy", "Regulatory roadmap", "Partner due diligence", "Local network access"],
    image: "/investment-briefing-presentation-template.jpg",
    imageAlt: "Market entry briefing materials",
  },
  {
    icon: Users,
    title: "Access to Experts",
    description:
      "Direct access to Indonesia's leading academics and practitioners for on-demand consultation and advisory.",
    outputs: ["Expert matching", "Session scheduling", "Briefing support", "Follow-up coordination"],
    image: "/professional-indonesian-man-professor-formal-portr.jpg",
    imageAlt: "Academic expert consultation",
  },
  {
    icon: BarChart3,
    title: "Urban Data Intelligence",
    description:
      "Access to PRAKARSA-powered insights on urban demographics, infrastructure, and market conditions across Indonesian cities.",
    outputs: ["Custom data reports", "Geographic analysis", "Trend forecasting", "Benchmark studies"],
    image: "/urban-data-visualization-charts-map-business.jpg",
    imageAlt: "Urban data visualization",
  },
]

const dataInsights = [
  { label: "Household Demographics", desc: "Income levels, family composition, consumption patterns" },
  { label: "Infrastructure Quality", desc: "Road conditions, utilities access, public services" },
  { label: "Real Estate Trends", desc: "Property values, development patterns, zoning compliance" },
  { label: "Commercial Activity", desc: "Business density, retail patterns, economic indicators" },
]

const caseExamples = [
  {
    client: "Property Developer",
    title: "Site Selection for Mixed-Use Development",
    description:
      "Provided comprehensive analysis of 5 potential sites across Greater Bandung, including demographic profiling, infrastructure assessment, and regulatory analysis.",
    outcome: "Client selected optimal site with 30% lower acquisition cost and faster permitting timeline.",
    image: "/bandung-city-urban-data-dashboard-aerial-view.jpg",
    imageAlt: "Mixed-use development site analysis",
  },
  {
    client: "Fintech Company",
    title: "Market Entry Strategy for Digital Payments",
    description:
      "Developed market entry strategy including regulatory roadmap, partnership recommendations, and pilot city selection based on PRAKARSA demographic data.",
    outcome: "Successful pilot launch in 3 cities with 50K+ users in first quarter.",
    image: "/database-system-integration-technology-software.jpg",
    imageAlt: "Digital payments data integration",
  },
]

export default function ForPrivatePage() {
  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="pt-[72px] bg-[#1C1C1C]">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
          <div className="max-w-3xl">
            <Badge className="bg-[#B89B5E]/20 text-[#B89B5E] border-[#B89B5E]/30 mb-6">For Private Sector</Badge>
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold text-[#F7F5EF] leading-tight mb-6">
              Strategic Intelligence for Business Growth
            </h1>
            <p className="text-xl text-[#F7F5EF]/80 mb-8">
              Access Indonesia&apos;s leading academic experts and urban data intelligence to inform your investment
              decisions, market entry strategies, and business development.
            </p>
            <Link href="#contact-private">
              <Button size="lg" className="bg-[#B89B5E] text-[#1C1C1C] hover:bg-[#B89B5E]/90">
                Consult Our Experts
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-24 sm:py-32 bg-background">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <p className="text-sm uppercase tracking-widest text-primary font-semibold mb-4">Our Services</p>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground">How We Support Private Sector</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="overflow-hidden">
                <div className="relative aspect-[16/9] overflow-hidden">
                  <img src={service.image} alt={service.imageAlt} className="h-full w-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-tr from-black/25 via-transparent to-transparent" />
                </div>
                <CardContent className="p-8">
                  <div className="flex items-start gap-5">
                    <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
                      <service.icon className="w-7 h-7 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-xl text-foreground mb-3">{service.title}</h3>
                      <p className="text-muted-foreground mb-6">{service.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {service.outputs.map((output, i) => (
                          <Badge key={i} variant="secondary">
                            {output}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Urban Data Intelligence */}
      <section className="py-24 sm:py-32 bg-muted/30">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-sm uppercase tracking-widest text-primary font-semibold mb-4">
                Urban Data Intelligence
              </p>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground mb-6">
                Data-Driven Market Insights
              </h2>
              <p className="text-muted-foreground mb-8">
                Leverage BIDEV&apos;s PRAKARSA platform for granular urban data that informs site selection, market
                sizing, and competitive analysis.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {dataInsights.map((insight, index) => (
                  <div key={index} className="p-4 bg-card rounded-lg border border-border">
                    <h4 className="font-semibold text-foreground mb-1">{insight.label}</h4>
                    <p className="text-xs text-muted-foreground">{insight.desc}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-card rounded-2xl border border-border p-6">
              <img
                src="/urban-data-visualization-charts-map-business.jpg"
                alt="Urban Data Visualization"
                className="w-full rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Case Examples */}
      <section className="py-24 sm:py-32 bg-background">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <p className="text-sm uppercase tracking-widest text-primary font-semibold mb-4">Success Stories</p>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground">Case Examples</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {caseExamples.map((example, index) => (
              <Card key={index} className="overflow-hidden">
                <div className="relative aspect-[16/9] overflow-hidden">
                  <img src={example.image} alt={example.imageAlt} className="h-full w-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-tr from-black/25 via-transparent to-transparent" />
                </div>
                <CardContent className="p-8">
                  <Badge variant="secondary" className="mb-4">
                    {example.client}
                  </Badge>
                  <h3 className="font-semibold text-xl text-foreground mb-4">{example.title}</h3>
                  <p className="text-muted-foreground mb-6">{example.description}</p>
                  <div className="p-4 bg-primary/5 rounded-lg border border-primary/20">
                    <p className="text-sm">
                      <strong className="text-primary">Outcome:</strong>{" "}
                      <span className="text-foreground">{example.outcome}</span>
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section id="contact-private" className="py-24 sm:py-32 bg-[#0F3D2E]">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="font-serif text-3xl font-bold text-[#F7F5EF] mb-4">Contact Private Sector Desk</h2>
              <p className="text-[#F7F5EF]/70">
                Connect with our business development team to discuss your strategic needs.
              </p>
            </div>
            <PrivateContactForm />
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
