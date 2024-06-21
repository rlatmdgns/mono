import { API_URL } from '@/shared/constants'
import { http } from '@/shared/lib/http'
import { ApplicantInfo } from './updateApplicant.interface'

const updateApplicant = async (applicant_id: string, form: ApplicantInfo) => {
  return await http.put(API_URL.UPDATE_APPLICANT(applicant_id), form)
}

export default updateApplicant
