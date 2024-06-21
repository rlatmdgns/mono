import { API_URL } from '@/shared/constants'
import { http } from '@/shared/lib/http'

const addApplicant = async (postingId: string, data: FormData) => {
  return await http.postForm(API_URL.APPLICANT(postingId), data)
}

export default addApplicant
