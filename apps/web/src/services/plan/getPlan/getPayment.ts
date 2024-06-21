import { API_URL } from '@/shared/constants'
import { http } from '@/shared/lib/http'
import { PlanResponse } from '@/interface/plan'

const getPlan = async () => {
  return await http.get<PlanResponse>(`${API_URL.PLAN}`, 'no-cache')
}

export default getPlan
