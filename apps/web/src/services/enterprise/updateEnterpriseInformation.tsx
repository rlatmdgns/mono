import { API_URL } from '@/shared/constants'
import { Enterprise } from '@/interface/enterpriseInformation'
import { http } from '@/shared/lib/http'

const updateEnterprise = async (data: Enterprise) =>
  await http.patch(API_URL.ENTERPRISE_INFORMATION, data)

export default updateEnterprise
