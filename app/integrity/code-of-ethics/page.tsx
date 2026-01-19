import type { Metadata } from "next"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Shield, BookOpen, Scale, Users, ArrowRight, PenLine } from "lucide-react"

export const metadata: Metadata = {
  title: "Code of Ethics | BIDEV Institute",
  description:
    "Principles that govern every research, advisory, and product engagement delivered by BIDEV and its Board of Experts.",
}

const principles = [
  {
    title: "Evidence before advocacy",
    description: "We separate facts from opinions, disclose assumptions, and cite all sources used.",
    icon: BookOpen,
  },
  {
    title: "Independence",
    description:
      "BIDEV and its experts do not accept assignments that would compromise objective analysis or create undue influence.",
    icon: Scale,
  },
  {
    title: "Respect & inclusion",
    description:
      "We treat beneficiaries, government counterparts, and fellow experts with dignity and recognise local knowledge.",
    icon: Users,
  },
  {
    title: "Accountability",
    description:
      "Deliverables are peer reviewed, COI declarations are mandatory, and whistleblowing routes are always open.",
    icon: Shield,
  },
]

const obligations = [
  "Declare any financial, institutional, or familial interests before accepting an engagement.",
  "Use secure communication channels for all project materials and never re-use client data outside the scope.",
  "Credit co-authors, field teams, and data sources transparently.",
  "Seek consent for recordings, photography, or publication of sensitive materials.",
  "Refuse gifts, fees, or favors that are unrelated to documented contracts or exceed de minimis thresholds.",
]

export default function CodeOfEthicsPage() {
  return (
    <main className="pt-[72px]">
      {/* Hero */}
      <section className="bg-foreground text-background py-20 lg:py-24">
        <div className="max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-8">
          <Badge className="mb-4 bg-accent text-accent-foreground">Integrity</Badge>
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-6">Code of Ethics</h1>
          <p className="text-lg md:text-xl text-background/80 max-w-3xl">
            Adopted by the BIDEV Board of Directors, this code applies to employees, contractors, and every member of
            the Board of Experts, regardless of geography.
          </p>
        </div>
      </section>

      {/* Principles */}
      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">Core principles</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {principles.map((principle) => (
              <Card key={principle.title} className="border border-border/80">
                <CardContent className="p-6 flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center">
                    <principle.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold">{principle.title}</p>
                    <p className="text-sm text-muted-foreground">{principle.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Obligations */}
      <section className="py-16 lg:py-24">
        <div className="max-w-[900px] mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="border border-border/70">
            <CardHeader>
              <CardTitle>Professional obligations</CardTitle>
              <CardDescription>Extract from Section 3 of the Code.</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 text-sm text-muted-foreground">
                {obligations.map((item) => (
                  <li key={item}>• {item}</li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-24 bg-primary text-primary-foreground">
        <div className="max-w-[960px] mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <p className="text-sm uppercase tracking-[0.3em] text-primary-foreground/70">Download & report</p>
          <h2 className="font-serif text-3xl md:text-4xl font-bold">Need the full policy or want to raise a concern?</h2>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/integrity/report">
              <Button size="lg" className="bg-background text-foreground hover:bg-background/90">
                Report an integrity issue
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
            <Link href="/downloads">
              <Button
                size="lg"
                variant="outline"
                className="border-primary-foreground/40 text-primary-foreground hover:bg-primary-foreground/10 bg-transparent"
              >
                Download Code of Ethics PDF
                <PenLine className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
