import { API_URL } from '@/shared/constants'
import { http } from '@/shared/lib/http'
import {
  ApplicantFailRequest,
  ApplicantFailResponse,
} from '@/services/applicant/applicantFail/applicantFail.interface'

const applicantFail = async (
  postingId: string,
  data: ApplicantFailRequest,
): Promise<ApplicantFailResponse> => {
  return await http.put(API_URL.APPLICANT_FAIL(postingId), data)
}

export default applicantFail
