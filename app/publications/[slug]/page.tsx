import type { Metadata } from "next"
import { notFound } from "next/navigation"
import type { Publication } from "@/lib/publications-data"
import { publicationIds, getPublicationById, getPublicationBySlug } from "@/lib/publications-data"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Download, Share2, Clock, Calendar } from "lucide-react"
import Link from "next/link"

export async function generateStaticParams() {
  return publicationIds.map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const publication = getPublicationBySlug(slug)

  if (!publication) {
    return { title: "Publication not found" }
  }

  return {
    title: `${publication.title} | Publications`,
    description: publication.excerpt,
  }
}

export default async function PublicationDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const pub = getPublicationBySlug(slug)

  if (!pub) {
    notFound()
  }

  const relatedPublications = pub.relatedPublicationIds
    .map((id) => getPublicationById(id))
    .filter((item): item is Publication => Boolean(item))

  return (
    <main className="min-h-screen">
      {/* Breadcrumb */}
      <section className="pt-[72px] bg-muted/30 border-b border-border">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link
            href="/publications"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Publications
          </Link>
        </div>
      </section>

      {/* Header */}
      <section className="bg-muted/30 py-12">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-6">
              <Badge variant="secondary">{pub.type}</Badge>
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <span className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  {pub.date}
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  {pub.readTime}
                </span>
              </div>
            </div>
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6">{pub.title}</h1>
            <p className="text-lg text-muted-foreground mb-8">{pub.excerpt}</p>

            {/* Authors */}
            <div className="flex flex-wrap gap-4 mb-8">
              {pub.authors.map((author) => (
                <Link
                  key={author.id}
                  href={`/board-of-experts/${author.id}`}
                  className="flex items-center gap-3 p-3 bg-card rounded-lg border border-border hover:border-primary/30 transition-colors"
                >
                  <img
                    src={author.image || "/placeholder.svg"}
                    alt={author.name}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-medium text-foreground text-sm">{author.name}</p>
                    <p className="text-xs text-muted-foreground">{author.title}</p>
                  </div>
                </Link>
              ))}
            </div>

            {/* Actions */}
            <div className="flex items-center gap-3">
              <Button className="bg-[#B89B5E] text-[#1C1C1C] hover:bg-[#B89B5E]/90">
                <Download className="w-4 h-4 mr-2" />
                Download PDF
              </Button>
              <Button variant="outline">
                <Share2 className="w-4 h-4 mr-2" />
                Share
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-background">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-4 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-3">
              <div className="prose prose-lg max-w-none">
                {pub.content.split("\n").map((paragraph, i) => {
                  if (paragraph.startsWith("## ")) {
                    return (
                      <h2 key={i} className="font-serif text-2xl font-bold text-foreground mt-12 mb-6">
                        {paragraph.replace("## ", "")}
                      </h2>
                    )
                  }
                  if (paragraph.startsWith("### ")) {
                    return (
                      <h3 key={i} className="font-semibold text-xl text-foreground mt-8 mb-4">
                        {paragraph.replace("### ", "")}
                      </h3>
                    )
                  }
                  if (paragraph.startsWith("- ")) {
                    return (
                      <li key={i} className="text-muted-foreground ml-6">
                        {paragraph.replace("- ", "")}
                      </li>
                    )
                  }
                  if (paragraph.match(/^\d\. /)) {
                    return (
                      <li key={i} className="text-muted-foreground ml-6 list-decimal">
                        {paragraph.replace(/^\d\. /, "")}
                      </li>
                    )
                  }
                  if (paragraph.trim() === "") return null
                  return (
                    <p key={i} className="text-muted-foreground mb-4">
                      {paragraph}
                    </p>
                  )
                })}
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-[100px] space-y-8">
                {/* Topics */}
                <div>
                  <h4 className="font-semibold text-foreground mb-3">Topics</h4>
                  <div className="flex flex-wrap gap-2">
                    {pub.topics.map((topic, i) => (
                      <Badge key={i} variant="secondary">
                        {topic}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Related */}
                <div>
                  <h4 className="font-semibold text-foreground mb-3">Related Publications</h4>
                  <div className="space-y-3">
                    {relatedPublications.map((related) => (
                      <Link
                        key={related.id}
                        href={`/publications/${related.id}`}
                        className="block p-3 bg-muted/50 rounded-lg hover:bg-muted transition-colors"
                      >
                        <Badge variant="outline" className="mb-2 text-xs">
                          {related.type}
                        </Badge>
                        <p className="text-sm font-medium text-foreground line-clamp-2">{related.title}</p>
                        <p className="text-xs text-muted-foreground mt-1">{related.date}</p>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-2xl font-bold text-foreground mb-4">Need expert insights for your project?</h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            Connect with the authors of this publication or explore our full expert network.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/contact">
              <Button>Contact the Authors</Button>
            </Link>
            <Link href="/board-of-experts">
              <Button variant="outline">Browse All Experts</Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
