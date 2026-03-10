type PageProps = {
  searchParams?: {
    learnerId?: string
  }
}

export default function HomePage({ searchParams }: PageProps) {
  const learnerId = searchParams?.learnerId

  return (
    <main style={{ padding: "40px", fontFamily: "Arial, sans-serif" }}>
      <h1>TI License Profile App</h1>

      {learnerId ? (
        <p>
          Learner ID detected: <strong>{learnerId}</strong>
        </p>
      ) : (
        <p>No learner ID detected.</p>
      )}
    </main>
  )
}
