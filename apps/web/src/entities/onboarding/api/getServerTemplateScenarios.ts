import { serverNestHttp } from '@/shared/lib/serverHttp'
import { API_URL } from '@/shared/constants'
import { TemplateScenario } from '@/entities/onboarding/types'

export const getServerTemplateScenarios = async () => {
  return await serverNestHttp.get<TemplateScenario[]>(API_URL.TEMPLATE_SCENARIOS())
}
