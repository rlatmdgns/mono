import { API_URL } from '@/shared/constants'
import { InterviewScheduleResponse } from '@/interface/schedules'
import { serverHttp } from '@/shared/lib/serverHttp'

const getServerScheduleOncoming = () => {
  return serverHttp.get<InterviewScheduleResponse>(`${API_URL.SCHEDULE_ONCOMING}`)
}
export default getServerScheduleOncoming
