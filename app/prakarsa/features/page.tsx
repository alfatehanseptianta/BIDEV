import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Smartphone, CheckCircle2, BarChart3, Download, Shield, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export const metadata: Metadata = {
  title: "Prakarsa Features | BIDEV Institute",
  description: "Explore Prakarsa platform features: data collection, validation, dashboards, and role-based access.",
}

const featureCategories = [
  {
    id: "collection",
    name: "Data Collection",
    icon: Smartphone,
    description: "Mobile-friendly data input designed for RW-level operators",
    features: [
      {
        title: "Mobile-First Input",
        description: "Responsive interface optimized for smartphone data entry by RW operators",
        image: "/prakarsa-mobile-interface-data-entry-smartphone.jpg",
      },
      {
        title: "Offline Capability",
        description: "Continue data collection without internet, auto-sync when connected",
        image: "/prakarsa-offline-sync-mobile-app-interface.jpg",
      },
      {
        title: "Photo Verification",
        description: "Attach photos as evidence with automatic GPS tagging",
        image: "/prakarsa-photo-verification-gps-tagging-mobile.jpg",
      },
      {
        title: "Multi-Language Support",
        description: "Interface available in Bahasa Indonesia with local term adaptations",
        image: "/prakarsa-indonesian-language-interface-ui.jpg",
      },
    ],
  },
  {
    id: "validation",
    name: "Validation Workflow",
    icon: CheckCircle2,
    description: "Multi-tier validation with complete audit trail",
    features: [
      {
        title: "Tiered Approval",
        description: "RW → Kelurahan → Kecamatan → OPD approval workflow",
        image: "/prakarsa-approval-workflow-diagram-tiers.jpg",
      },
      {
        title: "Audit Trail",
        description: "Complete history of every change with timestamp and user",
        image: "/prakarsa-audit-trail-history-log-interface.jpg",
      },
      {
        title: "Rejection Feedback",
        description: "Structured rejection reasons with guidance for correction",
        image: "/prakarsa-rejection-feedback-correction-interface.jpg",
      },
      {
        title: "Batch Validation",
        description: "Review and approve multiple records efficiently",
        image: "/prakarsa-batch-validation-multiple-records.jpg",
      },
    ],
  },
  {
    id: "dashboard",
    name: "Dashboard & Mapping",
    icon: BarChart3,
    description: "Real-time visualization of social conditions",
    features: [
      {
        title: "Interactive Heatmaps",
        description: "Visualize vulnerability concentration across neighborhoods",
        image: "/prakarsa-heatmap-vulnerability-visualization-map.jpg",
      },
      {
        title: "KPI Cards",
        description: "At-a-glance metrics for key social protection indicators",
        image: "/prakarsa-kpi-cards-metrics-dashboard-stats.jpg",
      },
      {
        title: "Drill-Down Analysis",
        description: "From city level to individual household with one click",
        image: "/prakarsa-drilldown-analysis-city-household.jpg",
      },
      {
        title: "Comparative Views",
        description: "Compare performance across kecamatan or time periods",
        image: "/prakarsa-comparative-analysis-charts-trends.jpg",
      },
    ],
  },
  {
    id: "export",
    name: "Export & Reporting",
    icon: Download,
    description: "Generate reports and export data in multiple formats",
    features: [
      {
        title: "PDF Reports",
        description: "Formatted reports ready for leadership briefings",
        image: "/prakarsa-pdf-report-export-formatted.jpg",
      },
      {
        title: "Excel Export",
        description: "Raw data export for further analysis",
        image: "/prakarsa-excel-export-data-spreadsheet.jpg",
      },
      {
        title: "Scheduled Reports",
        description: "Automatic report generation and distribution",
        image: "/prakarsa-scheduled-reports-automation.jpg",
      },
      {
        title: "API Access",
        description: "Integration endpoints for external systems",
        image: "/prakarsa-api-integration-endpoints-technical.jpg",
      },
    ],
  },
  {
    id: "access",
    name: "Role-Based Access",
    icon: Shield,
    description: "Granular permissions for different user types",
    features: [
      {
        title: "Admin Dashboard",
        description: "Full system control for city-level administrators",
        image: "/prakarsa-admin-dashboard-full-access-controls.jpg",
      },
      {
        title: "OPD Views",
        description: "Sector-specific views for different government agencies",
        image: "/prakarsa-opd-sector-specific-view-interface.jpg",
      },
      {
        title: "RW Operator Interface",
        description: "Simplified input interface for ground-level users",
        image: "/prakarsa-rw-operator-simple-input-interface.jpg",
      },
      {
        title: "Read-Only Access",
        description: "View-only access for stakeholders and researchers",
        image: "/prakarsa-readonly-viewer-stakeholder-access.jpg",
      },
    ],
  },
]

export default function PrakarsaFeaturesPage() {
  return (
    <main className="pt-[72px]">
      {/* Hero */}
      <section className="bg-foreground text-background py-20 lg:py-28">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-accent font-semibold mb-4">Prakarsa Platform</p>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance">
              Features Built for Government
            </h1>
            <p className="text-lg md:text-xl text-background/80 mb-8">
              Every feature designed with input from real government users. From RW operators to city leadership,
              Prakarsa works for everyone.
            </p>
            <Link href="/prakarsa/demo">
              <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
                Request Demo
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features by Category */}
      <section className="py-16 lg:py-24">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <Tabs defaultValue="collection" className="w-full">
            <TabsList className="flex flex-wrap justify-start gap-2 h-auto bg-transparent p-0 mb-12">
              {featureCategories.map((cat) => (
                <TabsTrigger
                  key={cat.id}
                  value={cat.id}
                  className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground border border-border px-4 py-2"
                >
                  <cat.icon className="w-4 h-4 mr-2" />
                  {cat.name}
                </TabsTrigger>
              ))}
            </TabsList>

            {featureCategories.map((cat) => (
              <TabsContent key={cat.id} value={cat.id}>
                <div className="mb-8">
                  <h2 className="font-serif text-2xl md:text-3xl font-bold mb-2">{cat.name}</h2>
                  <p className="text-lg text-muted-foreground">{cat.description}</p>
                </div>
                <div className="grid md:grid-cols-2 gap-8">
                  {cat.features.map((feature, idx) => (
                    <Card key={idx} className="overflow-hidden">
                      <div className="relative aspect-video bg-muted">
                        <Image
                          src={feature.image || "/placeholder.svg"}
                          alt={feature.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <CardContent className="p-6">
                        <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
                        <p className="text-muted-foreground">{feature.description}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* User Types */}
      <section className="py-16 lg:py-24 bg-muted">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">Designed for Every User</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Different interfaces optimized for different roles in the system.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Users,
                role: "RW Operators",
                description: "Simple mobile interface for data entry and photo verification",
                access: "Input & view their own area",
              },
              {
                icon: BarChart3,
                role: "OPD Staff",
                description: "Sector-specific dashboards and validation workflows",
                access: "View & validate by sector",
              },
              {
                icon: Shield,
                role: "City Leadership",
                description: "Executive dashboard with city-wide analytics",
                access: "Full visibility & reporting",
              },
            ].map((user, idx) => (
              <Card key={idx}>
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <user.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{user.role}</h3>
                  <p className="text-muted-foreground mb-4">{user.description}</p>
                  <p className="text-sm text-primary font-medium">{user.access}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-24 bg-primary text-primary-foreground">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">See it in action</h2>
          <p className="text-lg text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Request a live demo to see how Prakarsa can transform your social protection data management.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/prakarsa/demo">
              <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
                Request Demo
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
            <Link href="/prakarsa/packages">
              <Button
                size="lg"
                variant="outline"
                className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 bg-transparent"
              >
                View Packages
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
