'use server'
import { API_URL } from '@/shared/constants'
import { EnterpriseInformationResponse } from '@/interface/enterpriseInformation'
import { serverHttp } from '@/shared/lib/serverHttp'

const getServerEnterpriseInformation = async () =>
  await serverHttp.get<EnterpriseInformationResponse>(API_URL.ENTERPRISE_INFORMATION)

export default getServerEnterpriseInformation
