import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import {
  Database,
  LineChart,
  MapPin,
  Home,
  Lightbulb,
  Building,
  ArrowRight,
  Play,
  Users,
  CheckCircle,
  Layers,
  Target,
  BarChart3,
  AlertTriangle,
  Lock,
} from "lucide-react"
import Link from "next/link"
import { RequestDemoForm } from "@/components/request-demo-form"

const pillars = [
  {
    icon: Database,
    title: "Comprehensive Data Collection",
    description:
      "RW-level data collection with validated survey methodology covering social, economic, and infrastructure indicators.",
    image: "/prakarsa-mobile-interface-data-entry-smartphone.jpg",
    imageAlt: "Mobile data collection interface",
  },
  {
    icon: LineChart,
    title: "Real-time Analytics",
    description: "Dynamic dashboards that transform raw data into actionable insights for policy makers and planners.",
    image: "/data-dashboard-analytics-urban-planning-heatmap-ch.jpg",
    imageAlt: "Urban analytics dashboard",
  },
  {
    icon: Target,
    title: "Policy Targeting",
    description: "Precision targeting tools for social programs, infrastructure investments, and resource allocation.",
    image: "/prakarsa-kpi-cards-metrics-dashboard-stats.jpg",
    imageAlt: "Policy targeting KPI cards",
  },
]

const painPoints = [
  {
    icon: AlertTriangle,
    title: "Fragmented Data",
    description: "Government data scattered across departments with no unified view.",
    image: "/database-system-integration-technology-software.jpg",
    imageAlt: "Disconnected data systems",
  },
  {
    icon: Target,
    title: "Poor Targeting",
    description: "Social programs miss beneficiaries due to outdated or incomplete data.",
    image: "/social-protection-toolkit-government.jpg",
    imageAlt: "Social protection targeting toolkit",
  },
  {
    icon: BarChart3,
    title: "Blind Monitoring",
    description: "No real-time visibility into program implementation and outcomes.",
    image: "/prakarsa-dashboard-preview-demo-screenshot.jpg",
    imageAlt: "Monitoring dashboard preview",
  },
]

const howItWorks = [
  {
    step: 1,
    title: "Input RW",
    description: "Field surveyors collect household-level data using standardized digital forms.",
  },
  {
    step: 2,
    title: "Validation",
    description: "Multi-layer data validation with cross-referencing against existing records.",
  },
  {
    step: 3,
    title: "City Dashboard",
    description: "Real-time visualization with geographic mapping and analytics tools.",
  },
  {
    step: 4,
    title: "Policy Targeting",
    description: "AI-assisted beneficiary identification and program optimization.",
  },
]

const dataCoverage = [
  {
    icon: Database,
    label: "Regsosek",
    description: "Social registry covering 1.5M+ households",
    image: "/prakarsa-rw-operator-simple-input-interface.jpg",
    imageAlt: "RW operator input interface",
  },
  {
    icon: Home,
    label: "Housing",
    description: "Housing quality and affordability assessment",
    image: "/housing-policy-planning-meeting-indonesia.jpg",
    imageAlt: "Housing policy planning session",
  },
  {
    icon: Lightbulb,
    label: "Public Lighting",
    description: "Street lighting coverage and conditions",
    image: "/prakarsa-photo-verification-gps-tagging-mobile.jpg",
    imageAlt: "Field photo verification with GPS tagging",
  },
  {
    icon: Building,
    label: "Boarding Houses",
    description: "Informal housing and rental market data",
    image: "/prakarsa-readonly-viewer-stakeholder-access.jpg",
    imageAlt: "Stakeholder access interface",
  },
  {
    icon: MapPin,
    label: "Infrastructure",
    description: "Road conditions, drainage, and utilities",
    image: "/prakarsa-heatmap-vulnerability-visualization-map.jpg",
    imageAlt: "Infrastructure vulnerability heatmap",
  },
  {
    icon: Layers,
    label: "Land Use",
    description: "Zoning compliance and spatial patterns",
    image: "/prakarsa-drilldown-analysis-city-household.jpg",
    imageAlt: "Land use drilldown analysis",
  },
]

const audiences = [
  {
    icon: Building,
    title: "Local Government",
    description: "Data-driven decision making for RPJMD/RKPD planning and social program targeting.",
    cta: "Learn more for Government",
    href: "/for-government",
    image: "/bandung-city-urban-data-dashboard-map.jpg",
    imageAlt: "Citywide government dashboard map",
  },
  {
    icon: BarChart3,
    title: "Investors",
    description: "Market intelligence and site selection support with granular urban data.",
    cta: "Learn more for Private",
    href: "/for-private",
    image: "/investment-analysis-business-charts-graphs.jpg",
    imageAlt: "Investment analysis charts",
  },
  {
    icon: Users,
    title: "Policy Makers",
    description: "Evidence base for regulatory reform and resource allocation decisions.",
    cta: "Contact us",
    href: "/contact",
    image: "/policy-brief-writing-guide-document.jpg",
    imageAlt: "Policy brief documentation",
  },
]

const securityFeatures = [
  "End-to-end encryption for all data transmission",
  "Role-based access control with audit trails",
  "Compliance with Indonesian data protection regulations",
  "Regular security audits and penetration testing",
  "Data anonymization for research and public reports",
]

const dashboardGallery = [
  {
    image: "/prakarsa-dashboard-preview-demo-screenshot.jpg",
    alt: "Prakarsa dashboard overview",
  },
  {
    image: "/prakarsa-dashboard-map-heatmap-analytics-urban.jpg",
    alt: "Prakarsa heatmap analytics dashboard",
  },
  {
    image: "/prakarsa-heatmap-vulnerability-visualization-map.jpg",
    alt: "Vulnerability visualization map",
  },
]

export default function PrakarsaPage() {
  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="pt-[72px] bg-[#0F3D2E]">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="bg-[#B89B5E]/20 text-[#B89B5E] border-[#B89B5E]/30 mb-6">Flagship Program</Badge>
              <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold text-[#F7F5EF] leading-tight mb-4">
                PRAKARSA
              </h1>
              <p className="text-xl sm:text-2xl text-[#B89B5E] font-medium mb-6">
                Citywide Data Intelligence for Decision Makers
              </p>
              <p className="text-lg text-[#F7F5EF]/80 mb-8">
                A comprehensive urban data platform transforming how Indonesian cities collect, analyze, and act on
                citizen data. Already deployed in Kota Bandung covering 1.5 million+ households.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="#request-demo">
                  <Button size="lg" className="bg-[#B89B5E] text-[#1C1C1C] hover:bg-[#B89B5E]/90">
                    <Play className="w-4 h-4 mr-2" />
                    Request Demo
                  </Button>
                </Link>
                <Link href="/contact?intent=prakarsa">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-[#F7F5EF]/30 text-[#F7F5EF] hover:bg-[#F7F5EF]/10 bg-transparent"
                  >
                    Deploy in Your City
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="bg-[#1C1C1C] rounded-2xl border border-[#F7F5EF]/10 shadow-2xl overflow-hidden">
                <div className="bg-[#1C1C1C] px-4 py-3 border-b border-[#F7F5EF]/10 flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/50" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                  <div className="w-3 h-3 rounded-full bg-green-500/50" />
                  <span className="ml-4 text-xs text-[#F7F5EF]/50">prakarsa.bandung.go.id</span>
                </div>
                <div className="p-4">
                  <img
                    src="/prakarsa-dashboard-map-heatmap-analytics-urban.jpg"
                    alt="PRAKARSA Dashboard"
                    className="w-full rounded-lg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What is PRAKARSA */}
      <section className="py-24 sm:py-32 bg-background">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <p className="text-sm uppercase tracking-widest text-primary font-semibold mb-4">What is PRAKARSA</p>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground mb-6">
              Urban Data Intelligence Platform
            </h2>
            <p className="text-lg text-muted-foreground">
              PRAKARSA (Program Kerja Sistem Analitik) is an integrated data collection and analytics platform designed
              specifically for Indonesian local governments. It transforms scattered municipal data into a unified
              intelligence system for evidence-based policy making.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {pillars.map((pillar, index) => (
              <Card key={index} className="overflow-hidden">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img src={pillar.image} alt={pillar.imageAlt} className="h-full w-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-tr from-black/25 via-transparent to-transparent" />
                </div>
                <CardContent className="p-8 text-center">
                  <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-6">
                    <pillar.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg text-foreground mb-3">{pillar.title}</h3>
                  <p className="text-muted-foreground">{pillar.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Problem it Solves */}
      <section className="py-24 sm:py-32 bg-muted/30">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-sm uppercase tracking-widest text-primary font-semibold mb-4">The Challenge</p>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground">Problems PRAKARSA Solves</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {painPoints.map((point, index) => (
              <Card key={index} className="overflow-hidden">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img src={point.image} alt={point.imageAlt} className="h-full w-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-tr from-black/30 via-transparent to-transparent" />
                </div>
                <CardContent className="p-8">
                  <div className="w-12 h-12 bg-destructive/10 rounded-lg flex items-center justify-center mb-6">
                    <point.icon className="w-6 h-6 text-destructive" />
                  </div>
                  <h3 className="font-semibold text-lg text-foreground mb-3">{point.title}</h3>
                  <p className="text-muted-foreground">{point.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section className="py-24 sm:py-32 bg-background">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-sm uppercase tracking-widest text-primary font-semibold mb-4">The Process</p>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground">How PRAKARSA Works</h2>
          </div>

          <div className="flex items-center justify-center gap-4 mb-12 flex-wrap">
            {howItWorks.map((step, index) => (
              <div key={index} className="flex items-center gap-4">
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-2xl font-bold text-primary-foreground">{step.step}</span>
                  </div>
                  <h4 className="font-semibold text-foreground mb-1">{step.title}</h4>
                  <p className="text-xs text-muted-foreground max-w-[140px]">{step.description}</p>
                </div>
                {index < howItWorks.length - 1 && <ArrowRight className="w-8 h-8 text-border hidden sm:block" />}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Data Coverage */}
      <section className="py-24 sm:py-32 bg-muted/30">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-sm uppercase tracking-widest text-primary font-semibold mb-4">Data Coverage</p>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground">
              Comprehensive Urban Data Ecosystem
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {dataCoverage.map((item, index) => (
              <Card key={index} className="overflow-hidden">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img src={item.image} alt={item.imageAlt} className="h-full w-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-tr from-black/25 via-transparent to-transparent" />
                </div>
                <CardContent className="p-6 flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">{item.label}</h3>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study: Bandung */}
      <section className="py-24 sm:py-32 bg-[#0F3D2E]">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="bg-[#B89B5E]/20 text-[#B89B5E] border-[#B89B5E]/30 mb-6">Case Study</Badge>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#F7F5EF] mb-6">
                PRAKARSA in Kota Bandung
              </h2>
              <p className="text-lg text-[#F7F5EF]/80 mb-8">
                Since 2022, PRAKARSA has transformed how Bandung city government approaches data-driven governance,
                covering all 30 kecamatan and 151 kelurahan.
              </p>
              <div className="grid grid-cols-3 gap-6">
                <div className="text-center">
                  <p className="text-3xl font-bold text-[#B89B5E]">1.5M+</p>
                  <p className="text-sm text-[#F7F5EF]/60">Households</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-[#B89B5E]">30</p>
                  <p className="text-sm text-[#F7F5EF]/60">Kecamatan</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-[#B89B5E]">40%</p>
                  <p className="text-sm text-[#F7F5EF]/60">Targeting Accuracy</p>
                </div>
              </div>
            </div>
            <div>
              <img
                src="/prakarsa-bandung-case-study-map-visualization.jpg"
                alt="PRAKARSA Bandung Case Study"
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Dashboard Gallery */}
      <section className="py-24 sm:py-32 bg-background">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-sm uppercase tracking-widest text-primary font-semibold mb-4">Dashboard Preview</p>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground">See PRAKARSA in Action</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {dashboardGallery.map((item) => (
              <div key={item.image} className="bg-card rounded-xl border border-border overflow-hidden">
                <img src={item.image} alt={item.alt} className="w-full aspect-video object-cover" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* For Who */}
      <section className="py-24 sm:py-32 bg-muted/30">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-sm uppercase tracking-widest text-primary font-semibold mb-4">Who Benefits</p>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground">PRAKARSA is Built For</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {audiences.map((audience, index) => (
              <Card key={index} className="overflow-hidden">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img src={audience.image} alt={audience.imageAlt} className="h-full w-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-tr from-black/25 via-transparent to-transparent" />
                </div>
                <CardContent className="p-8">
                  <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                    <audience.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="font-semibold text-xl text-foreground mb-3">{audience.title}</h3>
                  <p className="text-muted-foreground mb-6">{audience.description}</p>
                  <Link href={audience.href}>
                    <Button variant="outline" className="w-full bg-transparent">
                      {audience.cta}
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Security & Governance */}
      <section className="py-24 sm:py-32 bg-background">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-sm uppercase tracking-widest text-primary font-semibold mb-4">Security & Governance</p>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground mb-6">
                Enterprise-Grade Data Protection
              </h2>
              <p className="text-muted-foreground mb-8">
                PRAKARSA implements comprehensive data security measures to protect sensitive citizen information while
                enabling productive use for policy making.
              </p>
              <div className="space-y-4">
                {securityFeatures.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-primary shrink-0" />
                    <p className="text-foreground">{feature}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-card rounded-2xl border border-border p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center">
                  <Lock className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-foreground">Data Governance Statement</h3>
                  <p className="text-sm text-muted-foreground">Privacy by design, security by default</p>
                </div>
              </div>
              <p className="text-muted-foreground text-sm">
                All data collected through PRAKARSA is owned by the respective local government. BIDEV acts as a
                technology partner and data processor, not a data controller. Personal information is only accessible to
                authorized government officials through secure, audited channels.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Request Demo Form */}
      <section id="request-demo" className="py-24 sm:py-32 bg-muted/30">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="font-serif text-3xl font-bold text-foreground mb-4">Request a Demo</h2>
              <p className="text-muted-foreground">
                See how PRAKARSA can transform data-driven governance in your city. Fill out the form below and our team
                will schedule a personalized demonstration.
              </p>
            </div>
            <RequestDemoForm />
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
