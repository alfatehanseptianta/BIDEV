import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, MapPin, Users, Clock, Filter } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export const metadata: Metadata = {
  title: "Events & Training | BIDEV Institute",
  description: "Join our public events, training programs, and expert-led workshops.",
}

const events = [
  {
    id: "1",
    slug: "urban-data-governance-workshop",
    title: "Urban Data Governance Workshop",
    type: "Public",
    format: "Workshop",
    date: "2026-02-15",
    time: "09:00 - 16:00 WIB",
    location: "ITB Campus, Bandung",
    city: "Bandung",
    topic: "Data Governance",
    description:
      "A full-day workshop on establishing data governance frameworks for urban planning and social protection programs.",
    image: "/professional-training-workshop-urban-planning.jpg",
    imageAlt: "Urban data governance workshop",
    speakers: [
      { name: "Dr. Andi Setiawan", role: "Lead Expert, BIDEV" },
      { name: "Prof. Maria Susanti", role: "Faculty of Engineering, ITB" },
    ],
    targetAudience: ["Government officials", "Data managers", "Policy analysts"],
    registrationOpen: true,
    featured: true,
  },
  {
    id: "2",
    slug: "prakarsa-implementation-training",
    title: "Prakarsa Implementation Training",
    type: "Private",
    format: "Training",
    date: "2026-02-22",
    time: "09:00 - 17:00 WIB",
    location: "Online (Zoom)",
    city: "Online",
    topic: "Prakarsa",
    description:
      "Intensive training for Prakarsa operators covering data collection, validation workflows, and dashboard usage.",
    image: "/prakarsa-dashboard-preview-demo-screenshot.jpg",
    imageAlt: "Prakarsa dashboard training",
    speakers: [{ name: "Tim Prakarsa BIDEV", role: "Implementation Team" }],
    targetAudience: ["Prakarsa operators", "OPD staff", "Data entry personnel"],
    registrationOpen: true,
    featured: false,
  },
  {
    id: "3",
    slug: "evidence-based-policy-seminar",
    title: "Evidence-Based Policy Making Seminar",
    type: "Public",
    format: "Seminar",
    date: "2026-03-05",
    time: "13:00 - 17:00 WIB",
    location: "UNPAD Convention Center",
    city: "Bandung",
    topic: "Policy",
    description: "Expert panel discussion on translating research evidence into actionable policy recommendations.",
    image: "/policy-brief-writing-guide-document.jpg",
    imageAlt: "Policy briefing session",
    speakers: [
      { name: "Dr. Siti Rahmawati", role: "Policy Advisor, BIDEV" },
      { name: "Dr. Ahmad Wijaya", role: "Bappenas" },
      { name: "Prof. Linda Hartono", role: "UNPAD" },
    ],
    targetAudience: ["Policy makers", "Researchers", "NGO leaders"],
    registrationOpen: true,
    featured: true,
  },
  {
    id: "4",
    slug: "gis-urban-planning-bootcamp",
    title: "GIS for Urban Planning Bootcamp",
    type: "Public",
    format: "Bootcamp",
    date: "2026-03-15",
    time: "09:00 - 16:00 WIB (3 days)",
    location: "ITB Campus, Bandung",
    city: "Bandung",
    topic: "Urban Planning",
    description: "Three-day intensive bootcamp on using GIS tools for urban planning analysis and visualization.",
    image: "/urban-data-visualization-charts-map-business.jpg",
    imageAlt: "GIS urban planning analysis",
    speakers: [
      { name: "Ir. Budi Santoso", role: "Technical Lead, BIDEV" },
      { name: "Dr. Rini Handayani", role: "GIS Expert" },
    ],
    targetAudience: ["Urban planners", "GIS analysts", "Government staff"],
    registrationOpen: false,
    featured: false,
  },
  {
    id: "5",
    slug: "social-protection-forum",
    title: "West Java Social Protection Forum 2026",
    type: "Public",
    format: "Forum",
    date: "2026-04-10",
    time: "08:00 - 17:00 WIB",
    location: "Gedung Sate, Bandung",
    city: "Bandung",
    topic: "Social Protection",
    description:
      "Annual forum bringing together government, academia, and civil society to discuss social protection challenges and innovations.",
    image: "/social-protection-playbook-cover.jpg",
    imageAlt: "Social protection forum",
    speakers: [
      { name: "Gubernur Jawa Barat", role: "Keynote Speaker" },
      { name: "Multiple experts", role: "Panel sessions" },
    ],
    targetAudience: ["Government officials", "NGOs", "Academics", "Media"],
    registrationOpen: true,
    featured: true,
  },
]

const pastEvents = [
  {
    id: "past-1",
    slug: "housing-policy-workshop-2025",
    title: "Affordable Housing Policy Workshop",
    date: "2025-11-20",
    location: "Bandung",
    materials: ["Slides", "Recording", "Photos"],
    image: "/housing-policy-planning-meeting-indonesia.jpg",
    imageAlt: "Affordable housing policy workshop",
  },
  {
    id: "past-2",
    slug: "data-literacy-training-2025",
    title: "Data Literacy for Government Officials",
    date: "2025-10-15",
    location: "Online",
    materials: ["Slides", "Recording"],
    image: "/professional-training-workshop-urban-planning.jpg",
    imageAlt: "Data literacy training",
  },
]

const topicOptions = ["All Topics", "Data Governance", "Policy", "Urban Planning", "Social Protection", "Prakarsa"]
const cityOptions = ["All Locations", "Bandung", "Jakarta", "Online"]
const typeOptions = ["All Types", "Public", "Private"]

function formatDate(dateString: string) {
  return new Date(dateString).toLocaleDateString("id-ID", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  })
}

export default function EventsPage() {
  const upcomingEvents = events.filter((e) => new Date(e.date) >= new Date())
  const featuredEvents = upcomingEvents.filter((e) => e.featured)

  return (
    <main className="pt-[72px]">
      {/* Hero */}
      <section className="bg-foreground text-background py-20 lg:py-28">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance">
              Events & Training
            </h1>
            <p className="text-lg md:text-xl text-background/80 mb-8">
              Join our public events, expert-led workshops, and training programs to build capacity and stay updated on
              the latest in urban development and policy.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Events */}
      {featuredEvents.length > 0 && (
        <section className="py-16 lg:py-24 bg-muted">
          <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-serif text-2xl md:text-3xl font-bold mb-8">Featured Events</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredEvents.map((event) => (
                <Card key={event.id} className="overflow-hidden hover:border-primary/30 transition-all hover:shadow-lg">
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <img src={event.image} alt={event.imageAlt} className="h-full w-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
                    <div className="absolute bottom-3 left-3 right-3 rounded-lg bg-background/90 p-3 backdrop-blur-sm">
                      <Badge variant="secondary" className="mb-2">
                        {event.format}
                      </Badge>
                      <p className="font-semibold text-foreground">{formatDate(event.date)}</p>
                      <p className="text-sm text-muted-foreground">{event.time}</p>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="font-serif text-xl font-semibold mb-2">{event.title}</h3>
                    <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{event.description}</p>
                    <div className="space-y-2 mb-4">
                      <p className="text-sm flex items-center gap-2">
                        <MapPin className="w-4 h-4 text-muted-foreground" />
                        {event.location}
                      </p>
                      <p className="text-sm flex items-center gap-2">
                        <Users className="w-4 h-4 text-muted-foreground" />
                        {event.speakers.length} speaker{event.speakers.length > 1 ? "s" : ""}
                      </p>
                    </div>
                    <Link href={`/events/${event.slug}`}>
                      <Button className="w-full" disabled={!event.registrationOpen}>
                        {event.registrationOpen ? "Register Now" : "Registration Closed"}
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* All Events */}
      <section className="py-16 lg:py-24">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <Tabs defaultValue="upcoming" className="w-full">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
              <TabsList>
                <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
                <TabsTrigger value="past">Past Events</TabsTrigger>
              </TabsList>
              <div className="flex flex-wrap items-center gap-2">
                <Filter className="w-4 h-4 text-muted-foreground" />
                <Select defaultValue="All Topics">
                  <SelectTrigger className="w-[140px]">
                    <SelectValue placeholder="Topic" />
                  </SelectTrigger>
                  <SelectContent>
                    {topicOptions.map((opt) => (
                      <SelectItem key={opt} value={opt}>
                        {opt}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <Select defaultValue="All Locations">
                  <SelectTrigger className="w-[140px]">
                    <SelectValue placeholder="Location" />
                  </SelectTrigger>
                  <SelectContent>
                    {cityOptions.map((opt) => (
                      <SelectItem key={opt} value={opt}>
                        {opt}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <Select defaultValue="All Types">
                  <SelectTrigger className="w-[120px]">
                    <SelectValue placeholder="Type" />
                  </SelectTrigger>
                  <SelectContent>
                    {typeOptions.map((opt) => (
                      <SelectItem key={opt} value={opt}>
                        {opt}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            <TabsContent value="upcoming">
              <div className="space-y-4">
                {upcomingEvents.map((event) => (
                  <Card key={event.id} className="hover:border-primary/30 transition-colors">
                    <CardContent className="p-6">
                      <div className="flex flex-col lg:flex-row lg:items-center gap-6">
                        <div className="flex flex-col sm:flex-row sm:items-center gap-4 lg:w-56">
                          <div className="relative h-20 w-full overflow-hidden rounded-lg border border-border/60 sm:w-28">
                            <img src={event.image} alt={event.imageAlt} className="h-full w-full object-cover" />
                          </div>
                          <div className="text-center sm:text-left">
                            <p className="text-3xl font-bold text-primary">{new Date(event.date).getDate()}</p>
                            <p className="text-sm text-muted-foreground">
                              {new Date(event.date).toLocaleDateString("id-ID", { month: "short", year: "numeric" })}
                            </p>
                          </div>
                        </div>
                        <div className="flex-1">
                          <div className="flex flex-wrap gap-2 mb-2">
                            <Badge variant={event.type === "Public" ? "default" : "secondary"}>{event.type}</Badge>
                            <Badge variant="outline">{event.format}</Badge>
                            <Badge variant="outline">{event.topic}</Badge>
                          </div>
                          <h3 className="font-serif text-xl font-semibold mb-2">{event.title}</h3>
                          <p className="text-sm text-muted-foreground mb-3 line-clamp-2">{event.description}</p>
                          <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                            <span className="flex items-center gap-1">
                              <Clock className="w-4 h-4" />
                              {event.time}
                            </span>
                            <span className="flex items-center gap-1">
                              <MapPin className="w-4 h-4" />
                              {event.location}
                            </span>
                            <span className="flex items-center gap-1">
                              <Users className="w-4 h-4" />
                              {event.speakers.map((s) => s.name).join(", ")}
                            </span>
                          </div>
                        </div>
                        <div className="flex-shrink-0">
                          <Link href={`/events/${event.slug}`}>
                            <Button disabled={!event.registrationOpen}>
                              {event.registrationOpen ? "Register" : "Closed"}
                              {event.registrationOpen && <ArrowRight className="ml-2 w-4 h-4" />}
                            </Button>
                          </Link>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="past">
              <div className="space-y-4">
                {pastEvents.map((event) => (
                  <Card key={event.id}>
                    <CardContent className="p-6">
                      <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                        <div className="relative h-20 w-full overflow-hidden rounded-lg border border-border/60 sm:w-28">
                          <img src={event.image} alt={event.imageAlt} className="h-full w-full object-cover" />
                        </div>
                        <div className="flex-1">
                          <p className="text-sm text-muted-foreground mb-1">{formatDate(event.date)}</p>
                          <h3 className="font-semibold mb-2">{event.title}</h3>
                          <p className="text-sm text-muted-foreground">{event.location}</p>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {event.materials.map((material) => (
                            <Button key={material} variant="outline" size="sm">
                              {material}
                            </Button>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-24 bg-primary text-primary-foreground">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">Need a custom training program?</h2>
          <p className="text-lg text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            We design and deliver tailored training programs for government and private organizations.
          </p>
          <Link href="/services/executive-training">
            <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
              Explore Training Services
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </Link>
        </div>
      </section>
    </main>
  )
}
