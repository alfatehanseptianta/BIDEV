export type PodcastEpisode = {
  id: string
  type: "Podcast" | "Video"
  title: string
  issue: string
  expert: string
  expertTitle: string
  expertImage: string
  date: string
  duration: string
  thumbnail: string
  link: string
}

export type NewsItem = {
  id: string
  title: string
  outlet: string
  date: string
  category: string
  summary: string
  thumbnail: string
  link: string
}

export const podcastEpisodes: PodcastEpisode[] = [
  {
    id: "flood-ready-bandung",
    type: "Podcast",
    title: "Flood Ready Bandung: Coordinating Basin-Wide Response",
    issue: "Cross-agency flood governance and early warning readiness.",
    expert: "Dr. Maya Kusuma",
    expertTitle: "Environmental Scientist",
    expertImage: "/professional-indonesian-woman-scientist-formal-por.jpg",
    date: "Feb 2025",
    duration: "48 min listen",
    thumbnail: "/publication-podcast-urban-insights-thumbnail.jpg",
    link: "/gallery#podcasts",
  },
  {
    id: "housing-affordability-roundtable",
    type: "Video",
    title: "Housing Affordability Roundtable: Bandung 2025 Outlook",
    issue: "Affordable housing supply, incentives, and zoning alignment.",
    expert: "Prof. Dr. Andika Pratama",
    expertTitle: "Urban Planning Expert",
    expertImage: "/professional-indonesian-man-professor-formal-portr.jpg",
    date: "Jan 2025",
    duration: "22 min watch",
    thumbnail: "/housing-policy-planning-meeting-indonesia.jpg",
    link: "/gallery#podcasts",
  },
  {
    id: "smart-city-governance",
    type: "Podcast",
    title: "Smart City Governance: From Pilots to Citywide Scale",
    issue: "Data stewardship roles and decision rights across agencies.",
    expert: "Dr. Ahmad Fauzi",
    expertTitle: "Data Science Lead",
    expertImage: "/professional-indonesian-man-data-scientist-formal-.jpg",
    date: "Dec 2024",
    duration: "38 min listen",
    thumbnail: "/bandung-city-urban-data-dashboard-map.jpg",
    link: "/gallery#podcasts",
  },
  {
    id: "mobility-first-mile",
    type: "Video",
    title: "Mobility First Mile: Designing Integrated Transit Hubs",
    issue: "Multi-modal connectivity and last-mile access planning.",
    expert: "Dr. Hendra Saputra",
    expertTitle: "Transportation Engineer",
    expertImage: "/professional-indonesian-man-transport-engineer-for.jpg",
    date: "Nov 2024",
    duration: "15 min watch",
    thumbnail: "/publication-transportation-infographic-thumbnail.jpg",
    link: "/gallery#podcasts",
  },
]

export const newsItems: NewsItem[] = [
  {
    id: "urban-data-lab-launch",
    title: "BIDEV launches Bandung Urban Data Lab with city partners",
    outlet: "BIDEV Newsroom",
    date: "Mar 2025",
    category: "Announcement",
    summary: "City agencies align on shared indicators and a joint analytics roadmap for Bandung.",
    thumbnail: "/urban-data-dashboard-indonesia-government-platform.jpg",
    link: "/media",
  },
  {
    id: "prakarsa-social-protection",
    title: "PRAKARSA supports social protection targeting across 12 districts",
    outlet: "Policy Monitor",
    date: "Feb 2025",
    category: "Impact",
    summary: "Household data integration improves benefit accuracy and reduces manual verification cycles.",
    thumbnail: "/social-protection-toolkit-government.jpg",
    link: "/media",
  },
  {
    id: "mobility-playbook-release",
    title: "Bandung Mobility Playbook released with BRT expansion priorities",
    outlet: "Urban Transit Review",
    date: "Jan 2025",
    category: "Publication",
    summary: "The playbook highlights corridor readiness, financing options, and service integration steps.",
    thumbnail: "/bandung-mobility-playbook-cover.jpg",
    link: "/media",
  },
  {
    id: "data-governance-forum",
    title: "BIDEV convenes national forum on municipal data governance",
    outlet: "Civic Data Forum",
    date: "Nov 2024",
    category: "Forum",
    summary: "Leaders align on privacy guardrails, data sharing protocols, and talent pipelines.",
    thumbnail: "/database-system-integration-technology-software.jpg",
    link: "/media",
  },
]
