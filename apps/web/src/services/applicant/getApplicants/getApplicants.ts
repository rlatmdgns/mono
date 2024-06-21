import { http } from '@/shared/lib/http'
import { API_URL } from '@/shared/constants'
import { ApplicantsRequest, ApplicantsResponse } from '@/interface/applicants'

const getApplicants = async (postingId: string, data: ApplicantsRequest) =>
  await http.post<any, ApplicantsResponse>(API_URL.APPLICANTS(postingId), data)

export default getApplicants
