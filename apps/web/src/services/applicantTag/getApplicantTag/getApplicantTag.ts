import { http } from '@/shared/lib/http'
import { API_URL } from '@/shared/constants'
import { ApplicantTagResponse } from '@/services/applicantTag/getApplicantTag/getApplicantTag.interface'

const getApplicantTag = async (applicant_id: string) =>
  await http.get<ApplicantTagResponse>(API_URL.APPLICANT_TAG(applicant_id))

export default getApplicantTag
