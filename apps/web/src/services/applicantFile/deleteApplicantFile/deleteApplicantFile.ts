import { API_URL } from '@/shared/constants'
import { http } from '@/shared/lib/http'

const deleteApplicantFile = async (file_id: string) => {
  return await http.delete(API_URL.DELETE_APPLICANT_FILE(file_id))
}

export default deleteApplicantFile
