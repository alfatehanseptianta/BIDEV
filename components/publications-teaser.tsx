import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { publications } from "@/lib/publications-data"

export function PublicationsTeaser() {
  return (
    <section className="py-24 sm:py-32 bg-muted/30">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between mb-12">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-primary font-semibold mb-4">Publications & insights</p>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground">
              Fresh research, playbooks, and visual intelligence
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl">
              Subscribe to get drops in your inbox - policy briefs, explainers, and interactive dashboards crafted with
              our partners.
            </p>
          </div>
          <Link href="/publications">
            <Button variant="outline" className="bg-white">
              View all publications
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {publications.slice(0, 3).map((pub) => (
            <Link
              key={pub.id}
              href={`/publications/${pub.id}`}
              className="group rounded-3xl border border-border/70 bg-card/95 p-6 shadow-[0_20px_55px_rgba(15,61,46,0.08)] hover:-translate-y-1 transition-transform"
            >
              <div className="relative mb-4 overflow-hidden rounded-2xl border border-border/70">
                <img
                  src={pub.thumbnail}
                  alt={pub.title}
                  className="h-40 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="flex items-center justify-between mb-4">
                <Badge variant="secondary">{pub.type}</Badge>
                <span className="text-xs text-muted-foreground">{pub.date}</span>
              </div>
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-4">
                <pub.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                {pub.title}
              </h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{pub.excerpt}</p>
              <div className="mt-6 flex items-center justify-between text-xs text-muted-foreground">
                <span>{pub.readTime}</span>
                <span className="inline-flex items-center gap-1 font-semibold text-primary">
                  Read
                  <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
