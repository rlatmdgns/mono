import { API_URL } from '@/shared/constants'
import { nestHttp } from '@/shared/lib/http'
import { TemplateContentResponse } from '@/interface/template'

const getTemplateContent = (id: string) => {
  return nestHttp.get<TemplateContentResponse>(API_URL.TEMPLATE(id))
}

export default getTemplateContent
