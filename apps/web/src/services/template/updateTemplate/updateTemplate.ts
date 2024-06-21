import { API_URL } from '@/shared/constants'
import { nestHttp } from '@/shared/lib/http'

const updateTemplate = (id: string, data: any) => {
  return nestHttp.patch(API_URL.UPDATE_TEMPLATE(id), data)
}

export default updateTemplate
