import { API_URL } from '@/shared/constants'
import { http } from '@/shared/lib/http'
import { ModifyInterviewPlaceRequest } from '@/interface/interview'

const updateInterviewPlace = async (
  interview_type: string,
  postData: ModifyInterviewPlaceRequest,
) => {
  return await http.put(API_URL.MODIFY_INTERVIEW_PLACE(interview_type), postData)
}

export default updateInterviewPlace
