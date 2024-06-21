import { serverHttp } from '@/shared/lib/serverHttp'
import { API_URL } from '@/shared/constants'
import { ApplicantPoolFilter } from '@/interface/applicantPool'

const getServerApplicantPoolFilter = () => {
  return serverHttp.get<ApplicantPoolFilter>(API_URL.APPLICANT_POOL_FILTER)
}

export default getServerApplicantPoolFilter
