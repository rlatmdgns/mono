import { API_URL } from '@/shared/constants'
import { http } from '@/shared/lib/http'
import { getInterviewResponse } from '@/services/interview/getInterviews/getInterview.Interface'

const getInterviews = (interview_code: string, applicant_id: string) => {
  return http.get<getInterviewResponse>(`${API_URL.INTERVIEW}/${interview_code}/${applicant_id}`)
}
export default getInterviews
