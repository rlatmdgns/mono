import { API_URL } from '@/shared/constants'
import { http } from '@/shared/lib/http'
import { RequestInterview, RequestInterviewResponse } from '@/interface/interview'

const requestInterview = async (postingId: string, postData: RequestInterview) => {
  return await http.post<unknown, RequestInterviewResponse>(
    `${API_URL.INTERVIEW_REQUEST}/${postingId}`,
    postData,
  )
}

export default requestInterview
