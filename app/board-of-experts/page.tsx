"use client"

import { useState, useMemo } from "react"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Checkbox } from "@/components/ui/checkbox"
import { Sheet, SheetContent, SheetTrigger, SheetHeader, SheetTitle } from "@/components/ui/sheet"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Search, Filter, X, SlidersHorizontal, BadgeCheck } from "lucide-react"
import Link from "next/link"

const expertiseOptions = [
  "Urban Planning",
  "Economics",
  "Data Science",
  "Public Policy",
  "Infrastructure",
  "Environmental Science",
  "Transportation",
  "Housing",
  "Governance",
  "GIS & Mapping",
]

const universityOptions = ["ITB", "UNPAD", "UI", "UGM", "IPB", "ITS"]

const sectorOptions = ["Government", "Industry", "Research", "NGO"]

const availabilityOptions = ["Available this month", "By request"]

const serviceTypeOptions = ["Speaker", "Consultant", "Research Lead"]

const experts = [
  {
    id: "andika-pratama",
    name: "Prof. Dr. Andika Pratama, PhD",
    title: "Urban Planning Expert",
    institution: "ITB",
    expertise: ["Urban Planning", "Smart Cities", "Public Policy"],
    sectors: ["Government", "Research"],
    services: ["Speaker", "Consultant"],
    availability: "Available this month",
    image: "/professional-indonesian-man-professor-formal-portr.jpg",
    positioning: "Leading expert on smart city development and urban transformation strategies.",
    verification: "Peer-reviewed profile",
    coiStatus: "COI cleared Jan 2026",
  },
  {
    id: "siti-rahayu",
    name: "Dr. Siti Rahayu, M.Sc",
    title: "Economics Researcher",
    institution: "UNPAD",
    expertise: ["Economics", "Data Science", "Public Policy"],
    sectors: ["Government", "Industry"],
    services: ["Consultant", "Research Lead"],
    availability: "Available this month",
    image: "/professional-indonesian-woman-academic-formal-port.jpg",
    positioning: "Specialist in regional economic modeling and development impact analysis.",
    verification: "Verified Academic",
    coiStatus: "COI filed Nov 2025",
  },
  {
    id: "bambang-wijaya",
    name: "Prof. Bambang Wijaya, Ph.D",
    title: "Infrastructure Specialist",
    institution: "ITB",
    expertise: ["Infrastructure", "Transportation", "Environmental Science"],
    sectors: ["Government", "Industry"],
    services: ["Speaker", "Consultant"],
    availability: "By request",
    image: "/professional-indonesian-man-engineer-formal-portra.jpg",
    positioning: "Expert in sustainable infrastructure development and transportation systems.",
    verification: "Peer-reviewed profile",
    coiStatus: "COI cleared Aug 2025",
  },
  {
    id: "maya-kusuma",
    name: "Dr. Maya Kusuma, M.Eng",
    title: "Environmental Scientist",
    institution: "UNPAD",
    expertise: ["Environmental Science", "Public Policy", "GIS & Mapping"],
    sectors: ["Government", "Research", "NGO"],
    services: ["Consultant", "Research Lead"],
    availability: "Available this month",
    image: "/professional-indonesian-woman-scientist-formal-por.jpg",
    positioning: "Climate policy specialist with expertise in urban resilience and adaptation.",
    verification: "Verified Academic",
    coiStatus: "COI filed Oct 2025",
  },
  {
    id: "ahmad-fauzi",
    name: "Dr. Ahmad Fauzi, M.T",
    title: "Data Science Lead",
    institution: "ITB",
    expertise: ["Data Science", "GIS & Mapping", "Urban Planning"],
    sectors: ["Government", "Industry"],
    services: ["Consultant", "Research Lead"],
    availability: "Available this month",
    image: "/professional-indonesian-man-data-scientist-formal-.jpg",
    positioning: "Pioneer in applying machine learning to urban planning and policy targeting.",
    verification: "Peer-reviewed profile",
    coiStatus: "COI cleared Jan 2026",
  },
  {
    id: "dewi-anggraini",
    name: "Prof. Dr. Dewi Anggraini",
    title: "Public Policy Expert",
    institution: "UNPAD",
    expertise: ["Public Policy", "Governance", "Economics"],
    sectors: ["Government", "NGO"],
    services: ["Speaker", "Consultant"],
    availability: "Available this month",
    image: "/professional-indonesian-woman-policy-expert-formal.jpg",
    positioning: "Authority on social protection policy and governance reform.",
    verification: "Verified Academic",
    coiStatus: "COI filed Sep 2025",
  },
  {
    id: "hendra-saputra",
    name: "Dr. Hendra Saputra, M.T",
    title: "Transportation Engineer",
    institution: "ITB",
    expertise: ["Transportation", "Infrastructure", "Urban Planning"],
    sectors: ["Government", "Industry"],
    services: ["Consultant", "Research Lead"],
    availability: "By request",
    image: "/professional-indonesian-man-transport-engineer-for.jpg",
    positioning: "Specialist in urban mobility solutions and public transportation optimization.",
    verification: "Peer-reviewed profile",
    coiStatus: "COI cleared Jul 2025",
  },
  {
    id: "ratna-permata",
    name: "Dr. Ratna Permata, M.Si",
    title: "Housing Policy Researcher",
    institution: "UI",
    expertise: ["Housing", "Public Policy", "Economics"],
    sectors: ["Government", "Research"],
    services: ["Consultant", "Research Lead"],
    availability: "Available this month",
    image: "/professional-indonesian-woman-housing-researcher-f.jpg",
    positioning: "Leading researcher on affordable housing policy and urban settlement.",
    verification: "Verified Academic",
    coiStatus: "COI filed Oct 2025",
  },
]

export default function BoardOfExpertsPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedExpertise, setSelectedExpertise] = useState<string[]>([])
  const [selectedUniversity, setSelectedUniversity] = useState<string[]>([])
  const [selectedSector, setSelectedSector] = useState<string[]>([])
  const [selectedAvailability, setSelectedAvailability] = useState<string[]>([])
  const [selectedServiceType, setSelectedServiceType] = useState<string[]>([])
  const [sortBy, setSortBy] = useState("relevant")

  const filteredExperts = useMemo(() => {
    return experts.filter((expert) => {
      const matchesSearch =
        searchQuery === "" ||
        expert.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        expert.expertise.some((e) => e.toLowerCase().includes(searchQuery.toLowerCase())) ||
        expert.title.toLowerCase().includes(searchQuery.toLowerCase())

      const matchesExpertise =
        selectedExpertise.length === 0 || selectedExpertise.some((e) => expert.expertise.includes(e))

      const matchesUniversity = selectedUniversity.length === 0 || selectedUniversity.includes(expert.institution)

      const matchesSector = selectedSector.length === 0 || selectedSector.some((s) => expert.sectors.includes(s))

      const matchesAvailability =
        selectedAvailability.length === 0 || selectedAvailability.includes(expert.availability)

      const matchesServiceType =
        selectedServiceType.length === 0 || selectedServiceType.some((s) => expert.services.includes(s))

      return (
        matchesSearch &&
        matchesExpertise &&
        matchesUniversity &&
        matchesSector &&
        matchesAvailability &&
        matchesServiceType
      )
    })
  }, [searchQuery, selectedExpertise, selectedUniversity, selectedSector, selectedAvailability, selectedServiceType])

  const clearAllFilters = () => {
    setSearchQuery("")
    setSelectedExpertise([])
    setSelectedUniversity([])
    setSelectedSector([])
    setSelectedAvailability([])
    setSelectedServiceType([])
  }

  const hasActiveFilters =
    selectedExpertise.length > 0 ||
    selectedUniversity.length > 0 ||
    selectedSector.length > 0 ||
    selectedAvailability.length > 0 ||
    selectedServiceType.length > 0

  const FilterSection = ({
    title,
    options,
    selected,
    onToggle,
  }: { title: string; options: string[]; selected: string[]; onToggle: (value: string) => void }) => (
    <div className="space-y-3">
      <h4 className="font-semibold text-sm text-foreground">{title}</h4>
      <div className="space-y-2">
        {options.map((option) => (
          <label key={option} className="flex items-center gap-2 cursor-pointer">
            <Checkbox checked={selected.includes(option)} onCheckedChange={() => onToggle(option)} />
            <span className="text-sm text-muted-foreground">{option}</span>
          </label>
        ))}
      </div>
    </div>
  )

  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="pt-[72px] bg-muted/30">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-foreground mb-4">Board of Experts</h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Discover and connect with Indonesia&apos;s leading academics and practitioners. Filter by expertise,
            university, or availability to find the right expert for your project.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-8 bg-background">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-8">
            {/* Desktop Sidebar Filters */}
            <aside className="hidden lg:block w-64 shrink-0">
              <div className="sticky top-[88px] space-y-6">
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold text-foreground">Filters</h3>
                  {hasActiveFilters && (
                    <button onClick={clearAllFilters} className="text-xs text-primary hover:underline">
                      Clear all
                    </button>
                  )}
                </div>

                <FilterSection
                  title="Expertise"
                  options={expertiseOptions}
                  selected={selectedExpertise}
                  onToggle={(value) =>
                    setSelectedExpertise((prev) =>
                      prev.includes(value) ? prev.filter((v) => v !== value) : [...prev, value],
                    )
                  }
                />

                <FilterSection
                  title="University"
                  options={universityOptions}
                  selected={selectedUniversity}
                  onToggle={(value) =>
                    setSelectedUniversity((prev) =>
                      prev.includes(value) ? prev.filter((v) => v !== value) : [...prev, value],
                    )
                  }
                />

                <FilterSection
                  title="Sector"
                  options={sectorOptions}
                  selected={selectedSector}
                  onToggle={(value) =>
                    setSelectedSector((prev) =>
                      prev.includes(value) ? prev.filter((v) => v !== value) : [...prev, value],
                    )
                  }
                />

                <FilterSection
                  title="Availability"
                  options={availabilityOptions}
                  selected={selectedAvailability}
                  onToggle={(value) =>
                    setSelectedAvailability((prev) =>
                      prev.includes(value) ? prev.filter((v) => v !== value) : [...prev, value],
                    )
                  }
                />

                <FilterSection
                  title="Service Type"
                  options={serviceTypeOptions}
                  selected={selectedServiceType}
                  onToggle={(value) =>
                    setSelectedServiceType((prev) =>
                      prev.includes(value) ? prev.filter((v) => v !== value) : [...prev, value],
                    )
                  }
                />
              </div>
            </aside>

            {/* Main Grid */}
            <div className="flex-1">
              {/* Top Bar */}
              <div className="flex flex-col sm:flex-row gap-4 mb-6">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <Input
                    placeholder="Search by name, expertise, or keyword..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10"
                  />
                </div>
                <div className="flex items-center gap-2">
                  <Select value={sortBy} onValueChange={setSortBy}>
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder="Sort by" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="relevant">Most relevant</SelectItem>
                      <SelectItem value="requested">Most requested</SelectItem>
                      <SelectItem value="latest">Latest publications</SelectItem>
                    </SelectContent>
                  </Select>

                  {/* Mobile Filter Button */}
                  <Sheet>
                    <SheetTrigger asChild>
                      <Button variant="outline" size="icon" className="lg:hidden bg-transparent">
                        <SlidersHorizontal className="w-4 h-4" />
                      </Button>
                    </SheetTrigger>
                    <SheetContent side="left" className="w-full sm:w-[400px] overflow-y-auto">
                      <SheetHeader>
                        <SheetTitle>Filters</SheetTitle>
                      </SheetHeader>
                      <div className="space-y-6 mt-6">
                        <FilterSection
                          title="Expertise"
                          options={expertiseOptions}
                          selected={selectedExpertise}
                          onToggle={(value) =>
                            setSelectedExpertise((prev) =>
                              prev.includes(value) ? prev.filter((v) => v !== value) : [...prev, value],
                            )
                          }
                        />
                        <FilterSection
                          title="University"
                          options={universityOptions}
                          selected={selectedUniversity}
                          onToggle={(value) =>
                            setSelectedUniversity((prev) =>
                              prev.includes(value) ? prev.filter((v) => v !== value) : [...prev, value],
                            )
                          }
                        />
                        <FilterSection
                          title="Sector"
                          options={sectorOptions}
                          selected={selectedSector}
                          onToggle={(value) =>
                            setSelectedSector((prev) =>
                              prev.includes(value) ? prev.filter((v) => v !== value) : [...prev, value],
                            )
                          }
                        />
                        <FilterSection
                          title="Availability"
                          options={availabilityOptions}
                          selected={selectedAvailability}
                          onToggle={(value) =>
                            setSelectedAvailability((prev) =>
                              prev.includes(value) ? prev.filter((v) => v !== value) : [...prev, value],
                            )
                          }
                        />
                        <FilterSection
                          title="Service Type"
                          options={serviceTypeOptions}
                          selected={selectedServiceType}
                          onToggle={(value) =>
                            setSelectedServiceType((prev) =>
                              prev.includes(value) ? prev.filter((v) => v !== value) : [...prev, value],
                            )
                          }
                        />
                        {hasActiveFilters && (
                          <Button variant="outline" onClick={clearAllFilters} className="w-full bg-transparent">
                            Clear all filters
                          </Button>
                        )}
                      </div>
                    </SheetContent>
                  </Sheet>
                </div>
              </div>

              {/* Active Filters */}
              {hasActiveFilters && (
                <div className="flex flex-wrap gap-2 mb-6">
                  {selectedExpertise.map((filter) => (
                    <Badge
                      key={filter}
                      variant="secondary"
                      className="cursor-pointer"
                      onClick={() => setSelectedExpertise((prev) => prev.filter((v) => v !== filter))}
                    >
                      {filter}
                      <X className="w-3 h-3 ml-1" />
                    </Badge>
                  ))}
                  {selectedUniversity.map((filter) => (
                    <Badge
                      key={filter}
                      variant="secondary"
                      className="cursor-pointer"
                      onClick={() => setSelectedUniversity((prev) => prev.filter((v) => v !== filter))}
                    >
                      {filter}
                      <X className="w-3 h-3 ml-1" />
                    </Badge>
                  ))}
                  {selectedSector.map((filter) => (
                    <Badge
                      key={filter}
                      variant="secondary"
                      className="cursor-pointer"
                      onClick={() => setSelectedSector((prev) => prev.filter((v) => v !== filter))}
                    >
                      {filter}
                      <X className="w-3 h-3 ml-1" />
                    </Badge>
                  ))}
                </div>
              )}

              {/* Results Count */}
              <p className="text-sm text-muted-foreground mb-6">
                Showing {filteredExperts.length} of {experts.length} experts
              </p>

              {/* Expert Grid */}
              {filteredExperts.length > 0 ? (
                <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
                  {filteredExperts.map((expert) => (
                    <Link
                      key={expert.id}
                      href={`/board-of-experts/${expert.id}`}
                      className="group bg-card rounded-xl border border-border overflow-hidden hover:shadow-xl hover:border-primary/30 transition-all duration-300"
                    >
                      <div className="aspect-[4/3] overflow-hidden bg-muted relative">
                        <img
                          src={expert.image || "/placeholder.svg"}
                          alt={expert.name}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        {expert.availability === "Available this month" && (
                          <Badge className="absolute top-3 right-3 bg-[#0F3D2E] text-white">Available</Badge>
                        )}
                      </div>
                      <div className="p-5">
                        <div className="flex items-center justify-between gap-2 mb-2">
                          <Badge variant="secondary">{expert.institution}</Badge>
                          <Badge
                            variant="outline"
                            className="flex items-center gap-1 text-[11px] font-semibold border-green-200 text-emerald-700"
                          >
                            <BadgeCheck className="w-3 h-3" />
                            {expert.verification}
                          </Badge>
                        </div>
                        <h3 className="font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">
                          {expert.name}
                        </h3>
                        <p className="text-sm text-muted-foreground mb-2">{expert.title}</p>
                        <p className="text-xs text-muted-foreground mb-2 line-clamp-2">{expert.positioning}</p>
                        <p className="text-[11px] text-emerald-700 font-medium mb-4">COI: {expert.coiStatus}</p>
                        <div className="flex flex-wrap gap-1">
                          {expert.expertise.slice(0, 3).map((tag, i) => (
                            <span key={i} className="text-xs px-2 py-1 bg-muted rounded text-muted-foreground">
                              {tag}
                            </span>
                          ))}
                        </div>
                        <Button
                          variant="outline"
                          size="sm"
                          className="w-full mt-4 opacity-0 group-hover:opacity-100 transition-opacity bg-transparent"
                        >
                          Request meeting
                        </Button>
                      </div>
                    </Link>
                  ))}
                </div>
              ) : (
                <div className="text-center py-16">
                  <Filter className="w-12 h-12 text-muted-foreground/30 mx-auto mb-4" />
                  <h3 className="font-semibold text-foreground mb-2">No experts found</h3>
                  <p className="text-muted-foreground mb-4">Try adjusting your filters or search query</p>
                  <Button variant="outline" onClick={clearAllFilters}>
                    Clear all filters
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
