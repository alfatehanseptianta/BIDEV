import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, Shield, Lock, Eye, Clock, FileCheck, AlertTriangle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export const metadata: Metadata = {
  title: "Security & Data Governance | Prakarsa | BIDEV Institute",
  description: "Data ownership, access control, audit logging, and privacy policies for Prakarsa platform.",
}

const securityPrinciples = [
  {
    icon: Shield,
    title: "Data Ownership",
    description: "Your data remains yours. BIDEV acts as a processor, not owner. Full data portability guaranteed.",
    details: [
      "Government retains full ownership of all data",
      "Data portability with standard export formats",
      "No third-party data sharing without consent",
      "Clear data processing agreements",
    ],
  },
  {
    icon: Lock,
    title: "Access Control & RBAC",
    description: "Role-based access control ensures users only see what they need to see.",
    details: [
      "Fine-grained permission system",
      "Role-based dashboards and views",
      "Geographic access restrictions",
      "Time-based access policies",
    ],
  },
  {
    icon: Eye,
    title: "Audit Logging",
    description: "Complete audit trail of every action for accountability and compliance.",
    details: [
      "All data changes logged",
      "User actions tracked",
      "Searchable audit history",
      "Export for compliance reporting",
    ],
  },
  {
    icon: Clock,
    title: "Data Retention",
    description: "Clear retention policies aligned with national regulations.",
    details: [
      "Configurable retention periods",
      "Automated data lifecycle management",
      "Secure data archival options",
      "Right to deletion supported",
    ],
  },
  {
    icon: FileCheck,
    title: "Privacy & Consent",
    description: "Privacy-by-design approach with clear consent mechanisms.",
    details: [
      "Consent management system",
      "Data minimization principles",
      "Anonymization capabilities",
      "Privacy impact assessments",
    ],
  },
  {
    icon: AlertTriangle,
    title: "Incident Response",
    description: "Prepared for security incidents with clear response procedures.",
    details: [
      "24/7 security monitoring",
      "Incident response team",
      "Client notification protocols",
      "Regular security assessments",
    ],
  },
]

const technicalControls = [
  {
    category: "Encryption",
    items: [
      "TLS 1.3 for data in transit",
      "AES-256 encryption at rest",
      "End-to-end encryption for sensitive fields",
      "Secure key management",
    ],
  },
  {
    category: "Authentication",
    items: [
      "Multi-factor authentication (MFA)",
      "SSO integration capability",
      "Session management controls",
      "Password policy enforcement",
    ],
  },
  {
    category: "Infrastructure",
    items: [
      "Cloud infrastructure with ISO 27001",
      "Regular security patching",
      "DDoS protection",
      "Geographic data residency options",
    ],
  },
  {
    category: "Application Security",
    items: [
      "Regular penetration testing",
      "Code security reviews",
      "Dependency vulnerability scanning",
      "WAF protection",
    ],
  },
]

const faqs = [
  {
    question: "Where is data stored?",
    answer:
      "Data is stored in secure cloud infrastructure with options for Indonesia-based data residency. We partner with cloud providers that maintain ISO 27001 certification and comply with Indonesian data protection regulations.",
  },
  {
    question: "Who can access the data?",
    answer:
      "Access is strictly controlled through role-based access control (RBAC). Only authorized government personnel can access data within their scope. BIDEV technical staff may access systems for support purposes under strict protocols and audit logging.",
  },
  {
    question: "How is personal data protected?",
    answer:
      "Personal data is encrypted at rest and in transit. We implement data minimization principles, collecting only what's necessary. Sensitive fields can be additionally encrypted. All access is logged for accountability.",
  },
  {
    question: "What happens to data if we end the contract?",
    answer:
      "All data is exported to you in standard formats (CSV, JSON) and securely deleted from our systems within 30 days of contract termination, with certification of deletion provided.",
  },
  {
    question: "Is Prakarsa compliant with Indonesian regulations?",
    answer:
      "Yes, Prakarsa is designed to comply with UU PDP (Personal Data Protection Law), PP 71/2019 on Electronic System Operations, and relevant government data governance regulations.",
  },
  {
    question: "How do you handle security incidents?",
    answer:
      "We maintain a 24/7 security operations capability. In case of incidents, we follow a documented response procedure including immediate containment, investigation, client notification within required timeframes, and remediation.",
  },
]

export default function PrakarsaSecurityPage() {
  return (
    <main className="pt-[72px]">
      {/* Hero */}
      <section className="bg-foreground text-background py-20 lg:py-28">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-accent font-semibold mb-4">Prakarsa Platform</p>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance">
              Security & Data Governance
            </h1>
            <p className="text-lg md:text-xl text-background/80 mb-8">
              Your data security is non-negotiable. Here's how we protect sensitive social protection data.
            </p>
            <Link href="#briefing">
              <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
                Schedule Security Briefing
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Security Principles */}
      <section className="py-16 lg:py-24">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">Security Principles</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our approach to data security and governance is built on these core principles.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {securityPrinciples.map((principle, idx) => (
              <Card key={idx}>
                <CardHeader>
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <principle.icon className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-lg">{principle.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{principle.description}</p>
                  <ul className="space-y-2">
                    {principle.details.map((detail, didx) => (
                      <li key={didx} className="text-sm flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Controls */}
      <section className="py-16 lg:py-24 bg-muted">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">Technical Controls</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive technical measures protecting your data at every layer.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {technicalControls.map((control, idx) => (
              <Card key={idx}>
                <CardHeader>
                  <CardTitle className="text-base">{control.category}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {control.items.map((item, iidx) => (
                      <li key={iidx} className="text-sm text-muted-foreground flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0 mt-1.5" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 lg:py-24">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">Security FAQ</h2>
              <p className="text-lg text-muted-foreground">Common questions about data security and governance.</p>
            </div>

            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, idx) => (
                <AccordionItem key={idx} value={`faq-${idx}`}>
                  <AccordionTrigger className="text-left font-medium">{faq.question}</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="briefing" className="py-16 lg:py-24 bg-primary text-primary-foreground">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">Need more details?</h2>
          <p className="text-lg text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Schedule a security briefing with our team to discuss your specific compliance requirements and concerns.
          </p>
          <Link href="/request?type=meeting&topic=security">
            <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
              Schedule Security Briefing
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </Link>
        </div>
      </section>
    </main>
  )
}
