import { API_URL } from '@/shared/constants'
import { http } from '@/shared/lib/http'
import { InterviewScheduleResponse, ScheduleParams } from '@/interface/schedules'
import { getURLSearchParams } from '@/shared/lib/utils'

const getSchedules = async (params: ScheduleParams) => {
  return await http.get<InterviewScheduleResponse>(
    `${API_URL.SCHEDULE}${getURLSearchParams(params)}`,
    'no-cache',
  )
}

export default getSchedules
