import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function FinalCTA() {
  return (
    <section className="py-24 sm:py-32">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-[32px] bg-[#0F3D2E] text-white px-6 py-12 sm:px-16 sm:py-16">
          <img
            src="/bandung-city-urban-data-dashboard-aerial-view.jpg"
            alt=""
            aria-hidden="true"
            className="absolute inset-0 h-full w-full object-cover opacity-30"
          />
          <div className="absolute inset-0 opacity-40">
            <div className="absolute inset-0 bg-gradient-to-br from-[#0F3D2E] via-[#08231c] to-[#040a08]" />
            <div className="absolute inset-y-0 right-0 w-1/2 bg-gradient-to-l from-white/10 via-transparent to-transparent" />
          </div>
          <div className="relative max-w-3xl text-center mx-auto">
            <p className="text-xs uppercase tracking-[0.35em] text-white/70 mb-4">Let’s build the next mission</p>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold text-balance">
              Need experts for your city or investment?
            </h2>
            <p className="mt-4 text-lg text-white/70">
              Share your context and success metrics. We&apos;ll send a curated scope, expert mix, and timeline within
              five working days.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/contact?intent=consult">
                <Button
                  size="lg"
                  className="h-14 px-8 bg-white text-[#0F3D2E] font-semibold hover:bg-white/90 shadow-lg"
                >
                  Consult with experts
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
              <Link href="/prakarsa">
                <Button
                  size="lg"
                  variant="outline"
                  className="h-14 px-8 border-white/30 text-white hover:bg-white/10 bg-transparent font-semibold"
                >
                  Request PRAKARSA demo
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
