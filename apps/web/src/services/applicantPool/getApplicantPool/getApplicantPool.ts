import { API_URL } from '@/shared/constants'
import { http } from '@/shared/lib/http'
import { ApplicantPoolRequest, ApplicantPoolResponse } from '@/interface/applicantPool'

const getApplicantPool = async (
  page: number,
  data: ApplicantPoolRequest,
): Promise<ApplicantPoolResponse> =>
  await http.post(API_URL.APPLICANT_POOL, {
    page: page,
    ...data,
  })

export default getApplicantPool
