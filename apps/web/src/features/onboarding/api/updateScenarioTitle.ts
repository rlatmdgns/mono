import { API_URL } from '@/shared/constants'
import { nestHttp } from '@/shared/lib/http'
import { TemplateScenarioTitle } from '@/entities/onboarding/types'

export const updateScenarioTitle = (id: number | string, data: TemplateScenarioTitle) => {
  return nestHttp.patch(API_URL.TEMPLATE_SCENARIOS(id), data)
}
