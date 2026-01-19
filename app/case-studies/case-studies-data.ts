export type CaseStudySummary = {
  slug: string
  title: string
  summary: string
  coverImage: string
  type: string
  sector: string
  location: string
  topics: string[]
  metrics: { label: string; value: string }[]
  duration: string
  teamSize: number
  featured: boolean
}

export const caseStudies: CaseStudySummary[] = [
  {
    slug: "prakarsa-bandung-pilot",
    title: "Prakarsa Pilot Implementation in Bandung",
    summary: "City-wide social protection data platform deployment across 151 kelurahan with real-time RW-level input.",
    coverImage: "/bandung-city-urban-data-dashboard-map.jpg",
    type: "Prakarsa",
    sector: "Government",
    location: "Kota Bandung",
    topics: ["Social Protection", "Data Governance"],
    metrics: [
      { label: "RW Onboarded", value: "1,500+" },
      { label: "Datasets Integrated", value: "12" },
      { label: "Policy Recommendations", value: "28" },
    ],
    duration: "8 months",
    teamSize: 12,
    featured: true,
  },
  {
    slug: "jabar-housing-roadmap",
    title: "West Java Affordable Housing Roadmap",
    summary: "Comprehensive housing policy framework and implementation roadmap for 27 kabupaten/kota.",
    coverImage: "/housing-urban-planning-architecture-blueprint.jpg",
    type: "Roadmap",
    sector: "Government",
    location: "Provinsi Jawa Barat",
    topics: ["Housing", "Urban Planning"],
    metrics: [
      { label: "Areas Analyzed", value: "27" },
      { label: "Stakeholders Engaged", value: "150+" },
      { label: "Programs Designed", value: "8" },
    ],
    duration: "6 months",
    teamSize: 8,
    featured: true,
  },
  {
    slug: "investment-feasibility-study",
    title: "Urban Investment Feasibility Analysis",
    summary: "Due diligence and market assessment for mixed-use development project in Greater Bandung area.",
    coverImage: "/investment-analysis-business-charts-graphs.jpg",
    type: "Research",
    sector: "Private",
    location: "Bandung Raya",
    topics: ["Investment", "Market Analysis"],
    metrics: [
      { label: "Market Size Assessed", value: "Rp 2.5T" },
      { label: "Risk Factors Identified", value: "15" },
      { label: "ROI Scenarios", value: "4" },
    ],
    duration: "3 months",
    teamSize: 5,
    featured: false,
  },
  {
    slug: "mobility-training-program",
    title: "Urban Mobility Planning Capacity Building",
    summary: "Comprehensive training program for Dinas Perhubungan staff on data-driven transport planning.",
    coverImage: "/transportation-training-workshop-professional.jpg",
    type: "Training",
    sector: "Government",
    location: "Kota Bandung",
    topics: ["Mobility", "Capacity Building"],
    metrics: [
      { label: "Officers Trained", value: "45" },
      { label: "Modules Delivered", value: "6" },
      { label: "Satisfaction Score", value: "4.8/5" },
    ],
    duration: "2 months",
    teamSize: 4,
    featured: false,
  },
  {
    slug: "esg-advisory-manufacturing",
    title: "ESG Strategy for Manufacturing Company",
    summary: "Sustainability framework and implementation roadmap for leading textile manufacturer.",
    coverImage: "/sustainable-manufacturing-factory-green-environmen.jpg",
    type: "Advisory",
    sector: "Private",
    location: "Jawa Barat",
    topics: ["ESG", "Sustainability"],
    metrics: [
      { label: "Emission Reduction Target", value: "30%" },
      { label: "ESG Metrics Defined", value: "24" },
      { label: "Quick Wins Identified", value: "12" },
    ],
    duration: "4 months",
    teamSize: 6,
    featured: false,
  },
  {
    slug: "social-registry-integration",
    title: "Social Registry System Integration",
    summary: "IT project to integrate multiple social assistance databases into unified beneficiary registry.",
    coverImage: "/database-system-integration-technology-software.jpg",
    type: "IT Project",
    sector: "Government",
    location: "Kota Cimahi",
    topics: ["Data Governance", "Social Protection"],
    metrics: [
      { label: "Systems Integrated", value: "5" },
      { label: "Records Validated", value: "125K+" },
      { label: "Processing Time Reduced", value: "70%" },
    ],
    duration: "5 months",
    teamSize: 8,
    featured: false,
  },
]
