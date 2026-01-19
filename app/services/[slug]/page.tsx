import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { ArrowLeft, ArrowRight, CheckCircle, Clock, Users, AlertCircle, Briefcase } from "lucide-react"
import Link from "next/link"

// This would come from CMS in production
const serviceData = {
  slug: "policy-consulting",
  title: "Policy & Development Consulting",
  headline: "Strategic Advisory for Evidence-Based Policy",
  valueProposition:
    "Transform complex urban challenges into actionable policy solutions with our team of academic experts and seasoned practitioners.",
  problemWeSolve: [
    "Fragmented data sources leading to uninformed policy decisions",
    "Lack of academic rigor in policy formulation processes",
    "Disconnect between research findings and practical implementation",
    "Limited capacity to analyze complex urban development issues",
  ],
  deliverables: [
    "Comprehensive policy assessment reports",
    "Regulatory framework analysis",
    "Strategic recommendations with evidence base",
    "Implementation roadmap with milestones",
    "Stakeholder engagement strategy",
    "Monitoring and evaluation framework",
  ],
  methodology: [
    {
      step: 1,
      title: "Research & Analysis",
      description: "Comprehensive review of existing policies, data collection, and stakeholder mapping.",
    },
    {
      step: 2,
      title: "Synthesis",
      description: "Analysis of findings, identification of gaps, and development of policy options.",
    },
    {
      step: 3,
      title: "Options Development",
      description: "Formulation of evidence-based policy alternatives with cost-benefit analysis.",
    },
    {
      step: 4,
      title: "Roadmap Creation",
      description: "Development of implementation strategy with timeline and resource requirements.",
    },
    {
      step: 5,
      title: "Implementation Support",
      description: "Ongoing advisory and monitoring during policy rollout phase.",
    },
  ],
  timeline: [
    { duration: "2-4 weeks", scope: "Rapid Assessment", description: "Quick diagnostic and recommendations" },
    { duration: "4-8 weeks", scope: "Standard Study", description: "Comprehensive analysis with full deliverables" },
    { duration: "8-12 weeks", scope: "Full Engagement", description: "In-depth study with implementation support" },
  ],
  teamComposition: [
    { role: "Lead Expert", description: "Senior academic with domain expertise", count: 1 },
    { role: "Research Analyst", description: "Data analysis and literature review", count: "1-2" },
    { role: "Associate Consultant", description: "Field research and coordination", count: "1-2" },
    { role: "Project Manager", description: "Client liaison and delivery management", count: 1 },
  ],
  caseStudies: [
    {
      title: "Bandung Housing Policy Framework",
      client: "Pemkot Bandung",
      description: "Developed comprehensive affordable housing policy with data-driven targeting criteria.",
    },
    {
      title: "West Java Transportation Strategy",
      client: "Pemprov Jawa Barat",
      description: "Strategic roadmap for integrated public transportation across Greater Bandung.",
    },
  ],
  relatedExperts: [
    {
      id: "andika-pratama",
      name: "Prof. Dr. Andika Pratama",
      title: "Urban Planning Expert",
      institution: "ITB",
      image: "/professional-indonesian-man-professor-formal-portr.jpg",
    },
    {
      id: "dewi-anggraini",
      name: "Prof. Dr. Dewi Anggraini",
      title: "Public Policy Expert",
      institution: "UNPAD",
      image: "/professional-indonesian-woman-policy-expert-formal.jpg",
    },
  ],
  faq: [
    {
      question: "What types of policy consulting do you offer?",
      answer:
        "We provide strategic advisory across urban planning, housing, transportation, social protection, economic development, and environmental policy. Our approach combines academic research with practical implementation experience.",
    },
    {
      question: "How do you ensure policy recommendations are implementable?",
      answer:
        "Our methodology includes stakeholder mapping, feasibility analysis, and capacity assessment. We work closely with implementing agencies throughout the process to ensure recommendations are realistic and actionable.",
    },
    {
      question: "Can you support policy implementation after the study?",
      answer:
        "Yes, we offer implementation support packages that include training, monitoring framework development, and ongoing advisory services to ensure successful policy rollout.",
    },
  ],
}

export default function ServiceDetailPage() {
  const service = serviceData

  return (
    <main className="min-h-screen">
      {/* Breadcrumb */}
      <section className="pt-[72px] bg-muted/30 border-b border-border">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Services
          </Link>
        </div>
      </section>

      {/* Hero */}
      <section className="bg-muted/30 py-16">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <Badge className="mb-4">Service</Badge>
            <h1 className="font-serif text-4xl sm:text-5xl font-bold text-foreground mb-4">{service.title}</h1>
            <p className="text-xl text-primary font-medium mb-4">{service.headline}</p>
            <p className="text-lg text-muted-foreground">{service.valueProposition}</p>
            <div className="mt-8">
              <Link href="/contact?intent=proposal">
                <Button size="lg" className="bg-[#B89B5E] text-[#1C1C1C] hover:bg-[#B89B5E]/90">
                  Request Proposal
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Problem We Solve */}
      <section className="py-16 bg-background">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="font-serif text-2xl font-bold text-foreground mb-6">Problems We Solve</h2>
              <div className="space-y-4">
                {service.problemWeSolve.map((problem, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <AlertCircle className="w-5 h-5 text-destructive shrink-0 mt-0.5" />
                    <p className="text-muted-foreground">{problem}</p>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h2 className="font-serif text-2xl font-bold text-foreground mb-6">What You Get</h2>
              <div className="space-y-4">
                {service.deliverables.map((deliverable, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <p className="text-foreground">{deliverable}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Methodology */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-2xl font-bold text-foreground mb-8 text-center">Our Methodology</h2>
          <div className="grid md:grid-cols-5 gap-4">
            {service.methodology.map((step, index) => (
              <div key={index} className="relative">
                <Card className="h-full">
                  <CardContent className="p-5 text-center">
                    <div className="w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-4 text-lg font-bold">
                      {step.step}
                    </div>
                    <h3 className="font-semibold text-foreground mb-2">{step.title}</h3>
                    <p className="text-xs text-muted-foreground">{step.description}</p>
                  </CardContent>
                </Card>
                {index < service.methodology.length - 1 && (
                  <ArrowRight className="hidden md:block absolute top-1/2 -right-3 w-6 h-6 text-border -translate-y-1/2 z-10" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline & Team */}
      <section className="py-16 bg-background">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Timeline */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Clock className="w-5 h-5" />
                  Typical Timeline
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {service.timeline.map((option, index) => (
                    <div key={index} className="p-4 bg-muted/50 rounded-lg border border-border">
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-semibold text-foreground">{option.scope}</span>
                        <Badge variant="secondary">{option.duration}</Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">{option.description}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Team Composition */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="w-5 h-5" />
                  Team Composition
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {service.teamComposition.map((member, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between p-4 bg-muted/50 rounded-lg border border-border"
                    >
                      <div>
                        <p className="font-semibold text-foreground">{member.role}</p>
                        <p className="text-sm text-muted-foreground">{member.description}</p>
                      </div>
                      <Badge variant="outline">{member.count}</Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-2xl font-bold text-foreground mb-8">Case Examples</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {service.caseStudies.map((study, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <Briefcase className="w-5 h-5 text-primary" />
                    <Badge variant="secondary">{study.client}</Badge>
                  </div>
                  <h3 className="font-semibold text-lg text-foreground mb-2">{study.title}</h3>
                  <p className="text-muted-foreground">{study.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Related Experts */}
      <section className="py-16 bg-background">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-2xl font-bold text-foreground mb-8">Related Experts</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {service.relatedExperts.map((expert) => (
              <Link
                key={expert.id}
                href={`/board-of-experts/${expert.id}`}
                className="group bg-card rounded-xl border border-border overflow-hidden hover:shadow-lg hover:border-primary/30 transition-all"
              >
                <div className="aspect-square overflow-hidden bg-muted">
                  <img
                    src={expert.image || "/placeholder.svg"}
                    alt={expert.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-4">
                  <Badge variant="secondary" className="mb-2">
                    {expert.institution}
                  </Badge>
                  <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                    {expert.name}
                  </h3>
                  <p className="text-sm text-muted-foreground">{expert.title}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-2xl font-bold text-foreground mb-8 text-center">
              Frequently Asked Questions
            </h2>
            <Accordion type="single" collapsible className="w-full">
              {service.faq.map((item, index) => (
                <AccordionItem key={index} value={`faq-${index}`}>
                  <AccordionTrigger className="text-left font-semibold">{item.question}</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">{item.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#1C1C1C]">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl font-bold text-[#F7F5EF] mb-4">Ready to get started?</h2>
          <p className="text-[#F7F5EF]/70 mb-8 max-w-xl mx-auto">
            Contact us to discuss your requirements and receive a tailored proposal.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/contact?intent=proposal">
              <Button size="lg" className="bg-[#B89B5E] text-[#1C1C1C] hover:bg-[#B89B5E]/90">
                Request Proposal
              </Button>
            </Link>
            <Link href="/board-of-experts">
              <Button
                size="lg"
                variant="outline"
                className="border-[#F7F5EF]/30 text-[#F7F5EF] hover:bg-[#F7F5EF]/10 bg-transparent"
              >
                Browse Experts
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
