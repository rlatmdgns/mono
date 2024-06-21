import { API_URL } from '@/shared/constants'
import { http } from '@/shared/lib/http'

export const updateApplicantFileMasking = async (id: number) => {
  return await http.patch(API_URL.UPDATE_APPLICANT_FILE(id))
}
