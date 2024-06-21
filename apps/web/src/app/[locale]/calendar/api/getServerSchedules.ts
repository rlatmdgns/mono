import { API_URL } from '@/shared/constants'
import { InterviewScheduleResponse } from '@/interface/schedules'
import { serverHttp } from '@/shared/lib/serverHttp'

const getServerSchedules = async () => {
  return await serverHttp.get<InterviewScheduleResponse>(`${API_URL.SCHEDULE}`)
}

export default getServerSchedules
