import { Suspense } from "react"
import RequestFormClient from "./request-form-client"

export default function RequestPage() {
  return (
    <Suspense
      fallback={
        <main className="pt-[72px]">
          <section className="py-16 lg:py-24">
            <div className="max-w-[800px] mx-auto px-4 sm:px-6 lg:px-8">
              <p className="text-muted-foreground">Loading request form...</p>
            </div>
          </section>
        </main>
      }
    >
      <RequestFormClient />
    </Suspense>
  )
}
