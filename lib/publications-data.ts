import type { LucideIcon } from "lucide-react"
import { BarChart2, BookOpen, FileText, Podcast, Video } from "lucide-react"

export type PublicationAuthor = {
  id: string
  name: string
  title: string
  image: string
}

export type Publication = {
  id: string
  type: string
  icon: LucideIcon
  title: string
  excerpt: string
  authors: PublicationAuthor[]
  date: string
  readTime: string
  topics: string[]
  featured?: boolean
  thumbnail: string
  content: string
  relatedPublicationIds: string[]
}

const normalizeSlug = (value: string) =>
  value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "")

export const publications: Publication[] = [
  {
    id: "urban-housing-affordability-2024",
    type: "Policy Brief",
    icon: FileText,
    title: "Urban Housing Affordability Index: Bandung 2024",
    excerpt:
      "Comprehensive analysis of housing market dynamics and policy recommendations for sustainable urban housing development.",
    authors: [
      {
        id: "andika-pratama",
        name: "Prof. Dr. Andika Pratama",
        title: "Urban Planning Expert",
        image: "/professional-indonesian-man-professor-formal-portr.jpg",
      },
      {
        id: "ratna-permata",
        name: "Dr. Ratna Permata",
        title: "Housing Policy Researcher",
        image: "/professional-indonesian-woman-housing-researcher-f.jpg",
      },
    ],
    date: "Dec 2024",
    readTime: "8 min read",
    topics: ["Housing", "Urban Planning"],
    featured: true,
    thumbnail: "/publication-housing-policy-brief-thumbnail.jpg",
    content: `
## Executive Summary

This policy brief presents the 2024 Urban Housing Affordability Index for Bandung, analyzing housing market dynamics across 30 kecamatan and providing evidence-based recommendations for sustainable housing policy.

## Key Findings

### 1. Affordability Gap Widening

The median house price to income ratio in Bandung has increased from 8.2 in 2020 to 11.4 in 2024, indicating a significant deterioration in housing affordability for middle-income households.

### 2. Geographic Disparities

- Northern districts (Coblong, Cidadap) show the highest price appreciation (45% over 4 years)
- Eastern districts (Cibiru, Panyileukan) remain relatively affordable but face infrastructure gaps
- Central districts face severe supply constraints due to land scarcity

### 3. Informal Housing Growth

Informal housing settlements have grown by 15% since 2020, primarily in peri-urban areas with limited access to public services.

## Policy Recommendations

### Short-term (1-2 years)

1. Expand inclusionary zoning requirements for new developments
2. Accelerate land certification in informal settlements
3. Introduce targeted housing subsidies based on PRAKARSA household data

### Medium-term (3-5 years)

1. Develop transit-oriented affordable housing near BRT corridors
2. Establish community land trusts in high-pressure areas
3. Create rental housing guarantee program for formal sector workers

## Methodology

This study utilized PRAKARSA household survey data covering 1.5 million households, combined with property transaction records from BPN and building permit data from Dinas PUPR Kota Bandung.

## Acknowledgments

This research was supported by Bappeda Kota Bandung and conducted in collaboration with the Housing Research Center at Institut Teknologi Bandung.
`,
    relatedPublicationIds: ["smart-city-implementation-2024", "data-driven-social-protection"],
  },
  {
    id: "public-transportation-map-2024",
    type: "Infographic",
    icon: BarChart2,
    title: "Public Transportation Coverage Map",
    excerpt: "Visual analysis of transportation network gaps and expansion priorities in Greater Bandung metropolitan.",
    authors: [
      {
        id: "hendra-saputra",
        name: "Dr. Hendra Saputra",
        title: "Transportation Engineer",
        image: "/professional-indonesian-man-transport-engineer-for.jpg",
      },
    ],
    date: "Nov 2024",
    readTime: "3 min read",
    topics: ["Transportation", "Infrastructure"],
    featured: false,
    thumbnail: "/publication-transportation-infographic-thumbnail.jpg",
    content: `
## Overview

This infographic maps current public transportation coverage across Greater Bandung, highlighting route density, stop accessibility, and transfer friction.

## Key Insights

### 1. Coverage gaps cluster in growth corridors

- Eastern and southern kecamatan show the lowest stop density
- Peri-urban growth outpaces service expansion

### 2. Transfer penalties reduce effective reach

- Most commuters require 2+ transfers for cross-city trips
- First-mile access remains the biggest barrier

### 3. Priority expansion zones

- Jalan Soekarno-Hatta ring corridors
- Emerging residential areas in Gedebage and Baleendah

## Data Sources

Ridership counts, route shapefiles, and population grids from Dishub Kota Bandung, updated Q3 2024.

## How to Use

Use the map to prioritize route extensions, station upgrades, and TOD readiness assessments.
`,
    relatedPublicationIds: ["smart-city-implementation-2024", "climate-resilience-bandung"],
  },
  {
    id: "data-driven-social-protection",
    type: "Article",
    icon: BookOpen,
    title: "Data-Driven Social Protection: Lessons from Regsosek",
    excerpt: "Case study on how data intelligence transformed social program targeting in Kota Bandung.",
    authors: [
      {
        id: "dewi-anggraini",
        name: "Prof. Dr. Dewi Anggraini",
        title: "Public Policy Expert",
        image: "/professional-indonesian-woman-policy-expert-formal.jpg",
      },
      {
        id: "ahmad-fauzi",
        name: "Dr. Ahmad Fauzi",
        title: "Data Science Lead",
        image: "/professional-indonesian-man-data-scientist-formal-.jpg",
      },
    ],
    date: "Oct 2024",
    readTime: "12 min read",
    topics: ["Data Science", "Public Policy"],
    featured: false,
    thumbnail: "/publication-social-protection-article-thumbnail.jpg",
    content: `
## Overview

This article reviews how Regsosek data reshaped targeting for social protection programs in Bandung, improving inclusion while reducing leakage.

## What Changed

### 1. Single source of truth

Regsosek consolidated household attributes that were previously fragmented across agencies.

### 2. Targeting accuracy

Pilot districts improved eligibility accuracy by 18 percent in the first cycle.

### 3. Faster disbursement

Verification steps dropped from three weeks to five days.

## Implementation Notes

- Data stewardship roles were clarified at kelurahan level
- A grievance channel was added for household updates
- Cross-agency dashboards enabled weekly monitoring

## Recommended Next Steps

Scale the workflow to city-wide coverage and integrate with budget planning cycles.
`,
    relatedPublicationIds: ["urban-housing-affordability-2024", "smart-city-implementation-2024"],
  },
  {
    id: "smart-city-implementation-2024",
    type: "Policy Brief",
    icon: FileText,
    title: "Smart City Implementation Framework for Indonesian Cities",
    excerpt: "A comprehensive framework for local governments to plan and execute smart city initiatives.",
    authors: [
      {
        id: "andika-pratama",
        name: "Prof. Dr. Andika Pratama",
        title: "Urban Planning Expert",
        image: "/professional-indonesian-man-professor-formal-portr.jpg",
      },
    ],
    date: "Sep 2024",
    readTime: "15 min read",
    topics: ["Smart Cities", "Governance"],
    featured: false,
    thumbnail: "/publication-smart-city-brief-thumbnail.jpg",
    content: `
## Executive Summary

This policy brief outlines a practical framework for cities to move from pilots to scalable smart city programs.

## Framework Pillars

### 1. Governance first

Define decision rights, budgeting authority, and accountability.

### 2. Data foundations

Agree on shared data standards and interoperability rules.

### 3. Use-case pipeline

Prioritize use cases tied to service outcomes and fiscal impact.

### 4. Capability transfer

Invest in training and operations handover.

## Delivery Roadmap

Phase the program into 90-day sprints: discovery, pilot, scaling, and institutionalization.

## Implementation Checklist

- Establish a cross-agency steering committee
- Publish service-level KPIs
- Secure multi-year funding allocations
`,
    relatedPublicationIds: ["public-transportation-map-2024", "urban-insights-podcast-ep10"],
  },
  {
    id: "urban-insights-podcast-ep10",
    type: "Podcast",
    icon: Podcast,
    title: "Future of Indonesian Cities - Urban Insights Episode 10",
    excerpt:
      "Prof. Andika discusses emerging trends in urban development and technology adoption in Indonesian cities.",
    authors: [
      {
        id: "andika-pratama",
        name: "Prof. Dr. Andika Pratama",
        title: "Urban Planning Expert",
        image: "/professional-indonesian-man-professor-formal-portr.jpg",
      },
    ],
    date: "Aug 2024",
    readTime: "45 min listen",
    topics: ["Urban Planning", "Technology"],
    featured: false,
    thumbnail: "/publication-podcast-urban-insights-thumbnail.jpg",
    content: `
## Episode Summary

In this episode, Prof. Andika discusses the future of Indonesian cities, focusing on technology adoption, governance, and inclusive growth.

## Discussion Highlights

### 1. The next wave of urbanization

Cities must align infrastructure with job creation and housing affordability.

### 2. Data and trust

Public trust depends on transparent data governance and ethics.

### 3. Digital public services

Simple, reliable services beat complex, fragile platforms.

## Recommended Listening Notes

Use this episode to frame cross-sector dialogues with city leaders and private partners.
`,
    relatedPublicationIds: ["smart-city-implementation-2024", "climate-resilience-bandung"],
  },
  {
    id: "climate-resilience-bandung",
    type: "Article",
    icon: BookOpen,
    title: "Building Climate Resilience in Bandung Basin",
    excerpt: "Analysis of flood risk patterns and adaptation strategies for Bandung metropolitan area.",
    authors: [
      {
        id: "maya-kusuma",
        name: "Dr. Maya Kusuma",
        title: "Environmental Scientist",
        image: "/professional-indonesian-woman-scientist-formal-por.jpg",
      },
    ],
    date: "Jul 2024",
    readTime: "10 min read",
    topics: ["Environment", "Resilience"],
    featured: false,
    thumbnail: "/publication-climate-resilience-article-thumbnail.jpg",
    content: `
## Overview

This article analyzes flood risk patterns and adaptation priorities for the Bandung Basin, with an emphasis on upstream interventions.

## Key Findings

### 1. Risk concentration

Most high-risk zones sit along low-lying river corridors.

### 2. Green infrastructure gaps

Retention ponds and permeable surfaces are under-provisioned in dense districts.

### 3. Early warning readiness

Community response capacity remains uneven across neighborhoods.

## Policy Options

- Expand watershed restoration in the upper basin
- Build a maintenance plan for drainage assets
- Fund community-based preparedness programs

## Data and Methods

Hydrology models combined with land-use change analysis from 2014-2024.
`,
    relatedPublicationIds: ["public-transportation-map-2024", "data-driven-social-protection"],
  },
  {
    id: "economic-zones-video",
    type: "Video",
    icon: Video,
    title: "Understanding Special Economic Zones",
    excerpt: "Video explainer on how SEZs can drive regional economic development in West Java.",
    authors: [
      {
        id: "siti-rahayu",
        name: "Dr. Siti Rahayu",
        title: "Economics Researcher",
        image: "/professional-indonesian-woman-academic-formal-port.jpg",
      },
    ],
    date: "Jun 2024",
    readTime: "8 min watch",
    topics: ["Economics", "Development"],
    featured: false,
    thumbnail: "/publication-economic-zones-video-thumbnail.jpg",
    content: `
## Overview

This video explains how special economic zones (SEZs) can accelerate regional investment and job creation in West Java.

## Key Topics

### 1. Site selection criteria

Connectivity, labor access, and utility readiness matter most.

### 2. Incentive design

Fiscal incentives work best when paired with governance clarity.

### 3. Spillover impacts

SEZs can uplift nearby SMEs with the right supplier programs.

## Practical Takeaways

Use the checklist to assess whether a proposed zone is ready for investment.
`,
    relatedPublicationIds: ["urban-insights-podcast-ep10", "smart-city-implementation-2024"],
  },
]

export const publicationIds = publications.map((publication) => publication.id)

export const getPublicationById = (id: string) => publications.find((publication) => publication.id === id)

export const getPublicationBySlug = (slug: string) => {
  const normalized = normalizeSlug(slug)
  return publications.find(
    (publication) => publication.id === normalized || normalizeSlug(publication.title) === normalized,
  )
}
