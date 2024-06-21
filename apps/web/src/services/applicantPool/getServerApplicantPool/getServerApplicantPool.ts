import { ApplicantPoolResponse } from '@/interface/applicantPool'
import { serverHttp } from '@/shared/lib/serverHttp'
import { API_URL } from '@/shared/constants'

const getServerApplicantPool = (): Promise<ApplicantPoolResponse> => {
  return serverHttp.post(API_URL.APPLICANT_POOL, {
    size: 30,
  })
}

export default getServerApplicantPool
