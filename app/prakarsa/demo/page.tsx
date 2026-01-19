import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Play, Calendar, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export const metadata: Metadata = {
  title: "Request Demo | Prakarsa | BIDEV Institute",
  description: "Request a live demo of the Prakarsa social protection data platform.",
}

const demoHighlights = [
  "See the RW-level data input interface in action",
  "Explore the validation workflow from submission to approval",
  "Experience the real-time dashboard and heatmap visualization",
  "Learn about integration options with your existing systems",
  "Discuss deployment options and timelines for your city",
]

const faqs = [
  {
    question: "How long is the demo?",
    answer:
      "A typical live demo takes 45-60 minutes, including Q&A. We can also arrange shorter introductory sessions (30 min) or more detailed technical deep-dives (90+ min) based on your needs.",
  },
  {
    question: "Who should attend?",
    answer:
      "We recommend including decision-makers (Sekda, Kepala Bappeda), technical leads (IT, data managers), and sector representatives (Dinsos, Disdukcapil). Typically 3-8 participants is ideal.",
  },
  {
    question: "Is there a recorded demo available?",
    answer:
      "Yes, we have a 10-minute overview video available. However, we recommend a live demo for the ability to ask questions and see features relevant to your specific context.",
  },
  {
    question: "What should we prepare before the demo?",
    answer:
      "No preparation required. However, having a sense of your current data landscape, key pain points, and number of kelurahan/RW will help us customize the demo to your context.",
  },
]

export default function PrakarsaDemoPage() {
  return (
    <main className="pt-[72px]">
      {/* Hero */}
      <section className="bg-foreground text-background py-20 lg:py-28">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-accent font-semibold mb-4">Prakarsa Platform</p>
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance">
                See Prakarsa in Action
              </h1>
              <p className="text-lg md:text-xl text-background/80 mb-8">
                Book a personalized demo to see how Prakarsa can transform your social protection data management.
              </p>
              <ul className="space-y-3">
                {demoHighlights.map((highlight, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-background/80">{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative">
              <div className="relative aspect-video rounded-xl overflow-hidden bg-background/10">
                <Image
                  src="/prakarsa-dashboard-preview-demo-screenshot.jpg"
                  alt="Prakarsa Dashboard Preview"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <button className="w-16 h-16 rounded-full bg-accent text-accent-foreground flex items-center justify-center hover:scale-110 transition-transform">
                    <Play className="w-6 h-6 ml-1" />
                  </button>
                </div>
              </div>
              <p className="text-center text-sm text-background/60 mt-4">Watch 2-minute explainer video</p>
            </div>
          </div>
        </div>
      </section>

      {/* Demo Request Form */}
      <section className="py-16 lg:py-24">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Form */}
            <Card>
              <CardHeader>
                <CardTitle className="font-serif text-2xl">Book a Demo</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <h3 className="font-semibold">Contact Information</h3>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name *</Label>
                      <Input id="name" placeholder="Your name" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="position">Position/Jabatan *</Label>
                      <Input id="position" placeholder="Your position" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="institution">Institution *</Label>
                    <Input id="institution" placeholder="e.g., Pemerintah Kota Bandung" />
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="email">Email *</Label>
                      <Input id="email" type="email" placeholder="official@gov.go.id" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone *</Label>
                      <Input id="phone" placeholder="+62..." />
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="font-semibold">Demo Preferences</h3>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="city">City/Kabupaten *</Label>
                      <Input id="city" placeholder="Your city" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="province">Province *</Label>
                      <Input id="province" placeholder="Your province" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="kelurahan">Number of Kelurahan</Label>
                    <Input id="kelurahan" placeholder="e.g., 151" />
                  </div>
                  <div className="space-y-2">
                    <Label>Demo Format *</Label>
                    <RadioGroup defaultValue="live" className="flex flex-wrap gap-4">
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="live" id="live" />
                        <Label htmlFor="live" className="font-normal">
                          Live Demo (Online)
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="video" id="video" />
                        <Label htmlFor="video" className="font-normal">
                          Video First
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="onsite" id="onsite" />
                        <Label htmlFor="onsite" className="font-normal">
                          On-site Visit
                        </Label>
                      </div>
                    </RadioGroup>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="preferred-date">Preferred Date</Label>
                      <Input id="preferred-date" type="date" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="preferred-time">Preferred Time</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select time" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="morning">Morning (09:00-12:00)</SelectItem>
                          <SelectItem value="afternoon">Afternoon (13:00-17:00)</SelectItem>
                          <SelectItem value="flexible">Flexible</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="attendees">Expected Attendees</Label>
                    <Input id="attendees" placeholder="e.g., Sekda, Kepala Bappeda, Kadis Sosial" />
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="font-semibold">Context</h3>
                  <div className="space-y-2">
                    <Label htmlFor="current-system">Current Data Management System</Label>
                    <Textarea
                      id="current-system"
                      placeholder="Describe how you currently manage social protection data..."
                      rows={3}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="challenges">Key Challenges</Label>
                    <Textarea id="challenges" placeholder="What problems are you trying to solve?" rows={3} />
                  </div>
                </div>

                <Button size="lg" className="w-full">
                  <Calendar className="mr-2 w-4 h-4" />
                  Request Demo
                </Button>
              </CardContent>
            </Card>

            {/* Info */}
            <div className="space-y-8">
              <div>
                <h2 className="font-serif text-2xl md:text-3xl font-bold mb-4">What to Expect</h2>
                <p className="text-muted-foreground mb-6">
                  Our demos are personalized to your city's context. We'll walk you through the platform features most
                  relevant to your needs and answer all your questions.
                </p>
                <div className="grid sm:grid-cols-2 gap-4">
                  <Card>
                    <CardContent className="p-4 text-center">
                      <p className="text-3xl font-bold text-primary mb-1">45-60</p>
                      <p className="text-sm text-muted-foreground">minutes duration</p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-4 text-center">
                      <p className="text-3xl font-bold text-primary mb-1">3-8</p>
                      <p className="text-sm text-muted-foreground">recommended attendees</p>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* FAQ */}
              <div>
                <h3 className="font-serif text-xl font-bold mb-4">Frequently Asked Questions</h3>
                <Accordion type="single" collapsible className="w-full">
                  {faqs.map((faq, idx) => (
                    <AccordionItem key={idx} value={`faq-${idx}`}>
                      <AccordionTrigger className="text-left text-sm font-medium">{faq.question}</AccordionTrigger>
                      <AccordionContent className="text-sm text-muted-foreground">{faq.answer}</AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>

              {/* Contact */}
              <Card className="bg-muted">
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-2">Questions before booking?</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Contact our Prakarsa team directly for quick answers.
                  </p>
                  <p className="text-sm">
                    <strong>Email:</strong> prakarsa@bidev.id
                  </p>
                  <p className="text-sm">
                    <strong>WhatsApp:</strong> +62 XXX XXXX XXXX
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Related */}
      <section className="py-16 lg:py-24 bg-muted">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-2xl md:text-3xl font-bold mb-4">Learn More About Prakarsa</h2>
          </div>
          <div className="grid sm:grid-cols-3 gap-6">
            <Link href="/prakarsa/features">
              <Card className="h-full hover:border-primary/30 transition-colors">
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-2">Features</h3>
                  <p className="text-sm text-muted-foreground">Explore all platform features in detail.</p>
                </CardContent>
              </Card>
            </Link>
            <Link href="/prakarsa/packages">
              <Card className="h-full hover:border-primary/30 transition-colors">
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-2">Packages</h3>
                  <p className="text-sm text-muted-foreground">Compare deployment packages and pricing.</p>
                </CardContent>
              </Card>
            </Link>
            <Link href="/case-studies/prakarsa-bandung-pilot">
              <Card className="h-full hover:border-primary/30 transition-colors">
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-2">Bandung Case Study</h3>
                  <p className="text-sm text-muted-foreground">See results from the Bandung implementation.</p>
                </CardContent>
              </Card>
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
