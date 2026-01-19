import TopicHubPageClient from "./topic-page-client"
import { topicSlugs } from "../topic-data"

export function generateStaticParams() {
  return topicSlugs.map((slug) => ({ slug }))
}

export default function TopicHubPage({ params }: { params: { slug: string } }) {
  return <TopicHubPageClient slug={params.slug} />
}
