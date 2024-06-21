import { API_URL } from '@/shared/constants'
import { nestHttp } from '@/shared/lib/http'

export const getOmsMember = async () => {
  return await nestHttp.get<any>(API_URL.OMS_MEMBER)
}
