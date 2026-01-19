import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import {
  Target,
  Lightbulb,
  Rocket,
  GraduationCap,
  Users,
  Building,
  Building2,
  FileText,
  Briefcase,
  Download,
  Map,
  MapPin,
  Sparkles,
  Mail,
  Phone,
  Instagram,
  Linkedin,
  Youtube,
  X,
  Music2,
} from "lucide-react"
import Link from "next/link"

const missionPillars = [
  {
    icon: Target,
    title: "Koordinasi Talenta",
    description:
      "Membangun dan mengelola jaringan pakar akademis terkemuka di Indonesia untuk mengatasi tantangan pembangunan perkotaan yang kompleks.",
  },
  {
    icon: Lightbulb,
    title: "Kebijakan Berbasis Bukti",
    description:
      "Melakukan penelitian yang cermat dan memberikan wawasan berbasis data untuk menghasilkan keputusan kebijakan yang lebih cerdas di semua tingkat pemerintahan.",
  },
  {
    icon: Rocket,
    title: "Dukungan Eksekusi",
    description:
      "Menerjemahkan penelitian ke dalam peta jalan yang dapat ditindaklanjuti dan memberikan dukungan implementasi mulai dari konsep hingga penyampaian.",
  },
]

const timeline = [
  { year: "2020", title: "Institute Founded", description: "BIDEV established by ITB and UNPAD researchers" },
  {
    year: "2021",
    title: "First City Partnership",
    description: "Signed MOU with Pemerintah Kota Bandung for urban data intelligence",
  },
  { year: "2022", title: "PRAKARSA Launch", description: "Deployed citywide data platform covering 1.5M+ households" },
  {
    year: "2023",
    title: "Provincial Expansion",
    description: "Extended services to Pemprov Jawa Barat and multiple regencies",
  },
  {
    year: "2024",
    title: "National Recognition",
    description: "Selected as BAPPENAS partner for urban development research",
  },
]

const governance = [
  {
    icon: Users,
    title: "Board of Advisors",
    description: "Senior academics and policy leaders providing strategic guidance",
  },
  {
    icon: Briefcase,
    title: "Executive Office",
    description: "Day-to-day operations and client relationship management",
  },
  { icon: Users, title: "Talent Management", description: "Expert recruitment, curation, and quality assurance" },
  {
    icon: FileText,
    title: "Research Programs",
    description: "Academic research, publications, and thought leadership",
  },
  {
    icon: Building,
    title: "Partnerships",
    description: "Government relations, private sector, and institutional partnerships",
  },
]

const initiators = [
  {
    name: "Media Wahyudi Askar",
    role: "Public Policy Analyst",
    image: "/indonesian-male-executive-professional-portrait.jpg",
  },
  {
    name: "Isnawati Hidayah",
    role: "Health Policy Specialist",
    image: "/indonesian-female-professor-portrait.jpg",
  },
  {
    name: "Alvi Syahrina",
    role: "Data Scientist",
    image: "/professional-indonesian-woman-academic-formal-port.jpg",
  },
  {
    name: "Bhima Yudhishthira",
    role: "Economist",
    image: "/professional-indonesian-male-economist-government.jpg",
  },
  {
    name: "Agus Sarwono",
    role: "Community Engineer",
    image: "/professional-indonesian-man-engineer-formal-portra.jpg",
  },
  {
    name: "Irma Hidayana",
    role: "Konsultan Independen Kesehatan Masyarakat",
    image: "/professional-indonesian-woman-policy-expert-formal.jpg",
  },
  {
    name: "Fadhil Alfathan",
    role: "Public Interest Lawyer",
    image: "/professional-indonesian-man-professor-formal-portr.jpg",
  },
  {
    name: "Mochamad Satria Riza Permana",
    role: "Data Engineer",
    image: "/professional-indonesian-man-data-scientist-formal-.jpg",
  },
]

const supporters = [
  { name: "unitrend" },
  { name: "CELIOS" },
  { name: "Transparency International Indonesia" },
  { name: "Lapor Sehat" },
  { name: "LBH Jakarta" },
  { name: "Bareng Warga" },
  { name: "ASPPUK" },
  { name: "Aliansi Ibu Indonesia" },
  { name: "Suara Ibu Indonesia" },
  { name: "Ibu Berisik" },
  { name: "YLKI" },
  { name: "Bijak Memantau" },
  { name: "Solidaritas Perempuan" },
  { name: "For Sustainability Right", subline: "for Livelihood and Future" },
  { name: "Sajogyo Institute" },
  { name: "Beranda Perempuan" },
  { name: "DietPartner Update" },
]

const coordinatorCore = {
  title: "Koordinator",
  people: ["Media Wahyudi Askar", "Isnawati Hidayah"],
}

const coordinatorTeams = [
  {
    title: "Koordinator Pengaduan & Verifikasi",
    people: ["Alvi Syahrina", "Alamsyah Aldefa Putra"],
  },
  {
    title: "Koordinator Komunikasi dan Edukasi Publik",
    people: ["Putri Uzdah Wulandari", "Kharisma Utari"],
  },
  {
    title: "Koordinator Data & Teknologi",
    people: ["Mochammad Satria Riza Permana", "Dzaki Achmad Abimanyu"],
  },
  {
    title: "Koordinator Hubungan Eksternal",
    people: ["Bhima Yudistira", "Jaya Darmawan"],
  },
  {
    title: "Koordinator Advokasi & Tindak Lanjut",
    people: ["Rizky Dwi Lestari", "Galau D. Muhammad", "Bakhrul Fikri"],
    full: true,
  },
]

const ethicsItems = [
  {
    id: "conflict",
    title: "Conflict of Interest Policy",
    content:
      "All BIDEV experts must disclose any potential conflicts of interest before engaging in projects. We maintain strict separation between advisory and commercial interests, and experts are required to recuse themselves from projects where personal interests may influence professional judgment.",
  },
  {
    id: "evidence",
    title: "Evidence Standards & Methodology",
    content:
      "Our research adheres to internationally recognized academic standards. All publications undergo peer review, methodologies are transparently documented, and data sources are properly cited. We commit to presenting findings objectively, including limitations and uncertainties.",
  },
  {
    id: "privacy",
    title: "Data Privacy & Consent",
    content:
      "BIDEV follows strict data protection protocols aligned with Indonesian privacy regulations. Personal data is collected only with informed consent, stored securely, and used exclusively for stated research purposes. Subjects have the right to access, correct, or delete their data.",
  },
  {
    id: "gratuity",
    title: "Anti-Gratuity Policy",
    content:
      "BIDEV maintains zero tolerance for gratification in any form when working with government clients. All payments are transparent, properly invoiced, and processed through official channels. Staff and experts are prohibited from accepting gifts that could influence their professional duties.",
  },
]

const contactCards = [
  {
    title: "Email",
    value: "lapor@mbgwatch.org",
    href: "mailto:lapor@mbgwatch.org",
    icon: Mail,
  },
  {
    title: "Telepon",
    value: "+62 811-2222-5157",
    href: "tel:+6281122225157",
    icon: Phone,
  },
]

const socialLinks = [
  { label: "X", href: "#", icon: X, className: "bg-foreground text-background" },
  { label: "Instagram", href: "#", icon: Instagram, className: "bg-primary text-primary-foreground" },
  { label: "YouTube", href: "#", icon: Youtube, className: "bg-accent text-accent-foreground" },
  { label: "LinkedIn", href: "#", icon: Linkedin, className: "bg-foreground text-background" },
  { label: "TikTok", href: "#", icon: Music2, className: "bg-primary text-primary-foreground" },
]

const bandungHighlights = [
  {
    icon: GraduationCap,
    title: "Pusat Akademik",
    description:
      "Ekosistem ITB dan UNPAD memberi akses ke peneliti, laboratorium, serta jaringan lintas disiplin.",
  },
  {
    icon: Building2,
    title: "Kompleksitas Urban",
    description:
      "Tantangan perumahan, mobilitas, dan iklim hadir bersamaan sehingga solusi dapat diuji dari hulu ke hilir.",
  },
  {
    icon: Sparkles,
    title: "Tata Kelola Progresif",
    description:
      "Komitmen pada inovasi data memungkinkan program seperti PRAKARSA bergerak cepat dan terukur.",
  },
]

const bandungSignals = [
  { icon: Map, label: "Skala Metro", value: "8.5M+ populasi" },
  { icon: Users, label: "Talenta Riset", value: "2 universitas unggulan" },
  { icon: Target, label: "Ruang Uji", value: "Program data aktif" },
]

function OrgCard({ title, people, className = "" }: { title: string; people: string[]; className?: string }) {
  return (
    <div
      className={`rounded-2xl border border-border bg-card px-6 py-4 text-center shadow-[0_12px_30px_rgba(15,61,46,0.08)] ${className}`}
    >
      <p className="font-semibold text-foreground">{title}</p>
      <div className="my-3 h-px bg-border/80" />
      <div className="space-y-1 text-sm text-muted-foreground">
        {people.map((person) => (
          <p key={person}>{person}</p>
        ))}
      </div>
    </div>
  )
}

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="relative isolate overflow-hidden pt-[72px]">
        <div className="absolute inset-0 -z-10">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: "url('/bandung-city-urban-data-dashboard-aerial-view.jpg')" }}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[#06130F]/95 via-[#0F3D2E]/90 to-[#0B2A20]/70" />
          <div className="absolute inset-0 opacity-[0.18]">
            <svg className="w-full h-full" viewBox="0 0 1200 800">
              <defs>
                <pattern id="about-hero-grid" width="80" height="80" patternUnits="userSpaceOnUse">
                  <path d="M 80 0 L 0 0 0 80" fill="none" stroke="#F7F5EF" strokeWidth="0.5" strokeOpacity="0.35" />
                </pattern>
              </defs>
              <rect width="1200" height="800" fill="url(#about-hero-grid)" />
            </svg>
          </div>
          <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-[#050505]/75" />
        </div>

        <div className="relative z-10 py-24 sm:py-32">
          <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/15 bg-white/5 text-xs font-semibold tracking-[0.2em] uppercase text-white/70">
                About the institute
              </div>
              <h1 className="mt-6 font-serif text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-[#F7F5EF] leading-tight text-balance">
                Institute for Urban Development & Strategic Policy
              </h1>
              <p className="mt-6 text-lg sm:text-xl text-[#EAD8A0]">Think-tank meets delivery.</p>
              <p className="mt-4 text-lg text-[#F7F5EF]/80 leading-relaxed max-w-2xl">
                BIDEV bridges the gap between academic excellence and real-world policy implementation, coordinating
                Indonesia&apos;s brightest minds to solve complex urban challenges.
              </p>
              <div className="mt-8 flex flex-wrap gap-3 text-xs uppercase tracking-[0.2em] text-white/60">
                <span className="inline-flex items-center rounded-full border border-white/15 bg-white/5 px-4 py-2">
                  Bandung, Indonesia
                </span>
                <span className="inline-flex items-center rounded-full border border-white/15 bg-white/5 px-4 py-2">
                  Founded 2020
                </span>
                <span className="inline-flex items-center rounded-full border border-white/15 bg-white/5 px-4 py-2">
                  Research + Delivery
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="relative overflow-hidden py-24 sm:py-32">
        <div className="absolute inset-0 -z-10">
          <div className="absolute -top-24 right-[-10%] h-72 w-72 rounded-full bg-primary/15 blur-3xl float-slow" />
          <div className="absolute bottom-[-18%] left-[-10%] h-96 w-96 rounded-full bg-accent/20 blur-3xl float-slower" />
          <div className="absolute inset-0 opacity-60">
            <svg className="h-full w-full" viewBox="0 0 1200 800">
              <defs>
                <pattern id="vision-grid" width="80" height="80" patternUnits="userSpaceOnUse">
                  <path d="M 80 0 L 0 0 0 80" fill="none" stroke="currentColor" strokeWidth="0.5" strokeOpacity="0.12" />
                </pattern>
              </defs>
              <rect width="1200" height="800" fill="url(#vision-grid)" className="text-primary" />
            </svg>
          </div>
        </div>
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-[1.05fr,0.95fr] gap-12 lg:gap-16 items-start">
            <div className="relative reveal-up">
              <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-primary/80">
                Visi Kami
              </div>
              <h2 className="mt-6 font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground leading-tight text-balance">
                Katalisator terdepan di Indonesia untuk transformasi perkotaan berbasis bukti
              </h2>
              <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
                Kami membayangkan kota-kota di Indonesia yang pengambilan kebijakannya didorong oleh penelitian yang
                cermat, didasari oleh keahlian akademis, dan dilaksanakan dengan tepat. BIDEV berfungsi sebagai jembatan
                yang menghubungkan institusi pengetahuan dengan lembaga dan organisasi yang membentuk masa depan
                perkotaan kita.
              </p>
              <div className="mt-8 rounded-2xl border border-primary/15 bg-primary/5 p-5 sm:p-6">
                <p className="text-xs uppercase tracking-[0.3em] text-primary/70">Prinsip utama</p>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  Riset yang jujur, kebijakan yang manusiawi, dan eksekusi yang terukur menjadi fondasi setiap program.
                </p>
              </div>
              <div className="mt-6 flex flex-wrap gap-3 text-[11px] font-semibold uppercase tracking-[0.35em] text-primary/70">
                <span className="rounded-full border border-primary/20 bg-primary/10 px-4 py-2">Berbasis bukti</span>
                <span className="rounded-full border border-primary/20 bg-primary/10 px-4 py-2">Kolaborasi kampus</span>
                <span className="rounded-full border border-primary/20 bg-primary/10 px-4 py-2">Eksekusi terukur</span>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 rounded-[32px] bg-gradient-to-br from-primary/10 via-transparent to-accent/20 blur-2xl" />
              <div className="relative rounded-[28px] border border-border/70 bg-card/80 p-6 sm:p-8 shadow-[0_25px_70px_rgba(15,61,46,0.12)]">
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <div>
                    <p className="text-xs uppercase tracking-[0.35em] text-primary font-semibold">Misi Kami</p>
                    <p className="mt-2 text-sm text-muted-foreground">
                      Tiga komitmen yang kami pegang untuk memastikan dampak yang konsisten dan terukur.
                    </p>
                  </div>
                  <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.3em] text-primary/70">
                    <span className="h-2 w-2 rounded-full bg-primary/60" />
                    Pilar strategis
                  </span>
                </div>
                <div className="mt-6 space-y-5">
                  {missionPillars.map((pillar, index) => (
                    <div
                      key={pillar.title}
                      className="group relative overflow-hidden rounded-2xl border border-border/70 bg-card/70 p-5 shadow-[0_12px_35px_rgba(15,61,46,0.08)] transition hover:-translate-y-1 hover:border-primary/40 hover:shadow-[0_20px_45px_rgba(15,61,46,0.12)] reveal-up"
                      style={{ animationDelay: `${0.1 + index * 0.1}s` }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10 opacity-0 transition group-hover:opacity-100" />
                      <div className="relative flex gap-4">
                        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary ring-1 ring-primary/20 shrink-0">
                          <pillar.icon className="h-5 w-5" />
                        </div>
                        <div>
                          <h3 className="text-base font-semibold text-foreground">{pillar.title}</h3>
                          <p className="mt-1 text-sm text-muted-foreground leading-relaxed">{pillar.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="relative overflow-hidden py-24 sm:py-32 bg-muted/30">
        <div className="absolute inset-0 -z-10">
          <div className="absolute -top-28 right-[-8%] h-72 w-72 rounded-full bg-primary/15 blur-3xl float-slow" />
          <div className="absolute bottom-[-30%] left-[-10%] h-96 w-96 rounded-full bg-accent/15 blur-3xl float-slower" />
        </div>
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-sm uppercase tracking-widest text-primary font-semibold mb-4">
              Institutional Background
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground">Our Journey</h2>
          </div>
          <div className="relative">
            <div className="absolute left-0 right-0 top-12 hidden sm:block h-px bg-gradient-to-r from-transparent via-border/70 to-transparent" />
            <div className="flex gap-6 overflow-x-auto pb-8 pt-12 snap-x snap-mandatory">
              {timeline.map((item) => (
                <div
                  key={item.year}
                  className="group relative min-w-[240px] sm:min-w-[280px] lg:min-w-[320px] shrink-0 snap-center"
                >
                  <div className="absolute left-6 top-0 hidden sm:flex items-center justify-center -translate-y-1.5">
                    <span className="h-3 w-3 rounded-full bg-primary ring-4 ring-background" />
                  </div>
                  <div className="mt-6 relative">
                    <div className="absolute -inset-1 rounded-[22px] bg-gradient-to-br from-primary/10 via-transparent to-accent/20 opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-100" />
                    <div
                      className="relative cursor-pointer rounded-2xl border border-border bg-card/90 p-6 backdrop-blur-sm shadow-[0_16px_40px_rgba(15,61,46,0.08)] transition-all duration-300 group-hover:-translate-y-1 group-hover:border-primary/40 group-hover:shadow-[0_24px_60px_rgba(15,61,46,0.14)] focus-visible:ring-2 focus-visible:ring-primary/20"
                      tabIndex={0}
                    >
                      <div className="flex items-center justify-between gap-3">
                        <span className="text-2xl font-bold text-primary">{item.year}</span>
                        <span className="rounded-full bg-primary/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.3em] text-primary/70">
                          Milestone
                        </span>
                      </div>
                      <h3 className="mt-3 text-base font-semibold text-foreground">{item.title}</h3>
                      <p className="mt-2 text-sm text-muted-foreground leading-relaxed overflow-hidden transition-all duration-300 md:max-h-0 md:opacity-0 md:group-hover:max-h-32 md:group-hover:opacity-100 md:group-focus-within:max-h-32 md:group-focus-within:opacity-100">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-4 flex flex-wrap items-center justify-center gap-3 text-xs uppercase tracking-[0.2em] text-muted-foreground">
              <span className="rounded-full border border-border bg-background/70 px-3 py-1">Scroll to explore</span>
              <span className="rounded-full border border-border bg-background/70 px-3 py-1">2020-2024</span>
            </div>
          </div>
        </div>
      </section>

      {/* The Initiators */}
      <section className="py-24 sm:py-32 bg-background" id="initiators">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-sm uppercase tracking-widest text-primary font-semibold mb-4">Founding team</p>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground">The initiators</h2>
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
              A multidisciplinary group of policy, data, and community practitioners who initiated the institute&apos;s
              early work.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {initiators.map((person) => (
              <div key={person.name} className="group">
                <div className="rounded-2xl border border-border bg-card shadow-sm p-4 transition-transform duration-300 group-hover:-translate-y-1">
                  <div className="aspect-[4/3] rounded-xl overflow-hidden bg-muted">
                    <img
                      src={person.image || "/placeholder-user.jpg"}
                      alt={person.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                </div>
                <div className="mt-4">
                  <h3 className="text-base font-semibold text-foreground">{person.name}</h3>
                  <p className="text-sm text-muted-foreground">{person.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Bandung */}
      <section className="relative overflow-hidden py-24 sm:py-32 bg-background">
        <div className="absolute inset-0 -z-10">
          <div className="absolute -top-24 right-[-10%] h-72 w-72 rounded-full bg-primary/15 blur-3xl float-slow" />
          <div className="absolute bottom-[-22%] left-[-8%] h-96 w-96 rounded-full bg-accent/20 blur-3xl float-slower" />
          <div className="absolute inset-0 opacity-50">
            <svg className="h-full w-full" viewBox="0 0 1200 800">
              <defs>
                <pattern id="bandung-grid" width="90" height="90" patternUnits="userSpaceOnUse">
                  <path d="M 90 0 L 0 0 0 90" fill="none" stroke="currentColor" strokeWidth="0.6" strokeOpacity="0.12" />
                </pattern>
              </defs>
              <rect width="1200" height="800" fill="url(#bandung-grid)" className="text-primary" />
            </svg>
          </div>
        </div>
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-[1.05fr,0.95fr] gap-12 lg:gap-16 items-center">
            <div className="space-y-8">
              <div>
                <p className="text-xs uppercase tracking-[0.4em] text-primary/80 font-semibold">Why Bandung?</p>
                <h2 className="mt-4 font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
                  Bandung sebagai Lab Hidup
                </h2>
                <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
                  Bandung menyatukan talenta akademik, skala metropolitan, dan keberanian kebijakan, sehingga solusi
                  perkotaan dapat diuji secara nyata dan siap direplikasi.
                </p>
              </div>
              <div className="space-y-4">
                {bandungHighlights.map((item, index) => (
                  <div
                    key={item.title}
                    className="group relative overflow-hidden rounded-2xl border border-border/70 bg-card/70 p-5 sm:p-6 shadow-[0_12px_35px_rgba(15,61,46,0.08)] transition hover:-translate-y-1 hover:border-primary/40 hover:shadow-[0_20px_45px_rgba(15,61,46,0.12)] reveal-up"
                    style={{ animationDelay: `${0.1 + index * 0.1}s` }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/15 opacity-0 transition group-hover:opacity-100" />
                    <div className="relative flex gap-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary ring-1 ring-primary/20 shrink-0">
                        <item.icon className="h-5 w-5" />
                      </div>
                      <div>
                        <h3 className="text-base font-semibold text-foreground">{item.title}</h3>
                        <p className="mt-1 text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="grid gap-4 sm:grid-cols-3">
                {bandungSignals.map((signal) => (
                  <div
                    key={signal.label}
                    className="rounded-2xl border border-border/70 bg-card/60 px-4 py-4 shadow-[0_10px_25px_rgba(15,61,46,0.06)]"
                  >
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary ring-1 ring-primary/20">
                        <signal.icon className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="text-[11px] uppercase tracking-[0.3em] text-muted-foreground">{signal.label}</p>
                        <p className="text-base font-semibold text-foreground">{signal.value}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-6 rounded-[32px] bg-gradient-to-br from-primary/15 via-transparent to-accent/20 blur-2xl" />
              <div className="relative rounded-[28px] border border-border/70 bg-card/80 p-4 sm:p-5 shadow-[0_28px_80px_rgba(15,61,46,0.15)]">
                <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
                  <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: "url('/bandung-city-urban-data-dashboard-map.jpg')" }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-[#0B2A20]/80 via-transparent to-[#F7F5EF]/15" />
                  <div className="absolute inset-0 opacity-60">
                    <svg className="h-full w-full" viewBox="0 0 600 450">
                      <defs>
                        <pattern id="bandung-map-grid" width="60" height="60" patternUnits="userSpaceOnUse">
                          <path d="M 60 0 L 0 0 0 60" fill="none" stroke="white" strokeWidth="0.6" strokeOpacity="0.25" />
                        </pattern>
                      </defs>
                      <rect width="600" height="450" fill="url(#bandung-map-grid)" />
                    </svg>
                  </div>
                  <div className="absolute top-4 left-4 inline-flex items-center gap-2 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-foreground shadow-sm">
                    <MapPin className="h-4 w-4 text-primary" />
                    Bandung Raya
                  </div>
                  <div className="absolute right-4 top-4 hidden items-center gap-2 rounded-full border border-white/20 bg-black/40 px-3 py-1 text-[11px] uppercase tracking-[0.3em] text-white/80 sm:flex">
                    <span className="h-2 w-2 rounded-full bg-emerald-300" />
                    Live data
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white/80 text-primary shadow-lg ring-1 ring-white/70">
                      <Map className="h-8 w-8" />
                    </div>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4 grid gap-3 sm:grid-cols-2">
                    <div className="rounded-xl bg-white/90 px-4 py-3 shadow-sm">
                      <p className="text-[11px] uppercase tracking-[0.3em] text-muted-foreground">Skala metro</p>
                      <p className="text-lg font-semibold text-foreground">8.5M+ populasi</p>
                    </div>
                    <div className="rounded-xl bg-white/90 px-4 py-3 shadow-sm">
                      <p className="text-[11px] uppercase tracking-[0.3em] text-muted-foreground">Riset aktif</p>
                      <p className="text-lg font-semibold text-foreground">PRAKARSA-ready</p>
                    </div>
                  </div>
                </div>
                <div className="mt-4 flex items-center justify-between text-xs text-muted-foreground">
                  <span>Wilayah Metropolitan Bandung Raya</span>
                  <span className="inline-flex items-center gap-2 rounded-full border border-border/70 bg-background px-3 py-1">
                    <span className="h-2 w-2 rounded-full bg-primary/60" />
                    Urban data snapshot
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Governance */}
      <section className="py-24 sm:py-32 bg-muted/30">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-sm uppercase tracking-widest text-primary font-semibold mb-4">Governance Structure</p>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground">
              Institute-style Organization, PT-based Service Delivery
            </h2>
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
              BIDEV combines the intellectual rigor of a research institute with the operational efficiency of a
              professional services firm.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4">
            {governance.map((item, index) => (
              <div key={index} className="p-6 bg-card rounded-xl border border-border text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-xs text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Supported By */}
      <section className="py-24 sm:py-32 bg-muted/20">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground">Didukung Oleh</h2>
          </div>

          <div className="mt-12 rounded-3xl border border-border/70 bg-card/70 px-6 py-8 shadow-[0_20px_60px_rgba(15,61,46,0.08)]">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {supporters.map((supporter) => (
                <div
                  key={supporter.name}
                  className="flex min-h-[84px] items-center justify-center rounded-2xl border border-border/60 bg-background/80 px-3 py-4 text-center shadow-[0_10px_30px_rgba(15,61,46,0.06)]"
                >
                  <div className="max-w-[140px] text-[13px] sm:text-sm font-semibold leading-snug text-foreground/80">
                    {supporter.name}
                    {supporter.subline ? (
                      <span className="mt-1 block text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                        {supporter.subline}
                      </span>
                    ) : null}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-16 relative">
            <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr),minmax(0,2fr)] lg:items-center">
              <div className="relative flex justify-center lg:justify-end">
                <OrgCard title={coordinatorCore.title} people={coordinatorCore.people} className="w-full max-w-sm" />
                <div className="hidden lg:block absolute right-[-20px] top-1/2 h-px w-10 bg-border" />
              </div>
              <div className="relative">
                <div className="hidden lg:block absolute left-[-20px] top-1/2 h-px w-10 bg-border" />
                <div className="grid gap-6 sm:grid-cols-2">
                  {coordinatorTeams.map((team) => (
                    <OrgCard
                      key={team.title}
                      title={team.title}
                      people={team.people}
                      className={team.full ? "sm:col-span-2" : ""}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ethics */}
      <section className="py-24 sm:py-32 bg-background">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <p className="text-sm uppercase tracking-widest text-primary font-semibold mb-4">
                Ethical Code & Academic Integrity
              </p>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground mb-6">
                Committed to Transparency & Excellence
              </h2>
              <p className="text-muted-foreground mb-8">
                BIDEV upholds the highest standards of academic integrity and professional ethics. Our commitment to
                transparency, objectivity, and accountability is non-negotiable.
              </p>
              <Link href="/documents/ethics-integrity.pdf">
                <Button variant="outline">
                  <Download className="w-4 h-4 mr-2" />
                  Download Ethics & Integrity PDF
                </Button>
              </Link>
            </div>
            <div>
              <Accordion type="single" collapsible className="w-full">
                {ethicsItems.map((item) => (
                  <AccordionItem key={item.id} value={item.id}>
                    <AccordionTrigger className="text-left font-semibold">{item.title}</AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">{item.content}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-24 sm:py-32 bg-background">
        <div className="max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">Hubungi Kami</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {contactCards.map((card) => (
              <a
                key={card.title}
                href={card.href}
                className="group rounded-3xl bg-primary text-primary-foreground px-8 py-10 shadow-[0_18px_35px_rgba(15,61,46,0.22)] hover:shadow-[0_24px_45px_rgba(15,61,46,0.32)] transition-all hover:-translate-y-1 border border-primary/20"
              >
                <div className="w-16 h-16 rounded-2xl bg-primary-foreground/15 ring-1 ring-primary-foreground/20 flex items-center justify-center mx-auto mb-6">
                  <card.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <p className="text-center text-lg font-semibold">{card.title}</p>
                <p className="text-center text-primary-foreground/80 mt-2">{card.value}</p>
              </a>
            ))}
          </div>

          <div className="text-center mt-16">
            <p className="font-serif text-2xl sm:text-3xl font-bold text-foreground mb-6">
              Ikuti Kami di Media Sosial
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  aria-label={link.label}
                  className={`w-14 h-14 rounded-full flex items-center justify-center shadow-md transition-transform hover:-translate-y-1 ${link.className}`}
                >
                  <link.icon className="w-6 h-6" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 sm:py-32 bg-[#1C1C1C]">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#F7F5EF] mb-6">
            Ready to work with Indonesia&apos;s leading experts?
          </h2>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/contact?intent=consult">
              <Button size="lg" className="bg-[#B89B5E] text-[#1C1C1C] hover:bg-[#B89B5E]/90">
                Consult with Experts
              </Button>
            </Link>
            <Link href="/join">
              <Button
                size="lg"
                variant="outline"
                className="border-[#F7F5EF]/30 text-[#F7F5EF] hover:bg-[#F7F5EF]/10 bg-transparent"
              >
                Join as Expert
              </Button>
            </Link>
            <Link href="/contact?intent=partner">
              <Button size="lg" variant="ghost" className="text-[#F7F5EF]/70 hover:text-[#F7F5EF] hover:bg-[#F7F5EF]/5">
                Partner with Us
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

