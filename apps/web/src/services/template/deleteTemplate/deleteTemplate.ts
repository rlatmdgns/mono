import { API_URL } from '@/shared/constants'
import { nestHttp } from '@/shared/lib/http'

const deleteTemplate = (id: number) => {
  return nestHttp.delete(API_URL.DELETE_TEMPLATE(id))
}

export default deleteTemplate
