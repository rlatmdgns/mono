import { http } from '@/shared/lib/http'
import { API_URL } from '@/shared/constants'
import { ApplicantResponse } from './getApplicant.interface'

const getApplicant = async (applicant_id: string) =>
  await http.get<ApplicantResponse>(API_URL.GET_APPLICANT(applicant_id))

export default getApplicant
