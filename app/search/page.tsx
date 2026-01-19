"use client"

import { useState, useMemo } from "react"
import { Footer } from "@/components/footer"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useLanguage } from "@/lib/language-context"
import Link from "next/link"
import { Search, Users, FileText, Briefcase, BookOpen, ArrowRight } from "lucide-react"

// Mock search data
const searchData = {
  experts: [
    {
      id: "andika-pratama",
      name: "Prof. Dr. Andika Pratama, PhD",
      title: "Urban Planning Expert",
      keywords: ["urban planning", "smart city", "perencanaan kota"],
    },
    {
      id: "siti-rahayu",
      name: "Dr. Siti Rahayu, M.Sc",
      title: "Economics Researcher",
      keywords: ["economics", "data science", "ekonomi"],
    },
    {
      id: "ahmad-fauzi",
      name: "Dr. Ahmad Fauzi, M.T",
      title: "Data Science Lead",
      keywords: ["data science", "GIS", "machine learning"],
    },
    {
      id: "dewi-anggraini",
      name: "Prof. Dr. Dewi Anggraini",
      title: "Public Policy Expert",
      keywords: ["public policy", "governance", "kebijakan publik"],
    },
  ],
  services: [
    {
      slug: "policy-consulting",
      name: "Policy & Development Consulting",
      keywords: ["policy", "consulting", "kebijakan"],
    },
    { slug: "training", name: "Training & Capacity Building", keywords: ["training", "pelatihan", "capacity"] },
    { slug: "research", name: "Research & Field Studies", keywords: ["research", "penelitian", "study"] },
    { slug: "digital-systems", name: "Digital Systems & IT Projects", keywords: ["digital", "IT", "smart city"] },
  ],
  publications: [
    {
      slug: "urban-data-framework",
      title: "Framework Tata Kelola Data Perkotaan Indonesia",
      type: "Policy Brief",
      keywords: ["data governance", "urban", "tata kelola"],
    },
    {
      slug: "housing-backlog",
      title: "Analisis Backlog Perumahan Jawa Barat 2025",
      type: "Research Report",
      keywords: ["housing", "perumahan", "backlog"],
    },
    {
      slug: "smart-city-guide",
      title: "Panduan Implementasi Smart City",
      type: "Technical Guide",
      keywords: ["smart city", "implementation", "kota cerdas"],
    },
  ],
  caseStudies: [
    {
      slug: "bandung-social-protection",
      title: "Bandung Social Protection System",
      keywords: ["social protection", "perlindungan sosial", "bandung"],
    },
    {
      slug: "jakarta-data-governance",
      title: "Jakarta Data Governance Transformation",
      keywords: ["data governance", "jakarta", "tata kelola"],
    },
  ],
}

export default function SearchPage() {
  const { t } = useLanguage()
  const [query, setQuery] = useState("")
  const [activeTab, setActiveTab] = useState("all")

  const results = useMemo(() => {
    if (!query.trim()) return { experts: [], services: [], publications: [], caseStudies: [] }

    const q = query.toLowerCase()

    return {
      experts: searchData.experts.filter(
        (e) =>
          e.name.toLowerCase().includes(q) ||
          e.title.toLowerCase().includes(q) ||
          e.keywords.some((k) => k.includes(q)),
      ),
      services: searchData.services.filter(
        (s) => s.name.toLowerCase().includes(q) || s.keywords.some((k) => k.includes(q)),
      ),
      publications: searchData.publications.filter(
        (p) => p.title.toLowerCase().includes(q) || p.keywords.some((k) => k.includes(q)),
      ),
      caseStudies: searchData.caseStudies.filter(
        (c) => c.title.toLowerCase().includes(q) || c.keywords.some((k) => k.includes(q)),
      ),
    }
  }, [query])

  const totalResults =
    results.experts.length + results.services.length + results.publications.length + results.caseStudies.length

  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="pt-[72px] bg-muted/30">
        <div className="max-w-[800px] mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <div className="text-center mb-8">
            <h1 className="font-serif text-4xl sm:text-5xl font-bold text-foreground mb-4">
              {t("Pencarian Global", "Global Search")}
            </h1>
            <p className="text-lg text-muted-foreground">
              {t(
                "Cari pakar, layanan, publikasi, dan studi kasus di seluruh platform BIDEV.",
                "Search experts, services, publications, and case studies across the BIDEV platform.",
              )}
            </p>
          </div>

          {/* Search Input */}
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <Input
              type="search"
              placeholder={t("Ketik untuk mencari...", "Type to search...")}
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="pl-12 h-14 text-lg"
              autoFocus
            />
          </div>

          {query && (
            <p className="text-sm text-muted-foreground mt-4 text-center">
              {t(`Ditemukan ${totalResults} hasil untuk "${query}"`, `Found ${totalResults} results for "${query}"`)}
            </p>
          )}
        </div>
      </section>

      {/* Results */}
      {query && (
        <section className="py-12 sm:py-16 bg-background">
          <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
            <Tabs value={activeTab} onValueChange={setActiveTab}>
              <TabsList className="mb-8">
                <TabsTrigger value="all">
                  {t("Semua", "All")} ({totalResults})
                </TabsTrigger>
                <TabsTrigger value="experts">
                  <Users className="w-4 h-4 mr-2" />
                  {t("Pakar", "Experts")} ({results.experts.length})
                </TabsTrigger>
                <TabsTrigger value="services">
                  <Briefcase className="w-4 h-4 mr-2" />
                  {t("Layanan", "Services")} ({results.services.length})
                </TabsTrigger>
                <TabsTrigger value="publications">
                  <BookOpen className="w-4 h-4 mr-2" />
                  {t("Publikasi", "Publications")} ({results.publications.length})
                </TabsTrigger>
                <TabsTrigger value="cases">
                  <FileText className="w-4 h-4 mr-2" />
                  {t("Studi Kasus", "Case Studies")} ({results.caseStudies.length})
                </TabsTrigger>
              </TabsList>

              <TabsContent value="all" className="space-y-8">
                {/* Experts */}
                {results.experts.length > 0 && (
                  <div>
                    <h3 className="font-semibold text-lg text-foreground mb-4 flex items-center gap-2">
                      <Users className="w-5 h-5 text-primary" />
                      {t("Pakar", "Experts")}
                    </h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      {results.experts.map((expert) => (
                        <Link
                          key={expert.id}
                          href={`/board-of-experts/${expert.id}`}
                          className="flex items-center gap-4 p-4 bg-card rounded-lg border border-border hover:border-primary/30 hover:shadow-md transition-all"
                        >
                          <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                            <span className="text-sm font-semibold text-primary">
                              {expert.name
                                .split(" ")
                                .map((n) => n[0])
                                .slice(0, 2)
                                .join("")}
                            </span>
                          </div>
                          <div>
                            <p className="font-medium text-foreground">{expert.name}</p>
                            <p className="text-sm text-muted-foreground">{expert.title}</p>
                          </div>
                          <ArrowRight className="w-4 h-4 text-muted-foreground ml-auto" />
                        </Link>
                      ))}
                    </div>
                  </div>
                )}

                {/* Services */}
                {results.services.length > 0 && (
                  <div>
                    <h3 className="font-semibold text-lg text-foreground mb-4 flex items-center gap-2">
                      <Briefcase className="w-5 h-5 text-primary" />
                      {t("Layanan", "Services")}
                    </h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      {results.services.map((service) => (
                        <Link
                          key={service.slug}
                          href={`/services/${service.slug}`}
                          className="p-4 bg-card rounded-lg border border-border hover:border-primary/30 hover:shadow-md transition-all flex items-center justify-between"
                        >
                          <span className="font-medium text-foreground">{service.name}</span>
                          <ArrowRight className="w-4 h-4 text-muted-foreground" />
                        </Link>
                      ))}
                    </div>
                  </div>
                )}

                {/* Publications */}
                {results.publications.length > 0 && (
                  <div>
                    <h3 className="font-semibold text-lg text-foreground mb-4 flex items-center gap-2">
                      <BookOpen className="w-5 h-5 text-primary" />
                      {t("Publikasi", "Publications")}
                    </h3>
                    <div className="space-y-3">
                      {results.publications.map((pub) => (
                        <Link
                          key={pub.slug}
                          href={`/publications/${pub.slug}`}
                          className="block p-4 bg-card rounded-lg border border-border hover:border-primary/30 hover:shadow-md transition-all"
                        >
                          <Badge variant="secondary" className="mb-2">
                            {pub.type}
                          </Badge>
                          <p className="font-medium text-foreground">{pub.title}</p>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}

                {/* Case Studies */}
                {results.caseStudies.length > 0 && (
                  <div>
                    <h3 className="font-semibold text-lg text-foreground mb-4 flex items-center gap-2">
                      <FileText className="w-5 h-5 text-primary" />
                      {t("Studi Kasus", "Case Studies")}
                    </h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      {results.caseStudies.map((cs) => (
                        <Link
                          key={cs.slug}
                          href={`/case-studies/${cs.slug}`}
                          className="p-4 bg-card rounded-lg border border-border hover:border-primary/30 hover:shadow-md transition-all flex items-center justify-between"
                        >
                          <span className="font-medium text-foreground">{cs.title}</span>
                          <ArrowRight className="w-4 h-4 text-muted-foreground" />
                        </Link>
                      ))}
                    </div>
                  </div>
                )}

                {totalResults === 0 && (
                  <div className="text-center py-12">
                    <Search className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                    <p className="text-lg text-muted-foreground">
                      {t("Tidak ada hasil ditemukan.", "No results found.")}
                    </p>
                    <p className="text-sm text-muted-foreground mt-2">
                      {t("Coba kata kunci yang berbeda.", "Try different keywords.")}
                    </p>
                  </div>
                )}
              </TabsContent>

              {/* Individual tabs show filtered results */}
              <TabsContent value="experts">
                {results.experts.length > 0 ? (
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {results.experts.map((expert) => (
                      <Link
                        key={expert.id}
                        href={`/board-of-experts/${expert.id}`}
                        className="flex items-center gap-4 p-4 bg-card rounded-lg border border-border hover:border-primary/30 hover:shadow-md transition-all"
                      >
                        <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                          <span className="text-sm font-semibold text-primary">
                            {expert.name
                              .split(" ")
                              .map((n) => n[0])
                              .slice(0, 2)
                              .join("")}
                          </span>
                        </div>
                        <div>
                          <p className="font-medium text-foreground">{expert.name}</p>
                          <p className="text-sm text-muted-foreground">{expert.title}</p>
                        </div>
                      </Link>
                    ))}
                  </div>
                ) : (
                  <p className="text-center text-muted-foreground py-8">
                    {t("Tidak ada pakar ditemukan.", "No experts found.")}
                  </p>
                )}
              </TabsContent>

              <TabsContent value="services">
                {results.services.length > 0 ? (
                  <div className="grid md:grid-cols-2 gap-4">
                    {results.services.map((service) => (
                      <Link
                        key={service.slug}
                        href={`/services/${service.slug}`}
                        className="p-4 bg-card rounded-lg border border-border hover:border-primary/30 hover:shadow-md transition-all"
                      >
                        <span className="font-medium text-foreground">{service.name}</span>
                      </Link>
                    ))}
                  </div>
                ) : (
                  <p className="text-center text-muted-foreground py-8">
                    {t("Tidak ada layanan ditemukan.", "No services found.")}
                  </p>
                )}
              </TabsContent>

              <TabsContent value="publications">
                {results.publications.length > 0 ? (
                  <div className="space-y-3">
                    {results.publications.map((pub) => (
                      <Link
                        key={pub.slug}
                        href={`/publications/${pub.slug}`}
                        className="block p-4 bg-card rounded-lg border border-border hover:border-primary/30 hover:shadow-md transition-all"
                      >
                        <Badge variant="secondary" className="mb-2">
                          {pub.type}
                        </Badge>
                        <p className="font-medium text-foreground">{pub.title}</p>
                      </Link>
                    ))}
                  </div>
                ) : (
                  <p className="text-center text-muted-foreground py-8">
                    {t("Tidak ada publikasi ditemukan.", "No publications found.")}
                  </p>
                )}
              </TabsContent>

              <TabsContent value="cases">
                {results.caseStudies.length > 0 ? (
                  <div className="grid md:grid-cols-2 gap-4">
                    {results.caseStudies.map((cs) => (
                      <Link
                        key={cs.slug}
                        href={`/case-studies/${cs.slug}`}
                        className="p-4 bg-card rounded-lg border border-border hover:border-primary/30 hover:shadow-md transition-all"
                      >
                        <span className="font-medium text-foreground">{cs.title}</span>
                      </Link>
                    ))}
                  </div>
                ) : (
                  <p className="text-center text-muted-foreground py-8">
                    {t("Tidak ada studi kasus ditemukan.", "No case studies found.")}
                  </p>
                )}
              </TabsContent>
            </Tabs>
          </div>
        </section>
      )}

      <Footer />
    </main>
  )
}
