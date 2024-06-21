import { API_URL } from '@/shared/constants'
import { serverNestHttp } from '@/shared/lib/serverHttp'

export const getSeverTemplate = async (id: string) => {
  return await serverNestHttp.get<any>(API_URL.TEMPLATE(id))
}
