import { API_URL } from '@/shared/constants'
import { http } from '@/shared/lib/http'
import { ApplicantPassRequest } from '@/services/applicant/applicantPass/applicantPass.interface'

const applicantPass = async (postingId: string, data: ApplicantPassRequest) => {
  return await http.put(API_URL.APPLICANT_PASS(postingId), data)
}

export default applicantPass
