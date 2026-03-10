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
        minHeight: "100vh",
        background: "#f5f7fb",
        padding: "40px 20px",
        fontFamily:
          'Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
      }}
    >
      <div
        style={{
          maxWidth: "760px",
          margin: "0 auto",
          background: "#ffffff",
          borderRadius: "20px",
          padding: "36px",
          boxShadow: "0 10px 30px rgba(15, 23, 42, 0.08)",
          border: "1px solid #e5e7eb",
        }}
      >
        <div style={{ marginBottom: "28px" }}>
          <h1
            style={{
              margin: 0,
              fontSize: "34px",
              lineHeight: 1.15,
              fontWeight: 800,
              color: "#111827",
            }}
          >
            My License Information
          </h1>

          <p
            style={{
              marginTop: "10px",
              marginBottom: 0,
              fontSize: "16px",
              lineHeight: 1.6,
              color: "#6b7280",
            }}
          >
            Enter your license details below. This information will be used to
            support your learner profile and future compliance tracking.
          </p>
        </div>

        <div
          style={{
            marginBottom: "28px",
            padding: "14px 16px",
            borderRadius: "12px",
            background: learnerId ? "#f9fafb" : "#fef2f2",
            border: learnerId ? "1px solid #e5e7eb" : "1px solid #fecaca",
            fontSize: "15px",
            color: learnerId ? "#374151" : "#b91c1c",
          }}
        >
          {learnerId ? (
            <>
              Learner ID detected: <strong>{learnerId}</strong>
            </>
          ) : (
            <>No learner ID detected.</>
          )}
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "18px",
            marginBottom: "18px",
          }}
        >
          <div>
            <label
              style={{
                display: "block",
                marginBottom: "8px",
                fontSize: "14px",
                fontWeight: 700,
                color: "#111827",
              }}
            >
              State
            </label>
            <select
              defaultValue=""
              style={{
                width: "100%",
                height: "48px",
                padding: "0 14px",
                borderRadius: "12px",
                border: "1px solid #d1d5db",
                fontSize: "15px",
                color: "#111827",
                background: "#fff",
              }}
            >
              <option value="" disabled>
                Select your state
              </option>
              <option value="TX">Texas</option>
              <option value="FL">Florida</option>
              <option value="NY">New York</option>
            </select>
          </div>

          <div>
            <label
              style={{
                display: "block",
                marginBottom: "8px",
                fontSize: "14px",
                fontWeight: 700,
                color: "#111827",
              }}
            >
              Expiration Date
            </label>
            <input
              type="date"
              style={{
                width: "100%",
                height: "48px",
                padding: "0 14px",
                borderRadius: "12px",
                border: "1px solid #d1d5db",
                fontSize: "15px",
                color: "#111827",
                boxSizing: "border-box",
                background: "#fff",
              }}
            />
          </div>
        </div>

        <div style={{ marginBottom: "26px" }}>
          <label
            style={{
              display: "block",
              marginBottom: "8px",
              fontSize: "14px",
              fontWeight: 700,
              color: "#111827",
            }}
          >
            License Number
          </label>
          <input
            type="text"
            placeholder="Enter your license number"
            style={{
              width: "100%",
              height: "48px",
              padding: "0 14px",
              borderRadius: "12px",
              border: "1px solid #d1d5db",
              fontSize: "15px",
              color: "#111827",
              boxSizing: "border-box",
              background: "#fff",
            }}
          />
        </div>

        <button
          style={{
            background: "#f97316",
            color: "#ffffff",
            border: "none",
            padding: "14px 22px",
            borderRadius: "12px",
            fontSize: "15px",
            fontWeight: 700,
            cursor: "pointer",
            boxShadow: "0 6px 18px rgba(249, 115, 22, 0.25)",
          }}
        >
          Save Information
        </button>
      </div>
    </main>
  )
}
