import { API_URL } from '@/shared/constants'
import { Template, TemplateParams } from '@/interface/template'
import { nestHttp } from '@/shared/lib/http'

const getTemplates = (params: TemplateParams) => {
  return nestHttp.get<Template[]>(`${API_URL.TEMPLATES(params.template_type, params.search)}`)
}

export default getTemplates
