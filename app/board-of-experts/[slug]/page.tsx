import type { Metadata } from "next"
import { notFound } from "next/navigation"
import type { ExpertProfile } from "@/lib/experts-data"
import { expertIds, getExpertById, getExpertBySlug } from "@/lib/experts-data"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Calendar,
  Clock,
  ExternalLink,
  Podcast,
  Video,
  ArrowLeft,
  BadgeCheck,
  Shield,
  Briefcase,
} from "lucide-react"
import Link from "next/link"
import { RequestMeetingForm } from "@/components/request-meeting-form"

export async function generateStaticParams() {
  return expertIds.map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const expert = getExpertBySlug(slug)

  if (!expert) {
    return { title: "Expert not found" }
  }

  return {
    title: `${expert.name} | Board of Experts`,
    description: `${expert.title} at ${expert.institution}. Expertise: ${expert.expertise.join(", ")}.`,
  }
}

export default async function ExpertProfilePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const expert = getExpertBySlug(slug)

  if (!expert) {
    notFound()
  }

  const relatedExperts = expert.relatedExpertIds
    .map((id) => getExpertById(id))
    .filter((item): item is ExpertProfile => Boolean(item))

  return (
    <main className="min-h-screen">
      {/* Breadcrumb */}
      <section className="pt-[72px] bg-muted/30 border-b border-border">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link
            href="/board-of-experts"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Board of Experts
          </Link>
        </div>
      </section>

      {/* Profile Header */}
      <section className="bg-muted/30 pb-12">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8 items-start">
            {/* Photo & Basic Info */}
            <div className="lg:col-span-1">
              <div className="bg-card rounded-2xl border border-border overflow-hidden">
                <div className="aspect-square overflow-hidden">
                  <img
                    src={expert.image || "/placeholder.svg"}
                    alt={expert.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <Badge variant="secondary">{expert.institution}</Badge>
                    {expert.availability === "Available this month" && (
                      <Badge className="bg-[#0F3D2E] text-white">Available</Badge>
                    )}
                  </div>
                  <Badge
                    variant="outline"
                    className="mb-3 flex items-center gap-1 text-[11px] font-semibold border-green-200 text-emerald-700"
                  >
                    <BadgeCheck className="w-3 h-3" />
                    {expert.verification.label} - {expert.verification.lastReview}
                  </Badge>
                  <h1 className="font-serif text-2xl font-bold text-foreground mb-1">{expert.name}</h1>
                  <p className="text-muted-foreground mb-1">{expert.title}</p>
                  <p className="text-sm text-muted-foreground mb-4">{expert.department}</p>

                  <div className="flex flex-wrap gap-1 mb-6">
                    {expert.expertise.map((tag, i) => (
                      <span key={i} className="text-xs px-2 py-1 bg-muted rounded text-muted-foreground">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="space-y-3 mb-6">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Clock className="w-4 h-4" />
                      <span>{expert.responseSLA}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar className="w-4 h-4" />
                      <span>{expert.availability}</span>
                    </div>
                    <div className="flex items-start gap-2 text-sm text-muted-foreground">
                      <Shield className="w-4 h-4 text-primary" />
                      <span>
                        COI: {expert.coi.status} (updated {expert.coi.lastUpdated})
                        <br />
                        {expert.coi.notes}
                      </span>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Link href="#request-meeting">
                      <Button className="w-full bg-[#B89B5E] text-[#1C1C1C] hover:bg-[#B89B5E]/90">
                        Request Meeting
                      </Button>
                    </Link>
                    <Link href="#request-meeting">
                      <Button variant="outline" className="w-full bg-transparent">
                        Request Proposal
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Bio */}
              <Card>
                <CardHeader>
                  <CardTitle>About</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="prose prose-sm max-w-none text-muted-foreground">
                    {expert.bio.split("\n\n").map((paragraph, i) => (
                      <p key={i}>{paragraph}</p>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Service Offerings */}
              <Card>
                <CardHeader>
                  <CardTitle>Service Offerings</CardTitle>
                  <CardDescription>Ways to engage with this expert</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4">
                    {expert.services.map((service, index) => (
                      <div key={index} className="p-5 bg-muted/50 rounded-xl border border-border">
                        <div className="flex items-start gap-4">
                          <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                            <service.icon className="w-5 h-5 text-primary" />
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center justify-between mb-2">
                              <h4 className="font-semibold text-foreground">{service.type}</h4>
                              <span className="text-xs text-muted-foreground">{service.duration}</span>
                            </div>
                            <p className="text-sm text-muted-foreground mb-3">{service.description}</p>
                            <div className="flex flex-wrap gap-2">
                              {service.outputs.map((output, i) => (
                                <span key={i} className="text-xs px-2 py-1 bg-card rounded border border-border">
                                  {output}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Trust markers */}
              <Card>
                <CardHeader>
                  <CardTitle>Quality markers</CardTitle>
                  <CardDescription>Why this profile is sales-ready and defensible.</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="p-4 rounded-2xl border border-border/60 bg-muted/40">
                      <p className="text-sm font-semibold flex items-center gap-2 mb-1">
                        <BadgeCheck className="w-4 h-4 text-primary" />
                        {expert.verification.label}
                      </p>
                      <p className="text-xs text-muted-foreground">Last peer review: {expert.verification.lastReview}</p>
                    </div>
                    <div className="p-4 rounded-2xl border border-border/60 bg-muted/40">
                      <p className="text-sm font-semibold flex items-center gap-2 mb-1">
                        <Shield className="w-4 h-4 text-primary" />
                        {expert.coi.status}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        Updated {expert.coi.lastUpdated}. {expert.coi.notes}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Selected engagements */}
              <Card>
                <CardHeader>
                  <CardTitle>Selected engagements</CardTitle>
                  <CardDescription>Representative work and results.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {expert.selectedEngagements.map((engagement, index) => (
                    <div key={index} className="p-4 rounded-2xl border border-border/60 flex items-start gap-3">
                      <Briefcase className="w-4 h-4 text-primary mt-1" />
                      <div>
                        <p className="font-semibold">{engagement.title}</p>
                        <p className="text-xs text-muted-foreground">
                          {engagement.client} - {engagement.outcome}
                        </p>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Publications */}
              <Card>
                <CardHeader>
                  <CardTitle>Key Publications</CardTitle>
                  <CardDescription>Research and thought leadership</CardDescription>
                </CardHeader>
                <CardContent>
                  <Tabs defaultValue="all">
                    <TabsList className="mb-4">
                      <TabsTrigger value="all">All</TabsTrigger>
                      <TabsTrigger value="journal">Journal</TabsTrigger>
                      <TabsTrigger value="brief">Policy Brief</TabsTrigger>
                      <TabsTrigger value="infographic">Infographic</TabsTrigger>
                    </TabsList>
                    <TabsContent value="all">
                      <div className="grid sm:grid-cols-3 gap-4">
                        {expert.publications.map((pub, index) => (
                          <Link
                            key={index}
                            href="#"
                            className="group p-4 bg-muted/50 rounded-xl border border-border hover:border-primary/30 transition-colors"
                          >
                            <div className="aspect-[5/3] bg-muted rounded-lg mb-3 overflow-hidden">
                              <img
                                src={pub.thumbnail || "/placeholder.svg"}
                                alt={pub.title}
                                className="w-full h-full object-cover"
                              />
                            </div>
                            <Badge variant="secondary" className="mb-2">
                              {pub.type}
                            </Badge>
                            <h4 className="text-sm font-medium text-foreground group-hover:text-primary transition-colors line-clamp-2">
                              {pub.title}
                            </h4>
                            <p className="text-xs text-muted-foreground mt-1">{pub.year}</p>
                          </Link>
                        ))}
                      </div>
                    </TabsContent>
                  </Tabs>
                </CardContent>
              </Card>

              {/* Media Appearances */}
              <Card>
                <CardHeader>
                  <CardTitle>Media Appearances</CardTitle>
                  <CardDescription>Podcasts, videos, and interviews</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {expert.media.map((item, index) => (
                      <a
                        key={index}
                        href={item.link}
                        className="flex items-center gap-4 p-4 bg-muted/50 rounded-xl border border-border hover:border-primary/30 transition-colors"
                      >
                        <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                          {item.type === "podcast" ? (
                            <Podcast className="w-5 h-5 text-primary" />
                          ) : (
                            <Video className="w-5 h-5 text-primary" />
                          )}
                        </div>
                        <div className="flex-1">
                          <h4 className="font-medium text-foreground">{item.title}</h4>
                          <p className="text-sm text-muted-foreground">{item.date}</p>
                        </div>
                        <ExternalLink className="w-4 h-4 text-muted-foreground" />
                      </a>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Related Experts */}
      <section className="py-16 bg-background">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-2xl font-bold text-foreground mb-8">Related Experts</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {relatedExperts.map((related) => (
              <Link
                key={related.id}
                href={`/board-of-experts/${related.id}`}
                className="group bg-card rounded-xl border border-border overflow-hidden hover:shadow-lg hover:border-primary/30 transition-all"
              >
                <div className="aspect-square overflow-hidden bg-muted">
                  <img
                    src={related.image || "/placeholder.svg"}
                    alt={related.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-4">
                  <Badge variant="secondary" className="mb-2">
                    {related.institution}
                  </Badge>
                  <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                    {related.name}
                  </h3>
                  <p className="text-sm text-muted-foreground">{related.title}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Request Meeting Form */}
      <section id="request-meeting" className="py-16 bg-muted/30">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto">
            <h2 className="font-serif text-2xl font-bold text-foreground mb-2 text-center">Request a Meeting</h2>
            <p className="text-muted-foreground text-center mb-8">
              Fill out the form below and we&apos;ll coordinate with the expert to schedule your consultation.
            </p>
            <RequestMeetingForm expertName={expert.name} expertId={expert.id} />
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}


