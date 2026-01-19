import type { Metadata } from "next"
import Link from "next/link"
import {
  Shield,
  FileCheck,
  Scale,
  AlertTriangle,
  Lock,
  Users,
  ArrowRight,
  ExternalLink,
  CheckCircle2,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"

export const metadata: Metadata = {
  title: "Compliance & Integrity Center | BIDEV Institute",
  description:
    "Our commitment to ethical conduct, transparency, and accountability. Code of Ethics, Conflict of Interest policy, and compliance standards.",
}

const integrityPillars = [
  {
    icon: FileCheck,
    title: "Code of Ethics",
    description: "Prinsip-prinsip etika yang mengatur seluruh aktivitas penelitian, konsultasi, dan kolaborasi kami.",
    href: "/integrity/code-of-ethics",
    highlights: [
      "Evidence-based recommendations",
      "Independence from political influence",
      "Transparency in methodology",
      "Respect for stakeholders",
    ],
  },
  {
    icon: Scale,
    title: "Conflict of Interest Policy",
    description: "Kebijakan deklarasi dan pengelolaan konflik kepentingan untuk menjaga integritas output.",
    href: "/integrity/coi",
    highlights: [
      "Mandatory COI declaration",
      "Independent review process",
      "Recusal protocols",
      "Public disclosure (where appropriate)",
    ],
  },
  {
    icon: AlertTriangle,
    title: "Anti-Gratuity Statement",
    description: "Komitmen anti-gratifikasi dan kebijakan pemberian hadiah dalam kerja sama dengan pemda dan swasta.",
    href: "/integrity/anti-gratuity",
    highlights: [
      "Zero tolerance policy",
      "Gift reporting mechanism",
      "Compliance with Indonesian law",
      "Training for all staff",
    ],
  },
  {
    icon: Lock,
    title: "Data & Privacy Policy",
    description:
      "Kebijakan pengelolaan data, privasi, dan keamanan informasi terutama untuk proyek yang melibatkan data warga.",
    href: "/data-policy",
    highlights: [
      "Data minimization principle",
      "Consent-based collection",
      "Secure storage & transmission",
      "Retention & deletion policies",
    ],
  },
]

const whistleblowerChannels = [
  {
    method: "Email",
    contact: "integrity@bidev.id",
    description: "Dedicated email for integrity concerns",
  },
  {
    method: "Form",
    contact: "Online submission form",
    description: "Anonymous reporting option available",
  },
  {
    method: "Direct",
    contact: "Integrity Officer",
    description: "Confidential in-person reporting",
  },
]

const commitments = [
  {
    title: "No Advocacy Without Evidence",
    description: "Semua rekomendasi kebijakan kami didukung oleh bukti empiris dan analisis yang dapat diverifikasi.",
  },
  {
    title: "Independence & Objectivity",
    description: "Kami menjaga independensi dari pengaruh politik dan komersial dalam semua pekerjaan penelitian.",
  },
  {
    title: "Peer Review Standard",
    description: "Output strategis melalui proses peer review oleh pakar independen sebelum finalisasi.",
  },
  {
    title: "Stakeholder Respect",
    description: "Kami menghormati hak dan kepentingan semua pemangku kepentingan, termasuk komunitas yang terdampak.",
  },
]

export default function IntegrityPage() {
  return (
    <main className="pt-[72px]">
      {/* Hero */}
      <section className="bg-foreground text-background py-20 lg:py-28">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <Badge className="mb-4 bg-accent text-accent-foreground">Trust & Compliance</Badge>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance">
              Compliance & Integrity Center
            </h1>
            <p className="text-lg md:text-xl text-background/80 mb-8">
              Sebagai lembaga yang bekerja dengan institusi publik dan data sensitif, kami berkomitmen pada standar
              etika dan integritas tertinggi. Transparansi adalah fondasi kepercayaan.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="#pillars">
                <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
                  Explore Our Standards
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
              <Link href="#whistleblower">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-background/30 text-background hover:bg-background/10 bg-transparent"
                >
                  Report a Concern
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-8 border-b border-border bg-muted">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-8 text-center">
            <div className="flex items-center gap-2">
              <Shield className="w-5 h-5 text-primary" />
              <span className="text-sm font-medium">ISO 27001 Aligned</span>
            </div>
            <Separator orientation="vertical" className="h-6 hidden sm:block" />
            <div className="flex items-center gap-2">
              <Users className="w-5 h-5 text-primary" />
              <span className="text-sm font-medium">Independent Review Board</span>
            </div>
            <Separator orientation="vertical" className="h-6 hidden sm:block" />
            <div className="flex items-center gap-2">
              <FileCheck className="w-5 h-5 text-primary" />
              <span className="text-sm font-medium">Annual Compliance Audit</span>
            </div>
          </div>
        </div>
      </section>

      {/* Integrity Pillars */}
      <section id="pillars" className="py-16 lg:py-24">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">Pilar Integritas Kami</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Empat fondasi yang menjamin kualitas dan kepercayaan dalam setiap kerja sama.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {integrityPillars.map((pillar) => (
              <Card key={pillar.title} className="group hover:border-primary/30 transition-colors">
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <pillar.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-xl mb-2">{pillar.title}</CardTitle>
                      <CardDescription className="text-base">{pillar.description}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-4">
                    {pillar.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                        {highlight}
                      </li>
                    ))}
                  </ul>
                  <Link href={pillar.href}>
                    <Button variant="ghost" size="sm" className="text-primary -ml-3">
                      Read full policy
                      <ExternalLink className="ml-1 w-3 h-3" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Our Commitments */}
      <section className="py-16 lg:py-24 bg-muted">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">Komitmen Kami</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Prinsip-prinsip yang tidak dapat dinegosiasikan dalam setiap pekerjaan kami.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {commitments.map((commitment, idx) => (
              <Card key={idx} className="text-center">
                <CardContent className="pt-6">
                  <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center mx-auto mb-4 font-bold text-lg">
                    {idx + 1}
                  </div>
                  <h3 className="font-semibold mb-2">{commitment.title}</h3>
                  <p className="text-sm text-muted-foreground">{commitment.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Whistleblower Section */}
      <section id="whistleblower" className="py-16 lg:py-24">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4" variant="outline">
                Whistleblowing Channel
              </Badge>
              <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">Laporkan Pelanggaran</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Kami menyediakan saluran pelaporan yang aman dan rahasia untuk melaporkan pelanggaran etika, konflik
                kepentingan, atau perilaku tidak pantas lainnya.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <Shield className="w-5 h-5 text-primary mt-0.5" />
                  <div>
                    <p className="font-medium">Perlindungan Pelapor</p>
                    <p className="text-sm text-muted-foreground">
                      Identitas pelapor dijaga kerahasiaannya dan dilindungi dari retaliasi.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <FileCheck className="w-5 h-5 text-primary mt-0.5" />
                  <div>
                    <p className="font-medium">Investigasi Independen</p>
                    <p className="text-sm text-muted-foreground">
                      Laporan ditangani oleh pihak yang tidak memiliki konflik kepentingan.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold mb-6">Saluran Pelaporan</h3>
                <div className="space-y-4">
                  {whistleblowerChannels.map((channel, idx) => (
                    <div key={idx} className="flex items-center justify-between p-4 bg-muted rounded-lg">
                      <div>
                        <p className="font-medium">{channel.method}</p>
                        <p className="text-sm text-muted-foreground">{channel.description}</p>
                      </div>
                      <Badge variant="secondary">{channel.contact}</Badge>
                    </div>
                  ))}
                </div>
                <Separator className="my-6" />
                <Link href="/integrity/report">
                  <Button className="w-full">
                    Submit Anonymous Report
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Related Links */}
      <section className="py-16 lg:py-24 bg-primary text-primary-foreground">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">Related Pages</h2>
          <p className="text-lg text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Explore our quality standards and governance structure.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/quality">
              <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
                Quality & Peer Review
              </Button>
            </Link>
            <Link href="/governance">
              <Button
                size="lg"
                variant="outline"
                className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 bg-transparent"
              >
                Governance Structure
              </Button>
            </Link>
            <Link href="/data-policy">
              <Button
                size="lg"
                variant="outline"
                className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 bg-transparent"
              >
                Data Policy
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
