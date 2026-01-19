import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, Calendar, Clock, MapPin, Share2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { events, pastEvents } from "../events-data"

export const metadata: Metadata = {
  title: "Event Detail | BIDEV Institute",
  description: "Event registration and details",
}

export function generateStaticParams() {
  return [...events, ...pastEvents].map((event) => ({ slug: event.slug }))
}

const eventData = {
  slug: "urban-data-governance-workshop",
  title: "Urban Data Governance Workshop",
  type: "Public",
  format: "Workshop",
  date: "2026-02-15",
  time: "09:00 - 16:00 WIB",
  location: "ITB Campus, Bandung",
  address: "Gedung Labtek IX, Jl. Ganesha No. 10, Bandung 40132",
  coverImage: "/professional-training-workshop-urban-planning.jpg",
  coverImageAlt: "Urban data governance workshop",
  description:
    "A full-day workshop on establishing data governance frameworks for urban planning and social protection programs. Learn from experts how to design, implement, and maintain effective data governance structures.",
  overview:
    "This workshop provides practical frameworks for establishing data governance in urban contexts. Participants will learn about data ownership models, quality assurance processes, privacy considerations, and interoperability standards.",
  speakers: [
    {
      name: "Dr. Andi Setiawan",
      role: "Lead Expert, BIDEV",
      bio: "Expert in urban data systems with 15+ years experience",
      avatar: "/indonesian-male-professor-portrait.jpg",
    },
    {
      name: "Prof. Maria Susanti",
      role: "Faculty of Engineering, ITB",
      bio: "Specialist in GIS and spatial data management",
      avatar: "/indonesian-female-professor-academic.jpg",
    },
  ],
  agenda: [
    { time: "08:30 - 09:00", item: "Registration & Coffee" },
    { time: "09:00 - 09:30", item: "Opening & Introduction to Data Governance" },
    { time: "09:30 - 11:00", item: "Session 1: Data Ownership & Accountability Models" },
    { time: "11:00 - 11:15", item: "Coffee Break" },
    { time: "11:15 - 12:30", item: "Session 2: Data Quality & Validation Frameworks" },
    { time: "12:30 - 13:30", item: "Lunch" },
    { time: "13:30 - 15:00", item: "Session 3: Privacy & Security Considerations" },
    { time: "15:00 - 15:15", item: "Coffee Break" },
    { time: "15:15 - 16:00", item: "Workshop: Designing Your Data Governance Framework" },
    { time: "16:00 - 16:30", item: "Closing & Networking" },
  ],
  targetAudience: [
    "Government data managers and IT staff",
    "Policy analysts working with data",
    "Urban planners and researchers",
    "NGO data specialists",
  ],
  prerequisites: [
    "Basic understanding of data management concepts",
    "Familiarity with government data systems (helpful but not required)",
  ],
  registrationOpen: true,
  fee: "Gratis (terbatas 50 peserta)",
  materialsProvided: ["Workshop materials", "Certificate of participation", "Lunch and coffee breaks"],
  mapImage: "/bandung-city-urban-data-dashboard-map.jpg",
  mapImageAlt: "Bandung venue map overview",
}

export default function EventDetailPage() {
  const event = eventData

  return (
    <main className="pt-[72px]">
      {/* Header */}
      <section className="relative overflow-hidden bg-foreground text-background py-12 lg:py-16">
        <div className="absolute inset-0">
          <Image src={event.coverImage} alt={event.coverImageAlt} fill className="object-cover" priority />
          <div className="absolute inset-0 bg-gradient-to-br from-foreground/95 via-foreground/85 to-foreground/70" />
        </div>
        <div className="relative z-10 max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/events"
            className="inline-flex items-center gap-2 text-sm text-background/70 hover:text-background mb-6"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Events
          </Link>
          <div className="flex flex-wrap gap-2 mb-4">
            <Badge className="bg-accent text-accent-foreground">{event.format}</Badge>
            <Badge variant="outline" className="border-background/30 text-background">
              {event.type}
            </Badge>
          </div>
          <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold mb-6 max-w-4xl">{event.title}</h1>
          <div className="flex flex-wrap gap-6 text-background/80">
            <span className="flex items-center gap-2">
              <Calendar className="w-5 h-5" />
              {new Date(event.date).toLocaleDateString("id-ID", {
                weekday: "long",
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </span>
            <span className="flex items-center gap-2">
              <Clock className="w-5 h-5" />
              {event.time}
            </span>
            <span className="flex items-center gap-2">
              <MapPin className="w-5 h-5" />
              {event.location}
            </span>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 lg:py-24">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-12">
              {/* Overview */}
              <div>
                <h2 className="font-serif text-2xl font-bold mb-4">Overview</h2>
                <p className="text-muted-foreground leading-relaxed">{event.overview}</p>
              </div>

              {/* Speakers */}
              <div>
                <h2 className="font-serif text-2xl font-bold mb-6">Speakers</h2>
                <div className="grid sm:grid-cols-2 gap-6">
                  {event.speakers.map((speaker, idx) => (
                    <Card key={idx}>
                      <CardContent className="p-6 flex items-start gap-4">
                        <Avatar className="w-16 h-16">
                          <AvatarImage src={speaker.avatar || "/placeholder.svg"} alt={speaker.name} />
                          <AvatarFallback>
                            {speaker.name
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <h3 className="font-semibold">{speaker.name}</h3>
                          <p className="text-sm text-primary mb-1">{speaker.role}</p>
                          <p className="text-sm text-muted-foreground">{speaker.bio}</p>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Agenda */}
              <div>
                <h2 className="font-serif text-2xl font-bold mb-6">Agenda</h2>
                <div className="space-y-3">
                  {event.agenda.map((item, idx) => (
                    <div key={idx} className="flex gap-4 p-4 bg-muted rounded-lg">
                      <span className="text-sm font-medium text-primary w-32 flex-shrink-0">{item.time}</span>
                      <span className="text-sm">{item.item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Target Audience */}
              <div>
                <h2 className="font-serif text-2xl font-bold mb-4">Target Audience</h2>
                <ul className="space-y-2">
                  {event.targetAudience.map((audience, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-muted-foreground">
                      <span className="w-2 h-2 rounded-full bg-primary flex-shrink-0" />
                      {audience}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Prerequisites */}
              <div>
                <h2 className="font-serif text-2xl font-bold mb-4">Prerequisites</h2>
                <ul className="space-y-2">
                  {event.prerequisites.map((prereq, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-muted-foreground">
                      <span className="w-2 h-2 rounded-full bg-accent flex-shrink-0" />
                      {prereq}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Sidebar - Registration */}
            <div className="lg:col-span-1">
              <div className="sticky top-[96px]">
                <Card>
                  <CardHeader>
                    <CardTitle>Register for this Event</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="space-y-2">
                      <p className="text-sm text-muted-foreground">Registration Fee</p>
                      <p className="text-2xl font-bold text-primary">{event.fee}</p>
                    </div>

                    <div className="space-y-2">
                      <p className="text-sm text-muted-foreground">What's Included</p>
                      <ul className="space-y-1">
                        {event.materialsProvided.map((material, idx) => (
                          <li key={idx} className="text-sm flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                            {material}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="border-t pt-6 space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Full Name *</Label>
                        <Input id="name" placeholder="Your full name" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email *</Label>
                        <Input id="email" type="email" placeholder="your@email.com" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="organization">Organization *</Label>
                        <Input id="organization" placeholder="Your organization" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="role">Role/Position</Label>
                        <Input id="role" placeholder="Your role" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="sector">Sector</Label>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="Select sector" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="government">Government</SelectItem>
                            <SelectItem value="private">Private Sector</SelectItem>
                            <SelectItem value="academic">Academic</SelectItem>
                            <SelectItem value="ngo">NGO/CSO</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="expectations">What do you hope to learn?</Label>
                        <Textarea id="expectations" placeholder="Your expectations..." rows={3} />
                      </div>
                      <Button className="w-full" size="lg" disabled={!event.registrationOpen}>
                        {event.registrationOpen ? "Register Now" : "Registration Closed"}
                      </Button>
                    </div>

                    <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground pt-4 border-t">
                      <Share2 className="w-4 h-4" />
                      <span>Share this event</span>
                    </div>
                  </CardContent>
                </Card>

                {/* Venue */}
                <Card className="mt-6">
                  <CardContent className="p-6">
                    <h3 className="font-semibold mb-2">Venue</h3>
                    <p className="text-sm text-muted-foreground mb-4">{event.address}</p>
                    <div className="relative aspect-video overflow-hidden rounded-lg border border-border/60">
                      <Image src={event.mapImage} alt={event.mapImageAlt} fill className="object-cover" />
                      <div className="absolute inset-0 bg-gradient-to-br from-background/30 via-transparent to-transparent" />
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
