const partners = [
  { name: "ITB", full: "Institut Teknologi Bandung" },
  { name: "UNPAD", full: "Universitas Padjadjaran" },
  { name: "Pemkot Bandung", full: "Pemerintah Kota Bandung" },
  { name: "Pemprov Jabar", full: "Pemerintah Provinsi Jawa Barat" },
  { name: "BAPPENAS", full: "Badan Perencanaan Pembangunan Nasional" },
]

export function PartnersSection() {
  return (
    <section className="py-16 sm:py-20 bg-muted/30 border-y border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-sm uppercase tracking-widest text-muted-foreground font-semibold mb-10">
          Trusted By Leading Institutions
        </p>
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16">
          {partners.map((partner, index) => (
            <div key={index} className="text-center group">
              <p className="text-2xl font-bold text-foreground/80 group-hover:text-primary transition-colors">
                {partner.name}
              </p>
              <p className="text-xs text-muted-foreground mt-1">{partner.full}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
