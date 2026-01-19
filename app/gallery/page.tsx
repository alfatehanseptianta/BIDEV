import Link from "next/link"
import { ArrowRight, Mic, PlayCircle, Play } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Footer } from "@/components/footer"
import { newsItems, podcastEpisodes } from "@/lib/gallery-data"

export default function GalleryPage() {
  return (
    <main className="min-h-screen">
      <section className="pt-[72px] bg-muted/30">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <p className="text-xs uppercase tracking-[0.3em] text-primary font-semibold mb-4">Gallery</p>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-foreground mb-4">BIDEV Gallery</h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Curated coverage, announcements, and expert conversations that shape Indonesia&apos;s urban development
            agenda.
          </p>
        </div>
      </section>

      <section id="news" className="py-16 bg-background">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between mb-10">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-primary font-semibold mb-3">News</p>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground">BIDEV in the news</h2>
              <p className="mt-3 text-lg text-muted-foreground max-w-2xl">
                Press coverage and milestone updates across data governance, mobility, and social protection.
              </p>
            </div>
            <Link href="/media">
              <Button variant="outline" className="bg-white">
                Media kit
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {newsItems.map((item) => (
              <Link
                key={item.id}
                href={item.link}
                className="group rounded-3xl border border-border/70 bg-card/95 overflow-hidden shadow-[0_18px_50px_rgba(15,61,46,0.08)] hover:-translate-y-1 transition-transform"
              >
                <div className="relative aspect-[16/9] overflow-hidden bg-muted">
                  <img
                    src={item.thumbnail}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <Badge variant="secondary">{item.category}</Badge>
                    <span className="text-xs text-muted-foreground">{item.date}</span>
                  </div>
                  <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{item.summary}</p>
                  <div className="mt-4 flex items-center justify-between text-xs text-muted-foreground">
                    <span>{item.outlet}</span>
                    <span className="inline-flex items-center gap-1 font-semibold text-primary">
                      Read
                      <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section id="podcasts" className="py-16 bg-muted/30">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between mb-10">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-primary font-semibold mb-3">Podcast & video</p>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground">
                Expert conversations and explainers
              </h2>
              <p className="mt-3 text-lg text-muted-foreground max-w-2xl">
                Listen to deep dives with BIDEV experts on the policies, data, and partnerships behind real change.
              </p>
            </div>
            <Link href="/newsletter">
              <Button className="bg-accent text-accent-foreground hover:bg-accent/90 font-semibold">
                Subscribe to updates
              </Button>
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {podcastEpisodes.map((episode) => {
            const isVideo = episode.type === "Video"
            const TypeIcon = isVideo ? PlayCircle : Mic
            const actionLabel = isVideo ? "Watch" : "Listen"
            const previewDuration = episode.duration.replace(" listen", "").replace(" watch", "")

            return (
              <Link
                key={episode.id}
                href={episode.link}
                className="group rounded-3xl border border-border/70 bg-card/95 p-6 shadow-[0_18px_50px_rgba(15,61,46,0.08)] hover:-translate-y-1 transition-transform"
              >
                <div className="relative mb-4 overflow-hidden rounded-2xl border border-border/70">
                  <img
                    src={episode.thumbnail}
                    alt={episode.title}
                    className="h-44 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  {isVideo && (
                    <>
                      <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/10 to-transparent" />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="flex h-12 w-12 items-center justify-center rounded-full bg-white/85 text-foreground shadow-lg backdrop-blur-sm transition-transform duration-300 group-hover:scale-110">
                          <Play className="h-6 w-6 ml-0.5" />
                        </span>
                      </div>
                      <span className="absolute bottom-3 right-3 rounded-md bg-black/70 px-2 py-1 text-[10px] font-semibold text-white">
                        {previewDuration}
                      </span>
                    </>
                  )}
                  <div className="absolute bottom-3 left-3 inline-flex items-center gap-2 rounded-full bg-black/65 px-3 py-1 text-xs font-semibold text-white">
                    <TypeIcon className="w-3.5 h-3.5" />
                    {episode.type}
                  </div>
                </div>
                  <div className="flex items-center justify-between mb-3">
                    <Badge variant="secondary">{episode.type}</Badge>
                    <span className="text-xs text-muted-foreground">{episode.date}</span>
                  </div>
                  <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                    {episode.title}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{episode.issue}</p>
                  <div className="mt-5 flex items-center gap-3">
                    <img
                      src={episode.expertImage}
                      alt={episode.expert}
                      className="w-10 h-10 rounded-full object-cover border border-border/70"
                    />
                    <div>
                      <p className="text-sm font-semibold text-foreground">{episode.expert}</p>
                      <p className="text-xs text-muted-foreground">{episode.expertTitle}</p>
                    </div>
                  </div>
                <div className="mt-5 flex items-center justify-between text-xs text-muted-foreground">
                  <span>{episode.duration}</span>
                  <span className="inline-flex items-center gap-1 font-semibold text-primary">
                    {actionLabel}
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </Link>
            )
            })}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
