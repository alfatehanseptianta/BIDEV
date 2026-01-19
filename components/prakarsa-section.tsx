import Link from "next/link"
import { Database, LineChart, MapPin, Home, Lightbulb, Building, ArrowRight, Play } from "lucide-react"
import { Button } from "@/components/ui/button"

const features = [
  { icon: Database, label: "Regsosek Data" },
  { icon: Home, label: "Housing Assessment" },
  { icon: Lightbulb, label: "Public Lighting" },
  { icon: Building, label: "Boarding Houses" },
  { icon: MapPin, label: "Infrastructure" },
  { icon: LineChart, label: "Policy Analytics" },
]

const highlights = [
  { label: "Coverage", value: "1.5M+", desc: "Households mapped" },
  { label: "Dashboard", value: "Real-time", desc: "Data visualization" },
  { label: "Deployment", value: "Pilot -> Scale", desc: "Proven methodology" },
]

const workflowSteps = ["Collect", "Verify", "Analyze", "Target"]

const dashboardSignals = [
  { label: "Data freshness", value: "Weekly", detail: "Rolling updates" },
  { label: "Field verification", value: "92%", detail: "Photo & GPS proof" },
]

export function PrakarsaSection() {
  return (
    <section className="py-24 sm:py-32">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-[40px] bg-[#071714] text-white isolate">
          <div className="absolute inset-0 opacity-90">
            <div className="absolute inset-0 bg-gradient-to-br from-[#0F3D2E] via-[#05110f] to-[#020605]" />
            <div className="absolute inset-0 opacity-[0.14]">
              <svg className="w-full h-full" viewBox="0 0 400 400">
                <defs>
                  <pattern id="prakarsa-grid" width="40" height="40" patternUnits="userSpaceOnUse">
                    <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#F7F5EF" strokeWidth="0.5" strokeOpacity="0.3" />
                  </pattern>
                </defs>
                <rect width="400" height="400" fill="url(#prakarsa-grid)" />
              </svg>
            </div>
            <div className="absolute -top-24 -right-12 w-64 h-64 bg-[#B89B5E]/20 rounded-full blur-3xl float-slow" />
            <div className="absolute -bottom-28 -left-16 w-72 h-72 bg-[#0F3D2E]/45 rounded-full blur-3xl float-slower" />
          </div>

          <div className="relative grid lg:grid-cols-[1.1fr,0.9fr] gap-12 lg:gap-16 p-8 sm:p-12">
            <div className="reveal-up" style={{ animationDelay: "80ms" }}>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full text-[11px] uppercase tracking-[0.35em] text-white/80">
                <span className="w-2 h-2 rounded-full bg-[#B89B5E] shadow-[0_0_12px_rgba(184,155,94,0.6)]" />
                Flagship program
              </div>
              <h2 className="mt-6 font-serif text-3xl sm:text-4xl md:text-5xl font-semibold leading-tight text-balance">
                <span className="block text-[#F7F5EF]">PRAKARSA</span>
                <span className="block text-white/90">Citywide data intelligence for decision makers</span>
              </h2>
              <p className="mt-4 text-lg text-white/70 max-w-xl">
                A modular platform that unifies socio-economic data, field verification, and live dashboards so mayors,
                ministries, and investors can govern with precision.
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-3">
                {highlights.map((item, index) => (
                  <div
                    key={item.label}
                    className="reveal-up rounded-2xl border border-white/15 bg-white/5 px-4 py-3"
                    style={{ animationDelay: `${160 + index * 90}ms` }}
                  >
                    <p className="text-[10px] uppercase tracking-[0.25em] text-white/50">{item.label}</p>
                    <p className="mt-2 text-xl font-semibold text-[#B89B5E]">{item.value}</p>
                    <p className="text-xs text-white/60">{item.desc}</p>
                  </div>
                ))}
              </div>

              <div className="mt-8">
                <p className="text-xs uppercase tracking-[0.3em] text-white/50">Integrated modules</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {features.map((feature, index) => (
                    <div
                      key={feature.label}
                      className="reveal-up inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/15 bg-white/5 text-xs font-semibold"
                      style={{ animationDelay: `${360 + index * 60}ms` }}
                    >
                      <span className="flex h-6 w-6 items-center justify-center rounded-full border border-white/15 bg-white/5">
                        <feature.icon className="w-3.5 h-3.5 text-[#B89B5E]" />
                      </span>
                      {feature.label}
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-10 grid gap-4 rounded-3xl border border-white/15 bg-white/5 p-5 reveal-up" style={{ animationDelay: "540ms" }}>
                <div className="flex items-center justify-between">
                  <p className="text-sm text-white/70">Data -&gt; Insight -&gt; Policy</p>
                  <span className="text-xs font-semibold text-[#B89B5E]">Auditable workflow</span>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {workflowSteps.map((step) => (
                    <div
                      key={step}
                      className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-[11px] uppercase tracking-[0.18em] text-white/70 text-center"
                    >
                      {step}
                    </div>
                  ))}
                </div>
                <div className="w-full h-1 rounded-full bg-white/10">
                  <div className="h-full w-2/3 rounded-full bg-gradient-to-r from-[#B89B5E] to-[#F7F5EF]" />
                </div>
                <p className="text-sm text-white/70">
                  City taskforces rely on PRAKARSA for targeting subsidies, tracking resilience indicators, and
                  accelerating permitting decisions.
                </p>
              </div>

              <div className="mt-8 flex flex-col sm:flex-row gap-3 reveal-up" style={{ animationDelay: "640ms" }}>
                <Link href="/prakarsa">
                  <Button className="bg-[#B89B5E] text-[#1C1C1C] hover:bg-[#B89B5E]/90 font-semibold shadow-[0_18px_45px_rgba(0,0,0,0.35)]">
                    <Play className="w-4 h-4 mr-2" />
                    Request demo
                  </Button>
                </Link>
                <Link href="/contact?intent=prakarsa">
                  <Button
                    variant="outline"
                    className="border-white/30 text-white hover:bg-white/10 bg-transparent font-semibold"
                  >
                    Deploy in your city
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
              </div>
            </div>

            <div className="relative reveal-up" style={{ animationDelay: "160ms" }}>
              <div className="absolute -top-10 -right-4 w-40 h-40 bg-[#B89B5E]/25 rounded-full blur-3xl opacity-70 float-slow" />
              <div className="absolute -bottom-14 -left-6 w-56 h-56 bg-[#0F3D2E]/45 rounded-full blur-3xl opacity-70 float-slower" />
              <div className="relative rounded-[34px] p-[1px] bg-gradient-to-br from-white/25 via-white/10 to-transparent">
                <div className="rounded-[32px] border border-white/15 bg-white/5 p-5 sm:p-6 backdrop-blur-2xl shadow-[0_30px_70px_rgba(0,0,0,0.35)]">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <p className="text-xs uppercase tracking-[0.3em] text-white/60">Dashboard</p>
                      <p className="text-base font-semibold">City readiness index</p>
                    </div>
                    <span className="inline-flex items-center gap-2 text-xs font-semibold text-[#B89B5E]">
                      <span className="w-2 h-2 rounded-full bg-[#B89B5E] shadow-[0_0_12px_rgba(184,155,94,0.6)]" />
                      Live sync
                    </span>
                  </div>
                  <div className="rounded-2xl border border-white/15 bg-[#0A1311] p-3 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-[#0F3D2E]/25" />
                    <img
                      src="/data-dashboard-analytics-urban-planning-heatmap-ch.jpg"
                      alt="PRAKARSA Dashboard Preview"
                      className="relative w-full rounded-xl"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                  <div className="mt-5 grid grid-cols-2 gap-3">
                    {dashboardSignals.map((item) => (
                      <div key={item.label} className="rounded-2xl border border-white/15 bg-white/5 p-4">
                        <p className="text-xs text-white/60">{item.label}</p>
                        <p className="text-xl font-semibold mt-2">{item.value}</p>
                        <p className="text-[11px] text-white/50 mt-1">{item.detail}</p>
                      </div>
                    ))}
                  </div>
                  <div className="mt-5 rounded-2xl border border-white/15 bg-white/5 p-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-semibold">Upcoming releases</p>
                        <p className="text-xs text-white/60">Inventory & permitting | ESG toolkit</p>
                      </div>
                      <span className="text-xs text-white/70">Q2 2025</span>
                    </div>
                    <div className="mt-3 flex items-center justify-between text-xs text-white/60">
                      <span>Implementation pipeline</span>
                      <span className="text-[#B89B5E]">In review</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
