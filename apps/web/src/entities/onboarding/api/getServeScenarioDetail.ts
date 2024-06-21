import { serverNestHttp } from '@/shared/lib/serverHttp'
import { API_URL } from '@/shared/constants'
import { TemplateScenarioWithId } from '@/entities/onboarding/types'
import { DEFAULT_SCENARIO } from '@/entities/onboarding/constants'
import { getConvertSequence } from '@/entities/onboarding/lib'

export const getServeScenarioDetail = async (id?: string | number) => {
  const response = await serverNestHttp.get<TemplateScenarioWithId>(API_URL.TEMPLATE_SCENARIOS(id))
  if (id) {
    const data = {
      scenario_id: response.id,
      is_edited: false,
      title: response.title,
      description: response.description,
      ...getConvertSequence(response),
    }
    return data
  }

  return DEFAULT_SCENARIO
}
