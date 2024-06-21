import { API_URL } from '@/shared/constants'
import { http } from '@/shared/lib/http'
import { InterviewPlaceResponse } from '@/interface/interview'

const getInterviewPlace = async () => {
  return await http.get<InterviewPlaceResponse>(API_URL.INTERVIEW_PLACE)
}

export default getInterviewPlace
