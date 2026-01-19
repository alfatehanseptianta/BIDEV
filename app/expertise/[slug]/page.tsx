import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { notFound } from "next/navigation"
import { ArrowRight, ArrowLeft, Building2, Users, BookOpen, CheckCircle2, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const expertiseClusters = {
  "urban-planning": {
    title: "Urban Planning & Development",
    icon: Building2,
    description:
      "Perencanaan tata ruang, pengembangan kawasan, dan strategi pertumbuhan kota berkelanjutan dengan pendekatan berbasis bukti.",
    longDescription:
      "Klaster Urban Planning & Development fokus pada perencanaan dan pengembangan kota yang terintegrasi dan berkelanjutan. Kami membantu pemerintah daerah dan pengembang swasta dalam merancang strategi pertumbuhan kota yang mempertimbangkan aspek sosial, ekonomi, dan lingkungan.",
    whatWeDo: [
      "Master plan dan RTRW review/development",
      "Urban design guidelines",
      "Land use optimization studies",
      "Infrastructure development planning",
      "Transit-oriented development (TOD)",
      "Special economic zone planning",
    ],
    framework:
      "Kami menggunakan pendekatan Integrated Urban Development Framework yang menggabungkan analisis spasial, ekonomi, dan sosial untuk menghasilkan rekomendasi yang komprehensif.",
    topics: ["Spatial Planning", "Zoning", "Urban Design", "Land Use", "Infrastructure", "TOD"],
    color: "bg-blue-500",
    heroImage: "/housing-urban-planning-architecture-blueprint.jpg",
    heroImageAlt: "Urban planning blueprints and housing development",
    experts: [
      {
        id: "andika-pratama",
        name: "Prof. Dr. Andika Pratama, PhD",
        title: "Urban Planning Expert",
        institution: "ITB",
        image: "/professional-indonesian-man-professor-formal-portr.jpg",
      },
      {
        id: "bambang-wijaya",
        name: "Prof. Bambang Wijaya, Ph.D",
        title: "Infrastructure Specialist",
        institution: "ITB",
        image: "/professional-indonesian-man-engineer-formal-portra.jpg",
      },
      {
        id: "hendra-saputra",
        name: "Dr. Hendra Saputra, M.T",
        title: "Transportation Engineer",
        institution: "ITB",
        image: "/professional-indonesian-man-transport-engineer-for.jpg",
      },
    ],
    publications: [
      { title: "Bandung Metropolitan Area Development Strategy 2045", type: "Research Report" },
      { title: "TOD Implementation Guidelines for Indonesian Cities", type: "Policy Brief" },
      { title: "Urban Sprawl and Its Impact on West Java", type: "Working Paper" },
    ],
    caseStudies: [
      { title: "West Java Affordable Housing Roadmap", slug: "jabar-housing-roadmap" },
      { title: "Bandung TOD Corridor Study", slug: "bandung-tod-corridor" },
    ],
    services: ["Policy Research", "Roadmap Development", "Expert Advisory"],
  },
  "social-protection": {
    title: "Social Protection & Data",
    icon: Users,
    description:
      "Sistem perlindungan sosial, data kemiskinan, dan targeting program bantuan sosial berbasis data untuk efektivitas program.",
    longDescription:
      "Klaster Social Protection & Data mengkhususkan diri pada pengembangan sistem data dan targeting untuk program perlindungan sosial. Kami membantu pemerintah daerah meningkatkan efektivitas program bantuan sosial melalui pendekatan berbasis bukti dan data yang akurat.",
    whatWeDo: [
      "Social registry design and implementation",
      "Poverty data analysis and mapping",
      "Program targeting methodology",
      "Monitoring & evaluation framework",
      "Beneficiary verification systems",
      "Data governance for social programs",
    ],
    framework:
      "Kami menerapkan Social Protection Data Framework yang mengintegrasikan pengumpulan data, validasi, analisis, dan pemanfaatan untuk targeting yang lebih akurat.",
    topics: ["Social Registry", "Poverty Data", "Program Targeting", "M&E", "Data Governance"],
    color: "bg-rose-500",
    heroImage: "/social-protection-toolkit-government.jpg",
    heroImageAlt: "Social protection data toolkit",
    experts: [
      {
        id: "dewi-anggraini",
        name: "Prof. Dr. Dewi Anggraini",
        title: "Public Policy Expert",
        institution: "UNPAD",
        image: "/professional-indonesian-woman-policy-expert-formal.jpg",
      },
      {
        id: "siti-rahayu",
        name: "Dr. Siti Rahayu, M.Sc",
        title: "Economics Researcher",
        institution: "UNPAD",
        image: "/professional-indonesian-woman-academic-formal-port.jpg",
      },
    ],
    publications: [
      { title: "Prakarsa: A New Model for Social Data Management", type: "Research Report" },
      { title: "Improving Bansos Targeting Through RW-Level Data", type: "Policy Brief" },
    ],
    caseStudies: [{ title: "Prakarsa Pilot Implementation in Bandung", slug: "prakarsa-bandung-pilot" }],
    services: ["Prakarsa Deployment", "Policy Research", "Training Program"],
  },
}

type ClusterSlug = keyof typeof expertiseClusters

export async function generateStaticParams() {
  return Object.keys(expertiseClusters).map((slug) => ({
    slug,
  }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const cluster = expertiseClusters[slug as ClusterSlug]

  if (!cluster) {
    return { title: "Not Found" }
  }

  return {
    title: `${cluster.title} | BIDEV Institute`,
    description: cluster.description,
  }
}

export default async function ExpertiseDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const cluster = expertiseClusters[slug as ClusterSlug]

  if (!cluster) {
    notFound()
  }

  const Icon = cluster.icon

  return (
    <main className="pt-[72px]">
      {/* Hero */}
      <section className="bg-foreground text-background py-20 lg:py-28">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/expertise"
            className="inline-flex items-center gap-2 text-background/70 hover:text-background mb-6 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            All Expertise Areas
          </Link>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div
                className={`w-16 h-16 rounded-xl ${cluster.color} bg-opacity-20 flex items-center justify-center mb-6`}
              >
                <Icon className={`w-8 h-8 ${cluster.color.replace("bg-", "text-")}`} />
              </div>
              <h1 className="font-serif text-4xl md:text-5xl font-bold mb-6 text-balance">{cluster.title}</h1>
              <p className="text-lg md:text-xl text-background/80 mb-8">{cluster.longDescription}</p>
              <div className="flex flex-wrap gap-2 mb-8">
                {cluster.topics.map((topic, idx) => (
                  <Badge key={idx} variant="secondary" className="bg-background/20 text-background border-0">
                    {topic}
                  </Badge>
                ))}
              </div>
              <Link href="/request">
                <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
                  Consult with Experts
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
            </div>

            <div className="relative aspect-[4/3]">
              <Image
                src={cluster.heroImage}
                alt={cluster.heroImageAlt}
                fill
                className="object-cover rounded-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-16 lg:py-24">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="font-serif text-3xl font-bold mb-4">What We Do</h2>
              <p className="text-lg text-muted-foreground mb-8">{cluster.framework}</p>
              <ul className="space-y-3">
                {cluster.whatWeDo.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Recommended Services</CardTitle>
                <CardDescription>Services commonly requested in this expertise area</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                {cluster.services.map((service, idx) => (
                  <Link key={idx} href={`/services/${service.toLowerCase().replace(/ /g, "-")}`}>
                    <div className="flex items-center justify-between p-3 bg-muted rounded-lg hover:bg-muted/80 transition-colors">
                      <span className="font-medium">{service}</span>
                      <ArrowRight className="w-4 h-4 text-muted-foreground" />
                    </div>
                  </Link>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Experts */}
      <section className="py-16 lg:py-24 bg-muted">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="font-serif text-3xl font-bold mb-2">Experts in This Cluster</h2>
              <p className="text-muted-foreground">Meet the experts specializing in {cluster.title.toLowerCase()}</p>
            </div>
            <Link href="/board-of-experts">
              <Button variant="outline">
                View All Experts
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {cluster.experts.map((expert, idx) => (
              <Card key={idx} className="hover:border-primary/30 transition-colors">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <Avatar className="w-16 h-16">
                      <AvatarImage src={expert.image || "/placeholder.svg"} alt={expert.name} />
                      <AvatarFallback>
                        {expert.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <h3 className="font-semibold">{expert.name}</h3>
                      <p className="text-sm text-muted-foreground">{expert.title}</p>
                      <Badge variant="secondary" className="mt-1 text-xs">
                        {expert.institution}
                      </Badge>
                    </div>
                  </div>
                  <Link href={`/board-of-experts/${expert.id}`}>
                    <Button variant="ghost" size="sm" className="w-full text-primary">
                      View Profile
                      <ExternalLink className="ml-1 w-3 h-3" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Publications & Case Studies */}
      <section className="py-16 lg:py-24">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Publications */}
            <div>
              <div className="flex items-center gap-2 mb-6">
                <BookOpen className="w-5 h-5 text-primary" />
                <h2 className="font-serif text-2xl font-bold">Related Publications</h2>
              </div>
              <div className="space-y-4">
                {cluster.publications.map((pub, idx) => (
                  <Card key={idx}>
                    <CardContent className="p-4 flex items-center justify-between">
                      <div>
                        <h3 className="font-medium mb-1">{pub.title}</h3>
                        <Badge variant="secondary" className="text-xs">
                          {pub.type}
                        </Badge>
                      </div>
                      <Button variant="ghost" size="icon">
                        <ArrowRight className="w-4 h-4" />
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
              <Link href={`/publications?topic=${slug}`} className="block mt-4">
                <Button variant="outline" className="w-full bg-transparent">
                  View All Publications
                </Button>
              </Link>
            </div>

            {/* Case Studies */}
            <div>
              <div className="flex items-center gap-2 mb-6">
                <CheckCircle2 className="w-5 h-5 text-primary" />
                <h2 className="font-serif text-2xl font-bold">Case Studies</h2>
              </div>
              <div className="space-y-4">
                {cluster.caseStudies.map((cs, idx) => (
                  <Card key={idx}>
                    <CardContent className="p-4 flex items-center justify-between">
                      <h3 className="font-medium">{cs.title}</h3>
                      <Link href={`/case-studies/${cs.slug}`}>
                        <Button variant="ghost" size="icon">
                          <ArrowRight className="w-4 h-4" />
                        </Button>
                      </Link>
                    </CardContent>
                  </Card>
                ))}
              </div>
              <Link href={`/case-studies?topic=${slug}`} className="block mt-4">
                <Button variant="outline" className="w-full bg-transparent">
                  View All Case Studies
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-24 bg-primary text-primary-foreground">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">
            Need Expertise in {cluster.title.split(" ")[0]}?
          </h2>
          <p className="text-lg text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Tell us about your challenge and we'll match you with the right experts from this cluster.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/request">
              <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
                Consult with Experts
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
            <Link href="/expertise">
              <Button
                size="lg"
                variant="outline"
                className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 bg-transparent"
              >
                Explore Other Clusters
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
