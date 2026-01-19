import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Building2, Target, MapPin, BarChart3, ArrowRight, Download, FileText, CheckCircle } from "lucide-react"
import Link from "next/link"
import { GovernmentContactForm } from "@/components/government-contact-form"

const useCases = [
  {
    icon: Target,
    title: "RPJMD/RKPD Targeting",
    description:
      "Data-driven program targeting for regional development plans with precision beneficiary identification.",
    outputs: ["Targeting criteria", "Beneficiary database", "Impact projections"],
    image: "/bandung-city-urban-data-dashboard-map.jpg",
    imageAlt: "Regional targeting map",
  },
  {
    icon: BarChart3,
    title: "Data-driven Social Programs",
    description: "Evidence-based social protection program design and monitoring with real-time dashboards.",
    outputs: ["Program design", "Monitoring framework", "Impact evaluation"],
    image: "/social-protection-toolkit-government.jpg",
    imageAlt: "Social protection program dashboard",
  },
  {
    icon: MapPin,
    title: "Masterplan & Sectoral Roadmap",
    description: "Comprehensive urban planning and sectoral development strategies backed by research.",
    outputs: ["Masterplan document", "Implementation roadmap", "Stakeholder analysis"],
    image: "/housing-urban-planning-architecture-blueprint.jpg",
    imageAlt: "Urban masterplan blueprint",
  },
]

const engagementModels = [
  {
    title: "Short Advisory",
    duration: "2-4 weeks",
    description: "Quick diagnostic and strategic recommendations for specific policy questions.",
    deliverables: ["Assessment report", "Key recommendations", "Priority action items"],
    ideal: "Urgent policy questions, quick wins identification",
    image: "/policy-brief-writing-guide-document.jpg",
    imageAlt: "Policy advisory brief",
  },
  {
    title: "Full Study + Roadmap",
    duration: "8-12 weeks",
    description: "Comprehensive research study with detailed implementation roadmap and stakeholder engagement.",
    deliverables: ["Research report", "Policy brief", "Implementation roadmap", "Presentation to stakeholders"],
    ideal: "New policy development, major program design",
    image: "/urban-data-playbook-cover.jpg",
    imageAlt: "Research roadmap playbook",
  },
  {
    title: "PRAKARSA Deployment",
    duration: "Pilot → Scale",
    description: "Full deployment of the PRAKARSA data intelligence platform in your city/regency.",
    deliverables: ["Platform setup", "Data collection", "Training", "Ongoing support"],
    ideal: "Long-term data infrastructure investment",
    image: "/prakarsa-dashboard-preview-demo-screenshot.jpg",
    imageAlt: "Prakarsa deployment dashboard",
  },
]

const procurementInfo = [
  {
    scope: "Expert Consultation (Speaker/Advisory)",
    outputs: "Presentation, recommendations memo",
    timeline: "1-5 days",
    dataRequired: "Briefing materials",
    acceptance: "Delivery of presentation/memo",
  },
  {
    scope: "Policy Assessment Study",
    outputs: "Assessment report, policy brief",
    timeline: "4-8 weeks",
    dataRequired: "Existing policy docs, data access",
    acceptance: "Report submission, presentation",
  },
  {
    scope: "Full Roadmap Development",
    outputs: "Masterplan, implementation roadmap",
    timeline: "8-16 weeks",
    dataRequired: "Full data access, stakeholder coordination",
    acceptance: "Document approval, stakeholder sign-off",
  },
  {
    scope: "PRAKARSA Platform (Pilot)",
    outputs: "Deployed system, trained staff",
    timeline: "3-6 months",
    dataRequired: "MOU, data sharing agreement",
    acceptance: "System acceptance test, training completion",
  },
]

const downloadables = [
  { title: "Company Profile BIDEV", type: "PDF", size: "2.4 MB" },
  { title: "TOR Template - Policy Study", type: "DOCX", size: "156 KB" },
  { title: "Sample Deliverable - Policy Brief", type: "PDF", size: "1.8 MB" },
  { title: "PRAKARSA Product Sheet", type: "PDF", size: "3.2 MB" },
]

export default function ForGovernmentPage() {
  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="pt-[72px] bg-[#0F3D2E]">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
          <div className="max-w-3xl">
            <Badge className="bg-[#B89B5E]/20 text-[#B89B5E] border-[#B89B5E]/30 mb-6">For Government</Badge>
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold text-[#F7F5EF] leading-tight mb-6">
              Evidence-Based Solutions for Public Sector
            </h1>
            <p className="text-xl text-[#F7F5EF]/80 mb-8">
              Partner with BIDEV to transform your city&apos;s data into actionable policy insights. From RPJMD
              targeting to smart city implementation, we bring academic rigor to public service delivery.
            </p>
            <Link href="#contact-government">
              <Button size="lg" className="bg-[#B89B5E] text-[#1C1C1C] hover:bg-[#B89B5E]/90">
                Contact Government Desk
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-24 sm:py-32 bg-background">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <p className="text-sm uppercase tracking-widest text-primary font-semibold mb-4">Use Cases</p>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground">How We Help Government</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {useCases.map((useCase, index) => (
              <Card key={index} className="overflow-hidden">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img src={useCase.image} alt={useCase.imageAlt} className="h-full w-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-tr from-black/25 via-transparent to-transparent" />
                </div>
                <CardContent className="p-8">
                  <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                    <useCase.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="font-semibold text-xl text-foreground mb-3">{useCase.title}</h3>
                  <p className="text-muted-foreground mb-6">{useCase.description}</p>
                  <div className="space-y-2">
                    {useCase.outputs.map((output, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-primary" />
                        <span className="text-sm text-foreground">{output}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Engagement Models */}
      <section className="py-24 sm:py-32 bg-muted/30">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-sm uppercase tracking-widest text-primary font-semibold mb-4">Engagement Models</p>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground">Flexible Partnership Options</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {engagementModels.map((model, index) => (
              <Card key={index} className="relative overflow-hidden">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img src={model.image} alt={model.imageAlt} className="h-full w-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-tr from-black/30 via-transparent to-transparent" />
                </div>
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <CardTitle className="text-xl">{model.title}</CardTitle>
                    <Badge variant="secondary">{model.duration}</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-6">{model.description}</p>
                  <div className="space-y-3 mb-6">
                    <p className="text-sm font-semibold text-foreground">Deliverables:</p>
                    {model.deliverables.map((item, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-primary shrink-0" />
                        <span className="text-sm text-muted-foreground">{item}</span>
                      </div>
                    ))}
                  </div>
                  <div className="p-3 bg-muted rounded-lg">
                    <p className="text-xs text-muted-foreground">
                      <strong>Ideal for:</strong> {model.ideal}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Procurement Info */}
      <section className="py-24 sm:py-32 bg-background">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <p className="text-sm uppercase tracking-widest text-primary font-semibold mb-4">Procurement-Ready</p>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground">Service Scope Reference</h2>
            <p className="mt-4 text-muted-foreground max-w-2xl">
              Use this reference table to prepare your Terms of Reference (TOR) and procurement documents.
            </p>
          </div>

          <Card>
            <CardContent className="p-0">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Scope</TableHead>
                    <TableHead>Outputs</TableHead>
                    <TableHead>Timeline</TableHead>
                    <TableHead>Required Data</TableHead>
                    <TableHead>Acceptance Criteria</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {procurementInfo.map((row, index) => (
                    <TableRow key={index}>
                      <TableCell className="font-medium">{row.scope}</TableCell>
                      <TableCell>{row.outputs}</TableCell>
                      <TableCell>{row.timeline}</TableCell>
                      <TableCell>{row.dataRequired}</TableCell>
                      <TableCell>{row.acceptance}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Downloadables */}
      <section className="py-24 sm:py-32 bg-muted/30">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <p className="text-sm uppercase tracking-widest text-primary font-semibold mb-4">Resources</p>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground">Downloadable Materials</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {downloadables.map((doc, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow cursor-pointer">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <FileText className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">{doc.title}</h3>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Badge variant="outline">{doc.type}</Badge>
                    <span>{doc.size}</span>
                  </div>
                  <Button variant="ghost" size="sm" className="w-full mt-4">
                    <Download className="w-4 h-4 mr-2" />
                    Download
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance & Integrity */}
      <section className="py-24 sm:py-32 bg-background">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-sm uppercase tracking-widest text-primary font-semibold mb-4">
                Compliance & Integrity
              </p>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground mb-6">
                Our Commitment to Ethical Engagement
              </h2>
              <p className="text-muted-foreground mb-8">
                BIDEV maintains the highest standards of integrity in all government engagements. We adhere strictly to
                anti-corruption principles and transparent procurement practices.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <p className="text-foreground">
                    Zero tolerance for gratification - all payments through official channels
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <p className="text-foreground">Transparent pricing with standard rate cards</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <p className="text-foreground">Conflict of interest disclosure for all engaged experts</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <p className="text-foreground">Academic integrity in all research and analysis</p>
                </div>
              </div>
            </div>
            <div className="bg-card rounded-2xl border border-border p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center">
                  <Building2 className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-foreground">PT BIDEV Indonesia</h3>
                  <p className="text-sm text-muted-foreground">Registered service provider</p>
                </div>
              </div>
              <div className="space-y-3 text-sm text-muted-foreground">
                <p>
                  <strong>NPWP:</strong> XX.XXX.XXX.X-XXX.XXX
                </p>
                <p>
                  <strong>NIB:</strong> XXXXXXXXXXXXXX
                </p>
                <p>
                  <strong>KBLI:</strong> 72XXX - Research & Development
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section id="contact-government" className="py-24 sm:py-32 bg-[#1C1C1C]">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="font-serif text-3xl font-bold text-[#F7F5EF] mb-4">Contact Government Desk</h2>
              <p className="text-[#F7F5EF]/70">
                Our dedicated government relations team will respond within 1-2 business days.
              </p>
            </div>
            <GovernmentContactForm />
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
