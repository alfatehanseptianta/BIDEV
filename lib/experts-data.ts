import type { LucideIcon } from "lucide-react"
import { BookOpen, Mic, Users } from "lucide-react"

export type ExpertService = {
  type: string
  icon: LucideIcon
  description: string
  duration: string
  outputs: string[]
}

export type ExpertProfile = {
  id: string
  name: string
  title: string
  institution: string
  department: string
  expertise: string[]
  sectors: string[]
  bio: string
  availability: string
  responseSLA: string
  verification: {
    label: string
    lastReview: string
  }
  coi: {
    status: string
    lastUpdated: string
    notes: string
  }
  image: string
  services: ExpertService[]
  selectedEngagements: { title: string; client: string; outcome: string }[]
  publications: { type: string; title: string; year: string; thumbnail: string }[]
  media: { type: "podcast" | "video"; title: string; date: string; link: string }[]
  relatedExpertIds: string[]
}

const normalizeSlug = (value: string) =>
  value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "")

export const expertProfiles: ExpertProfile[] = [
  {
    id: "andika-pratama",
    name: "Prof. Dr. Andika Pratama, PhD",
    title: "Urban Planning Expert",
    institution: "ITB",
    department: "School of Architecture, Planning and Policy Development",
    expertise: ["Urban Planning", "Smart Cities", "Public Policy", "GIS & Mapping"],
    sectors: ["Government", "Research"],
    bio: `Prof. Andika Pratama is a leading authority on urban planning and smart city delivery in Indonesia. He combines two decades of academic research with hands-on policy implementation, helping cities translate long-term spatial plans into measurable programs.

He led the Bandung Smart City initiative and has advised multiple provinces on urban transformation roadmaps. He earned his PhD in Urban Planning from MIT and publishes widely on data-driven planning and spatial governance.`,
    availability: "Available this month",
    responseSLA: "Typically responds within 48 hours",
    verification: {
      label: "Peer-reviewed profile",
      lastReview: "January 2026",
    },
    coi: {
      status: "Declared and cleared",
      lastUpdated: "December 2025",
      notes: "No financial interests with technology vendors or city-owned enterprises.",
    },
    image: "/professional-indonesian-man-professor-formal-portr.jpg",
    services: [
      {
        type: "Speaker",
        icon: Mic,
        description: "Keynotes and lectures on city planning, smart city governance, and spatial policy.",
        duration: "1-2 hours",
        outputs: ["Presentation deck", "Q&A session", "Event summary notes"],
      },
      {
        type: "Consultant",
        icon: Users,
        description: "Advisory for master plans, urban transformation, and implementation roadmaps.",
        duration: "4-12 weeks",
        outputs: ["Assessment memo", "Strategic roadmap", "Implementation checklist"],
      },
      {
        type: "Research Lead",
        icon: BookOpen,
        description: "Leads applied research and policy evaluation on urban development.",
        duration: "3-9 months",
        outputs: ["Research report", "Policy brief", "Stakeholder briefing"],
      },
    ],
    selectedEngagements: [
      {
        title: "Bandung Smart City Steering",
        client: "Pemkot Bandung",
        outcome: "Established KPI dashboard and governance charter adopted by 6 agencies.",
      },
      {
        title: "West Java TOD Blueprint",
        client: "Pemprov Jawa Barat",
        outcome: "Prioritized 4 TOD corridors with costed implementation plan.",
      },
    ],
    publications: [
      {
        type: "Policy Brief",
        title: "Smart City Implementation Framework for Indonesian Cities",
        year: "2024",
        thumbnail: "/policy-brief-smart-city-thumbnail.jpg",
      },
      {
        type: "Journal Article",
        title: "Data-Driven Urban Planning: Lessons from Bandung",
        year: "2023",
        thumbnail: "/journal-article-urban-planning-thumbnail.jpg",
      },
      {
        type: "Infographic",
        title: "Urban Growth Patterns in Greater Bandung",
        year: "2023",
        thumbnail: "/infographic-urban-growth-thumbnail.jpg",
      },
    ],
    media: [
      { type: "podcast", title: "Future of Indonesian Cities - Urban Insights", date: "Nov 2024", link: "#" },
      { type: "video", title: "TEDx Bandung: Reimagining Urban Spaces", date: "Sep 2024", link: "#" },
      { type: "podcast", title: "Smart City Strategies - Policy Talk", date: "Jul 2024", link: "#" },
    ],
    relatedExpertIds: ["maya-kusuma", "ahmad-fauzi", "hendra-saputra", "dewi-anggraini"],
  },
  {
    id: "siti-rahayu",
    name: "Dr. Siti Rahayu, M.Sc",
    title: "Economics Researcher",
    institution: "UNPAD",
    department: "Faculty of Economics and Business",
    expertise: ["Economics", "Regional Development", "Data Science", "Public Policy"],
    sectors: ["Government", "Industry"],
    bio: `Dr. Siti Rahayu specializes in regional economics and development policy, focusing on how investment, labor markets, and fiscal transfers shape city growth. She builds evidence-based models that help governments test scenarios and prioritize programs.

Her recent work includes subnational competitiveness diagnostics and impact evaluations for SME support programs. She frequently collaborates with local planning agencies to turn data into clear, budget-ready recommendations.`,
    availability: "Available this month",
    responseSLA: "Typically responds within 72 hours",
    verification: {
      label: "Verified Academic",
      lastReview: "November 2025",
    },
    coi: {
      status: "Declared and cleared",
      lastUpdated: "October 2025",
      notes: "Disclosed advisory work for regional development agencies.",
    },
    image: "/professional-indonesian-woman-academic-formal-port.jpg",
    services: [
      {
        type: "Consultant",
        icon: Users,
        description: "Economic diagnostics, fiscal impact analysis, and investment scenario testing.",
        duration: "4-10 weeks",
        outputs: ["Economic model", "Policy options memo", "Stakeholder workshop"],
      },
      {
        type: "Research Lead",
        icon: BookOpen,
        description: "Leads studies on regional growth, productivity, and labor market dynamics.",
        duration: "3-8 months",
        outputs: ["Research report", "Policy brief", "Executive presentation"],
      },
      {
        type: "Speaker",
        icon: Mic,
        description: "Briefings on regional competitiveness, SME growth, and inclusive development.",
        duration: "1-2 hours",
        outputs: ["Presentation deck", "Q&A session", "Key takeaways memo"],
      },
    ],
    selectedEngagements: [
      {
        title: "West Java Economic Outlook 2030",
        client: "Pemprov Jawa Barat",
        outcome: "Delivered macro scenarios and fiscal policy options adopted in annual planning.",
      },
      {
        title: "SME Resilience Assessment",
        client: "Kemenkop UKM",
        outcome: "Identified 5 priority interventions and a monitoring dashboard.",
      },
    ],
    publications: [
      {
        type: "Policy Brief",
        title: "Regional Growth Scenarios for West Java",
        year: "2024",
        thumbnail: "/investment-analysis-business-charts-graphs.jpg",
      },
      {
        type: "Journal Article",
        title: "Labor Productivity and Urbanization in Java",
        year: "2023",
        thumbnail: "/publication-smart-city-brief-thumbnail.jpg",
      },
      {
        type: "Research Report",
        title: "SME Resilience Index 2024",
        year: "2024",
        thumbnail: "/investment-readiness-checklist-cover.jpg",
      },
    ],
    media: [
      { type: "podcast", title: "Inclusive Growth in Regional Cities", date: "Oct 2024", link: "#" },
      { type: "video", title: "Economic Modeling for Policy Leaders", date: "Aug 2024", link: "#" },
    ],
    relatedExpertIds: ["dewi-anggraini", "ahmad-fauzi", "ratna-permata", "andika-pratama"],
  },
  {
    id: "bambang-wijaya",
    name: "Prof. Bambang Wijaya, Ph.D",
    title: "Infrastructure Specialist",
    institution: "ITB",
    department: "Faculty of Civil and Environmental Engineering",
    expertise: ["Infrastructure", "Transportation", "Environmental Science", "Sustainable Design"],
    sectors: ["Government", "Industry"],
    bio: `Prof. Bambang Wijaya is an infrastructure specialist with deep experience in transport systems, utilities, and resilient design. He has advised national and municipal agencies on corridor planning, procurement strategy, and environmental safeguards.

He is known for integrating engineering feasibility with social and economic impact analysis, ensuring infrastructure projects are practical, bankable, and socially inclusive.`,
    availability: "By request",
    responseSLA: "Typically responds within 5 business days",
    verification: {
      label: "Peer-reviewed profile",
      lastReview: "August 2025",
    },
    coi: {
      status: "Declared and cleared",
      lastUpdated: "August 2025",
      notes: "No equity holdings in transport operators or contractors.",
    },
    image: "/professional-indonesian-man-engineer-formal-portra.jpg",
    services: [
      {
        type: "Infrastructure Advisor",
        icon: Users,
        description: "Strategic advice on corridor planning, phasing, and procurement strategy.",
        duration: "6-16 weeks",
        outputs: ["Feasibility brief", "Phasing plan", "Risk register"],
      },
      {
        type: "Speaker",
        icon: Mic,
        description: "Talks on sustainable infrastructure, lifecycle costing, and resilient design.",
        duration: "1-2 hours",
        outputs: ["Presentation deck", "Panel Q&A", "Follow-up notes"],
      },
      {
        type: "Research Lead",
        icon: BookOpen,
        description: "Leads infrastructure assessments and transport demand studies.",
        duration: "4-10 months",
        outputs: ["Research report", "Technical annex", "Policy brief"],
      },
    ],
    selectedEngagements: [
      {
        title: "Trans Java Logistics Corridor Plan",
        client: "Kemenhub",
        outcome: "Prioritized intermodal hubs and staged investment roadmap.",
      },
      {
        title: "Jakarta BRT Modernization",
        client: "Pemprov DKI",
        outcome: "Revised route structure and fleet transition plan.",
      },
    ],
    publications: [
      {
        type: "Technical Guide",
        title: "Sustainable Corridor Design for Java",
        year: "2024",
        thumbnail: "/bandung-mobility-playbook-cover.jpg",
      },
      {
        type: "Infographic",
        title: "Transport Emissions Baseline",
        year: "2023",
        thumbnail: "/publication-transportation-infographic-thumbnail.jpg",
      },
      {
        type: "Research Report",
        title: "Infrastructure Lifecycle Costing Toolkit",
        year: "2023",
        thumbnail: "/smart-city-playbook-cover.jpg",
      },
    ],
    media: [
      { type: "video", title: "Resilient Infrastructure for Growing Cities", date: "Sep 2024", link: "#" },
      { type: "podcast", title: "Financing Sustainable Transport", date: "Jun 2024", link: "#" },
    ],
    relatedExpertIds: ["hendra-saputra", "andika-pratama", "maya-kusuma", "ahmad-fauzi"],
  },
  {
    id: "maya-kusuma",
    name: "Dr. Maya Kusuma, M.Eng",
    title: "Environmental Scientist",
    institution: "UNPAD",
    department: "Environmental Science Program",
    expertise: ["Environmental Science", "Climate Policy", "Resilience", "GIS & Mapping"],
    sectors: ["Government", "Research", "NGO"],
    bio: `Dr. Maya Kusuma focuses on climate resilience and environmental policy for rapidly growing Indonesian cities. Her research connects vulnerability mapping, green infrastructure, and adaptation finance to practical city programs.

She has supported coastal risk assessments and nature-based solutions pilots across Java and Sulawesi, translating science into actionable urban resilience plans.`,
    availability: "Available this month",
    responseSLA: "Typically responds within 72 hours",
    verification: {
      label: "Verified Academic",
      lastReview: "December 2025",
    },
    coi: {
      status: "Declared and cleared",
      lastUpdated: "November 2025",
      notes: "Participates in advisory councils for climate resilience funding.",
    },
    image: "/professional-indonesian-woman-scientist-formal-por.jpg",
    services: [
      {
        type: "Research Lead",
        icon: BookOpen,
        description: "Climate risk assessments, adaptation planning, and resilience metrics.",
        duration: "4-9 months",
        outputs: ["Risk report", "Resilience indicators", "Implementation roadmap"],
      },
      {
        type: "Consultant",
        icon: Users,
        description: "Advisory for green infrastructure and environmental safeguards.",
        duration: "6-12 weeks",
        outputs: ["Advisory memo", "Stakeholder workshop", "Program checklist"],
      },
      {
        type: "Speaker",
        icon: Mic,
        description: "Briefings on climate adaptation, nature-based solutions, and policy alignment.",
        duration: "1-2 hours",
        outputs: ["Presentation deck", "Q&A session", "Summary notes"],
      },
    ],
    selectedEngagements: [
      {
        title: "Semarang Coastal Resilience Plan",
        client: "Pemkot Semarang",
        outcome: "Mapped risk zones and defined phased adaptation investments.",
      },
      {
        title: "Green Infrastructure Audit",
        client: "KLHK",
        outcome: "Established baseline indicators and maintenance strategy.",
      },
    ],
    publications: [
      {
        type: "Journal Article",
        title: "Climate Resilience for Coastal Cities",
        year: "2024",
        thumbnail: "/publication-climate-resilience-article-thumbnail.jpg",
      },
      {
        type: "Policy Brief",
        title: "Nature-Based Solutions for Urban Flooding",
        year: "2023",
        thumbnail: "/publication-smart-city-brief-thumbnail.jpg",
      },
      {
        type: "Research Report",
        title: "Urban Heat Risk Atlas",
        year: "2024",
        thumbnail: "/prakarsa-heatmap-vulnerability-visualization-map.jpg",
      },
    ],
    media: [
      { type: "podcast", title: "Building Climate-Ready Cities", date: "Oct 2024", link: "#" },
      { type: "video", title: "Nature-Based Solutions in Practice", date: "Jul 2024", link: "#" },
    ],
    relatedExpertIds: ["dewi-anggraini", "andika-pratama", "hendra-saputra", "ratna-permata"],
  },
  {
    id: "ahmad-fauzi",
    name: "Dr. Ahmad Fauzi, M.T",
    title: "Data Science Lead",
    institution: "ITB",
    department: "Urban Data Lab",
    expertise: ["Data Science", "Machine Learning", "GIS & Mapping", "Urban Analytics"],
    sectors: ["Government", "Industry"],
    bio: `Dr. Ahmad Fauzi leads applied data science for urban planning and public services. His work blends machine learning, GIS, and dashboard design to help governments move from fragmented data to decision-ready insights.

He has built urban data platforms for multiple cities and is recognized for turning complex modeling outputs into simple tools for planners and executives.`,
    availability: "Available this month",
    responseSLA: "Typically responds within 48 hours",
    verification: {
      label: "Peer-reviewed profile",
      lastReview: "January 2026",
    },
    coi: {
      status: "Declared and cleared",
      lastUpdated: "January 2026",
      notes: "No commercial ties to analytics vendors.",
    },
    image: "/professional-indonesian-man-data-scientist-formal-.jpg",
    services: [
      {
        type: "Data Lab Sprint",
        icon: BookOpen,
        description: "Short sprints to prototype analytics models and decision dashboards.",
        duration: "2-4 weeks",
        outputs: ["Working prototype", "Model documentation", "Next-step roadmap"],
      },
      {
        type: "Analytics Consultant",
        icon: Users,
        description: "End-to-end advisory for data governance, pipelines, and analytics adoption.",
        duration: "6-14 weeks",
        outputs: ["Data audit", "Pipeline blueprint", "Adoption plan"],
      },
      {
        type: "Capacity Workshop",
        icon: Mic,
        description: "Hands-on training for analytics teams and city planners.",
        duration: "1 day",
        outputs: ["Training kit", "Practice exercises", "Capability checklist"],
      },
    ],
    selectedEngagements: [
      {
        title: "Jakarta Urban Data Platform",
        client: "Pemprov DKI",
        outcome: "Integrated 12 datasets into a shared analytics layer.",
      },
      {
        title: "Bandung Flood Risk Model",
        client: "Pemkot Bandung",
        outcome: "Produced predictive maps used in emergency planning.",
      },
    ],
    publications: [
      {
        type: "Playbook",
        title: "Urban Data Playbook",
        year: "2024",
        thumbnail: "/urban-data-playbook-cover.jpg",
      },
      {
        type: "Technical Guide",
        title: "Interoperability Standards for City Data",
        year: "2023",
        thumbnail: "/database-system-integration-technology-software.jpg",
      },
      {
        type: "Research Report",
        title: "Predictive Analytics for Flood Response",
        year: "2024",
        thumbnail: "/bandung-city-urban-data-dashboard-map.jpg",
      },
    ],
    media: [
      { type: "podcast", title: "Building City Data Platforms", date: "Nov 2024", link: "#" },
      { type: "video", title: "Machine Learning for Urban Services", date: "Aug 2024", link: "#" },
    ],
    relatedExpertIds: ["andika-pratama", "maya-kusuma", "hendra-saputra", "siti-rahayu"],
  },
  {
    id: "dewi-anggraini",
    name: "Prof. Dr. Dewi Anggraini",
    title: "Public Policy Expert",
    institution: "UNPAD",
    department: "School of Public Policy and Governance",
    expertise: ["Public Policy", "Governance", "Social Protection", "Economics"],
    sectors: ["Government", "NGO"],
    bio: `Prof. Dewi Anggraini is a public policy expert with a focus on governance reform and social protection. She supports ministries and local governments in designing programs that are fiscally sound and implementable.

Her work spans policy diagnostics, regulatory alignment, and program monitoring, with a strong emphasis on transparency and equity.`,
    availability: "Available this month",
    responseSLA: "Typically responds within 72 hours",
    verification: {
      label: "Verified Academic",
      lastReview: "October 2025",
    },
    coi: {
      status: "Declared and cleared",
      lastUpdated: "September 2025",
      notes: "Disclosed advisory roles for social protection pilots.",
    },
    image: "/professional-indonesian-woman-policy-expert-formal.jpg",
    services: [
      {
        type: "Policy Advisor",
        icon: Users,
        description: "Policy diagnostics, regulatory alignment, and implementation strategy.",
        duration: "6-14 weeks",
        outputs: ["Policy memo", "Regulatory map", "Implementation roadmap"],
      },
      {
        type: "Program Review",
        icon: BookOpen,
        description: "Independent review of social protection programs and delivery systems.",
        duration: "6-12 weeks",
        outputs: ["Review report", "KPI framework", "Improvement plan"],
      },
      {
        type: "Speaker",
        icon: Mic,
        description: "Talks on governance reform, social policy, and public accountability.",
        duration: "1-2 hours",
        outputs: ["Presentation deck", "Panel Q&A", "Summary notes"],
      },
    ],
    selectedEngagements: [
      {
        title: "National Social Protection Review",
        client: "Bappenas",
        outcome: "Aligned program rules and defined monitoring indicators.",
      },
      {
        title: "Local Governance Reform Roadmap",
        client: "Pemprov Jawa Tengah",
        outcome: "Sequenced regulatory updates and capacity plan.",
      },
    ],
    publications: [
      {
        type: "Policy Brief",
        title: "Social Protection Targeting in Decentralized Systems",
        year: "2024",
        thumbnail: "/publication-social-protection-article-thumbnail.jpg",
      },
      {
        type: "Research Report",
        title: "Governance Reform Scorecard",
        year: "2023",
        thumbnail: "/social-protection-playbook-cover.jpg",
      },
      {
        type: "Journal Article",
        title: "Program Compliance and Public Trust",
        year: "2023",
        thumbnail: "/publication-smart-city-brief-thumbnail.jpg",
      },
    ],
    media: [
      { type: "podcast", title: "Governance and Trust in Public Services", date: "Sep 2024", link: "#" },
      { type: "video", title: "Designing Better Social Protection", date: "Jun 2024", link: "#" },
    ],
    relatedExpertIds: ["siti-rahayu", "ratna-permata", "andika-pratama", "maya-kusuma"],
  },
  {
    id: "hendra-saputra",
    name: "Dr. Hendra Saputra, M.T",
    title: "Transportation Engineer",
    institution: "ITB",
    department: "Transportation Engineering",
    expertise: ["Transportation", "Infrastructure", "Urban Planning", "Mobility"],
    sectors: ["Government", "Industry"],
    bio: `Dr. Hendra Saputra is a transportation engineer specializing in urban mobility and transit-oriented development. He helps cities improve network performance, ridership, and service quality through data-backed planning.

His projects include bus network redesigns, TOD feasibility studies, and multimodal integration plans.`,
    availability: "By request",
    responseSLA: "Typically responds within 5 business days",
    verification: {
      label: "Peer-reviewed profile",
      lastReview: "September 2025",
    },
    coi: {
      status: "Declared and cleared",
      lastUpdated: "July 2025",
      notes: "No private operator equity holdings.",
    },
    image: "/professional-indonesian-man-transport-engineer-for.jpg",
    services: [
      {
        type: "Mobility Consultant",
        icon: Users,
        description: "Network redesign, service planning, and fleet optimization.",
        duration: "6-14 weeks",
        outputs: ["Route plan", "Service plan", "Ridership model"],
      },
      {
        type: "Research Lead",
        icon: BookOpen,
        description: "Transport demand analysis and TOD feasibility studies.",
        duration: "4-9 months",
        outputs: ["Research report", "TOD framework", "Investment plan"],
      },
      {
        type: "Speaker",
        icon: Mic,
        description: "Briefings on transit operations and mobility policy.",
        duration: "1-2 hours",
        outputs: ["Presentation deck", "Q&A session", "Key takeaways"],
      },
    ],
    selectedEngagements: [
      {
        title: "Surabaya Bus Network Redesign",
        client: "Pemkot Surabaya",
        outcome: "Improved coverage and reduced transfer penalties.",
      },
      {
        title: "Jakarta TOD Feasibility",
        client: "MRT Jakarta",
        outcome: "Defined station area phasing and land use guidelines.",
      },
    ],
    publications: [
      {
        type: "Technical Guide",
        title: "Bus Network Optimization Manual",
        year: "2024",
        thumbnail: "/bandung-mobility-playbook-cover.jpg",
      },
      {
        type: "Infographic",
        title: "Multimodal Integration Index",
        year: "2023",
        thumbnail: "/publication-transportation-infographic-thumbnail.jpg",
      },
      {
        type: "Research Report",
        title: "TOD Readiness Assessment",
        year: "2024",
        thumbnail: "/transportation-training-workshop-professional.jpg",
      },
    ],
    media: [
      { type: "video", title: "Designing Reliable Bus Networks", date: "Oct 2024", link: "#" },
      { type: "podcast", title: "Mobility Insights - Integrating Transit", date: "May 2024", link: "#" },
    ],
    relatedExpertIds: ["bambang-wijaya", "andika-pratama", "ahmad-fauzi", "maya-kusuma"],
  },
  {
    id: "ratna-permata",
    name: "Dr. Ratna Permata, M.Si",
    title: "Housing Policy Researcher",
    institution: "UI",
    department: "Center for Housing Studies",
    expertise: ["Housing", "Public Policy", "Economics", "Urban Planning"],
    sectors: ["Government", "Research"],
    bio: `Dr. Ratna Permata researches housing policy, affordability, and urban settlement dynamics. She helps governments structure realistic housing roadmaps that balance finance, land availability, and community needs.

Her recent studies cover rental market trends, subsidy targeting, and inclusive housing standards for dense urban areas.`,
    availability: "Available this month",
    responseSLA: "Typically responds within 72 hours",
    verification: {
      label: "Verified Academic",
      lastReview: "November 2025",
    },
    coi: {
      status: "Declared and cleared",
      lastUpdated: "October 2025",
      notes: "No developer affiliations; research funded through public grants.",
    },
    image: "/professional-indonesian-woman-housing-researcher-f.jpg",
    services: [
      {
        type: "Housing Consultant",
        icon: Users,
        description: "Policy options for affordable housing and subsidy targeting.",
        duration: "6-12 weeks",
        outputs: ["Policy options memo", "Financing model", "Delivery roadmap"],
      },
      {
        type: "Research Lead",
        icon: BookOpen,
        description: "Housing market diagnostics and program evaluation.",
        duration: "4-9 months",
        outputs: ["Research report", "Policy brief", "Executive briefing"],
      },
      {
        type: "Speaker",
        icon: Mic,
        description: "Talks on housing affordability, land policy, and urban settlements.",
        duration: "1-2 hours",
        outputs: ["Presentation deck", "Q&A session", "Summary notes"],
      },
    ],
    selectedEngagements: [
      {
        title: "Jakarta Affordable Housing Roadmap",
        client: "Dinas Perumahan DKI",
        outcome: "Delivered financing options and pipeline prioritization.",
      },
      {
        title: "West Java Rental Market Study",
        client: "Pemprov Jawa Barat",
        outcome: "Produced price benchmarks and subsidy targeting model.",
      },
    ],
    publications: [
      {
        type: "Policy Brief",
        title: "Affordable Housing Finance Options",
        year: "2024",
        thumbnail: "/publication-housing-policy-brief-thumbnail.jpg",
      },
      {
        type: "Research Report",
        title: "Urban Rental Market Diagnostics",
        year: "2023",
        thumbnail: "/housing-policy-planning-meeting-indonesia.jpg",
      },
      {
        type: "Infographic",
        title: "Housing Backlog Snapshot",
        year: "2023",
        thumbnail: "/housing-urban-planning-architecture-blueprint.jpg",
      },
    ],
    media: [
      { type: "podcast", title: "Affordable Housing in Practice", date: "Nov 2024", link: "#" },
      { type: "video", title: "Inclusive Housing Standards", date: "Jul 2024", link: "#" },
    ],
    relatedExpertIds: ["dewi-anggraini", "siti-rahayu", "andika-pratama", "hendra-saputra"],
  },
]

export const expertIds = expertProfiles.map((expert) => expert.id)

export const getExpertById = (id: string) => expertProfiles.find((expert) => expert.id === id)

export const getExpertBySlug = (slug: string) => {
  const normalized = normalizeSlug(slug)
  return expertProfiles.find((expert) => expert.id === normalized || normalizeSlug(expert.name) === normalized)
}
