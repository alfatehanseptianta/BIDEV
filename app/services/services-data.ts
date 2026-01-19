import type { ElementType } from "react"
import { BarChart3, Building, FileSearch, FileText, GraduationCap, Laptop, MapPin, Mic, Users } from "lucide-react"

export type ServiceItem = {
  slug: string
  icon: ElementType
  title: string
  summary: string
  outputs: string[]
  idealFor: string[]
  duration: string
  image: string
  imageAlt: string
}

export const services: ServiceItem[] = [
  {
    slug: "expert-speaker",
    icon: Mic,
    title: "Expert Speaker & Resource Person",
    summary:
      "Access our network of distinguished academics for keynotes, seminars, panel discussions, and expert consultations.",
    outputs: ["Keynote presentations", "Panel moderation", "Q&A sessions", "Post-event briefings"],
    idealFor: ["Government", "Private"],
    duration: "1-4 hours",
    image: "/professional-indonesian-man-professor-formal-portr.jpg",
    imageAlt: "Expert speaker session",
  },
  {
    slug: "policy-consulting",
    icon: FileSearch,
    title: "Policy & Development Consulting",
    summary:
      "Strategic advisory services for urban planning, regulatory frameworks, and development policy formulation.",
    outputs: ["Policy assessment", "Regulatory analysis", "Strategy recommendations", "Implementation guidance"],
    idealFor: ["Government", "Private"],
    duration: "2-12 weeks",
    image: "/policy-brief-writing-guide-document.jpg",
    imageAlt: "Policy consulting documentation",
  },
  {
    slug: "training",
    icon: GraduationCap,
    title: "Training & Capacity Building",
    summary: "Customized training programs and modular learning products for government officials and professionals.",
    outputs: ["Training modules", "Workshop facilitation", "Learning materials", "Certification programs"],
    idealFor: ["Government", "Private"],
    duration: "1-5 days",
    image: "/professional-training-workshop-urban-planning.jpg",
    imageAlt: "Capacity building workshop",
  },
  {
    slug: "roadmap-development",
    icon: MapPin,
    title: "Roadmap & Masterplan Development",
    summary: "Comprehensive urban and regional planning services from concept to implementation strategy.",
    outputs: ["Masterplan documents", "Implementation roadmaps", "Stakeholder analysis", "Feasibility studies"],
    idealFor: ["Government"],
    duration: "8-24 weeks",
    image: "/bandung-mobility-playbook-cover.jpg",
    imageAlt: "Urban roadmap playbook",
  },
  {
    slug: "research",
    icon: BarChart3,
    title: "Research & Field Studies",
    summary:
      "Rigorous academic research and pilot projects addressing local policy challenges with data-driven insights.",
    outputs: ["Research reports", "Policy briefs", "Data analysis", "Academic publications"],
    idealFor: ["Government", "Academic"],
    duration: "3-12 months",
    image: "/journal-article-urban-planning-thumbnail.jpg",
    imageAlt: "Research publication preview",
  },
  {
    slug: "digital-systems",
    icon: Laptop,
    title: "Digital Systems & IT Projects",
    summary: "Smart city solutions, data dashboards, and digital infrastructure for modern urban governance.",
    outputs: ["Platform development", "Dashboard systems", "Data integration", "Technical documentation"],
    idealFor: ["Government"],
    duration: "3-12 months",
    image: "/urban-data-dashboard-indonesia-government-platform.jpg",
    imageAlt: "Smart city platform dashboard",
  },
  {
    slug: "investment-advisory",
    icon: Building,
    title: "Investment Advisory",
    summary: "Site selection analysis, policy risk assessment, and stakeholder mapping for investors.",
    outputs: ["Market analysis", "Risk assessment", "Stakeholder mapping", "Investment recommendations"],
    idealFor: ["Private"],
    duration: "4-8 weeks",
    image: "/investment-analysis-business-charts-graphs.jpg",
    imageAlt: "Investment advisory analysis",
  },
  {
    slug: "stakeholder-engagement",
    icon: Users,
    title: "Stakeholder Engagement",
    summary: "Community consultation, public hearings, and multi-stakeholder coordination services.",
    outputs: ["Consultation reports", "Public hearing facilitation", "Stakeholder analysis", "Engagement strategy"],
    idealFor: ["Government", "Private"],
    duration: "2-8 weeks",
    image: "/stakeholder-engagement-playbook-cover.jpg",
    imageAlt: "Stakeholder engagement playbook",
  },
  {
    slug: "market-entry",
    icon: FileText,
    title: "Market Entry Consulting",
    summary: "Comprehensive support for businesses entering Indonesian markets, including regulatory navigation.",
    outputs: ["Market assessment", "Regulatory guidance", "Partner identification", "Entry strategy"],
    idealFor: ["Private"],
    duration: "4-12 weeks",
    image: "/investment-briefing-presentation-template.jpg",
    imageAlt: "Market entry briefing",
  },
  {
    slug: "impact-assessment",
    icon: BarChart3,
    title: "Impact Assessment",
    summary: "Social, environmental, and economic impact evaluation for development projects and policies.",
    outputs: ["Impact reports", "Baseline studies", "Monitoring frameworks", "Evaluation metrics"],
    idealFor: ["Government", "Private"],
    duration: "4-16 weeks",
    image: "/publication-climate-resilience-article-thumbnail.jpg",
    imageAlt: "Impact assessment report",
  },
]
