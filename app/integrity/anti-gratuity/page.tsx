import type { Metadata } from "next"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Ban, Gift, AlertCircle, ClipboardList, ArrowRight } from "lucide-react"

export const metadata: Metadata = {
  title: "Anti-Gratuity Statement | BIDEV Institute",
  description:
    "Zero tolerance policy on gifts, facilitation payments, or personal benefits in government and private engagements.",
}

const acceptable = [
  "Souvenirs of nominal value (< Rp 500.000) shared in public ceremonies, recorded in the gift log, and approved by the Integrity Officer within 5 days.",
  "Meals provided during official meetings that are proportional and attended by multiple stakeholders.",
  "Tokens received during public-speaking engagements where local regulations require acceptance—these are immediately handed to BIDEV for donation or logged disposal.",
]

const prohibited = [
  "Cash, gift cards, or digital transfers of any amount.",
  "Travel, accommodation, or entertainment unrelated to the documented scope of work.",
  "Preferential procurement treatment, political contributions, or hiring recommendations tied to personal relationships.",
]

export default function AntiGratuityPage() {
  return (
    <main className="pt-[72px]">
      {/* Hero */}
      <section className="bg-foreground text-background py-20 lg:py-24">
        <div className="max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-8">
          <Badge className="mb-4 bg-accent text-accent-foreground">Integrity</Badge>
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-6">Anti-Gratuity Statement</h1>
          <p className="text-lg md:text-xl text-background/80 max-w-3xl">
            BIDEV Institute, its employees, and experts must never request, offer, or accept gifts, favors, or payments
            that could influence—or appear to influence—professional judgement.
          </p>
        </div>
      </section>

      {/* Policy */}
      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="max-w-[1000px] mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <Card className="border border-border/80">
            <CardHeader>
              <CardTitle>Zero tolerance basics</CardTitle>
              <CardDescription>Applies to every engagement, regardless of funding source.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3 text-sm text-muted-foreground">
              <p>
                <Ban className="inline w-4 h-4 text-primary mr-2" />
                Gifts must be declined politely. When refusal could cause offence, accept, log, and transfer to the
                Integrity Officer within 24 hours.
              </p>
              <p>
                <Gift className="inline w-4 h-4 text-primary mr-2" />
                Hospitality sponsored by partners (travel, accommodation, honoraria) is only allowed when explicitly
                stated in the contract and approved in writing.
              </p>
              <p>
                <ClipboardList className="inline w-4 h-4 text-primary mr-2" />
                The gift log, inspection results, and corrective actions are shared with government counterparts during
                project close-out.
              </p>
            </CardContent>
          </Card>

          <div className="grid md:grid-cols-2 gap-6">
            <Card className="border border-border/80">
              <CardHeader>
                <CardTitle>Permitted with controls</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-sm text-muted-foreground">
                  {acceptable.map((item) => (
                    <li key={item}>• {item}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
            <Card className="border border-border/80">
              <CardHeader>
                <CardTitle>Always prohibited</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-sm text-muted-foreground">
                  {prohibited.map((item) => (
                    <li key={item}>• {item}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-24">
        <div className="max-w-[900px] mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <AlertCircle className="w-12 h-12 mx-auto text-primary" />
          <h2 className="font-serif text-3xl md:text-4xl font-bold">Report gratuity or contact the Integrity Officer</h2>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/integrity/report">
              <Button size="lg">
                Submit report
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
            <a href="mailto:integrity@bidev.id">
              <Button size="lg" variant="outline">
                integrity@bidev.id
              </Button>
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}
