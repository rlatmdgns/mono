import { http } from '@/shared/lib/http'
import { API_URL } from '@/shared/constants'
import { InterviewScheduleResponse } from '@/interface/schedules'

const getScheduleOncoming = () => {
  return http.get<InterviewScheduleResponse>(`${API_URL.SCHEDULE_ONCOMING}`)
}
export default getScheduleOncoming
