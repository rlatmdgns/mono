import { http } from '@/shared/lib/http'
import { API_URL } from '@/shared/constants'
import { ScheduleRequirementResponse } from '@/services/interview/getScheduleRequirement/getScheduleRequirement.interface'

const getScheduleRequirement = (id?: string) => {
  return http.get<ScheduleRequirementResponse>(`${API_URL.SCHEDULE_REQUIREMENT(id)}`)
}
export default getScheduleRequirement
