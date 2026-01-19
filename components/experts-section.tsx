"use client"

import Link from "next/link"
import { useState } from "react"
import { ArrowRight, BadgeCheck, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

const expertiseFilters = ["All", "Urban Planning", "Economics", "Data Science", "Public Policy", "Infrastructure"]

const experts = [
  {
    id: "andika-pratama",
    name: "Prof. Dr. Andika Pratama, PhD",
    title: "Urban Planning Expert",
    institution: "ITB",
    expertise: ["Urban Planning", "Smart Cities", "Public Policy"],
    image: "/professional-indonesian-man-professor-formal-portr.jpg",
    available: true,
    verification: "Peer-reviewed profile",
  },
  {
    id: "siti-rahayu",
    name: "Dr. Siti Rahayu, M.Sc",
    title: "Economics Researcher",
    institution: "UNPAD",
    expertise: ["Regional Economics", "Development Policy", "Data Science"],
    image: "/professional-indonesian-woman-academic-formal-port.jpg",
    available: true,
    verification: "Verified Academic",
  },
  {
    id: "bambang-wijaya",
    name: "Prof. Bambang Wijaya, Ph.D",
    title: "Infrastructure Specialist",
    institution: "ITB",
    expertise: ["Infrastructure", "Transportation", "Sustainability"],
    image: "/professional-indonesian-man-engineer-formal-portra.jpg",
    available: false,
    verification: "Peer-reviewed profile",
  },
  {
    id: "maya-kusuma",
    name: "Dr. Maya Kusuma, M.Eng",
    title: "Environmental Scientist",
    institution: "UNPAD",
    expertise: ["Environmental Science", "Climate Policy", "Resilience"],
    image: "/professional-indonesian-woman-scientist-formal-por.jpg",
    available: true,
    verification: "Verified Academic",
  },
  {
    id: "ahmad-fauzi",
    name: "Dr. Ahmad Fauzi, M.T",
    title: "Data Science Lead",
    institution: "ITB",
    expertise: ["Data Science", "Machine Learning", "GIS"],
    image: "/professional-indonesian-man-data-scientist-formal-.jpg",
    available: true,
    verification: "Peer-reviewed profile",
  },
  {
    id: "dewi-anggraini",
    name: "Prof. Dr. Dewi Anggraini",
    title: "Public Policy Expert",
    institution: "UNPAD",
    expertise: ["Public Policy", "Governance", "Social Programs"],
    image: "/professional-indonesian-woman-policy-expert-formal.jpg",
    available: true,
    verification: "Verified Academic",
  },
]

export function ExpertsSection() {
  const [activeFilter, setActiveFilter] = useState("All")

  const filteredExperts =
    activeFilter === "All"
      ? experts
      : experts.filter((e) => e.expertise.some((tag) => tag.toLowerCase().includes(activeFilter.toLowerCase())))

  return (
    <section id="experts" className="py-24 sm:py-32 bg-gradient-to-b from-white via-white to-muted/40">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-[1.1fr,0.9fr] gap-8 lg:gap-12 mb-12">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-primary font-semibold mb-4">Board of experts</p>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-foreground text-balance">
              Curated network ready to co-own your mission
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl">
              Distinguished academics and practitioners from Indonesia&apos;s leading institutions with weekly
              availability updates and transparent engagement models.
            </p>
          </div>
          <div className="rounded-3xl border border-border/70 bg-card px-6 py-5 shadow-[0_20px_60px_rgba(15,61,46,0.08)] flex flex-col gap-3">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-primary/10 flex items-center justify-center">
                <CheckCircle2 className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-sm font-semibold text-foreground">Availability updated every Friday</p>
                <p className="text-xs text-muted-foreground">Request bespoke shortlists within 48 hours.</p>
              </div>
            </div>
            <Link
              href="/request"
              className="inline-flex items-center text-sm font-semibold text-primary hover:text-primary/80 transition-colors"
            >
              Talk to our coordination desk
              <ArrowRight className="w-4 h-4 ml-1" />
            </Link>
          </div>
        </div>

        <div className="flex flex-wrap gap-2 mb-10">
          {expertiseFilters.map((filter) => {
            const isActive = activeFilter === filter
            return (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-4 py-2 rounded-full text-sm font-medium border transition-all ${
                  isActive
                    ? "bg-primary text-primary-foreground border-primary shadow-sm"
                    : "bg-white text-muted-foreground border-border hover:border-primary/50"
                }`}
              >
                {filter}
              </button>
            )
          })}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredExperts.slice(0, 6).map((expert) => {
            const availabilityLabel = expert.available ? "Accepting requests" : "On waitlist"
            const availabilityColor = expert.available ? "text-emerald-600" : "text-orange-500"

            return (
              <Link
                key={expert.id}
                href={`/board-of-experts/${expert.id}`}
                className="group flex flex-col rounded-2xl border border-border/80 bg-card overflow-hidden shadow-[0_18px_50px_rgba(15,61,46,0.12)] hover:-translate-y-1.5 transition-transform"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-muted">
                  <img
                    src={expert.image || "/placeholder.svg"}
                    alt={expert.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  {expert.available && (
                    <Badge className="absolute top-4 left-4 bg-[#0F3D2E] text-white/90 shadow-lg">Available</Badge>
                  )}
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <Badge variant="secondary" className="rounded-full">
                      {expert.institution}
                    </Badge>
                    <span className={`text-xs font-semibold ${availabilityColor}`}>{availabilityLabel}</span>
                  </div>
                  <Badge
                    variant="outline"
                    className="mb-2 flex items-center gap-1 text-[11px] font-semibold text-green-700 border-green-200"
                  >
                    <BadgeCheck className="w-3 h-3" />
                    {expert.verification}
                  </Badge>
                  <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                    {expert.name}
                  </h3>
                  <p className="text-sm text-muted-foreground">{expert.title}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {expert.expertise.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-3 py-1 rounded-full bg-muted text-muted-foreground border border-border/80"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <Button
                    variant="outline"
                    size="sm"
                    className="mt-6 text-sm font-semibold bg-transparent border-border hover:border-primary hover:bg-primary/5"
                  >
                    Request meeting
                  </Button>
                </div>
              </Link>
            )
          })}
        </div>

        <div className="mt-12 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between rounded-3xl border border-border/70 bg-card px-6 py-5">
          <div>
            <p className="text-base font-semibold text-foreground">Need a specific expertise stack?</p>
            <p className="text-sm text-muted-foreground">
              Our coordination desk can propose lead experts, peer reviewers, and delivery partners in one brief.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link href="/board-of-experts">
              <Button variant="outline" className="bg-transparent">
                View all experts
              </Button>
            </Link>
            <Link href="/request">
              <Button>Share your requirement</Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
