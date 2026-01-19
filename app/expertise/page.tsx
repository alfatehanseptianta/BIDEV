import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import {
  ArrowRight,
  Building2,
  Users,
  BarChart3,
  Home,
  Car,
  Leaf,
  Shield,
  TrendingUp,
  BookOpen,
  Briefcase,
  Layers,
  BadgeCheck,
  Compass,
  Database,
  LineChart,
  Map,
  MessagesSquare,
  Radar,
  Rocket,
  Sparkles,
  Target,
  Workflow,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export const metadata: Metadata = {
  title: "Expertise Areas | BIDEV Institute",
  description:
    "Our research clusters and expertise areas spanning urban planning, public policy, data science, and sustainable development.",
}

const expertiseClusters = [
  {
    slug: "urban-planning",
    title: "Urban Planning & Development",
    icon: Building2,
    description:
      "Perencanaan tata ruang, pengembangan kawasan, dan strategi pertumbuhan kota berkelanjutan dengan pendekatan berbasis bukti.",
    expertCount: 12,
    publicationCount: 24,
    caseStudyCount: 8,
    topics: ["Spatial Planning", "Zoning", "Urban Design", "Land Use", "Infrastructure"],
    color: "bg-blue-500",
    image: "/housing-urban-planning-architecture-blueprint.jpg",
    imageAlt: "Urban planning blueprints",
  },
  {
    slug: "public-policy",
    title: "Public Policy & Governance",
    icon: Shield,
    description:
      "Analisis kebijakan publik, reformasi birokrasi, dan penguatan tata kelola pemerintahan daerah untuk efektivitas pelayanan.",
    expertCount: 10,
    publicationCount: 18,
    caseStudyCount: 6,
    topics: ["Policy Analysis", "Governance Reform", "Public Administration", "Regulatory Impact"],
    color: "bg-indigo-500",
    image: "/policy-brief-writing-guide-document.jpg",
    imageAlt: "Public policy briefing document",
  },
  {
    slug: "data-science",
    title: "Data Science & Analytics",
    icon: BarChart3,
    description:
      "Pengumpulan, analisis, dan visualisasi data untuk mendukung pengambilan keputusan berbasis bukti di sektor publik dan swasta.",
    expertCount: 8,
    publicationCount: 15,
    caseStudyCount: 10,
    topics: ["Data Analytics", "GIS", "Machine Learning", "Data Governance", "Visualization"],
    color: "bg-cyan-500",
    image: "/data-dashboard-analytics-urban-planning-heatmap-ch.jpg",
    imageAlt: "Urban analytics dashboard",
  },
  {
    slug: "housing",
    title: "Housing & Settlements",
    icon: Home,
    description:
      "Kebijakan perumahan, permukiman informal, dan strategi penyediaan hunian yang terjangkau untuk berbagai segmen masyarakat.",
    expertCount: 7,
    publicationCount: 12,
    caseStudyCount: 5,
    topics: ["Affordable Housing", "Informal Settlements", "Housing Finance", "Urban Renewal"],
    color: "bg-orange-500",
    image: "/housing-policy-planning-meeting-indonesia.jpg",
    imageAlt: "Housing policy planning meeting",
  },
  {
    slug: "mobility",
    title: "Mobility & Transportation",
    icon: Car,
    description:
      "Perencanaan transportasi, mobilitas perkotaan, dan strategi pengembangan sistem transportasi publik terintegrasi.",
    expertCount: 6,
    publicationCount: 10,
    caseStudyCount: 4,
    topics: ["Public Transit", "Traffic Management", "TOD", "Pedestrian", "Cycling"],
    color: "bg-emerald-500",
    image: "/transportation-training-workshop-professional.jpg",
    imageAlt: "Mobility planning workshop",
  },
  {
    slug: "economic-development",
    title: "Economic Development",
    icon: TrendingUp,
    description:
      "Strategi pertumbuhan ekonomi lokal, pengembangan investasi, dan pemberdayaan UMKM untuk meningkatkan daya saing daerah.",
    expertCount: 9,
    publicationCount: 14,
    caseStudyCount: 7,
    topics: ["Local Economy", "Investment Climate", "SME Development", "Industrial Policy"],
    color: "bg-amber-500",
    image: "/investment-analysis-business-charts-graphs.jpg",
    imageAlt: "Economic development analysis",
  },
  {
    slug: "social-protection",
    title: "Social Protection & Data",
    icon: Users,
    description:
      "Sistem perlindungan sosial, data kemiskinan, dan targeting program bantuan sosial berbasis data untuk efektivitas program.",
    expertCount: 8,
    publicationCount: 20,
    caseStudyCount: 9,
    topics: ["Social Registry", "Poverty Data", "Program Targeting", "M&E"],
    color: "bg-rose-500",
    image: "/social-protection-toolkit-government.jpg",
    imageAlt: "Social protection data toolkit",
  },
  {
    slug: "sustainability",
    title: "Climate & Sustainability",
    icon: Leaf,
    description:
      "Adaptasi dan mitigasi perubahan iklim, pembangunan berkelanjutan, dan strategi transisi energi untuk kota yang lebih hijau.",
    expertCount: 5,
    publicationCount: 8,
    caseStudyCount: 3,
    topics: ["Climate Adaptation", "Green Infrastructure", "Circular Economy", "ESG"],
    color: "bg-green-500",
    image: "/sustainable-manufacturing-factory-green-environmen.jpg",
    imageAlt: "Sustainability and green industry",
  },
]

const stats = [
  { label: "Expert Clusters", value: "8", icon: Layers },
  { label: "Board of Experts", value: "65+", icon: Users },
  { label: "Publications", value: "120+", icon: BookOpen },
  { label: "Case Studies", value: "50+", icon: Briefcase },
]

const capabilityPillars = [
  {
    title: "Spatial Intelligence",
    description: "Analisis spasial, pemodelan pertumbuhan, dan evaluasi tata ruang untuk keputusan strategis.",
    icon: Map,
    outputs: ["Spatial baseline", "Growth scenarios", "Risk layers"],
  },
  {
    title: "Policy Foresight",
    description: "Policy scanning dan simulasi dampak regulasi untuk mempercepat keputusan publik.",
    icon: Compass,
    outputs: ["Policy radar", "Regulatory impact", "Decision memo"],
  },
  {
    title: "Data Engineering",
    description: "Integrasi data lintas OPD, data quality, dan pipeline otomatis yang aman.",
    icon: Database,
    outputs: ["Data pipeline", "Quality checks", "Data catalog"],
  },
  {
    title: "Impact Analytics",
    description: "Model dampak sosial-ekonomi dan pengukuran kinerja program yang terukur.",
    icon: LineChart,
    outputs: ["Impact model", "KPI framework", "Evaluation plan"],
  },
  {
    title: "Co-Design & Facilitation",
    description: "Riset perilaku, FGD, dan co-design untuk merancang solusi yang relevan.",
    icon: MessagesSquare,
    outputs: ["Persona map", "Service blueprint", "Workshop kit"],
  },
  {
    title: "Implementation Readiness",
    description: "Roadmap implementasi, pembiayaan, dan tata kelola agar eksekusi lebih siap.",
    icon: Workflow,
    outputs: ["Implementation roadmap", "Financing plan", "Governance SOP"],
  },
]

const trendSignals = [
  "AI-ready urban data",
  "Climate resilience finance",
  "Transit-oriented regeneration",
  "Food system mapping",
  "Green jobs transition",
  "Digital public infrastructure",
  "Community-led housing",
  "Circular economy zones",
]

const featuredOutputs = [
  {
    title: "Urban Data Playbook 2025",
    type: "Playbook",
    description: "Panduan praktis membangun data governance kota yang siap dipakai lintas dinas.",
    image: "/urban-data-playbook-cover.jpg",
    imageAlt: "Urban data playbook cover",
    href: "/playbooks",
    cta: "Open playbook",
  },
  {
    title: "Smart City Policy Brief",
    type: "Policy Brief",
    description: "Ringkasan kebijakan untuk percepatan layanan digital dan interoperabilitas data.",
    image: "/policy-brief-smart-city-thumbnail.jpg",
    imageAlt: "Smart city policy brief thumbnail",
    href: "/publications",
    cta: "Read the brief",
  },
  {
    title: "Prakarsa Data Platform",
    type: "Data Product",
    description: "Platform data perlindungan sosial dengan dashboard dan workflow yang terukur.",
    image: "/prakarsa-dashboard-preview-demo-screenshot.jpg",
    imageAlt: "Prakarsa data platform dashboard preview",
    href: "/products",
    cta: "Explore product",
  },
]

const collaborationModels = [
  {
    title: "Advisory Sprint",
    description: "Audit cepat untuk menentukan arah kebijakan dan opsi intervensi paling feasible.",
    icon: Target,
    duration: "2-6 weeks",
    focus: "Rapid diagnosis",
    deliverables: ["Issue framing", "Option matrix", "Executive brief"],
  },
  {
    title: "Embedded Research Team",
    description: "Tim kami bekerja bersama internal untuk membangun pipeline data dan rekomendasi.",
    icon: BadgeCheck,
    duration: "3-9 months",
    focus: "Co-design and capacity",
    deliverables: ["Joint research plan", "Data pipeline", "Capacity transfer"],
  },
  {
    title: "Implementation Partner",
    description: "Pendampingan implementasi hingga monitoring kinerja dan adopsi kebijakan.",
    icon: Rocket,
    duration: "6-18 months",
    focus: "Delivery and adoption",
    deliverables: ["Implementation roadmap", "Pilot execution", "M&E dashboard"],
  },
]

export default function ExpertisePage() {
  return (
    <main className="pt-[72px]">
      {/* Hero */}
      <section className="relative isolate overflow-hidden bg-foreground text-background py-20 lg:py-28">
        <Image
          src="/abstract-urban-data-grid-cityscape-bandung-modern.jpg"
          alt="Abstract urban data grid background"
          fill
          priority
          className="object-cover opacity-35"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-foreground/95 via-foreground/70 to-foreground/95" />
        <div className="pointer-events-none absolute -top-24 right-0 h-72 w-72 rounded-full bg-accent/25 blur-3xl float-slow" />
        <div className="pointer-events-none absolute -bottom-24 left-0 h-72 w-72 rounded-full bg-primary/25 blur-3xl float-slower" />
        <div className="relative max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl reveal-up">
            <Badge className="mb-4 bg-accent text-accent-foreground">Research Clusters</Badge>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance">Expertise Areas</h1>
            <p className="text-lg md:text-xl text-background/80 mb-8">
              BIDEV memiliki delapan klaster keahlian yang mencakup spektrum lengkap pembangunan perkotaan dan kebijakan
              publik. Setiap klaster didukung oleh pakar dengan track record publikasi dan proyek yang terverifikasi.
            </p>
            <Link href="/board-of-experts">
              <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
                Meet Our Experts
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="py-10 border-b border-border/60 bg-muted">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-6">
            {stats.map((stat, index) => (
              <Card
                key={stat.label}
                className="bg-background/85 backdrop-blur-sm border-border/60 shadow-sm reveal-up"
                style={{ animationDelay: `${index * 80}ms` }}
              >
                <CardContent className="p-5 flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                    <stat.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-2xl md:text-3xl font-bold text-foreground">{stat.value}</p>
                    <p className="text-xs md:text-sm text-muted-foreground">{stat.label}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Expertise Grid */}
      <section className="py-16 lg:py-24">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">Our Research Clusters</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Setiap klaster memiliki framework, metodologi, dan tim ahli yang dedicated untuk menghasilkan output
              berkualitas.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {expertiseClusters.map((cluster) => (
              <Card key={cluster.slug} className="group overflow-hidden hover:border-primary/30 transition-all hover:shadow-lg">
                <div className="relative aspect-[16/9] overflow-hidden">
                  <Image src={cluster.image} alt={cluster.imageAlt} fill className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/85 via-transparent to-transparent" />
                </div>
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div
                      className={`w-14 h-14 rounded-xl ${cluster.color} bg-opacity-10 flex items-center justify-center flex-shrink-0`}
                    >
                      <cluster.icon className={`w-7 h-7 ${cluster.color.replace("bg-", "text-")}`} />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-xl mb-2 group-hover:text-primary transition-colors">
                        {cluster.title}
                      </CardTitle>
                      <CardDescription className="text-base">{cluster.description}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  {/* Topics */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {cluster.topics.map((topic, idx) => (
                      <Badge key={idx} variant="secondary" className="text-xs">
                        {topic}
                      </Badge>
                    ))}
                  </div>

                  {/* Stats */}
                  <div className="flex items-center gap-6 pt-4 border-t border-border">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Users className="w-4 h-4" />
                      <span>{cluster.expertCount} experts</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <BookOpen className="w-4 h-4" />
                      <span>{cluster.publicationCount} publications</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Briefcase className="w-4 h-4" />
                      <span>{cluster.caseStudyCount} cases</span>
                    </div>
                  </div>

                  {/* CTA */}
                  <Link href={`/expertise/${cluster.slug}`} className="block mt-4">
                    <Button variant="ghost" className="w-full justify-between text-primary">
                      Explore this cluster
                      <ArrowRight className="w-4 h-4" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Capability Stack */}
      <section className="py-16 lg:py-24 bg-muted">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-10">
            <div>
              <Badge variant="outline" className="mb-4">
                Capability Stack
              </Badge>
              <h2 className="font-serif text-3xl md:text-4xl font-bold mb-3">From evidence to delivery</h2>
              <p className="text-lg text-muted-foreground max-w-2xl">
                Kami menggabungkan riset, data, dan implementasi dalam satu stack kapabilitas untuk mendorong dampak yang
                terukur pada level kota dan daerah.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link href="/methodology">
                <Button variant="outline">Explore Methodology</Button>
              </Link>
              <Link href="/solutions">
                <Button>See Solution Areas</Button>
              </Link>
            </div>
          </div>

          <div className="grid lg:grid-cols-[2fr,1fr] gap-6">
            <div className="grid sm:grid-cols-2 gap-4">
              {capabilityPillars.map((pillar, idx) => (
                <Card
                  key={pillar.title}
                  className="relative overflow-hidden hover:border-primary/30 transition-colors reveal-up"
                  style={{ animationDelay: `${idx * 0.05}s` }}
                >
                  <CardHeader className="pb-3">
                    <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center mb-3">
                      <pillar.icon className="w-5 h-5 text-primary" />
                    </div>
                    <CardTitle className="text-lg">{pillar.title}</CardTitle>
                    <CardDescription>{pillar.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {pillar.outputs.map((item) => (
                        <Badge key={item} variant="secondary" className="text-xs">
                          {item}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card className="overflow-hidden">
              <div className="relative aspect-[4/3]">
                <Image
                  src="/bandung-city-urban-data-dashboard-map.jpg"
                  alt="Urban data signals and trend radar"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/50 to-transparent" />
              </div>
              <CardHeader>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Radar className="w-4 h-4 text-primary" />
                  <span>Trend Radar 2025</span>
                </div>
                <CardTitle>Emerging themes we are tracking</CardTitle>
                <CardDescription>
                  Sinyal perubahan yang kami monitor untuk membantu mitra bergerak lebih cepat.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-6">
                  {trendSignals.map((signal) => (
                    <Badge key={signal} variant="secondary" className="text-xs">
                      {signal}
                    </Badge>
                  ))}
                </div>
                <Link href="/insights">
                  <Button variant="outline" className="w-full bg-transparent">
                    Explore Insights
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Expertise in Action */}
      <section className="py-16 lg:py-24">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-10">
            <div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                <Sparkles className="w-4 h-4 text-primary" />
                <span>Expertise in Action</span>
              </div>
              <h2 className="font-serif text-3xl md:text-4xl font-bold mb-3">Outputs that move the needle</h2>
              <p className="text-lg text-muted-foreground max-w-2xl">
                Contoh produk riset, playbook, dan platform data yang dihasilkan lintas klaster.
              </p>
            </div>
            <Link href="/publications">
              <Button variant="outline">Browse Publications</Button>
            </Link>
          </div>

          <div className="grid lg:grid-cols-3 gap-6">
            {featuredOutputs.map((item, idx) => (
              <Card
                key={item.title}
                className="group overflow-hidden hover:border-primary/30 transition-all reveal-up"
                style={{ animationDelay: `${idx * 0.08}s` }}
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.imageAlt}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/30 to-transparent" />
                  <Badge className="absolute left-4 top-4 bg-background/80 text-foreground">{item.type}</Badge>
                </div>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{item.description}</p>
                  <Link href={item.href}>
                    <Button variant="ghost" className="w-full justify-between text-primary">
                      {item.cta}
                      <ArrowRight className="w-4 h-4" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Cross-Cutting Approach */}
      <section className="py-16 lg:py-24 bg-muted">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4" variant="outline">
                Our Approach
              </Badge>
              <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">Cross-Cutting Expertise</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Masalah perkotaan tidak bisa diselesaikan dalam silo. Tim kami bekerja lintas klaster untuk memberikan
                solusi yang holistik dan terintegrasi.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">
                    1
                  </div>
                  <div>
                    <p className="font-medium">Multi-disciplinary Teams</p>
                    <p className="text-sm text-muted-foreground">
                      Setiap proyek melibatkan pakar dari berbagai klaster sesuai kebutuhan.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">
                    2
                  </div>
                  <div>
                    <p className="font-medium">Integrated Methodology</p>
                    <p className="text-sm text-muted-foreground">
                      Framework yang terstandardisasi namun fleksibel untuk berbagai konteks.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">
                    3
                  </div>
                  <div>
                    <p className="font-medium">Knowledge Sharing</p>
                    <p className="text-sm text-muted-foreground">
                      Lessons learned dari setiap proyek memperkaya expertise seluruh network.
                    </p>
                  </div>
                </li>
              </ul>
              <Link href="/how-we-work">
                <Button>
                  Learn How We Work
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
            </div>

            <div className="relative aspect-square lg:aspect-auto lg:h-[500px]">
              <Image
                src="/network-diagram-connecting-different-expertise-are.jpg"
                alt="Cross-cutting expertise network"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Collaboration Models */}
      <section className="py-16 lg:py-24">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4">
              Collaboration Models
            </Badge>
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">Flexible engagement for complex challenges</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Pilih mode kerja sama sesuai kebutuhan, dari sprint singkat sampai pendampingan implementasi.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {collaborationModels.map((model, idx) => (
              <Card
                key={model.title}
                className="relative overflow-hidden hover:border-primary/30 transition-colors reveal-up"
                style={{ animationDelay: `${idx * 0.08}s` }}
              >
                <CardHeader className="space-y-3">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <model.icon className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{model.title}</CardTitle>
                  <CardDescription>{model.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary" className="text-xs">
                      {model.duration}
                    </Badge>
                    <Badge variant="outline" className="text-xs">
                      {model.focus}
                    </Badge>
                  </div>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    {model.deliverables.map((deliverable) => (
                      <li key={deliverable} className="flex items-start gap-2">
                        <span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
                        <span>{deliverable}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link href="/collaboration">
              <Button variant="outline">See Collaboration Options</Button>
            </Link>
            <Link href="/request">
              <Button>Start a Project</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-24 bg-primary text-primary-foreground">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">Need Specific Expertise?</h2>
          <p className="text-lg text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Tell us about your challenge and we'll match you with the right experts from our network.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/request">
              <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
                Request Expert Matching
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
            <Link href="/board-of-experts">
              <Button
                size="lg"
                variant="outline"
                className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 bg-transparent"
              >
                Browse All Experts
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
