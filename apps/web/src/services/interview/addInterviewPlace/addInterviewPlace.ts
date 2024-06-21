import { API_URL } from '@/shared/constants'
import { http } from '@/shared/lib/http'
import { AddInterviewPlaceRequest } from '@/interface/interview'

const addInterviewPlace = async (postData: AddInterviewPlaceRequest) => {
  return await http.post(API_URL.INTERVIEW_PLACE, postData)
}

export default addInterviewPlace
