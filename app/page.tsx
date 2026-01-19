import { HeroSection } from "@/components/hero-section"
import { AboutInstitute } from "@/components/about-institute"
import { ExpertsSection } from "@/components/experts-section"
import { WhatWeDo } from "@/components/what-we-do"
import { UrbanChallenges } from "@/components/urban-challenges"
import { PrakarsaSection } from "@/components/prakarsa-section"
import { WhoWeWorkWith } from "@/components/who-we-work-with"
import { BidvBenefits } from "@/components/bidv-benefits"
import { TestimonialsSection } from "@/components/testimonials-section"
import { PublicationsTeaser } from "@/components/publications-teaser"
import { PodcastVideoSection } from "@/components/podcast-video-section"
import { FinalCTA } from "@/components/final-cta"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <AboutInstitute />
      <ExpertsSection />
      <WhatWeDo />
      <UrbanChallenges />
      <PrakarsaSection />
      <WhoWeWorkWith />
      <BidvBenefits />
      <TestimonialsSection />
      <PublicationsTeaser />
      <PodcastVideoSection />
      <FinalCTA />
      <Footer />
    </main>
  )
}
