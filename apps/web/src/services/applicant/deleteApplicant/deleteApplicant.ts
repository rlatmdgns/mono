import { http } from '@/shared/lib/http'
import { API_URL } from '@/shared/constants'

const deleteApplicant = async (applicant_id: string) =>
  await http.delete(API_URL.DELETE_APPLICANT(applicant_id))

export default deleteApplicant
