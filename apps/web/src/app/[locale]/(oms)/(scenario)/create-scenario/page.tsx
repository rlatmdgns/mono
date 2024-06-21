import { CreateScenarioPage } from '@/pageModules/create-scenario/ui'
import { getServeScenarioDetail } from '@/entities/onboarding/api/getServeScenarioDetail'

interface CreateScenarioPageProps {
  searchParams: {
    id: string
    isPublish: boolean
  }
}

export default async function CreateScenario({ searchParams }: CreateScenarioPageProps) {
  const { id, isPublish } = searchParams
  const initialData = await getServeScenarioDetail(id)
  return <CreateScenarioPage scenarioId={id} isPublish={isPublish} initialData={initialData} />
}
