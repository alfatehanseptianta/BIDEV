import type { Metadata } from "next"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { AlertCircle, ClipboardSignature, Clock8, ShieldCheck, ArrowRight } from "lucide-react"

export const metadata: Metadata = {
  title: "Conflict of Interest Policy | BIDEV Institute",
  description:
    "How BIDEV identifies, discloses, mitigates, and documents conflicts of interest across experts and project teams.",
}

const stages = [
  {
    title: "Declaration",
    description: "Every expert completes the digital COI form prior to onboarding and before each new project.",
  },
  {
    title: "Review",
    description:
      "The COI Committee (3 rotating members) evaluates the declaration within 5 business days and may request clarifications.",
  },
  {
    title: "Mitigation",
    description:
      "Possible outcomes include clearance, limited participation, recusal, or rejection. Decisions are logged in the registry.",
  },
  {
    title: "Monitoring",
    description:
      "During delivery, leads must flag new risks. Quarterly audits ensure declarations remain up to date.",
  },
]

const examples = [
  { type: "Financial interest", mitigation: "Expert recused from procurement scoring; provides only technical training." },
  {
    type: "Family relationship",
    mitigation: "Relationship disclosed to client; independent reviewer added to QA gate.",
  },
  {
    type: "Prior employment",
    mitigation: "Cooling-off period enforced; expert acts as informal advisor but not signatory.",
  },
]

export default function CoIPolicyPage() {
  return (
    <main className="pt-[72px]">
      {/* Hero */}
      <section className="bg-foreground text-background py-20 lg:py-24">
        <div className="max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-8">
          <Badge className="mb-4 bg-accent text-accent-foreground">Integrity</Badge>
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-6">Conflict of Interest Policy</h1>
          <p className="text-lg md:text-xl text-background/80 max-w-3xl">
            Maintaining trust with governments and private partners requires clear disclosures and enforceable
            mitigation plans. The COI registry applies to every expert, staff member, and subcontractor.
          </p>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">Declaration workflow</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {stages.map((stage, index) => (
              <Card key={stage.title} className="border border-border/80">
                <CardContent className="p-6 flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-semibold">
                    {index + 1}
                  </div>
                  <div>
                    <p className="font-semibold">{stage.title}</p>
                    <p className="text-sm text-muted-foreground">{stage.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Examples */}
      <section className="py-16 lg:py-24">
        <div className="max-w-[900px] mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <Card className="border border-border/80">
            <CardHeader>
              <CardTitle>Examples & mitigation</CardTitle>
              <CardDescription>Illustrative cases reviewed in 2024.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {examples.map((item) => (
                <div
                  key={item.type}
                  className="p-4 rounded-2xl border border-border/60 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3"
                >
                  <div>
                    <p className="font-semibold">{item.type}</p>
                    <p className="text-sm text-muted-foreground">{item.mitigation}</p>
                  </div>
                  <Badge variant="secondary">Logged & approved</Badge>
                </div>
              ))}
            </CardContent>
          </Card>

          <Card className="border border-border/80">
            <CardHeader>
              <CardTitle>Registry & reporting</CardTitle>
              <CardDescription>Controls that keep the policy alive.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3 text-sm text-muted-foreground">
              <p>
                <ClipboardSignature className="inline w-4 h-4 text-primary mr-2" />
                BIDEV maintains a secure COI database with timestamps, reviewer notes, and mitigation actions.
              </p>
              <p>
                <Clock8 className="inline w-4 h-4 text-primary mr-2" />
                Reminders are triggered every 12 months or sooner when experts join a new proposal.
              </p>
              <p>
                <AlertCircle className="inline w-4 h-4 text-primary mr-2" />
                Breaches are escalated to the Integrity Officer and may result in suspension from the marketplace.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-24 bg-primary text-primary-foreground">
        <div className="max-w-[900px] mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <ShieldCheck className="w-12 h-12 mx-auto text-primary-foreground/80" />
          <h2 className="font-serif text-3xl md:text-4xl font-bold">Need to declare or update a COI?</h2>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/integrity/report">
              <Button size="lg" className="bg-background text-foreground hover:bg-background/90">
                Submit declaration or concern
              </Button>
            </Link>
            <Link href="/downloads">
              <Button
                size="lg"
                variant="outline"
                className="border-primary-foreground/40 text-primary-foreground hover:bg-primary-foreground/10 bg-transparent"
              >
                Download COI template
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
