import { API_URL } from '@/shared/constants'
import { nestHttp } from '@/shared/lib/http'

export const createTemplateScenario = (data: any, id?: number | string) => {
  return nestHttp.post(API_URL.TEMPLATE_SCENARIOS(id), data)
}
