import Link from "next/link"
import { ArrowRight, Users, Building2, FileText, Activity, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"

const focusAreas = ["Urban data infrastructure", "Policy delivery", "Sustainable investment"]

const heroStats = [
  { icon: Users, value: "50+", label: "Experts on call" },
  { icon: Building2, value: "30+", label: "Cities & partners" },
  { icon: FileText, value: "60+", label: "Insights & playbooks" },
  { icon: Activity, value: "12", label: "Flagship programs" },
]

export function HeroSection() {
  return (
    <section className="relative isolate overflow-hidden pt-[120px] pb-28 lg:pb-36 lg:min-h-[calc(100svh-78px)]">
      <div className="absolute inset-0 -z-10">
        <div
          className="absolute inset-0 bg-cover bg-[position:70%_45%] opacity-80 saturate-[0.9]"
          style={{ backgroundImage: "url('/abstract-urban-data-grid-cityscape-bandung-modern.jpg')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#050605]/90 via-[#060F0D]/85 to-[#0F3D2E]/65" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#050807]/95 via-[#050807]/70 to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_15%,rgba(184,147,85,0.18),transparent_55%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_85%_20%,rgba(16,185,129,0.2),transparent_50%)]" />
        <div className="absolute inset-0 opacity-[0.08]">
          <svg className="w-full h-full" viewBox="0 0 1200 800">
            <defs>
              <pattern id="hero-grid" width="80" height="80" patternUnits="userSpaceOnUse">
                <path d="M 80 0 L 0 0 0 80" fill="none" stroke="#F7F5EF" strokeWidth="0.5" strokeOpacity="0.35" />
              </pattern>
            </defs>
            <rect width="1200" height="800" fill="url(#hero-grid)" />
          </svg>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505]/85 via-transparent to-transparent" />
      </div>

      <div className="relative z-10 max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-[1.1fr,0.9fr] gap-10 lg:gap-12 xl:gap-20 items-start lg:items-center">
          <div className="space-y-8">
            <div className="space-y-6 reveal-up" style={{ animationDelay: "0.05s" }}>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/20 bg-white/5 text-[11px] sm:text-xs font-semibold tracking-[0.18em] uppercase text-white/70">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                Independent think tank
              </div>
              <h1 className="max-w-[22ch] font-serif text-4xl sm:text-5xl lg:text-6xl xl:text-7xl text-[#F7F5EF] leading-tight text-balance">
                Bandung Institute for Development <span className="text-[#E4C57A]">& Urban Futures</span>
              </h1>
              <p className="max-w-2xl text-lg sm:text-xl text-[#F7F5EF]/75 leading-relaxed text-balance">
                Bridging knowledge, policy, and impact by coordinating Indonesia&apos;s brightest minds to turn live data
                into decisions for cities, ministries, and investors.
              </p>
            </div>

            <div className="flex flex-wrap gap-3 reveal-up" style={{ animationDelay: "0.16s" }}>
              {focusAreas.map((item) => (
                <span
                  key={item}
                  className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-[11px] sm:text-xs font-medium uppercase tracking-[0.12em] text-white/70"
                >
                  <Sparkles className="w-3.5 h-3.5 text-[#B89B5E]" />
                  {item}
                </span>
              ))}
            </div>

            <div
              className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4 reveal-up"
              style={{ animationDelay: "0.28s" }}
            >
              <Link href="/contact?intent=consult">
                <Button
                  size="lg"
                  className="group relative h-14 w-full sm:w-auto px-8 rounded-full border border-[#EAD8A0]/25 bg-[linear-gradient(110deg,#b89355_0%,#d9c281_48%,#b89355_100%)] text-[#1A140B] font-semibold shadow-[0_20px_45px_rgba(0,0,0,0.45)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_28px_60px_rgba(0,0,0,0.55)] focus-visible:ring-2 focus-visible:ring-[#EAD8A0]/60 focus-visible:ring-offset-0 overflow-hidden before:content-[''] before:absolute before:inset-0 before:bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.45),transparent_55%)] before:opacity-60 before:transition-opacity before:duration-300 hover:before:opacity-100"
                >
                  <span className="relative z-10 inline-flex items-center gap-2">
                    Consult with Experts
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </Button>
              </Link>
              <Link href="/prakarsa">
                <Button
                  size="lg"
                  variant="outline"
                  className="group relative h-14 w-full sm:w-auto px-8 rounded-full border border-white/30 text-white bg-white/5 backdrop-blur-[2px] shadow-[inset_0_0_0_1px_rgba(255,255,255,0.08)] transition-all duration-300 hover:border-white/60 hover:bg-white/[0.12] hover:shadow-[0_16px_40px_rgba(0,0,0,0.3)] overflow-hidden before:content-[''] before:absolute before:inset-0 before:bg-[linear-gradient(120deg,transparent,rgba(255,255,255,0.18),transparent)] before:opacity-0 before:transition-opacity before:duration-500 hover:before:opacity-100"
                >
                  <span className="relative z-10">Explore Programs</span>
                </Button>
              </Link>
              <Link href="/join">
                <Button
                  size="lg"
                  variant="ghost"
                  className="group relative h-14 w-full sm:w-auto px-8 rounded-full text-white/70 hover:text-white bg-transparent border border-transparent hover:border-white/20 hover:bg-white/5 transition-all duration-300 after:content-[''] after:absolute after:left-6 after:right-6 after:bottom-3 after:h-px after:bg-gradient-to-r after:from-transparent after:via-[#B89B5E] after:to-transparent after:opacity-0 after:transition-opacity after:duration-300 hover:after:opacity-100"
                >
                  <span className="relative z-10">Join the Board</span>
                </Button>
              </Link>
            </div>
          </div>

          <div className="relative space-y-6 lg:pt-0 lg:justify-self-end lg:max-w-[460px] xl:max-w-[520px]">
            <div className="absolute -top-14 -right-10 h-40 w-40 rounded-full bg-emerald-400/20 blur-3xl" />
            <div className="absolute top-24 -left-12 h-44 w-44 rounded-full bg-[#B89B5E]/20 blur-3xl" />

            <div
              className="relative rounded-[26px] border border-white/15 bg-white/5 p-6 backdrop-blur-xl shadow-[0_24px_60px_rgba(0,0,0,0.35)] reveal-up"
              style={{ animationDelay: "0.22s" }}
            >
              <div className="flex items-center justify-between gap-3">
                <p className="text-xs uppercase tracking-[0.35em] text-white/70">Impact signals</p>
                <span className="text-[10px] uppercase tracking-[0.3em] text-white/50">Current snapshot</span>
              </div>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {heroStats.map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-2xl border border-white/10 bg-white/5 px-4 py-4 flex items-center gap-3 shadow-[0_12px_30px_rgba(0,0,0,0.15)]"
                  >
                    <div className="w-11 h-11 rounded-2xl bg-[#0F3D2E]/70 flex items-center justify-center">
                      <stat.icon className="w-5 h-5 text-[#B89B5E]" />
                    </div>
                    <div>
                      <p className="text-2xl font-semibold text-white">{stat.value}</p>
                      <p className="text-xs uppercase tracking-[0.2em] text-white/60">{stat.label}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
