import type { ElementType } from "react"
import { BookOpen, Briefcase, TrendingUp, Users } from "lucide-react"

export type TopicDataEntry = {
  titleId: string
  titleEn: string
  descId: string
  descEn: string
  icon: ElementType
  color: string
  publications: { title: string; type: string; date: string; slug: string }[]
  experts: { name: string; title: string; slug: string }[]
  services: { name: string; slug: string }[]
  caseStudies: { title: string; slug: string }[]
}

export const topicData: Record<string, TopicDataEntry> = {
  "urban-data": {
    titleId: "Data Perkotaan",
    titleEn: "Urban Data",
    descId:
      "Eksplorasi mendalam tentang tata kelola data perkotaan, integrasi sistem, dan pemanfaatan data untuk pengambilan keputusan berbasis bukti.",
    descEn:
      "Deep exploration of urban data governance, system integration, and data utilization for evidence-based decision making.",
    icon: TrendingUp,
    color: "bg-blue-500",
    publications: [
      {
        title: "Framework Tata Kelola Data Perkotaan Indonesia",
        type: "Policy Brief",
        date: "2025-01",
        slug: "urban-data-framework",
      },
      {
        title: "Best Practices Integrasi Data Antar OPD",
        type: "Research Report",
        date: "2024-11",
        slug: "data-integration-best-practices",
      },
      {
        title: "Standar Interoperabilitas Data Kota Cerdas",
        type: "Technical Guide",
        date: "2024-09",
        slug: "smart-city-data-standards",
      },
    ],
    experts: [
      { name: "Dr. Ahmad Fauzi, M.T", title: "Data Science Lead", slug: "ahmad-fauzi" },
      { name: "Prof. Dr. Andika Pratama, PhD", title: "Urban Planning Expert", slug: "andika-pratama" },
    ],
    services: [
      { name: "Digital Systems & IT Projects", slug: "digital-systems" },
      { name: "Policy & Development Consulting", slug: "policy-consulting" },
    ],
    caseStudies: [
      { title: "Jakarta Data Governance Transformation", slug: "jakarta-data-governance" },
      { title: "Bandung Smart City Data Integration", slug: "bandung-smart-city" },
    ],
  },
  housing: {
    titleId: "Perumahan",
    titleEn: "Housing",
    descId:
      "Kajian komprehensif tentang kebijakan perumahan, backlog, pembiayaan, dan solusi hunian terjangkau untuk masyarakat Indonesia.",
    descEn:
      "Comprehensive study of housing policy, backlog, financing, and affordable housing solutions for Indonesian communities.",
    icon: BookOpen,
    color: "bg-green-500",
    publications: [
      {
        title: "Analisis Backlog Perumahan Jawa Barat 2025",
        type: "Research Report",
        date: "2025-01",
        slug: "housing-backlog-analysis",
      },
      {
        title: "Model Pembiayaan Perumahan Inklusif",
        type: "Policy Brief",
        date: "2024-10",
        slug: "inclusive-housing-finance",
      },
    ],
    experts: [
      { name: "Dr. Ratna Permata, M.Si", title: "Housing Policy Researcher", slug: "ratna-permata" },
      { name: "Prof. Dr. Andika Pratama, PhD", title: "Urban Planning Expert", slug: "andika-pratama" },
    ],
    services: [
      { name: "Policy & Development Consulting", slug: "policy-consulting" },
      { name: "Research & Field Studies", slug: "research" },
    ],
    caseStudies: [{ title: "Bandung Affordable Housing Strategy", slug: "bandung-housing" }],
  },
  mobility: {
    titleId: "Mobilitas",
    titleEn: "Mobility",
    descId:
      "Solusi transportasi perkotaan, Transit-Oriented Development, dan sistem mobilitas berkelanjutan untuk kota-kota Indonesia.",
    descEn:
      "Urban transportation solutions, Transit-Oriented Development, and sustainable mobility systems for Indonesian cities.",
    icon: Briefcase,
    color: "bg-orange-500",
    publications: [
      {
        title: "TOD Implementation Guide for Indonesian Cities",
        type: "Technical Guide",
        date: "2024-12",
        slug: "tod-implementation",
      },
      {
        title: "Multi-Modal Transportation Integration",
        type: "Policy Brief",
        date: "2024-08",
        slug: "multimodal-transport",
      },
    ],
    experts: [
      { name: "Dr. Hendra Saputra, M.T", title: "Transportation Engineer", slug: "hendra-saputra" },
      { name: "Prof. Bambang Wijaya, Ph.D", title: "Infrastructure Specialist", slug: "bambang-wijaya" },
    ],
    services: [
      { name: "Roadmap & Masterplan Development", slug: "roadmap-development" },
      { name: "Research & Field Studies", slug: "research" },
    ],
    caseStudies: [{ title: "Bandung Urban Mobility Masterplan", slug: "bandung-mobility" }],
  },
  "social-protection": {
    titleId: "Perlindungan Sosial",
    titleEn: "Social Protection",
    descId:
      "Sistem jaring pengaman sosial, targeting berbasis data, dan program perlindungan sosial yang efektif dan inklusif.",
    descEn: "Social safety net systems, data-based targeting, and effective and inclusive social protection programs.",
    icon: Users,
    color: "bg-purple-500",
    publications: [
      {
        title: "Data-Driven Social Protection Targeting",
        type: "Research Report",
        date: "2025-01",
        slug: "social-targeting",
      },
      {
        title: "Unified Database for Social Programs",
        type: "Policy Brief",
        date: "2024-11",
        slug: "unified-social-database",
      },
    ],
    experts: [
      { name: "Dr. Siti Rahayu, M.Sc", title: "Economics Researcher", slug: "siti-rahayu" },
      { name: "Prof. Dr. Dewi Anggraini", title: "Public Policy Expert", slug: "dewi-anggraini" },
    ],
    services: [
      { name: "PRAKARSA", slug: "prakarsa" },
      { name: "Research & Field Studies", slug: "research" },
    ],
    caseStudies: [{ title: "Bandung Social Protection System", slug: "bandung-social-protection" }],
  },
}

export const topicSlugs = Object.keys(topicData)
