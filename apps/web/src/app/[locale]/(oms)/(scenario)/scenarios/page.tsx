import { getServerTemplateScenarios } from '@/entities/onboarding/api/getServerTemplateScenarios'
import { ScenariosPage } from '@/pageModules/scenarios/ui'

export default async function Scenarios() {
  const initialData = await getServerTemplateScenarios()
  return <ScenariosPage initialData={initialData} />
}
