import { API_URL } from '@/shared/constants'
import { nestHttp } from '@/shared/lib/http'

export const getTemplateScenarios = async () => {
  return await nestHttp.get<any>(API_URL.TEMPLATE_SCENARIOS())
}
