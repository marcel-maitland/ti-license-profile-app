type PageProps = {
  searchParams?: {
    learnerId?: string
  }
}

export default function HomePage({ searchParams }: PageProps) {
  const learnerId = searchParams?.learnerId

  return (
    <main
      style={{
        padding: "40px",
        fontFamily: "Arial, sans-serif",
        background: "#f7f7f7",
        minHeight: "100vh",
      }}
    >
      <div
        style={{
          maxWidth: "700px",
          margin: "0 auto",
          background: "#ffffff",
          borderRadius: "16px",
          padding: "32px",
          boxShadow: "0 8px 24px rgba(0,0,0,0.08)",
        }}
      >
        <h1 style={{ marginTop: 0, fontSize: "48px", lineHeight: 1.1 }}>
          My License Information
        </h1>

        {learnerId ? (
          <p style={{ fontSize: "18px", color: "#444" }}>
            Learner ID detected: <strong>{learnerId}</strong>
          </p>
        ) : (
          <p style={{ fontSize: "18px", color: "#b91c1c" }}>
            No learner ID detected.
          </p>
        )}

        <div style={{ marginTop: "30px" }}>
          <label
            style={{
              display: "block",
              fontWeight: 700,
              marginBottom: "8px",
              fontSize: "16px",
            }}
          >
            State
          </label>
          <select
            style={{
              width: "100%",
              padding: "14px",
              borderRadius: "10px",
              border: "1px solid #d1d5db",
              fontSize: "16px",
              marginBottom: "20px",
            }}
            defaultValue=""
          >
            <option value="" disabled>
              Select your state
            </option>
            <option value="TX">Texas</option>
            <option value="FL">Florida</option>
            <option value="NY">New York</option>
          </select>

          <label
            style={{
              display: "block",
              fontWeight: 700,
              marginBottom: "8px",
              fontSize: "16px",
            }}
          >
            License Number
          </label>
          <input
            type="text"
            placeholder="Enter your license number"
            style={{
              width: "100%",
              padding: "14px",
              borderRadius: "10px",
              border: "1px solid #d1d5db",
              fontSize: "16px",
              marginBottom: "20px",
              boxSizing: "border-box",
            }}
          />

          <label
            style={{
              display: "block",
              fontWeight: 700,
              marginBottom: "8px",
              fontSize: "16px",
            }}
          >
            Expiration Date
          </label>
          <input
            type="date"
            style={{
              width: "100%",
              padding: "14px",
              borderRadius: "10px",
              border: "1px solid #d1d5db",
              fontSize: "16px",
              marginBottom: "28px",
              boxSizing: "border-box",
            }}
          />

          <button
            style={{
              background: "#f97316",
              color: "#fff",
              border: "none",
              padding: "14px 22px",
              borderRadius: "10px",
              fontSize: "16px",
              fontWeight: 700,
              cursor: "pointer",
            }}
          >
            Save Information
          </button>
        </div>
      </div>
    </main>
  )
}
