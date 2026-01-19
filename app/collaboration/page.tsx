import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, Database, FileCode, Handshake, Mail, Shield, Users } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Open Data & Collaboration | BIDEV Institute",
  description:
    "Structured pathways for universities, donors, and civic labs to work with BIDEV on research, data, and co-created initiatives.",
}

const collaborationTracks = [
  {
    title: "Research partnership",
    description: "Co-develop studies, publications, or comparative pilots with joint governance and shared IP rules.",
    elements: ["Shared research design", "Peer-review access", "Joint dissemination plan"],
  },
  {
    title: "Data partnership",
    description: "Secure exchange of datasets or API access with strict privacy, consent, and retention controls.",
    elements: ["Data minimisation review", "Access control design", "Audit-ready documentation"],
  },
  {
    title: "Implementation ally",
    description: "City deployments, training caravans, or policy design sprints delivered with trusted field partners.",
    elements: ["Governance charter", "Integrated project plan", "Shared monitoring dashboard"],
  },
]

const intakeSteps = [
  {
    title: "Intent briefing",
    detail: "Submit a short note outlining objectives, assets, and stakeholders. Our desk responds within 5 days.",
  },
  {
    title: "Due diligence",
    detail: "Mutual review of data sensitivity, roles, and funding (if any) with legal & ethics checkpoints.",
  },
  {
    title: "Collaboration charter",
    detail: "Finalize workstreams, decision cadence, and communication standards before any data moves.",
  },
  {
    title: "Delivery & learning",
    detail: "Shared workspace, monitoring rituals, and post-engagement learning notes for the network.",
  },
]

export default function CollaborationPage() {
  return (
    <main className="pt-[72px]">
      {/* Hero */}
      <section className="bg-foreground text-background py-20 lg:py-28">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <Badge className="mb-4 bg-accent text-accent-foreground">Open Collaboration</Badge>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance">
              Research, data, and mission partners welcome
            </h1>
            <p className="text-lg md:text-xl text-background/80 mb-8">
              We co-design programs with universities, civic labs, and development partners while protecting resident
              data and institutional commitments.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="#request">
                <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
                  Submit collaboration note
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
              <Link href="/partners">
                <Button size="lg" variant="outline" className="bg-transparent border-background/30 text-background">
                  View partner network
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Tracks */}
      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground font-semibold mb-3">Pathways</p>
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">Collaboration tracks</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Select the route that matches your institution—each is backed by standard NDAs, data-sharing agreements,
              and governance templates.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {collaborationTracks.map((track) => (
              <Card key={track.title} className="border border-border/80 h-full">
                <CardHeader>
                  <CardTitle>{track.title}</CardTitle>
                  <CardDescription>{track.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {track.elements.map((item) => (
                      <li key={item} className="text-sm text-muted-foreground">
                        • {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Safeguards + policy */}
      <section className="py-16 lg:py-24">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-6">
            <div>
              <Badge variant="outline" className="mb-3">
                Data governance
              </Badge>
              <h2 className="font-serif text-3xl font-bold mb-4">Controlled access, transparent responsibilities</h2>
              <p className="text-lg text-muted-foreground">
                Every data exchange flows through BIDEV’s security stack and is logged against the owning government or
                partner institution.
              </p>
            </div>

            <Card className="border border-border/80">
              <CardContent className="p-6 flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center">
                  <Shield className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="font-semibold">Request checklist</p>
                  <ul className="text-sm text-muted-foreground mt-2 space-y-1">
                    <li>• Signed NDA + designation of data controller</li>
                    <li>• Metadata summary (fields, format, sensitivity)</li>
                    <li>• Intended use, retention period, dissemination plan</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="border border-border/80">
              <CardContent className="p-6 flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center">
                  <Database className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="font-semibold">Access models</p>
                  <ul className="text-sm text-muted-foreground mt-2 space-y-1">
                    <li>• Secure room (read-only) for sensitive beneficiary data</li>
                    <li>• Token-based API for machine-to-machine updates</li>
                    <li>• Redacted sample sets for exploratory design work</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="border border-border/80 shadow-[0_20px_60px_rgba(15,61,46,0.08)]">
            <CardHeader>
              <CardTitle>Standard policy notes</CardTitle>
              <CardDescription>Downloadable templates shared upon approval.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {[
                { title: "Data request policy", icon: FileCode },
                { title: "Collaborative research MOU", icon: Handshake },
                { title: "Ethics & privacy addendum", icon: Shield },
                { title: "Attribution & publishing guide", icon: Users },
              ].map((doc) => (
                <div
                  key={doc.title}
                  className="flex items-center justify-between p-4 rounded-2xl border border-border/60"
                >
                  <div className="flex items-center gap-3">
                    <doc.icon className="w-5 h-5 text-primary" />
                    <span className="font-medium">{doc.title}</span>
                  </div>
                  <Badge variant="secondary">Request copy</Badge>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Intake steps */}
      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground font-semibold mb-3">
              Engagement flow
            </p>
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">How the collaboration desk works</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {intakeSteps.map((step, index) => (
              <Card key={step.title} className="border border-border/70">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-semibold">
                      {index + 1}
                    </div>
                    <div>
                      <p className="font-semibold">{step.title}</p>
                      <p className="text-sm text-muted-foreground">{step.detail}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Form */}
      <section id="request" className="py-16 lg:py-24">
        <div className="max-w-[960px] mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="border border-border/80">
            <CardHeader>
              <CardTitle>Collaboration request form</CardTitle>
              <CardDescription>We respond within 5 business days.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Organization *</label>
                  <input className="w-full rounded-lg border border-border bg-transparent px-3 py-2" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Contact person *</label>
                  <input className="w-full rounded-lg border border-border bg-transparent px-3 py-2" />
                </div>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Email *</label>
                  <input type="email" className="w-full rounded-lg border border-border bg-transparent px-3 py-2" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Collaboration track *</label>
                  <select className="w-full rounded-lg border border-border bg-transparent px-3 py-2">
                    <option value="">Choose track</option>
                    <option value="research">Research partnership</option>
                    <option value="data">Data partnership</option>
                    <option value="implementation">Implementation ally</option>
                  </select>
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Objectives & assets *</label>
                <textarea className="w-full rounded-lg border border-border bg-transparent px-3 py-2" rows={4} />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Datasets or materials involved</label>
                <textarea className="w-full rounded-lg border border-border bg-transparent px-3 py-2" rows={3} />
              </div>
              <Button className="w-full">
                Submit request
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
              <p className="text-xs text-muted-foreground text-center">
                Questions? Email{" "}
                <a href="mailto:collaborate@bidev.id" className="underline">
                  collaborate@bidev.id
                </a>
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-24 bg-primary text-primary-foreground">
        <div className="max-w-[960px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">Let’s build evidence together</h2>
          <p className="text-lg text-primary-foreground/80 mb-8">
            Whether you bring field access, compute infrastructure, or research talent, we will design a safe,
            high-impact workspace.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="mailto:collaborate@bidev.id">
              <Button size="lg" className="bg-background text-foreground hover:bg-background/90">
                Email the collaboration desk
                <Mail className="ml-2 w-4 h-4" />
              </Button>
            </Link>
            <Link href="/partners">
              <Button
                size="lg"
                variant="outline"
                className="border-primary-foreground/40 text-primary-foreground hover:bg-primary-foreground/10 bg-transparent"
              >
                Explore partner stories
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
