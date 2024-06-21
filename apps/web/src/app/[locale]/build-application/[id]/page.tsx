import { getServerPostingApplicantForm } from '@/entities/build-application/api/getServerPostingApplicantForm'
import { Suspense } from 'react'
import CustomizePostingLoading from '@/app/[locale]/build-application/[id]/loading'
import BuildApplication from '@/pageModules/build-application/ui/BuildApplication'

interface CustomizePostingPageProps {
  params: {
    id: string
  }
}

export default async function CustomizePostingPage({ params }: CustomizePostingPageProps) {
  const initialData = await getServerPostingApplicantForm(params.id)

  return (
    <Suspense fallback={<CustomizePostingLoading />}>
      <BuildApplication postingId={params.id} initialData={initialData} />
    </Suspense>
  )
}
