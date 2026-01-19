import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Download, Mail, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

export const metadata: Metadata = {
  title: "Media Kit | BIDEV Institute",
  description: "Press resources, brand assets, and media contact information for BIDEV Institute.",
}

const keyFacts = [
  { label: "Founded", value: "2024" },
  { label: "Board of Experts", value: "35+" },
  { label: "Partner Institutions", value: "12" },
  { label: "Projects Delivered", value: "25+" },
  { label: "Cities Covered", value: "8" },
  { label: "Publications", value: "15+" },
]

const leadership = [
  {
    name: "Dr. Hadi Prasetyo",
    role: "Executive Director",
    bio: "Former urban planning advisor with 20+ years of experience in development sector.",
    avatar: "/indonesian-male-executive-professional-portrait.jpg",
    isSpokesperson: true,
  },
  {
    name: "Dr. Dewi Anggraini",
    role: "Research Director",
    bio: "Leading researcher in social protection and poverty analysis.",
    avatar: "/indonesian-female-researcher-professional-portrait.jpg",
    isSpokesperson: true,
  },
]

const downloads = [
  { name: "BIDEV Logo Pack (PNG, SVG)", file: "bidev-logo-pack.zip", size: "2.4 MB" },
  { name: "Brand Guidelines", file: "bidev-brand-guidelines.pdf", size: "1.8 MB" },
  { name: "Boilerplate (ID/EN)", file: "bidev-boilerplate.pdf", size: "0.5 MB" },
  { name: "Fact Sheet 2026", file: "bidev-factsheet-2026.pdf", size: "0.8 MB" },
  { name: "Leadership Photos", file: "bidev-leadership-photos.zip", size: "5.2 MB" },
]

export default function MediaPage() {
  return (
    <main className="pt-[72px]">
      {/* Hero */}
      <section className="bg-foreground text-background py-20 lg:py-28">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance">Press & Media</h1>
            <p className="text-lg md:text-xl text-background/80 mb-8">
              Resources for journalists and media professionals. Download brand assets, access key facts, and connect
              with our communications team.
            </p>
            <Link href="#contact">
              <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
                <Mail className="mr-2 w-4 h-4" />
                Media Inquiry
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Boilerplate */}
      <section className="py-16 lg:py-24">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="font-serif text-2xl md:text-3xl font-bold mb-6">About BIDEV (ID)</h2>
              <div className="prose prose-slate max-w-none">
                <p className="text-muted-foreground leading-relaxed">
                  <strong>BIDEV (Bandung Institute for Development and Urban Futures)</strong> adalah lembaga riset dan
                  konsultasi kebijakan berbasis di Bandung yang menghubungkan pengetahuan akademis dengan kebutuhan
                  praktis pemerintah dan sektor swasta. Didirikan oleh jaringan akademisi dari ITB dan UNPAD, BIDEV
                  mengkhususkan diri dalam pengembangan program berbasis bukti (evidence-based), terutama dalam bidang
                  perlindungan sosial, perencanaan kota, dan tata kelola data.
                </p>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  Produk unggulan BIDEV adalah <strong>Prakarsa</strong>, platform data perlindungan sosial yang telah
                  diimplementasikan di Kota Bandung dan membantu pemerintah daerah mengambil keputusan berbasis data
                  real-time.
                </p>
              </div>
            </div>
            <div>
              <h2 className="font-serif text-2xl md:text-3xl font-bold mb-6">About BIDEV (EN)</h2>
              <div className="prose prose-slate max-w-none">
                <p className="text-muted-foreground leading-relaxed">
                  <strong>BIDEV (Bandung Institute for Development and Urban Futures)</strong> is a Bandung-based policy
                  research and consulting institute that bridges academic knowledge with the practical needs of
                  government and private sector organizations. Founded by a network of academics from ITB and UNPAD,
                  BIDEV specializes in evidence-based program development, particularly in social protection, urban
                  planning, and data governance.
                </p>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  BIDEV's flagship product is <strong>Prakarsa</strong>, a social protection data platform implemented
                  in Bandung City that helps local governments make decisions based on real-time data.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Facts */}
      <section className="py-16 lg:py-24 bg-muted">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-2xl md:text-3xl font-bold mb-8 text-center">Key Facts</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {keyFacts.map((fact, idx) => (
              <Card key={idx}>
                <CardContent className="p-6 text-center">
                  <p className="text-3xl font-bold text-primary mb-1">{fact.value}</p>
                  <p className="text-sm text-muted-foreground">{fact.label}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-16 lg:py-24">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-2xl md:text-3xl font-bold mb-8">Leadership & Spokespersons</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {leadership.map((person, idx) => (
              <Card key={idx}>
                <CardContent className="p-6 flex items-start gap-6">
                  <div className="relative w-24 h-24 rounded-xl overflow-hidden flex-shrink-0">
                    <Image src={person.avatar || "/placeholder.svg"} alt={person.name} fill className="object-cover" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">{person.name}</h3>
                    <p className="text-primary text-sm mb-2">{person.role}</p>
                    <p className="text-sm text-muted-foreground mb-3">{person.bio}</p>
                    {person.isSpokesperson && (
                      <span className="inline-flex items-center px-2 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium">
                        Official Spokesperson
                      </span>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Downloads */}
      <section className="py-16 lg:py-24 bg-muted">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-2xl md:text-3xl font-bold mb-8">Brand Assets & Downloads</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {downloads.map((item, idx) => (
              <Card key={idx} className="hover:border-primary/30 transition-colors">
                <CardContent className="p-6 flex items-center justify-between">
                  <div>
                    <h3 className="font-medium mb-1">{item.name}</h3>
                    <p className="text-sm text-muted-foreground">{item.size}</p>
                  </div>
                  <Button variant="outline" size="icon">
                    <Download className="w-4 h-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Media Contact */}
      <section id="contact" className="py-16 lg:py-24">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="font-serif text-2xl md:text-3xl font-bold mb-6">Media Contact</h2>
              <p className="text-muted-foreground mb-8">
                For press inquiries, interview requests, or additional information, please contact our communications
                team.
              </p>
              <div className="space-y-4">
                <div>
                  <p className="font-semibold">Media Relations</p>
                  <p className="text-muted-foreground">media@bidev.id</p>
                </div>
                <div>
                  <p className="font-semibold">Press Office</p>
                  <p className="text-muted-foreground">+62 22 XXX XXXX</p>
                </div>
                <div>
                  <p className="font-semibold">Response Time</p>
                  <p className="text-muted-foreground">We aim to respond to media inquiries within 24 hours.</p>
                </div>
              </div>
            </div>
            <Card>
              <CardHeader>
                <CardTitle>Media Inquiry Form</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Your Name *</Label>
                    <Input id="name" placeholder="Full name" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="outlet">Media Outlet *</Label>
                    <Input id="outlet" placeholder="Publication/outlet name" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email *</Label>
                  <Input id="email" type="email" placeholder="your@email.com" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone</Label>
                  <Input id="phone" placeholder="+62..." />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="topic">Inquiry Topic *</Label>
                  <Input id="topic" placeholder="What is your inquiry about?" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="deadline">Deadline</Label>
                  <Input id="deadline" type="date" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Message *</Label>
                  <Textarea id="message" placeholder="Your inquiry details..." rows={4} />
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
