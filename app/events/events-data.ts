export type EventSummary = {
  id: string
  slug: string
  title: string
  type: string
  format: string
  date: string
  time: string
  location: string
  city: string
  topic: string
  description: string
  image: string
  imageAlt: string
  speakers: { name: string; role: string }[]
  targetAudience: string[]
  registrationOpen: boolean
  featured: boolean
}

export type PastEventSummary = {
  id: string
  slug: string
  title: string
  date: string
  location: string
  materials: string[]
  image: string
  imageAlt: string
}

export const events: EventSummary[] = [
  {
    id: "1",
    slug: "urban-data-governance-workshop",
    title: "Urban Data Governance Workshop",
    type: "Public",
    format: "Workshop",
    date: "2026-02-15",
    time: "09:00 - 16:00 WIB",
    location: "ITB Campus, Bandung",
    city: "Bandung",
    topic: "Data Governance",
    description:
      "A full-day workshop on establishing data governance frameworks for urban planning and social protection programs.",
    image: "/professional-training-workshop-urban-planning.jpg",
    imageAlt: "Urban data governance workshop",
    speakers: [
      { name: "Dr. Andi Setiawan", role: "Lead Expert, BIDEV" },
      { name: "Prof. Maria Susanti", role: "Faculty of Engineering, ITB" },
    ],
    targetAudience: ["Government officials", "Data managers", "Policy analysts"],
    registrationOpen: true,
    featured: true,
  },
  {
    id: "2",
    slug: "prakarsa-implementation-training",
    title: "Prakarsa Implementation Training",
    type: "Private",
    format: "Training",
    date: "2026-02-22",
    time: "09:00 - 17:00 WIB",
    location: "Online (Zoom)",
    city: "Online",
    topic: "Prakarsa",
    description:
      "Intensive training for Prakarsa operators covering data collection, validation workflows, and dashboard usage.",
    image: "/prakarsa-dashboard-preview-demo-screenshot.jpg",
    imageAlt: "Prakarsa dashboard training",
    speakers: [{ name: "Tim Prakarsa BIDEV", role: "Implementation Team" }],
    targetAudience: ["Prakarsa operators", "OPD staff", "Data entry personnel"],
    registrationOpen: true,
    featured: false,
  },
  {
    id: "3",
    slug: "evidence-based-policy-seminar",
    title: "Evidence-Based Policy Making Seminar",
    type: "Public",
    format: "Seminar",
    date: "2026-03-05",
    time: "13:00 - 17:00 WIB",
    location: "UNPAD Convention Center",
    city: "Bandung",
    topic: "Policy",
    description: "Expert panel discussion on translating research evidence into actionable policy recommendations.",
    image: "/policy-brief-writing-guide-document.jpg",
    imageAlt: "Policy briefing session",
    speakers: [
      { name: "Dr. Siti Rahmawati", role: "Policy Advisor, BIDEV" },
      { name: "Dr. Ahmad Wijaya", role: "Bappenas" },
      { name: "Prof. Linda Hartono", role: "UNPAD" },
    ],
    targetAudience: ["Policy makers", "Researchers", "NGO leaders"],
    registrationOpen: true,
    featured: true,
  },
  {
    id: "4",
    slug: "gis-urban-planning-bootcamp",
    title: "GIS for Urban Planning Bootcamp",
    type: "Public",
    format: "Bootcamp",
    date: "2026-03-15",
    time: "09:00 - 16:00 WIB (3 days)",
    location: "ITB Campus, Bandung",
    city: "Bandung",
    topic: "Urban Planning",
    description: "Three-day intensive bootcamp on using GIS tools for urban planning analysis and visualization.",
    image: "/urban-data-visualization-charts-map-business.jpg",
    imageAlt: "GIS urban planning analysis",
    speakers: [
      { name: "Ir. Budi Santoso", role: "Technical Lead, BIDEV" },
      { name: "Dr. Rini Handayani", role: "GIS Expert" },
    ],
    targetAudience: ["Urban planners", "GIS analysts", "Government staff"],
    registrationOpen: false,
    featured: false,
  },
  {
    id: "5",
    slug: "social-protection-forum",
    title: "West Java Social Protection Forum 2026",
    type: "Public",
    format: "Forum",
    date: "2026-04-10",
    time: "08:00 - 17:00 WIB",
    location: "Gedung Sate, Bandung",
    city: "Bandung",
    topic: "Social Protection",
    description:
      "Annual forum bringing together government, academia, and civil society to discuss social protection challenges and innovations.",
    image: "/social-protection-playbook-cover.jpg",
    imageAlt: "Social protection forum",
    speakers: [
      { name: "Gubernur Jawa Barat", role: "Keynote Speaker" },
      { name: "Multiple experts", role: "Panel sessions" },
    ],
    targetAudience: ["Government officials", "NGOs", "Academics", "Media"],
    registrationOpen: true,
    featured: true,
  },
]

export const pastEvents: PastEventSummary[] = [
  {
    id: "past-1",
    slug: "housing-policy-workshop-2025",
    title: "Affordable Housing Policy Workshop",
    date: "2025-11-20",
    location: "Bandung",
    materials: ["Slides", "Recording", "Photos"],
    image: "/housing-policy-planning-meeting-indonesia.jpg",
    imageAlt: "Affordable housing policy workshop",
  },
  {
    id: "past-2",
    slug: "data-literacy-training-2025",
    title: "Data Literacy for Government Officials",
    date: "2025-10-15",
    location: "Online",
    materials: ["Slides", "Recording"],
    image: "/professional-training-workshop-urban-planning.jpg",
    imageAlt: "Data literacy training",
  },
]
