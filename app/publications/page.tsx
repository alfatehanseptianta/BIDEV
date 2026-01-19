"use client"

import { useState, useMemo } from "react"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Search, FileText, Star } from "lucide-react"
import Link from "next/link"
import { publications } from "@/lib/publications-data"

const topicFilters = [
  "All",
  "Housing",
  "Transportation",
  "Data Science",
  "Public Policy",
  "Smart Cities",
  "Environment",
  "Economics",
]

export default function PublicationsPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [activeType, setActiveType] = useState("all")
  const [selectedTopic, setSelectedTopic] = useState("All")

  const filteredPublications = useMemo(() => {
    return publications.filter((pub) => {
      const matchesSearch =
        searchQuery === "" ||
        pub.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        pub.excerpt.toLowerCase().includes(searchQuery.toLowerCase())

      const matchesType = activeType === "all" || pub.type.toLowerCase().replace(" ", "-") === activeType

      const matchesTopic = selectedTopic === "All" || pub.topics.some((t) => t === selectedTopic)

      return matchesSearch && matchesType && matchesTopic
    })
  }, [searchQuery, activeType, selectedTopic])

  const featuredPublication = publications.find((p) => p.featured)

  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="pt-[72px] bg-muted/30">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-foreground mb-4">Publications & Insights</h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Research reports, policy briefs, infographics, and multimedia content from BIDEV&apos;s expert network.
            Evidence-based insights for urban development in Indonesia.
          </p>
        </div>
      </section>

      {/* Featured Publication */}
      {featuredPublication && (
        <section className="py-12 bg-background border-b border-border">
          <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-2 mb-6">
              <Star className="w-4 h-4 text-[#B89B5E]" />
              <span className="text-sm font-semibold text-[#B89B5E]">Featured</span>
            </div>
            <Link
              href={`/publications/${featuredPublication.id}`}
              className="group grid lg:grid-cols-2 gap-8 items-center"
            >
              <div className="aspect-video bg-muted rounded-xl overflow-hidden">
                <img
                  src={featuredPublication.thumbnail || "/placeholder.svg"}
                  alt={featuredPublication.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <Badge variant="secondary">{featuredPublication.type}</Badge>
                  <span className="text-sm text-muted-foreground">{featuredPublication.date}</span>
                </div>
                <h2 className="font-serif text-2xl sm:text-3xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors">
                  {featuredPublication.title}
                </h2>
                <p className="text-muted-foreground mb-4">{featuredPublication.excerpt}</p>
                <div className="flex items-center gap-4">
                  <p className="text-sm text-muted-foreground">
                    {featuredPublication.authors.map((author) => author.name).join(", ")}
                  </p>
                  <span className="text-sm text-muted-foreground">·</span>
                  <span className="text-sm text-muted-foreground">{featuredPublication.readTime}</span>
                </div>
              </div>
            </Link>
          </div>
        </section>
      )}

      {/* Main Content */}
      <section className="py-12 bg-background">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filters */}
          <div className="flex flex-col lg:flex-row gap-4 mb-8">
            <Tabs value={activeType} onValueChange={setActiveType} className="w-full lg:w-auto">
              <TabsList>
                <TabsTrigger value="all">All</TabsTrigger>
                <TabsTrigger value="policy-brief">Policy Briefs</TabsTrigger>
                <TabsTrigger value="article">Articles</TabsTrigger>
                <TabsTrigger value="infographic">Infographics</TabsTrigger>
                <TabsTrigger value="podcast">Podcasts</TabsTrigger>
                <TabsTrigger value="video">Videos</TabsTrigger>
              </TabsList>
            </Tabs>

            <div className="flex items-center gap-4 flex-1">
              <Select value={selectedTopic} onValueChange={setSelectedTopic}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Filter by topic" />
                </SelectTrigger>
                <SelectContent>
                  {topicFilters.map((topic) => (
                    <SelectItem key={topic} value={topic}>
                      {topic}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input
                  placeholder="Search publications..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>
          </div>

          {/* Results */}
          <p className="text-sm text-muted-foreground mb-6">
            Showing {filteredPublications.length} of {publications.length} publications
          </p>

          {filteredPublications.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredPublications.map((pub) => (
                <Link
                  key={pub.id}
                  href={`/publications/${pub.id}`}
                  className="group bg-card rounded-xl border border-border overflow-hidden hover:shadow-xl hover:border-primary/30 transition-all duration-300"
                >
                  <div className="aspect-video bg-muted relative overflow-hidden">
                    <img
                      src={pub.thumbnail || "/placeholder.svg"}
                      alt={pub.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-3 left-3">
                      <Badge className="bg-background/90 text-foreground backdrop-blur-sm">{pub.type}</Badge>
                    </div>
                  </div>
                  <div className="p-5">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-xs text-muted-foreground">{pub.date}</span>
                      <span className="text-xs text-muted-foreground">·</span>
                      <span className="text-xs text-muted-foreground">{pub.readTime}</span>
                    </div>
                    <h3 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors line-clamp-2">
                      {pub.title}
                    </h3>
                    <p className="text-sm text-muted-foreground line-clamp-2 mb-4">{pub.excerpt}</p>
                    <div className="flex flex-wrap gap-1">
                      {pub.topics.map((topic, i) => (
                        <span key={i} className="text-xs px-2 py-1 bg-muted rounded text-muted-foreground">
                          {topic}
                        </span>
                      ))}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <FileText className="w-12 h-12 text-muted-foreground/30 mx-auto mb-4" />
              <h3 className="font-semibold text-foreground mb-2">No publications found</h3>
              <p className="text-muted-foreground">Try adjusting your filters or search query</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-2xl font-bold text-foreground mb-4">Want to collaborate on research?</h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            BIDEV welcomes research collaborations with academic institutions, government agencies, and private sector
            organizations.
          </p>
          <Link href="/contact?intent=research">
            <Button>Contact Research Team</Button>
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  )
}
