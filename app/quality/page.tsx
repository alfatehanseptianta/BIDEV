import type { Metadata } from "next"
import Link from "next/link"
import {
  ArrowRight,
  CheckCircle2,
  FileSearch,
  Users,
  Shield,
  BookOpen,
  Database,
  GitBranch,
  Eye,
  Award,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export const metadata: Metadata = {
  title: "Quality Assurance & Peer Review | BIDEV Institute",
  description:
    "Our rigorous quality assurance process and peer review standards that differentiate us from regular consultants.",
}

const qaGates = [
  {
    step: 1,
    title: "Draft Development",
    description: "Tim ahli menyusun draft berdasarkan metodologi yang telah disepakati.",
    icon: FileSearch,
    outputs: ["Working draft", "Data analysis", "Initial findings"],
    reviewers: "Lead Expert",
  },
  {
    step: 2,
    title: "Internal Review",
    description: "Review internal oleh senior expert untuk memastikan kualitas metodologi dan analisis.",
    icon: Eye,
    outputs: ["Methodology validation", "Logic check", "Gap identification"],
    reviewers: "Senior Expert Panel",
  },
  {
    step: 3,
    title: "Peer Review",
    description: "External peer review oleh pakar independen untuk validasi temuan dan rekomendasi.",
    icon: Users,
    outputs: ["External validation", "Academic rigor check", "Alternative perspectives"],
    reviewers: "Independent Peer Reviewers",
  },
  {
    step: 4,
    title: "Final QA",
    description: "Quality assurance final mencakup editorial, formatting, dan compliance check.",
    icon: Shield,
    outputs: ["Editorial review", "Citation verification", "Compliance clearance"],
    reviewers: "QA Team",
  },
]

const evidenceStandards = [
  {
    icon: BookOpen,
    title: "Citation Requirements",
    description: "Semua klaim dan data harus didukung oleh referensi yang dapat diverifikasi.",
    standards: [
      "Primary sources preferred",
      "Peer-reviewed publications",
      "Official government data",
      "Clear attribution",
    ],
  },
  {
    icon: Database,
    title: "Data Lineage",
    description: "Dokumentasi lengkap sumber, transformasi, dan validasi data yang digunakan.",
    standards: ["Source documentation", "Processing logs", "Quality metrics", "Version control"],
  },
  {
    icon: GitBranch,
    title: "Reproducibility",
    description: "Metodologi dan analisis harus dapat direplikasi oleh pihak ketiga.",
    standards: ["Method documentation", "Code/scripts sharing", "Assumptions stated", "Limitations disclosed"],
  },
]

const differentiators = [
  {
    title: "Bukan Konsultan Biasa",
    description:
      "Kami menerapkan standar akademis untuk pekerjaan konsultasi. Setiap output melewati proses review yang ketat.",
  },
  {
    title: "Expert Network Quality",
    description:
      "Pakar kami berasal dari institusi terkemuka dengan track record publikasi dan proyek yang terverifikasi.",
  },
  {
    title: "No Advocacy Without Evidence",
    description: "Kami tidak merekomendasikan kebijakan tanpa bukti empiris yang kuat. Opini terpisah dari fakta.",
  },
  {
    title: "Continuous Improvement",
    description: "Kami secara rutin mengevaluasi dan meningkatkan proses QA berdasarkan feedback dan best practices.",
  },
]

const peerReviewCriteria = [
  "Methodological rigor",
  "Evidence quality & appropriateness",
  "Logical consistency",
  "Policy relevance & feasibility",
  "Stakeholder considerations",
  "Ethical compliance",
  "Communication clarity",
  "Implementation practicality",
]

export default function QualityPage() {
  return (
    <main className="pt-[72px]">
      {/* Hero */}
      <section className="bg-foreground text-background py-20 lg:py-28">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <Badge className="mb-4 bg-accent text-accent-foreground">Quality Standards</Badge>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance">
              Quality Assurance & Peer Review
            </h1>
            <p className="text-lg md:text-xl text-background/80 mb-8">
              Kami menerapkan standar akademis untuk pekerjaan profesional. Setiap output melalui proses peer review
              yang ketat—inilah yang membedakan kami dari konsultan biasa.
            </p>
            <Link href="#qa-process">
              <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
                Explore Our Process
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="py-8 border-b border-border bg-muted">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <p className="text-3xl font-bold text-primary">4</p>
              <p className="text-sm text-muted-foreground">QA Gates per Project</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-primary">100%</p>
              <p className="text-sm text-muted-foreground">Peer Reviewed Outputs</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-primary">48hr</p>
              <p className="text-sm text-muted-foreground">Review Turnaround</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-primary">25+</p>
              <p className="text-sm text-muted-foreground">Expert Reviewers</p>
            </div>
          </div>
        </div>
      </section>

      {/* QA Process */}
      <section id="qa-process" className="py-16 lg:py-24">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">Quality Assurance Gates</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Setiap deliverable melalui empat tahap quality assurance sebelum sampai ke klien.
            </p>
          </div>

          <div className="relative">
            {/* Connection Line */}
            <div className="hidden lg:block absolute top-24 left-0 right-0 h-0.5 bg-border" />

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {qaGates.map((gate) => (
                <Card key={gate.step} className="relative">
                  <CardHeader className="pb-4">
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-lg relative z-10">
                        {gate.step}
                      </div>
                      <Badge variant="secondary">{gate.reviewers}</Badge>
                    </div>
                    <CardTitle className="flex items-center gap-2">
                      <gate.icon className="w-5 h-5 text-primary" />
                      {gate.title}
                    </CardTitle>
                    <CardDescription>{gate.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-xs font-semibold text-muted-foreground uppercase mb-2">Outputs:</p>
                    <ul className="space-y-1">
                      {gate.outputs.map((output, idx) => (
                        <li key={idx} className="text-sm flex items-center gap-2">
                          <CheckCircle2 className="w-3 h-3 text-primary" />
                          {output}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Evidence Standards */}
      <section className="py-16 lg:py-24 bg-muted">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">Evidence Standards</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Standar bukti dan data yang kami terapkan untuk menjamin kredibilitas output.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {evidenceStandards.map((standard) => (
              <Card key={standard.title}>
                <CardHeader>
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <standard.icon className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle>{standard.title}</CardTitle>
                  <CardDescription>{standard.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {standard.standards.map((item, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Peer Review Criteria */}
      <section className="py-16 lg:py-24">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4" variant="outline">
                Peer Review
              </Badge>
              <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">Kriteria Peer Review</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Peer reviewer independen mengevaluasi setiap output strategis berdasarkan kriteria berikut:
              </p>
              <div className="grid grid-cols-2 gap-3">
                {peerReviewCriteria.map((criteria, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                    <span className="text-sm">{criteria}</span>
                  </div>
                ))}
              </div>
            </div>

            <Card className="bg-foreground text-background">
              <CardContent className="p-8">
                <Award className="w-12 h-12 text-accent mb-6" />
                <h3 className="font-serif text-2xl font-bold mb-4">Review Panel</h3>
                <p className="text-background/70 mb-6">
                  Panel reviewer kami terdiri dari akademisi dan praktisi senior dengan pengalaman di bidang kebijakan
                  publik, urban planning, dan pembangunan.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center gap-2 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-accent" />
                    15+ Professor dari universitas terkemuka
                  </li>
                  <li className="flex items-center gap-2 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-accent" />
                    10+ Senior policy practitioners
                  </li>
                  <li className="flex items-center gap-2 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-accent" />
                    International advisory network
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* What Makes Us Different */}
      <section className="py-16 lg:py-24 bg-muted">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">Yang Membedakan Kami</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Standar kualitas yang menjadi diferensiator utama BIDEV dari konsultan biasa.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {differentiators.map((item, idx) => (
              <Card key={idx}>
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-24 bg-primary text-primary-foreground">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">Experience Our Standards</h2>
          <p className="text-lg text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            See the difference that rigorous quality assurance makes in policy research and consulting.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/case-studies">
              <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
                View Case Studies
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
            <Link href="/request">
              <Button
                size="lg"
                variant="outline"
                className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 bg-transparent"
              >
                Request Proposal
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
