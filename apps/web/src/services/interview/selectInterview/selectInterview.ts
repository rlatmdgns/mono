import { API_URL } from '@/shared/constants'
import { InterviewPostRequest, RequestInterviewResponse } from '@/interface/interview'
import { http } from '@/shared/lib/http'

const selectInterview = async (data: InterviewPostRequest) => {
  return await http.post<unknown, RequestInterviewResponse>(API_URL.INTERVIEW, data)
}

export default selectInterview
