import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, Download, FileText, CheckCircle2, Shield } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export const metadata: Metadata = {
  title: "Government Procurement | BIDEV Institute",
  description:
    "Procurement-ready collaboration. Standard packages, templates, and compliance information for government partners.",
}

const packages = [
  {
    name: "Rapid Advisory",
    scope: "Expert consultation and validation",
    outputs: "Advisory memo, consultation sessions, recommendations",
    timeline: "2-4 weeks",
    requiredData: "Problem statement, existing documents",
    acceptance: "Final memo delivered and presentation completed",
  },
  {
    name: "Policy Research",
    scope: "Full research study with analysis",
    outputs: "Research report, policy brief, data appendix",
    timeline: "8-12 weeks",
    requiredData: "Access to relevant data, stakeholder list",
    acceptance: "Report approved, presentation to stakeholders",
  },
  {
    name: "Roadmap Development",
    scope: "Strategic planning and implementation roadmap",
    outputs: "Roadmap document, action plan, M&E framework",
    timeline: "10-14 weeks",
    requiredData: "Baseline data, existing plans, stakeholder access",
    acceptance: "Roadmap approved, implementation plan accepted",
  },
  {
    name: "Training Program",
    scope: "Capacity building and knowledge transfer",
    outputs: "Training modules, materials, certificates",
    timeline: "2-8 weeks (depending on modules)",
    requiredData: "Participant list, training needs assessment",
    acceptance: "Training delivered, evaluations completed",
  },
  {
    name: "Prakarsa Pilot",
    scope: "Platform deployment in 1-3 kecamatan",
    outputs: "Deployed platform, training, data governance framework",
    timeline: "12-16 weeks",
    requiredData: "RW data, beneficiary lists, OPD access",
    acceptance: "Platform live, operators trained, data populated",
  },
  {
    name: "Prakarsa Citywide",
    scope: "Full city deployment with all kelurahan",
    outputs: "Full deployment, training program, ongoing support",
    timeline: "6-8 months",
    requiredData: "Complete city data, all OPD coordination",
    acceptance: "100% coverage, M&E system operational",
  },
]

const downloads = [
  {
    name: "TOR/KAK Template",
    description: "Standard Terms of Reference template for BIDEV engagements",
    file: "tor-template.docx",
    size: "0.2 MB",
  },
  {
    name: "Workplan Template",
    description: "Project workplan and milestone template",
    file: "workplan-template.xlsx",
    size: "0.3 MB",
  },
  {
    name: "Sample Deliverables",
    description: "Anonymized samples of typical deliverables",
    file: "sample-deliverables.pdf",
    size: "2.5 MB",
  },
  {
    name: "Ethics Statement",
    description: "Our research ethics and integrity commitment",
    file: "ethics-statement.pdf",
    size: "0.5 MB",
  },
  {
    name: "Company Profile",
    description: "BIDEV Institute official company profile",
    file: "company-profile.pdf",
    size: "1.2 MB",
  },
  {
    name: "Past Performance Summary",
    description: "Summary of completed government projects",
    file: "past-performance.pdf",
    size: "0.8 MB",
  },
]

const complianceItems = [
  "Registered with Indonesian Ministry of Law (Kemenkumham)",
  "Valid NPWP and tax compliance certificates",
  "Experience with government procurement procedures",
  "Familiar with APBD, APBN, and donor-funded project requirements",
  "Standard MOU/Perjanjian Kerjasama templates available",
  "Capable of delivering through Direct Appointment or Tender processes",
]

export default function ProcurementPage() {
  return (
    <main className="pt-[72px]">
      {/* Hero */}
      <section className="bg-foreground text-background py-20 lg:py-28">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <Badge className="mb-4 bg-accent text-accent-foreground">For Government</Badge>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance">
              Procurement-Ready Collaboration
            </h1>
            <p className="text-lg md:text-xl text-background/80 mb-8">
              We understand government procurement. Here you'll find standard packages, ready-to-use templates, and all
              the documentation you need to get started quickly.
            </p>
            <Link href="#contact">
              <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
                Contact Government Desk
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Standard Packages */}
      <section className="py-16 lg:py-24">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">Standard Packages</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Pre-defined engagement packages designed for government procurement processes.
            </p>
          </div>

          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="min-w-[150px]">Package</TableHead>
                  <TableHead className="min-w-[200px]">Scope</TableHead>
                  <TableHead className="min-w-[200px]">Outputs</TableHead>
                  <TableHead className="min-w-[100px]">Timeline</TableHead>
                  <TableHead className="min-w-[200px]">Required from Client</TableHead>
                  <TableHead className="min-w-[200px]">Acceptance Criteria</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {packages.map((pkg, idx) => (
                  <TableRow key={idx}>
                    <TableCell className="font-medium">{pkg.name}</TableCell>
                    <TableCell className="text-muted-foreground text-sm">{pkg.scope}</TableCell>
                    <TableCell className="text-muted-foreground text-sm">{pkg.outputs}</TableCell>
                    <TableCell>
                      <Badge variant="secondary">{pkg.timeline}</Badge>
                    </TableCell>
                    <TableCell className="text-muted-foreground text-sm">{pkg.requiredData}</TableCell>
                    <TableCell className="text-muted-foreground text-sm">{pkg.acceptance}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>
      </section>

      {/* Downloads */}
      <section className="py-16 lg:py-24 bg-muted">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">Templates & Documents</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Ready-to-use templates to streamline your procurement process.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {downloads.map((item, idx) => (
              <Card key={idx} className="hover:border-primary/30 transition-colors">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <FileText className="w-5 h-5 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold mb-1">{item.name}</h3>
                      <p className="text-sm text-muted-foreground mb-3">{item.description}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-muted-foreground">{item.size}</span>
                        <Button variant="outline" size="sm">
                          <Download className="w-4 h-4 mr-2" />
                          Download
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance */}
      <section className="py-16 lg:py-24">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <Shield className="w-8 h-8 text-primary" />
                <h2 className="font-serif text-3xl md:text-4xl font-bold">Compliance & Integrity</h2>
              </div>
              <p className="text-lg text-muted-foreground mb-8">
                BIDEV is fully compliant with Indonesian government procurement requirements and maintains the highest
                standards of integrity.
              </p>
              <ul className="space-y-4">
                {complianceItems.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <Card className="bg-primary text-primary-foreground">
              <CardContent className="p-8">
                <h3 className="font-serif text-2xl font-bold mb-4">Need specific documentation?</h3>
                <p className="text-primary-foreground/80 mb-6">
                  We can provide additional documentation as required by your procurement unit, including:
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="text-sm">• Akta Pendirian & perubahan</li>
                  <li className="text-sm">• SK Kemenkumham</li>
                  <li className="text-sm">• NPWP & SPT</li>
                  <li className="text-sm">• NIB/Izin Usaha</li>
                  <li className="text-sm">• Referensi Kerja</li>
                </ul>
                <Link href="#contact">
                  <Button className="w-full bg-accent text-accent-foreground hover:bg-accent/90">
                    Request Documents
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section id="contact" className="py-16 lg:py-24 bg-muted">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6">Government Desk</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Our dedicated Government Desk team is here to help you navigate procurement processes and design the
                right engagement.
              </p>
              <div className="space-y-6">
                <div>
                  <p className="font-semibold">Direct Contact</p>
                  <p className="text-muted-foreground">gov@bidev.id</p>
                </div>
                <div>
                  <p className="font-semibold">Response Time</p>
                  <p className="text-muted-foreground">Within 24 hours on business days</p>
                </div>
                <div>
                  <p className="font-semibold">Office Hours</p>
                  <p className="text-muted-foreground">Monday - Friday, 09:00 - 17:00 WIB</p>
                </div>
              </div>
            </div>
            <Card>
              <CardHeader>
                <CardTitle>Government Inquiry Form</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Contact Person *</Label>
                    <Input id="name" placeholder="Your name" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="position">Position/Jabatan *</Label>
                    <Input id="position" placeholder="Your position" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="institution">Institution *</Label>
                  <Input id="institution" placeholder="e.g., Bappeda Kota Bandung" />
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email *</Label>
                    <Input id="email" type="email" placeholder="official@gov.go.id" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone *</Label>
                    <Input id="phone" placeholder="+62..." />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="package">Package Interest</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select package" />
                    </SelectTrigger>
                    <SelectContent>
                      {packages.map((pkg, idx) => (
                        <SelectItem key={idx} value={pkg.name.toLowerCase().replace(/\s+/g, "-")}>
                          {pkg.name}
                        </SelectItem>
                      ))}
                      <SelectItem value="other">Other / Custom</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="budget">Budget Source</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select budget source" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="apbd">APBD</SelectItem>
                      <SelectItem value="apbn">APBN</SelectItem>
                      <SelectItem value="donor">Donor/Grant</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="timeline">Expected Timeline</Label>
                  <Input id="timeline" placeholder="e.g., Q2 2026" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Project Description *</Label>
                  <Textarea id="message" placeholder="Describe your project needs..." rows={4} />
                </div>
                <Button className="w-full">
                  Submit Inquiry
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </main>
  )
}
