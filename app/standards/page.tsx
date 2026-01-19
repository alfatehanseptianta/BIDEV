import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, CheckCircle2, Scale, BookOpen, Shield, Users, Lightbulb, Heart, Eye } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export const metadata: Metadata = {
  title: "Ethics & Standards | BIDEV Institute",
  description: "Our ethical principles, research standards, and methodology framework that guide all our work.",
}

const coreValues = [
  {
    icon: Lightbulb,
    title: "Evidence-Based",
    description: "Semua rekomendasi didasarkan pada bukti empiris yang dapat diverifikasi.",
  },
  {
    icon: Scale,
    title: "Independence",
    description: "Bebas dari pengaruh politik dan komersial dalam analisis dan rekomendasi.",
  },
  {
    icon: Eye,
    title: "Transparency",
    description: "Metodologi, asumsi, dan keterbatasan diungkapkan secara jelas.",
  },
  {
    icon: Heart,
    title: "Stakeholder Respect",
    description: "Menghormati hak dan kepentingan semua pihak yang terdampak.",
  },
  {
    icon: Shield,
    title: "Integrity",
    description: "Menjaga kejujuran dan konsistensi dalam semua interaksi profesional.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "Bekerja sama dengan pemangku kepentingan untuk hasil yang optimal.",
  },
]

const researchStandards = [
  {
    category: "Data Collection",
    standards: [
      "Informed consent dari responden",
      "Protokol pengumpulan data yang terdokumentasi",
      "Quality control untuk akurasi data",
      "Perlindungan privasi dan anonimitas",
    ],
  },
  {
    category: "Analysis",
    standards: [
      "Metodologi yang appropriate dan justified",
      "Triangulasi sumber dan metode",
      "Dokumentasi asumsi dan limitasi",
      "Peer review untuk validasi",
    ],
  },
  {
    category: "Reporting",
    standards: [
      "Pemisahan fakta dan opini",
      "Citation yang lengkap dan akurat",
      "Bahasa yang jelas dan accessible",
      "Rekomendasi yang actionable",
    ],
  },
  {
    category: "Dissemination",
    standards: [
      "Persetujuan klien sebelum publikasi",
      "Attribution yang appropriate",
      "Format yang sesuai audience",
      "Open access untuk riset publik",
    ],
  },
]

const ethicalFAQs = [
  {
    question: "Bagaimana BIDEV menangani konflik kepentingan?",
    answer:
      "Semua pakar wajib mendeklarasikan potensi konflik kepentingan sebelum terlibat dalam proyek. COI Committee independen mengevaluasi deklarasi dan dapat memutuskan recusal jika diperlukan. Detail kebijakan tersedia di halaman Conflict of Interest Policy.",
  },
  {
    question: "Apakah BIDEV menerima proyek yang mendukung agenda politik tertentu?",
    answer:
      "BIDEV berkomitmen pada independensi dan tidak menerima proyek yang bertujuan untuk mendukung agenda politik partisan. Kami fokus pada analisis berbasis bukti dan rekomendasi kebijakan yang objektif.",
  },
  {
    question: "Bagaimana data sensitif ditangani dalam proyek?",
    answer:
      "Data sensitif ditangani sesuai protokol keamanan yang ketat, termasuk enkripsi, access control, dan data retention policy. Untuk proyek yang melibatkan data warga, kami menerapkan standar privasi yang sesuai dengan regulasi yang berlaku.",
  },
  {
    question: "Apakah klien dapat mempengaruhi kesimpulan penelitian?",
    answer:
      "Klien dapat memberikan input pada scope dan metodologi, tetapi tidak dapat mempengaruhi temuan atau kesimpulan. Integritas analisis adalah non-negotiable dan dijaga melalui proses peer review independen.",
  },
  {
    question: "Bagaimana BIDEV memastikan kualitas output dari berbagai pakar?",
    answer:
      "Semua output melalui 4-tahap QA process termasuk internal review dan external peer review. Template dan guidelines standar memastikan konsistensi kualitas terlepas dari pakar yang terlibat.",
  },
]

const methodologyFrameworks = [
  "PESTLE Analysis",
  "Stakeholder Mapping",
  "Theory of Change",
  "Cost-Benefit Analysis",
  "MCDA/ANP",
  "M&E Framework Design",
  "Policy Analysis Framework",
  "Data Validation Protocol",
]

export default function StandardsPage() {
  return (
    <main className="pt-[72px]">
      {/* Hero */}
      <section className="bg-foreground text-background py-20 lg:py-28">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <Badge className="mb-4 bg-accent text-accent-foreground">Our Standards</Badge>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance">
              Ethics & Methodology Standards
            </h1>
            <p className="text-lg md:text-xl text-background/80 mb-8">
              Prinsip etika dan standar metodologi yang mengatur seluruh pekerjaan kami. Kami percaya bahwa proses yang
              benar menghasilkan output yang berkualitas.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="#values">
                <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
                  Our Core Values
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
              <Link href="/integrity">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-background/30 text-background hover:bg-background/10 bg-transparent"
                >
                  Integrity Center
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section id="values" className="py-16 lg:py-24">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">Core Values</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Nilai-nilai inti yang menjadi fondasi semua aktivitas BIDEV.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {coreValues.map((value) => (
              <Card key={value.title} className="text-center">
                <CardContent className="pt-6">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <value.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{value.title}</h3>
                  <p className="text-sm text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Research Standards */}
      <section className="py-16 lg:py-24 bg-muted">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">Research Standards</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Standar penelitian yang kami terapkan di setiap tahap pekerjaan.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {researchStandards.map((category) => (
              <Card key={category.category}>
                <CardHeader>
                  <CardTitle className="text-lg">{category.category}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {category.standards.map((standard, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                        {standard}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Methodology Library Preview */}
      <section className="py-16 lg:py-24">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4" variant="outline">
                Methodology
              </Badge>
              <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">Methodology Library</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Kami menggunakan framework metodologi yang terstandardisasi dan terdokumentasi untuk memastikan
                konsistensi dan reproduktibilitas.
              </p>
              <div className="flex flex-wrap gap-2 mb-8">
                {methodologyFrameworks.map((framework, idx) => (
                  <Badge key={idx} variant="secondary">
                    {framework}
                  </Badge>
                ))}
              </div>
              <Link href="/methodology">
                <Button>
                  Explore Methodology Library
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
            </div>

            <Card>
              <CardHeader>
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <BookOpen className="w-6 h-6 text-primary" />
                </div>
                <CardTitle>Standardized Frameworks</CardTitle>
                <CardDescription>
                  Setiap metodologi memiliki dokumentasi lengkap termasuk kapan digunakan, prosedur, template, dan
                  contoh aplikasi.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-center gap-2 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-primary" />
                    One-pager downloadable untuk setiap metode
                  </li>
                  <li className="flex items-center gap-2 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-primary" />
                    Template dan checklist standar
                  </li>
                  <li className="flex items-center gap-2 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-primary" />
                    Case examples dari proyek sebelumnya
                  </li>
                  <li className="flex items-center gap-2 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-primary" />
                    Training modules untuk tim
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 lg:py-24 bg-muted">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">Ethics FAQ</h2>
              <p className="text-lg text-muted-foreground">Pertanyaan umum tentang etika dan standar kami.</p>
            </div>

            <Accordion type="single" collapsible className="w-full">
              {ethicalFAQs.map((faq, idx) => (
                <AccordionItem key={idx} value={`item-${idx}`}>
                  <AccordionTrigger className="text-left font-medium">{faq.question}</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Related Pages */}
      <section className="py-16 lg:py-24 bg-primary text-primary-foreground">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">Learn More</h2>
          <p className="text-lg text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Explore our compliance, quality, and governance standards in detail.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/integrity">
              <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
                Integrity Center
              </Button>
            </Link>
            <Link href="/quality">
              <Button
                size="lg"
                variant="outline"
                className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 bg-transparent"
              >
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
          </div>
        </div>
      </section>
    </main>
  )
}
