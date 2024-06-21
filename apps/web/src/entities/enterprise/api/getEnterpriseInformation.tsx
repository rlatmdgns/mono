import { API_URL } from '@/shared/constants'
import { EnterpriseInformationResponse } from '@/interface/enterpriseInformation'
import { http } from '@/shared/lib/http'

const getEnterpriseInformation = async () =>
  await http.get<EnterpriseInformationResponse>(API_URL.ENTERPRISE_INFORMATION)

export default getEnterpriseInformation
