import type { Metadata } from "next"
import Link from "next/link"
import {
  FileText,
  Download,
  Building,
  Briefcase,
  BookOpen,
  FileSpreadsheet,
  FileCheck,
  Presentation,
  ArrowRight,
  Filter,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export const metadata: Metadata = {
  title: "Download Center | BIDEV Institute",
  description:
    "Access company profiles, service catalogues, procurement documents, and expert materials in one convenient location.",
}

const downloadCategories = [
  {
    id: "company",
    label: "Company Info",
    icon: Building,
    description: "Corporate profiles and general information",
  },
  {
    id: "services",
    label: "Services",
    icon: Briefcase,
    description: "Service catalogues and brochures",
  },
  {
    id: "procurement",
    label: "Procurement",
    icon: FileCheck,
    description: "Templates for government procurement",
  },
  {
    id: "experts",
    label: "Expert Materials",
    icon: BookOpen,
    description: "Expert profiles and one-pagers",
  },
]

const downloads = {
  company: [
    {
      title: "Company Profile (ID)",
      description: "Profil lengkap BIDEV dalam Bahasa Indonesia",
      format: "PDF",
      size: "2.4 MB",
      updated: "Jan 2026",
      featured: true,
    },
    {
      title: "Company Profile (EN)",
      description: "Complete BIDEV profile in English",
      format: "PDF",
      size: "2.4 MB",
      updated: "Jan 2026",
      featured: true,
    },
    {
      title: "Fact Sheet",
      description: "Key facts and figures at a glance",
      format: "PDF",
      size: "512 KB",
      updated: "Dec 2025",
      featured: false,
    },
    {
      title: "Leadership Team",
      description: "Profiles of key leadership and advisors",
      format: "PDF",
      size: "1.1 MB",
      updated: "Nov 2025",
      featured: false,
    },
  ],
  services: [
    {
      title: "Service Catalogue 2026",
      description: "Complete overview of all services and capabilities",
      format: "PDF",
      size: "4.2 MB",
      updated: "Jan 2026",
      featured: true,
    },
    {
      title: "Prakarsa Brochure",
      description: "Platform overview, features, and deployment options",
      format: "PDF",
      size: "3.1 MB",
      updated: "Jan 2026",
      featured: true,
    },
    {
      title: "Training Program Catalogue",
      description: "Available training modules and custom program options",
      format: "PDF",
      size: "1.8 MB",
      updated: "Dec 2025",
      featured: false,
    },
    {
      title: "Research Services Overview",
      description: "Policy research and advisory capabilities",
      format: "PDF",
      size: "1.5 MB",
      updated: "Nov 2025",
      featured: false,
    },
  ],
  procurement: [
    {
      title: "TOR/KAK Template",
      description: "Standard Terms of Reference template for government projects",
      format: "DOCX",
      size: "156 KB",
      updated: "Jan 2026",
      featured: true,
    },
    {
      title: "Workplan Template",
      description: "Standard workplan and timeline template",
      format: "XLSX",
      size: "89 KB",
      updated: "Jan 2026",
      featured: true,
    },
    {
      title: "Acceptance Criteria Checklist",
      description: "Deliverable acceptance criteria for QA",
      format: "PDF",
      size: "234 KB",
      updated: "Dec 2025",
      featured: false,
    },
    {
      title: "Ethics & Compliance Statement",
      description: "Anti-gratuity and ethics compliance statement",
      format: "PDF",
      size: "312 KB",
      updated: "Dec 2025",
      featured: false,
    },
    {
      title: "Sample Deliverables Pack",
      description: "Redacted samples of typical project deliverables",
      format: "ZIP",
      size: "12.4 MB",
      updated: "Nov 2025",
      featured: false,
    },
  ],
  experts: [
    {
      title: "Expert One-Pager Template",
      description: "Sample format for expert profile summaries",
      format: "PDF",
      size: "456 KB",
      updated: "Jan 2026",
      featured: true,
    },
    {
      title: "Expert Directory Overview",
      description: "Summary of expertise areas and expert count",
      format: "PDF",
      size: "1.2 MB",
      updated: "Jan 2026",
      featured: true,
    },
    {
      title: "Team Composition Examples",
      description: "Sample team configurations for different project types",
      format: "PDF",
      size: "890 KB",
      updated: "Dec 2025",
      featured: false,
    },
  ],
}

function getFormatIcon(format: string) {
  switch (format) {
    case "PDF":
      return FileText
    case "DOCX":
      return FileText
    case "XLSX":
      return FileSpreadsheet
    case "PPTX":
      return Presentation
    default:
      return FileText
  }
}

function getFormatColor(format: string) {
  switch (format) {
    case "PDF":
      return "bg-red-100 text-red-700"
    case "DOCX":
      return "bg-blue-100 text-blue-700"
    case "XLSX":
      return "bg-green-100 text-green-700"
    case "PPTX":
      return "bg-orange-100 text-orange-700"
    case "ZIP":
      return "bg-purple-100 text-purple-700"
    default:
      return "bg-muted text-muted-foreground"
  }
}

export default function DownloadsPage() {
  return (
    <main className="pt-[72px]">
      {/* Hero */}
      <section className="bg-foreground text-background py-20 lg:py-28">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <Badge className="mb-4 bg-accent text-accent-foreground">Resources</Badge>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance">Download Center</h1>
            <p className="text-lg md:text-xl text-background/80 mb-8">
              Akses semua dokumen yang Anda butuhkan dalam satu tempat. Company profile, service catalogue, template
              procurement, dan materi expert.
            </p>
            <Link href="/request?type=meeting">
              <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
                Need Custom Materials?
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Quick Access */}
      <section className="py-8 border-b border-border">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
            <Filter className="w-4 h-4" />
            <span className="font-medium">Most Downloaded:</span>
          </div>
          <div className="flex flex-wrap gap-3">
            <Badge variant="secondary" className="cursor-pointer hover:bg-secondary/80">
              Company Profile
            </Badge>
            <Badge variant="secondary" className="cursor-pointer hover:bg-secondary/80">
              Service Catalogue
            </Badge>
            <Badge variant="secondary" className="cursor-pointer hover:bg-secondary/80">
              Prakarsa Brochure
            </Badge>
            <Badge variant="secondary" className="cursor-pointer hover:bg-secondary/80">
              TOR Template
            </Badge>
          </div>
        </div>
      </section>

      {/* Downloads by Category */}
      <section className="py-16 lg:py-24">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <Tabs defaultValue="company" className="w-full">
            <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4 h-auto gap-2 bg-transparent p-0 mb-8">
              {downloadCategories.map((category) => (
                <TabsTrigger
                  key={category.id}
                  value={category.id}
                  className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground border border-border py-4 px-4"
                >
                  <div className="flex items-center gap-3 text-left">
                    <category.icon className="w-5 h-5 flex-shrink-0" />
                    <div>
                      <p className="font-semibold">{category.label}</p>
                      <p className="text-xs opacity-70 hidden sm:block">{category.description}</p>
                    </div>
                  </div>
                </TabsTrigger>
              ))}
            </TabsList>

            {Object.entries(downloads).map(([categoryId, items]) => (
              <TabsContent key={categoryId} value={categoryId}>
                <div className="grid md:grid-cols-2 gap-4">
                  {items.map((item, idx) => {
                    const FormatIcon = getFormatIcon(item.format)
                    return (
                      <Card
                        key={idx}
                        className={`group hover:border-primary/30 transition-colors ${item.featured ? "border-primary/20 bg-primary/5" : ""}`}
                      >
                        <CardContent className="p-6">
                          <div className="flex items-start justify-between gap-4">
                            <div className="flex items-start gap-4 flex-1">
                              <div
                                className={`w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 ${getFormatColor(item.format)}`}
                              >
                                <FormatIcon className="w-6 h-6" />
                              </div>
                              <div className="flex-1 min-w-0">
                                <div className="flex items-center gap-2 mb-1">
                                  <h3 className="font-semibold truncate">{item.title}</h3>
                                  {item.featured && (
                                    <Badge variant="default" className="text-xs">
                                      Popular
                                    </Badge>
                                  )}
                                </div>
                                <p className="text-sm text-muted-foreground mb-2">{item.description}</p>
                                <div className="flex items-center gap-3 text-xs text-muted-foreground">
                                  <span>{item.format}</span>
                                  <span>·</span>
                                  <span>{item.size}</span>
                                  <span>·</span>
                                  <span>Updated {item.updated}</span>
                                </div>
                              </div>
                            </div>
                            <Button variant="ghost" size="icon" className="flex-shrink-0">
                              <Download className="w-4 h-4" />
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    )
                  })}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Government Procurement Pack */}
      <section className="py-16 lg:py-24 bg-muted">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4" variant="outline">
                For Government
              </Badge>
              <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">Procurement-Ready Pack</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Download semua dokumen yang dibutuhkan untuk proses procurement pemerintah dalam satu paket lengkap.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-3">
                  <FileCheck className="w-5 h-5 text-primary" />
                  <span>Company Profile dengan legalitas</span>
                </li>
                <li className="flex items-center gap-3">
                  <FileCheck className="w-5 h-5 text-primary" />
                  <span>Template TOR/KAK standar</span>
                </li>
                <li className="flex items-center gap-3">
                  <FileCheck className="w-5 h-5 text-primary" />
                  <span>Checklist acceptance criteria</span>
                </li>
                <li className="flex items-center gap-3">
                  <FileCheck className="w-5 h-5 text-primary" />
                  <span>Ethics & compliance statement</span>
                </li>
                <li className="flex items-center gap-3">
                  <FileCheck className="w-5 h-5 text-primary" />
                  <span>Sample deliverables (redacted)</span>
                </li>
              </ul>
              <div className="flex flex-wrap gap-4">
                <Button size="lg">
                  <Download className="mr-2 w-4 h-4" />
                  Download Full Pack (ZIP)
                </Button>
                <Link href="/for-government/procurement">
                  <Button size="lg" variant="outline">
                    Government Info Page
                  </Button>
                </Link>
              </div>
            </div>

            <Card className="bg-foreground text-background">
              <CardHeader>
                <CardTitle className="text-2xl">Need Custom Documents?</CardTitle>
                <CardDescription className="text-background/70">
                  Tim kami siap menyiapkan dokumen sesuai kebutuhan spesifik Anda.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="p-4 bg-background/10 rounded-lg">
                  <p className="font-medium mb-1">Custom Company Profile</p>
                  <p className="text-sm text-background/70">Disesuaikan dengan format dan kebutuhan instansi Anda</p>
                </div>
                <div className="p-4 bg-background/10 rounded-lg">
                  <p className="font-medium mb-1">Expert Team Profiles</p>
                  <p className="text-sm text-background/70">Profil tim ahli untuk proyek spesifik Anda</p>
                </div>
                <div className="p-4 bg-background/10 rounded-lg">
                  <p className="font-medium mb-1">Proposal Draft</p>
                  <p className="text-sm text-background/70">Proposal preliminary sebelum engagement resmi</p>
                </div>
                <Link href="/request?type=meeting" className="block">
                  <Button className="w-full bg-accent text-accent-foreground hover:bg-accent/90">
                    Request Custom Materials
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-24 bg-primary text-primary-foreground">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">Ready to Start a Conversation?</h2>
          <p className="text-lg text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Our team is ready to answer your questions and discuss how we can help.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/request">
              <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
                Contact Us
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
            <Link href="/case-studies">
              <Button
                size="lg"
                variant="outline"
                className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 bg-transparent"
              >
                View Case Studies
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
