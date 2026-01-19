import Link from "next/link"
import {
  ArrowDown,
  ArrowRight,
  BarChart3,
  Building2,
  ClipboardCheck,
  Database,
  Handshake,
  MapPin,
  Network,
  Rocket,
  Sparkles,
  Users,
  AlertTriangle,
} from "lucide-react"
import { Button } from "@/components/ui/button"

const challenges = [
  {
    title: "Data kota terfragmentasi",
    description: "Sumber data tersebar dan indikator tidak sinkron.",
    icon: Network,
    accent: "bg-gradient-to-br from-[#0F3D2E]/18 via-transparent to-transparent",
    badge: "01",
  },
  {
    title: "Koordinasi lintas pemangku kepentingan lemah",
    description: "OPD, swasta, dan komunitas bergerak sendiri.",
    icon: Users,
    accent: "bg-gradient-to-bl from-[#0F3D2E]/18 via-transparent to-transparent",
    badge: "02",
  },
  {
    title: "Monitoring proyek tidak konsisten",
    description: "Kinerja dan risiko terlambat terdeteksi.",
    icon: ClipboardCheck,
    accent: "bg-gradient-to-tr from-[#0F3D2E]/18 via-transparent to-transparent",
    badge: "03",
  },
  {
    title: "Kesiapan pembiayaan terbatas",
    description: "Skema investasi dan PPP belum matang.",
    icon: Building2,
    accent: "bg-gradient-to-tl from-[#0F3D2E]/18 via-transparent to-transparent",
    badge: "04",
  },
]

const solutions = [
  {
    title: "Platform data kota terintegrasi",
    description: "Standar indikator, data ingest, dan dashboard eksekutif.",
    icon: Database,
    accent: "bg-gradient-to-br from-[#B89B5E]/22 via-transparent to-transparent",
    tag: "Platform",
  },
  {
    title: "Masterplan & roadmap lintas sektor",
    description: "Prioritas proyek, timeline, dan sumber pendanaan.",
    icon: MapPin,
    accent: "bg-gradient-to-bl from-[#B89B5E]/22 via-transparent to-transparent",
    tag: "Perencanaan",
  },
  {
    title: "Monitoring & evaluasi real-time",
    description: "KPI, issue log, dan eskalasi terstruktur.",
    icon: BarChart3,
    accent: "bg-gradient-to-tr from-[#B89B5E]/22 via-transparent to-transparent",
    tag: "Monev",
  },
  {
    title: "Kesiapan investasi & kemitraan",
    description: "Pengemasan proyek dan engagement investor.",
    icon: Handshake,
    accent: "bg-gradient-to-tl from-[#B89B5E]/22 via-transparent to-transparent",
    tag: "Kemitraan",
  },
]

const cardBase =
  "group relative overflow-hidden rounded-[26px] border bg-white/90 p-5 shadow-[0_20px_50px_rgba(15,61,46,0.08)] backdrop-blur-[2px] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_28px_70px_rgba(15,61,46,0.14)]"

const challengeTone = {
  border: "border-[#0F3D2E]/15",
  hoverBorder: "hover:border-[#0F3D2E]/35",
  iconBg: "bg-[#0F3D2E]/10",
  iconColor: "text-[#0F3D2E]",
  badge: "bg-[#0F3D2E]/10 text-[#0F3D2E] border border-[#0F3D2E]/20",
  line: "from-[#0F3D2E] via-[#B89B5E]/60 to-transparent",
  glow: "bg-[#0F3D2E]/15",
}

const solutionTone = {
  border: "border-[#B89B5E]/25",
  hoverBorder: "hover:border-[#B89B5E]/45",
  iconBg: "bg-[#B89B5E]/15",
  iconColor: "text-[#7C6337]",
  badge: "bg-[#B89B5E]/20 text-[#7C6337] border border-[#B89B5E]/30",
  line: "from-[#B89B5E] via-[#0F3D2E]/50 to-transparent",
  glow: "bg-[#B89B5E]/20",
}

export function UrbanChallenges() {
  return (
    <section className="relative py-24 sm:py-32 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-[#F7F5EF] via-white to-[#F7F5EF]" />
        <div className="absolute inset-0 opacity-[0.18]">
          <svg className="w-full h-full" viewBox="0 0 1200 600" aria-hidden="true">
            <defs>
              <pattern id="urban-grid" width="64" height="64" patternUnits="userSpaceOnUse">
                <path d="M 64 0 L 0 0 0 64" fill="none" stroke="#0F3D2E" strokeWidth="0.6" strokeOpacity="0.1" />
              </pattern>
            </defs>
            <rect width="1200" height="600" fill="url(#urban-grid)" />
          </svg>
        </div>
        <div className="absolute -top-24 right-0 w-72 h-72 bg-[#B89B5E]/25 rounded-full blur-3xl opacity-70" />
        <div className="absolute -bottom-24 left-0 w-80 h-80 bg-[#0F3D2E]/18 rounded-full blur-3xl opacity-70" />
      </div>

      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <p className="text-xs uppercase tracking-[0.4em] text-[#0F3D2E]/70 font-semibold mb-4">
            Dari tantangan ke solusi
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#1C1C1C] text-balance">
            Menjawab{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0F3D2E] via-[#B89B5E] to-[#0F3D2E]">
              Tantangan Utama
            </span>{" "}
            dalam pembangunan kota dengan <span className="text-[#0F3D2E]">Solusi Konsultan</span>{" "}
            <span className="text-[#B89B5E]">BIDEV</span>
          </h2>
          <p className="mt-4 text-lg text-[#1C1C1C]/70">
            Empat kendala paling sering muncul dalam proyek pembangunan kota. BIDEV menyiapkan strategi,
            pendampingan, dan sistem untuk mempercepat keputusan yang terukur.
          </p>
        </div>

        <div className="grid gap-12 lg:grid-cols-[1fr,auto,1fr] items-center">
          <div>
            <div className="flex items-center gap-3 mb-6 rounded-2xl border border-[#0F3D2E]/15 bg-white/80 px-4 py-3 shadow-[0_12px_30px_rgba(15,61,46,0.08)]">
              <div className="w-11 h-11 rounded-2xl bg-[#0F3D2E]/10 flex items-center justify-center shadow-[inset_0_0_0_1px_rgba(15,61,46,0.08)]">
                <AlertTriangle className="w-5 h-5 text-[#0F3D2E]" />
              </div>
              <div>
                <p className="text-sm font-semibold text-[#0F3D2E]">Tantangan Utama</p>
                <p className="text-xs text-[#1C1C1C]/60">Hambatan kritis yang perlu diselesaikan.</p>
              </div>
            </div>
            <div className="grid sm:grid-cols-2 gap-5">
              {challenges.map((item) => (
                <div
                  key={item.title}
                  className={`${cardBase} ${challengeTone.border} ${challengeTone.hoverBorder}`}
                >
                  <div className={`absolute -top-16 -right-16 h-32 w-32 rounded-full ${challengeTone.glow} blur-3xl opacity-70`} />
                  <div className={`absolute inset-0 ${item.accent} opacity-0 transition-opacity duration-300 group-hover:opacity-100`} />
                  <div className="relative">
                    <div className="flex items-center justify-between">
                      <div
                        className={`w-11 h-11 rounded-2xl ${challengeTone.iconBg} flex items-center justify-center shadow-[inset_0_0_0_1px_rgba(15,61,46,0.08)]`}
                      >
                        <item.icon className={`w-5 h-5 ${challengeTone.iconColor}`} />
                      </div>
                      <span
                        className={`text-[11px] font-semibold tracking-[0.25em] ${challengeTone.badge} px-3 py-1 rounded-full`}
                      >
                        {item.badge}
                      </span>
                    </div>
                    <h3 className="mt-4 text-base font-semibold text-[#1C1C1C]">{item.title}</h3>
                    <p className="mt-2 text-sm text-[#1C1C1C]/70 leading-relaxed">{item.description}</p>
                    <div className={`mt-4 h-[2px] w-full rounded-full bg-gradient-to-r ${challengeTone.line}`} />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col items-center gap-4 text-center">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#0F3D2E] via-[#B89B5E] to-[#0F3D2E] p-[1px] shadow-[0_18px_45px_rgba(15,61,46,0.25)]">
              <div className="w-full h-full rounded-full bg-[#F7F5EF] flex items-center justify-center">
                <Sparkles className="w-6 h-6 text-[#0F3D2E]" />
              </div>
            </div>
            <p className="text-xs uppercase tracking-[0.35em] text-[#0F3D2E]/60">Dijawab dengan solusi</p>
            <ArrowRight className="hidden lg:block w-6 h-6 text-[#0F3D2E]/50" aria-hidden="true" />
            <ArrowDown className="lg:hidden w-6 h-6 text-[#0F3D2E]/50" aria-hidden="true" />
          </div>

          <div>
            <div className="flex items-center gap-3 mb-6 rounded-2xl border border-[#B89B5E]/25 bg-white/80 px-4 py-3 shadow-[0_12px_30px_rgba(15,61,46,0.08)]">
              <div className="w-11 h-11 rounded-2xl bg-[#B89B5E]/15 flex items-center justify-center shadow-[inset_0_0_0_1px_rgba(184,155,94,0.25)]">
                <Rocket className="w-5 h-5 text-[#7C6337]" />
              </div>
              <div>
                <p className="text-sm font-semibold text-[#0F3D2E]">Solusi BIDEV</p>
                <p className="text-xs text-[#1C1C1C]/60">Pendekatan konsultasi dan platform terintegrasi.</p>
              </div>
            </div>
            <div className="grid sm:grid-cols-2 gap-5">
              {solutions.map((item) => (
                <div
                  key={item.title}
                  className={`${cardBase} ${solutionTone.border} ${solutionTone.hoverBorder}`}
                >
                  <div className={`absolute -top-16 -right-16 h-32 w-32 rounded-full ${solutionTone.glow} blur-3xl opacity-70`} />
                  <div className={`absolute inset-0 ${item.accent} opacity-0 transition-opacity duration-300 group-hover:opacity-100`} />
                  <div className="relative">
                    <div className="flex items-center justify-between">
                      <div
                        className={`w-11 h-11 rounded-2xl ${solutionTone.iconBg} flex items-center justify-center shadow-[inset_0_0_0_1px_rgba(184,155,94,0.2)]`}
                      >
                        <item.icon className={`w-5 h-5 ${solutionTone.iconColor}`} />
                      </div>
                      <span
                        className={`text-[10px] font-semibold uppercase tracking-[0.3em] ${solutionTone.badge} px-3 py-1 rounded-full`}
                      >
                        {item.tag}
                      </span>
                    </div>
                    <h3 className="mt-4 text-base font-semibold text-[#1C1C1C]">{item.title}</h3>
                    <p className="mt-2 text-sm text-[#1C1C1C]/70 leading-relaxed">{item.description}</p>
                    <div className={`mt-4 h-[2px] w-full rounded-full bg-gradient-to-r ${solutionTone.line}`} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 rounded-3xl border border-[#0F3D2E]/15 bg-white/90 px-6 py-5 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between shadow-[0_18px_45px_rgba(15,61,46,0.08)]">
          <div>
            <p className="text-base font-semibold text-[#0F3D2E]">Siap mengubah tantangan kota Anda?</p>
            <p className="text-sm text-[#1C1C1C]/70">
              Ceritakan konteks dan targetnya. Tim BIDEV akan menyusun scope kerja yang tepat.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/services"
              className="inline-flex items-center text-sm font-semibold text-[#0F3D2E] hover:text-[#B89B5E]"
            >
              Lihat layanan
              <ArrowRight className="w-4 h-4 ml-1" />
            </Link>
            <Link href="/request">
              <Button className="bg-[#B89B5E] text-[#1C1C1C] hover:bg-[#B89B5E]/90 font-semibold">
                Mulai konsultasi
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
