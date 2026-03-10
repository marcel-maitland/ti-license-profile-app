'use client'

import { useSearchParams } from 'next/navigation'

export default function HomePage() {
  const searchParams = useSearchParams()
  const learnerId = searchParams.get("learnerId")

  return (
    <main style={{ padding: "40px", fontFamily: "Arial, sans-serif" }}>
      <h1>TI License Profile App</h1>

      {learnerId ? (
        <p>Learner ID detected: <strong>{learnerId}</strong></p>
      ) : (
        <p>No learner ID detected.</p>
      )}
    </main>
  )
}
