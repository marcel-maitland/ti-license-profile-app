import LicenseForm from './LicenseForm'

type PageProps = {
  searchParams?: {
    learnerId?: string
  }
}

export default function HomePage({ searchParams }: PageProps) {
  const learnerId = searchParams?.learnerId || ''

  return <LicenseForm learnerId={learnerId} />
}
