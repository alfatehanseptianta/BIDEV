import { CheckCircle2, Landmark, Building2, GraduationCap, Users } from "lucide-react"

const benefitGroups = [
  {
    title: "Bagi Pemerintah",
    subtitle: "Kebijakan berbasis data dan tata kelola transparan.",
    tag: "Tata Kelola",
    icon: Landmark,
    iconClass: "text-amber-700",
    iconBgClass: "bg-amber-100/80",
    borderClass: "border-amber-200/70",
    glowClass: "bg-amber-200/40",
    checkClass: "text-amber-600",
    image: "/bandung-city-urban-data-dashboard-map.jpg",
    imageAlt: "City data mapping",
    benefits: [
      "Integrasi data lintas dinas untuk keputusan cepat dan tepat.",
      "Dashboard KPI dan laporan akuntabel untuk pengawasan program.",
      "Pendampingan kebijakan serta peningkatan kapasitas tim daerah.",
    ],
  },
  {
    title: "Bagi Swasta",
    subtitle: "Keputusan investasi lebih akurat dan efisien.",
    tag: "Investasi",
    icon: Building2,
    iconClass: "text-emerald-700",
    iconBgClass: "bg-emerald-100/80",
    borderClass: "border-emerald-200/70",
    glowClass: "bg-emerald-200/40",
    checkClass: "text-emerald-600",
    image: "/investment-analysis-business-charts-graphs.jpg",
    imageAlt: "Investment analysis charts",
    benefits: [
      "Analisis risiko regulasi dan peluang pasar sebelum investasi.",
      "Akses jaringan pemangku kepentingan dan data lapangan tervalidasi.",
      "Rancangan program CSR dan ESG yang terukur dengan dampak jelas.",
    ],
  },
  {
    title: "Bagi Perguruan Tinggi",
    subtitle: "Riset terapan yang memperkuat reputasi akademik.",
    tag: "Akademik",
    icon: GraduationCap,
    iconClass: "text-sky-700",
    iconBgClass: "bg-sky-100/80",
    borderClass: "border-sky-200/70",
    glowClass: "bg-sky-200/40",
    checkClass: "text-sky-600",
    image: "/professional-training-workshop-urban-planning.jpg",
    imageAlt: "Academic training workshop",
    benefits: [
      "Riset kolaboratif dengan pendanaan, publikasi, dan sitasi bersama.",
      "Akses data, studi kasus, dan lokasi uji coba untuk kurikulum.",
      "Penempatan magang serta proyek mahasiswa pada misi nyata.",
    ],
  },
  {
    title: "Bagi Komunitas",
    subtitle: "Partisipasi warga dan dampak sosial yang terukur.",
    tag: "Komunitas",
    icon: Users,
    iconClass: "text-teal-700",
    iconBgClass: "bg-teal-100/80",
    borderClass: "border-teal-200/70",
    glowClass: "bg-teal-200/40",
    checkClass: "text-teal-600",
    image: "/stakeholder-engagement-playbook-cover.jpg",
    imageAlt: "Community stakeholder engagement",
    benefits: [
      "Program pemberdayaan berbasis kebutuhan lokal yang jelas.",
      "Akses informasi layanan publik yang lebih transparan.",
      "Kolaborasi komunitas untuk menjaga keberlanjutan dampak.",
    ],
  },
]

export function BidvBenefits() {
  return (
    <section className="relative py-24 sm:py-32 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-muted/60 via-background to-background" />
        <div className="absolute inset-0 opacity-[0.15]">
          <svg className="w-full h-full" viewBox="0 0 1200 600" aria-hidden="true">
            <defs>
              <pattern id="bidv-grid" width="60" height="60" patternUnits="userSpaceOnUse">
                <path d="M 60 0 L 0 0 0 60" fill="none" stroke="#0F3D2E" strokeWidth="0.6" strokeOpacity="0.12" />
              </pattern>
            </defs>
            <rect width="1200" height="600" fill="url(#bidv-grid)" />
          </svg>
        </div>
        <div className="absolute -top-28 right-6 w-80 h-80 rounded-full bg-primary/10 blur-3xl opacity-80 float-slow" />
        <div className="absolute -bottom-32 left-0 w-80 h-80 rounded-full bg-accent/20 blur-3xl opacity-80 float-slower" />
      </div>

      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16 reveal-up">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-card/80 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.35em] text-primary shadow-sm">
            Dampak BIDV
          </span>
          <h2 className="mt-6 font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-foreground text-balance">
            Manfaat dan Dampak Positif dari Model <span className="text-primary">BIDV</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto">
            Ringkasan manfaat utama bagi pemerintah, sektor swasta, perguruan tinggi, dan komunitas saat bekerja bersama BIDV.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {benefitGroups.map((group, index) => (
            <div
              key={group.title}
              className="group relative reveal-up"
              style={{ animationDelay: `${0.1 + index * 0.12}s` }}
            >
              <div className={`absolute -inset-2 rounded-[32px] opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100 ${group.glowClass}`} />
              <div
                className={`relative h-full overflow-hidden rounded-[30px] border ${group.borderClass} bg-card/90 p-6 backdrop-blur-xl shadow-[0_18px_45px_rgba(15,61,46,0.1)] transition-all duration-300 group-hover:-translate-y-1.5 group-hover:shadow-[0_30px_70px_rgba(15,61,46,0.16)]`}
              >
                <div className="relative mb-5 overflow-hidden rounded-2xl border border-white/70 bg-white/60">
                  <img
                    src={group.image}
                    alt={group.imageAlt}
                    className="h-40 w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0F3D2E]/55 via-[#0F3D2E]/15 to-transparent" />
                  <div className="absolute bottom-3 left-3 rounded-full border border-white/60 bg-white/90 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.32em] text-[#0F3D2E]">
                    {group.tag}
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className={`flex h-12 w-12 items-center justify-center rounded-2xl ${group.iconBgClass} ring-1 ring-white/70 shadow-sm`}>
                    <group.icon className={`h-6 w-6 ${group.iconClass}`} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground">{group.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{group.subtitle}</p>
                  </div>
                </div>

                <div className="mt-5 h-px w-full bg-gradient-to-r from-border/80 via-border/40 to-transparent" />

                <ul className="mt-5 space-y-3">
                  {group.benefits.map((benefit) => (
                    <li key={benefit} className="flex items-start gap-3 text-sm text-foreground/90">
                      <CheckCircle2 className={`mt-0.5 h-5 w-5 shrink-0 ${group.checkClass}`} />
                      <span className="leading-relaxed">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
