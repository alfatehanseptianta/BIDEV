import type { Metadata } from "next"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Shield, Mail, LockKeyhole, FileText, Users, Database } from "lucide-react"

export const metadata: Metadata = {
  title: "Privacy Statement | BIDEV Institute",
  description:
    "How we collect, use, and protect personal information from clients, experts, event participants, and website visitors.",
}

const dataCategories = [
  {
    title: "Engagement & lead data",
    examples: ["Contact names", "Emails", "Phone numbers", "Organization info", "Form responses"],
    usage: "To respond to proposals, schedule meetings, and route leads inside the CRM-lite.",
    retention: "3 years after last interaction, unless regulation requires shorter period.",
  },
  {
    title: "Expert marketplace data",
    examples: ["CVs", "Headshots", "Availability status", "COI declarations"],
    usage: "To maintain the Board of Experts directory and surface verified profiles.",
    retention: "For as long as the expert is active; removed within 30 days upon request.",
  },
  {
    title: "Event & newsletter data",
    examples: ["Subscriber preferences", "Event attendance", "Feedback surveys"],
    usage: "To send content you opt into and share event materials.",
    retention: "Until you unsubscribe; aggregated analytics kept for internal reporting.",
  },
  {
    title: "Platform usage data",
    examples: ["Cookies", "Device info", "Pages visited", "Form performance"],
    usage: "To secure the site, diagnose issues, and improve experience.",
    retention: "Up to 12 months in anonymised analytics tools.",
  },
]

const rights = [
  "Access – request a copy of personal data we hold about you.",
  "Correction – update inaccurate or incomplete records.",
  "Deletion – ask us to erase information, subject to legal obligations.",
  "Restriction – limit how we process certain data categories.",
  "Objection – opt out of specific communications or processing.",
  "Portability – receive your data in a machine-readable format.",
]

export default function PrivacyPage() {
  return (
    <main className="pt-[72px]">
      {/* Hero */}
      <section className="bg-foreground text-background py-20 lg:py-28">
        <div className="max-w-[960px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge className="mb-4 bg-accent text-accent-foreground">Privacy</Badge>
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-6">We treat data as part of the mandate</h1>
          <p className="text-lg md:text-xl text-background/80">
            This page summarises how BIDEV Institute handles personal information outside of specific contracts. For
            project-level policies, refer to the Data & Privacy Policy and the agreements signed with your institution.
          </p>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground font-semibold mb-3">
              Data categories
            </p>
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">What we collect & why</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              We only collect what is necessary to coordinate engagements, maintain the expert network, or deliver
              events and publications you asked for.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {dataCategories.map((category) => (
              <Card key={category.title} className="border border-border/80">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Database className="w-5 h-5 text-primary" />
                    {category.title}
                  </CardTitle>
                  <CardDescription>{category.usage}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3 text-sm text-muted-foreground">
                  <p>
                    <span className="font-semibold">Examples:</span> {category.examples.join(", ")}
                  </p>
                  <p>
                    <span className="font-semibold">Retention:</span> {category.retention}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Principles */}
      <section className="py-16 lg:py-24">
        <div className="max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-start">
          <Card className="border border-border/80">
            <CardHeader>
              <CardTitle>Privacy principles</CardTitle>
              <CardDescription>These apply to every form, pipeline, and dashboard we run.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {[
                {
                  icon: Shield,
                  title: "Lawful & transparent",
                  desc: "We collect data with consent or legitimate interest, and we communicate how it will be used.",
                },
                {
                  icon: LockKeyhole,
                  title: "Minimised & secure",
                  desc: "Only the minimum required fields are captured, stored with encryption and access controls.",
                },
                {
                  icon: Users,
                  title: "Purpose bound",
                  desc: "We do not sell or share personal data for marketing. Sharing only occurs with explicit approval.",
                },
              ].map((item) => (
                <div key={item.title} className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-2xl bg-primary/10 flex items-center justify-center">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold">{item.title}</p>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          <Card className="border border-border/80">
            <CardHeader>
              <CardTitle>Your rights</CardTitle>
              <CardDescription>Request changes anytime via privacy@bidev.id.</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-muted-foreground">
                {rights.map((right) => (
                  <li key={right}>• {right}</li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Contact */}
      <section className="py-16 lg:py-24 bg-primary text-primary-foreground">
        <div className="max-w-[900px] mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <Mail className="w-12 h-12 mx-auto text-primary-foreground/80" />
          <h2 className="font-serif text-3xl md:text-4xl font-bold">Need a custom privacy rider?</h2>
          <p className="text-lg text-primary-foreground/80">
            Government projects and donor-funded work often require bespoke clauses. We are happy to align with your
            templates.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/data-policy">
              <Button variant="outline" className="border-primary-foreground/40 text-primary-foreground bg-transparent">
                Read detailed data policy
                <FileText className="w-4 h-4 ml-2" />
              </Button>
            </Link>
            <a href="mailto:privacy@bidev.id">
              <Button size="lg" className="bg-background text-foreground hover:bg-background/90">
                Email privacy@bidev.id
              </Button>
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}
