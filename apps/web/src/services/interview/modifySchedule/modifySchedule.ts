import { http } from '@/shared/lib/http'
import { API_URL } from '@/shared/constants'
import { ModifyScheduleRequest } from '@/services/interview/modifySchedule/modifySchedule.interface'

const modifySchedule = (schedule_id: string, data: ModifyScheduleRequest) => {
  return http.put(API_URL.SCHEDULE_MODIFY(schedule_id), data)
}
export default modifySchedule
