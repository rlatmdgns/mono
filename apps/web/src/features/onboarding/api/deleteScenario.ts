import { API_URL } from '@/shared/constants'
import { nestHttp } from '@/shared/lib/http'

export const deleteScenario = (id: string | number) => {
  return nestHttp.delete(API_URL.TEMPLATE_SCENARIOS(id))
}
