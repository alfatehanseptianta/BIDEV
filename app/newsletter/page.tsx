"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import {
  Mail,
  ArrowRight,
  CheckCircle2,
  BookOpen,
  Lightbulb,
  TrendingUp,
  Calendar,
  Users,
  FileText,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Separator } from "@/components/ui/separator"

const benefits = [
  {
    icon: Lightbulb,
    title: "Expert Insights",
    description: "Analisis mendalam dari para pakar tentang isu urban dan kebijakan publik terkini.",
  },
  {
    icon: TrendingUp,
    title: "Data & Trends",
    description: "Data terbaru dan tren pembangunan kota di Indonesia dan global.",
  },
  {
    icon: BookOpen,
    title: "Publication Previews",
    description: "Akses awal ke policy brief, infografis, dan publikasi terbaru kami.",
  },
  {
    icon: Calendar,
    title: "Event Invitations",
    description: "Undangan eksklusif ke webinar, workshop, dan acara BIDEV lainnya.",
  },
]

const topicPreferences = [
  { id: "urban-planning", label: "Urban Planning & Development" },
  { id: "social-protection", label: "Social Protection & Data" },
  { id: "housing", label: "Housing & Settlements" },
  { id: "mobility", label: "Mobility & Transportation" },
  { id: "economic-dev", label: "Economic Development" },
  { id: "governance", label: "Governance & Public Policy" },
  { id: "sustainability", label: "Climate & Sustainability" },
  { id: "investment", label: "Investment & Private Sector" },
]

const sampleIssues = [
  {
    title: "Urban Data Revolution: Lessons from Prakarsa Bandung",
    date: "January 2026",
    topics: ["Social Protection", "Data Governance"],
    preview: "How real-time RW-level data is transforming social program targeting in Bandung...",
  },
  {
    title: "Affordable Housing Crisis: Policy Options for West Java",
    date: "December 2025",
    topics: ["Housing", "Urban Planning"],
    preview: "Our latest research on housing affordability gaps and potential interventions...",
  },
  {
    title: "ESG for Cities: A New Framework for Urban Investment",
    date: "November 2025",
    topics: ["Investment", "Sustainability"],
    preview: "How cities can attract responsible investment through ESG-aligned development...",
  },
]

export default function NewsletterPage() {
  const [email, setEmail] = useState("")
  const [name, setName] = useState("")
  const [selectedTopics, setSelectedTopics] = useState<string[]>([])
  const [submitted, setSubmitted] = useState(false)

  const handleTopicToggle = (topicId: string) => {
    setSelectedTopics((prev) => (prev.includes(topicId) ? prev.filter((t) => t !== topicId) : [...prev, topicId]))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Simulate submission
    setSubmitted(true)
  }

  return (
    <main className="pt-[72px]">
      {/* Hero */}
      <section className="bg-foreground text-background py-20 lg:py-28">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-accent text-accent-foreground">Newsletter</Badge>
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance">
                BIDEV Insights
              </h1>
              <p className="text-lg md:text-xl text-background/80 mb-8">
                Dapatkan analisis mendalam, data terbaru, dan insights eksklusif dari para pakar urban development dan
                kebijakan publik langsung ke inbox Anda.
              </p>
              <div className="flex flex-wrap gap-6 text-sm text-background/70">
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  <span>Monthly digest</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4" />
                  <span>5,000+ subscribers</span>
                </div>
                <div className="flex items-center gap-2">
                  <FileText className="w-4 h-4" />
                  <span>Free forever</span>
                </div>
              </div>
            </div>

            {/* Signup Form */}
            <Card className="bg-background text-foreground">
              <CardHeader>
                <CardTitle>Subscribe to BIDEV Insights</CardTitle>
                <CardDescription>Join our community of urban professionals and policy makers.</CardDescription>
              </CardHeader>
              <CardContent>
                {!submitted ? (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Name</Label>
                      <Input id="name" placeholder="Your name" value={name} onChange={(e) => setName(e.target.value)} />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="your@email.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                      />
                    </div>
                    <Button type="submit" className="w-full">
                      Subscribe
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                    <p className="text-xs text-muted-foreground text-center">
                      We respect your privacy. Unsubscribe anytime.
                    </p>
                  </form>
                ) : (
                  <div className="text-center py-6">
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                      <CheckCircle2 className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="font-semibold text-lg mb-2">You&apos;re subscribed!</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      Check your email to confirm your subscription. Welcome to BIDEV Insights!
                    </p>
                    <Link href="/publications">
                      <Button variant="outline">
                        Explore Publications
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </Button>
                    </Link>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* What You'll Get */}
      <section className="py-16 lg:py-24">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">What You&apos;ll Get</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Konten berkualitas yang membantu Anda tetap update dengan perkembangan terbaru.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit) => (
              <Card key={benefit.title} className="text-center">
                <CardContent className="pt-6">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">{benefit.title}</h3>
                  <p className="text-sm text-muted-foreground">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Topic Preferences */}
      <section className="py-16 lg:py-24 bg-muted">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">Customize Your Topics</h2>
              <p className="text-lg text-muted-foreground">
                Pilih topik yang paling relevan untuk Anda. Anda bisa mengubah preferensi kapan saja.
              </p>
            </div>

            <Card>
              <CardContent className="p-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  {topicPreferences.map((topic) => (
                    <div key={topic.id} className="flex items-center space-x-3">
                      <Checkbox
                        id={topic.id}
                        checked={selectedTopics.includes(topic.id)}
                        onCheckedChange={() => handleTopicToggle(topic.id)}
                      />
                      <Label htmlFor={topic.id} className="font-normal cursor-pointer">
                        {topic.label}
                      </Label>
                    </div>
                  ))}
                </div>
                <Separator className="my-6" />
                <div className="flex items-center justify-between">
                  <p className="text-sm text-muted-foreground">{selectedTopics.length} topics selected</p>
                  <Button variant="outline" size="sm" onClick={() => setSelectedTopics([])}>
                    Clear all
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Sample Issues */}
      <section className="py-16 lg:py-24">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">Recent Issues</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Preview dari edisi newsletter terbaru kami.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {sampleIssues.map((issue, idx) => (
              <Card key={idx} className="group hover:border-primary/30 transition-colors">
                <CardHeader>
                  <div className="flex items-center gap-2 mb-2">
                    <Badge variant="secondary">{issue.date}</Badge>
                  </div>
                  <CardTitle className="text-lg group-hover:text-primary transition-colors">{issue.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">{issue.preview}</p>
                  <div className="flex flex-wrap gap-2">
                    {issue.topics.map((topic, tidx) => (
                      <Badge key={tidx} variant="outline" className="text-xs">
                        {topic}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link href="/publications">
              <Button variant="outline">
                View All Publications
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 lg:py-24 bg-primary text-primary-foreground">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">Join 5,000+ Urban Professionals</h2>
            <p className="text-lg text-primary-foreground/80 mb-8">
              Subscribe now and never miss an insight on urban development, policy innovation, and data-driven
              governance.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <Input type="email" placeholder="Enter your email" className="bg-primary-foreground text-foreground" />
              <Button className="bg-accent text-accent-foreground hover:bg-accent/90 whitespace-nowrap">
                Subscribe Now
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
