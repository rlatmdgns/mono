import { API_URL } from '@/shared/constants'
import { serverNestHttp } from '@/shared/lib/serverHttp'
import { Template } from '@/interface/template'

const getServerPostingTemplates = () => {
  return serverNestHttp.get<Template[]>(API_URL.TEMPLATES(`posting`))
}

export default getServerPostingTemplates
