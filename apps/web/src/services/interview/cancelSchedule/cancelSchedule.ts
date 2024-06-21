import { API_URL } from '@/shared/constants'
import { http } from '@/shared/lib/http'
import { InterviewCancelRequest } from '@/interface/interview'

interface CancelScheduleResponse {
  success: boolean
}
const cancelSchedule = async (scheduleId: string, cancelReason: InterviewCancelRequest) => {
  return await http.post<InterviewCancelRequest, CancelScheduleResponse>(
    API_URL.SCHEDULE_CANCEL(scheduleId),
    cancelReason,
  )
}

export default cancelSchedule
