import { API_URL } from '@/shared/constants'
import { serverNestHttp } from '@/shared/lib/serverHttp'
import { Template } from '@/interface/template'

const getServerMailTemplates = () => {
  return serverNestHttp.get<Template[]>(API_URL.TEMPLATES('mail'))
}

export default getServerMailTemplates
