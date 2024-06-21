import { API_URL } from '@/shared/constants'
import { InterviewRefusePostRequest, InterviewRefuseResponse } from '@/interface/interview'
import { http } from '@/shared/lib/http'

const refuseInterview = async (data: InterviewRefusePostRequest) => {
  return await http.post<InterviewRefusePostRequest, InterviewRefuseResponse>(
    API_URL.INTERVIEW_REFUSE,
    data,
  )
}

export default refuseInterview
