import type { Metadata } from "next"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { AlertTriangle, Mail, ShieldCheck, ArrowRight } from "lucide-react"

export const metadata: Metadata = {
  title: "Whistleblowing & Integrity Report | BIDEV Institute",
  description:
    "Safe channels to report ethics breaches, suspected corruption, harassment, or data misuse across BIDEV engagements.",
}

const channels = [
  { label: "Email", value: "integrity@bidev.id", note: "Monitored by Integrity Officer" },
  { label: "Phone", value: "+62 811-0000-155", note: "Weekdays 09.00-18.00 WIB" },
  { label: "Secure form", value: "This page", note: "Optionally anonymous" },
]

const faqs = [
  {
    question: "Apa itu kanal pelaporan integritas BIDEV?",
    answer:
      "Saluran aman untuk melaporkan dugaan pelanggaran etika, konflik kepentingan, pelecehan, atau penyalahgunaan data di lingkungan kerja BIDEV.",
  },
  {
    question: "Untuk apa kanal ini dibuat?",
    answer:
      "Agar publik, mitra, dan tim proyek bisa menyampaikan kekhawatiran secara aman tanpa takut retaliasi.",
  },
  {
    question: "Siapa yang meninjau laporan?",
    answer:
      "Integrity Officer dan Komite Compliance & Ethics yang independen dari tim proyek terkait.",
  },
  {
    question: "Apakah saya boleh melapor secara anonim?",
    answer:
      "Boleh. Anda dapat mengosongkan nama dan kontak di formulir. Namun, kontak membantu jika kami perlu klarifikasi.",
  },
  {
    question: "Bagaimana cara saya melapor?",
    answer: "Gunakan formulir di halaman ini, atau kirim email/telepon ke kanal yang tercantum.",
  },
  {
    question: "Apa saja yang bisa saya laporkan?",
    answer:
      "Pelanggaran etika, kecurangan/korupsi, pelecehan/diskriminasi, konflik kepentingan, atau penyalahgunaan data.",
  },
  {
    question: "Apakah identitas saya dirahasiakan?",
    answer: "Ya. Identitas dilindungi dan hanya diakses oleh tim integritas. Retaliasi dilarang.",
  },
  {
    question: "Setelah saya kirim laporan, apa yang terjadi?",
    answer:
      "Laporan diverifikasi, dinilai tingkat risikonya, lalu ditindaklanjuti sesuai prosedur. Jika ada kontak, kami akan memberi pembaruan ringkas.",
  },
  {
    question: "Apakah saya bisa memantau status laporan?",
    answer:
      "Jika Anda menyertakan kontak, kami akan memberikan pembaruan. Laporan anonim tetap diproses tanpa update langsung.",
  },
  {
    question: "Kalau saya melihat data yang salah, bisa saya laporkan juga?",
    answer: "Bisa. Sertakan detail data, lokasi, dan sumber agar tim dapat melakukan verifikasi.",
  },
  {
    question: "Apakah saya bisa bekerja sama dengan tim integritas?",
    answer: "Bisa. Kami terbuka untuk pelatihan, audit, atau kolaborasi kebijakan.",
  },
  {
    question: "Bagaimana cara menghubungi tim integritas?",
    answer: "Email ke integrity@bidev.id atau gunakan formulir aman di halaman ini.",
  },
]

export default function IntegrityReportPage() {
  return (
    <main className="pt-[72px]">
      {/* Hero */}
      <section className="bg-foreground text-background py-20 lg:py-24">
        <div className="max-w-[960px] mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <Badge className="bg-accent text-accent-foreground">Whistleblowing</Badge>
          <h1 className="font-serif text-4xl md:text-5xl font-bold">Report concerns safely</h1>
          <p className="text-lg md:text-xl text-background/80">
            Reports can be anonymous. All submissions are handled by the Integrity Officer and the Compliance & Ethics
            Committee; retaliation is strictly prohibited.
          </p>
        </div>
      </section>

      {/* Channels */}
      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="max-w-[900px] mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="border border-border/80">
            <CardHeader>
              <CardTitle>Channels</CardTitle>
              <CardDescription>Choose the route you are most comfortable with.</CardDescription>
            </CardHeader>
            <CardContent className="grid sm:grid-cols-3 gap-4">
              {channels.map((channel) => (
                <div key={channel.label} className="p-4 rounded-2xl border border-border/60 text-center">
                  <p className="text-sm uppercase tracking-widest text-muted-foreground">{channel.label}</p>
                  <p className="font-semibold text-lg mt-1">{channel.value}</p>
                  <p className="text-xs text-muted-foreground">{channel.note}</p>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Form */}
      <section className="py-16 lg:py-24">
        <div className="max-w-[900px] mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="border border-border/80">
            <CardHeader>
              <CardTitle>Secure report form</CardTitle>
              <CardDescription>Leave fields blank if you prefer to stay anonymous.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Name (optional)</label>
                  <input className="w-full rounded-lg border border-border bg-transparent px-3 py-2" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Email or phone (optional)</label>
                  <input className="w-full rounded-lg border border-border bg-transparent px-3 py-2" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Project / location (if known)</label>
                <input className="w-full rounded-lg border border-border bg-transparent px-3 py-2" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Type of concern *</label>
                <select className="w-full rounded-lg border border-border bg-transparent px-3 py-2">
                  <option value="">Select</option>
                  <option value="fraud">Fraud / corruption</option>
                  <option value="harassment">Harassment / discrimination</option>
                  <option value="data">Data/privacy breach</option>
                  <option value="coi">Conflict of interest</option>
                  <option value="other">Other misconduct</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Description *</label>
                <textarea className="w-full rounded-lg border border-border bg-transparent px-3 py-2" rows={5} />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Supporting links or files (optional)</label>
                <input type="url" className="w-full rounded-lg border border-border bg-transparent px-3 py-2" />
              </div>
              <Button className="w-full">
                Submit securely
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
              <p className="text-xs text-muted-foreground text-center">
                By submitting you acknowledge that the information is accurate to the best of your knowledge. Personal
                data is processed according to the{" "}
                <Link href="/privacy" className="underline">
                  Privacy Statement
                </Link>
                .
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="max-w-[900px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="font-serif text-3xl md:text-4xl font-bold">Frequently Asked Questions (FAQ)</h2>
            <p className="text-lg text-muted-foreground mt-2">
              Pertanyaan umum seputar pelaporan dan perlindungan pelapor.
            </p>
          </div>
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={faq.question}
                value={`item-${index}`}
                className="bg-card rounded-2xl border border-border/70 px-6"
              >
                <AccordionTrigger className="text-left hover:no-underline py-4">
                  <span className="font-medium text-foreground">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="pb-4 text-muted-foreground">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-24 bg-primary text-primary-foreground">
        <div className="max-w-[900px] mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <AlertTriangle className="w-12 h-12 mx-auto text-primary-foreground/80" />
          <h2 className="font-serif text-3xl md:text-4xl font-bold">Need an update on an existing report?</h2>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="mailto:integrity@bidev.id">
              <Button size="lg" className="bg-background text-foreground hover:bg-background/90">
                Email integrity@bidev.id
                <Mail className="ml-2 w-4 h-4" />
              </Button>
            </a>
            <Link href="/integrity">
              <Button
                size="lg"
                variant="outline"
                className="border-primary-foreground/40 text-primary-foreground hover:bg-primary-foreground/10 bg-transparent"
              >
                Back to Integrity Center
                <ShieldCheck className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
