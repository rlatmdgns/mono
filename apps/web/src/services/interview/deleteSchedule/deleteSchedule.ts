import { API_URL } from '@/shared/constants'
import { http } from '@/shared/lib/http'

interface DeleteScheduleResponse {
  success: boolean
}
const deleteSchedule = async (scheduleId: string) => {
  return await http.delete<unknown, DeleteScheduleResponse>(API_URL.SCHEDULE_MODIFY(scheduleId))
}

export default deleteSchedule
