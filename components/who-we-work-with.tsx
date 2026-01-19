import Link from "next/link"
import { Building2, Briefcase, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const governmentPartners = [
  { name: "Pemkot Bandung", full: "Pemerintah Kota Bandung" },
  { name: "Pemprov Jabar", full: "Pemerintah Provinsi Jawa Barat" },
  { name: "BAPPENAS", full: "Badan Perencanaan Pembangunan Nasional" },
  { name: "Kemendagri", full: "Kementerian Dalam Negeri" },
]

const privatePartners = [
  { name: "ITB", full: "Institut Teknologi Bandung" },
  { name: "UNPAD", full: "Universitas Padjadjaran" },
  { name: "UI", full: "Universitas Indonesia" },
  { name: "UGM", full: "Universitas Gadjah Mada" },
]

const partnerLogos = [
  { src: "/itb-logo.jpg", alt: "ITB" },
  { src: "/unpad-logo.jpg", alt: "UNPAD" },
  { src: "/lembaga-demografi-ui-logo.jpg", alt: "UI" },
  { src: "/satu-data-logo.jpg", alt: "Satu Data" },
  { src: "/osm-logo.jpg", alt: "OSM" },
  { src: "/pekka-ngo-logo.jpg", alt: "Pekka" },
  { src: "/rumah-zakat-logo.jpg", alt: "Rumah Zakat" },
  { src: "/tech-company-logo.jpg", alt: "Tech Partner" },
]

export function WhoWeWorkWith() {
  return (
    <section className="py-24 sm:py-32">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <p className="text-xs uppercase tracking-[0.3em] text-primary font-semibold mb-4">Who we work with</p>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-foreground text-balance">
            Trusted by leading institutions
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            We orchestrate missions across ministries, city governments, investors, and universities - with one delivery
            language and quality standard.
          </p>
        </div>

        <div className="mb-12 rounded-3xl border border-border/70 bg-card/80 px-6 py-5 shadow-[0_20px_60px_rgba(15,61,46,0.08)]">
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4 items-center">
            {partnerLogos.map((logo) => (
              <div
                key={logo.alt}
                className="flex items-center justify-center rounded-2xl bg-white/80 p-3 shadow-[0_8px_30px_rgba(15,61,46,0.08)]"
              >
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="h-10 w-auto object-contain opacity-70 grayscale transition duration-300 hover:opacity-100 hover:grayscale-0"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-10">
          <div className="rounded-[32px] border border-border/70 bg-card p-6 sm:p-8 shadow-[0_20px_60px_rgba(15,61,46,0.08)]">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center">
                <Building2 className="w-6 h-6 text-primary" />
              </div>
              <div>
                <p className="text-lg font-semibold text-foreground">Government</p>
                <p className="text-sm text-muted-foreground">National | Provincial | City</p>
              </div>
            </div>
            <div className="mt-6 space-y-4">
              {governmentPartners.map((partner) => (
                <div
                  key={partner.name}
                  className="flex items-center justify-between rounded-2xl border border-border/60 px-4 py-3"
                >
                  <span className="font-semibold text-foreground">{partner.name}</span>
                  <span className="text-xs text-muted-foreground">{partner.full}</span>
                </div>
              ))}
            </div>
            <Link href="/for-government" className="inline-flex items-center gap-2 mt-6 text-sm font-semibold text-primary">
              Solutions for government
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="rounded-[32px] border border-border/70 bg-card p-6 sm:p-8 shadow-[0_20px_60px_rgba(15,61,46,0.08)]">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-accent/20 flex items-center justify-center">
                <Briefcase className="w-6 h-6 text-accent" />
              </div>
              <div>
                <p className="text-lg font-semibold text-foreground">Private & Academic</p>
                <p className="text-sm text-muted-foreground">Investors | Universities | Enterprises</p>
              </div>
            </div>
            <div className="mt-6 space-y-4">
              {privatePartners.map((partner) => (
                <div
                  key={partner.name}
                  className="flex items-center justify-between rounded-2xl border border-border/60 px-4 py-3"
                >
                  <span className="font-semibold text-foreground">{partner.name}</span>
                  <span className="text-xs text-muted-foreground">{partner.full}</span>
                </div>
              ))}
            </div>
            <Link href="/for-private" className="inline-flex items-center gap-2 mt-6 text-sm font-semibold text-primary">
              Solutions for private sector
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        <div className="mt-12 rounded-3xl border border-border/70 bg-muted/40 px-6 py-5 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="text-base font-semibold text-foreground">Partner with BIDEV</p>
            <p className="text-sm text-muted-foreground">
              Joint labs, co-branded research, and investment facilitation supported by shared governance playbooks.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link href="/partners">
              <Button variant="outline" className="bg-card text-foreground">
                Partnership guidelines
              </Button>
            </Link>
            <Link href="/request">
              <Button>Start a collaboration</Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
