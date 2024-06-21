import { API_URL } from '@/shared/constants'
import { http } from '@/shared/lib/http'
import { DeleteInterviewPlaceRequest } from '@/interface/interview'

const deleteInterviewPlace = async (
  interview_type: string,
  postData: DeleteInterviewPlaceRequest,
) => {
  return await http.delete(API_URL.MODIFY_INTERVIEW_PLACE(interview_type), postData)
}

export default deleteInterviewPlace
