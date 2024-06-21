import { API_URL } from '@/shared/constants'
import { http } from '@/shared/lib/http'
import { ScheduleDetailResponse } from '@/interface/schedules'

const getScheduleDetail = async (schedule_id: string) => {
  return await http.get<ScheduleDetailResponse>(API_URL.SCHEDULE_DETAIL(schedule_id), 'no-cache')
}

export default getScheduleDetail
