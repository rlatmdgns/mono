import { http } from '@/shared/lib/http'
import { API_URL } from '@/shared/constants'
import { ApplicantPublicResponse } from '@/services/applicantPublic/applicantPublic.interface'

const applicantPublic = async (applicant_id: string): Promise<ApplicantPublicResponse> =>
  await http.patch(API_URL.APPLICANT_PUBLIC(applicant_id))

export default applicantPublic
