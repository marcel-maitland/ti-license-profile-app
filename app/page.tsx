'use client'

import { useState } from 'react'
import { supabase } from '../lib/supabase'

type PageProps = {
  searchParams?: {
    learnerId?: string
  }
}

export default function HomePage({ searchParams }: PageProps) {
  const learnerId = searchParams?.learnerId || ''

  const [stateValue, setStateValue] = useState('')
  const [licenseNumber, setLicenseNumber] = useState('')
  const [expirationDate, setExpirationDate] = useState('')
  const [message, setMessage] = useState('')
  const [isSaving, setIsSaving] = useState(false)

  async function handleSave() {
    setMessage('')

    if (!learnerId) {
      setMessage('Missing learner ID.')
      return
    }

    if (!stateValue || !licenseNumber || !expirationDate) {
      setMessage('Please complete all fields.')
      return
    }

    setIsSaving(true)

    const { error } = await supabase.from('learner_license_profiles').insert([
      {
        learner_id: learnerId,
        state: stateValue,
        license_number: licenseNumber,
        expiration_date: expirationDate,
      },
    ])

    if (error) {
      setMessage(`Error: ${error.message}`)
    } else {
      setMessage('License information saved successfully.')
      setStateValue('')
      setLicenseNumber('')
      setExpirationDate('')
    }

    setIsSaving(false)
  }

  return (
    <main
      style={{
        minHeight: '100vh',
        background: 'transparent',
        padding: '12px',
        fontFamily:
          'Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
      }}
    >
      <div
        style={{
          maxWidth: '680px',
          margin: '0 auto',
          background: '#ffffff',
          borderRadius: '14px',
          padding: '18px',
          boxShadow: '0 4px 14px rgba(15, 23, 42, 0.05)',
          border: '1px solid #e5e7eb',
        }}
      >
        <div style={{ marginBottom: '14px' }}>
          <h1
            style={{
              margin: 0,
              fontSize: '22px',
              lineHeight: 1.2,
              fontWeight: 700,
              color: '#111827',
            }}
          >
            License Information
          </h1>

          <p
            style={{
              marginTop: '6px',
              marginBottom: 0,
              fontSize: '13px',
              lineHeight: 1.5,
              color: '#6b7280',
            }}
          >
            Add your state, license number, and expiration date.
          </p>
        </div>

        <input type="hidden" value={learnerId} readOnly />

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '14px',
            marginBottom: '14px',
          }}
        >
          <div>
            <label
              style={{
                display: 'block',
                marginBottom: '6px',
                fontSize: '13px',
                fontWeight: 600,
                color: '#111827',
              }}
            >
              State
            </label>
            <div style={{ position: 'relative' }}>
              <select
                value={stateValue}
                onChange={(e) => setStateValue(e.target.value)}
                style={{
                  width: '100%',
                  height: '42px',
                  padding: '0 40px 0 12px',
                  borderRadius: '10px',
                  border: '1px solid #d1d5db',
                  fontSize: '14px',
                  color: '#111827',
                  background: '#fff',
                  appearance: 'none',
                  WebkitAppearance: 'none',
                  MozAppearance: 'none',
                }}
              >
                <option value="" disabled>
                  Select state
                </option>
                <option value="TX">Texas</option>
                <option value="FL">Florida</option>
                <option value="NY">New York</option>
              </select>
              <span
                style={{
                  position: 'absolute',
                  right: '14px',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  pointerEvents: 'none',
                  color: '#6b7280',
                  fontSize: '12px',
                }}
              >
                ▼
              </span>
            </div>
          </div>

          <div>
            <label
              style={{
                display: 'block',
                marginBottom: '6px',
                fontSize: '13px',
                fontWeight: 600,
                color: '#111827',
              }}
            >
              Expiration Date
            </label>
            <input
              type="date"
              value={expirationDate}
              onChange={(e) => setExpirationDate(e.target.value)}
              style={{
                width: '100%',
                height: '42px',
                padding: '0 12px',
                borderRadius: '10px',
                border: '1px solid #d1d5db',
                fontSize: '14px',
                color: '#111827',
                boxSizing: 'border-box',
                background: '#fff',
              }}
            />
          </div>
        </div>

        <div style={{ marginBottom: '16px' }}>
          <label
            style={{
              display: 'block',
              marginBottom: '6px',
              fontSize: '13px',
              fontWeight: 600,
              color: '#111827',
            }}
          >
            License Number
          </label>
          <input
            type="text"
            placeholder="Enter license number"
            value={licenseNumber}
            onChange={(e) => setLicenseNumber(e.target.value)}
            style={{
              width: '100%',
              height: '42px',
              padding: '0 12px',
              borderRadius: '10px',
              border: '1px solid #d1d5db',
              fontSize: '14px',
              color: '#111827',
              boxSizing: 'border-box',
              background: '#fff',
            }}
          />
        </div>

        <button
          onClick={handleSave}
          disabled={isSaving}
          style={{
            background: '#f97316',
            color: '#ffffff',
            border: 'none',
            padding: '11px 16px',
            borderRadius: '10px',
            fontSize: '14px',
            fontWeight: 700,
            cursor: 'pointer',
            boxShadow: '0 4px 12px rgba(249, 115, 22, 0.18)',
            opacity: isSaving ? 0.7 : 1,
          }}
        >
          {isSaving ? 'Saving...' : 'Save Information'}
        </button>

        {message && (
          <p
            style={{
              marginTop: '12px',
              fontSize: '13px',
              color: message.startsWith('Error') ? '#b91c1c' : '#166534',
            }}
          >
            {message}
          </p>
        )}
      </div>
    </main>
  )
}
