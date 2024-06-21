import { API_URL } from '@/shared/constants'
import { serverNestHttp } from '@/shared/lib/serverHttp'
import { Template } from '@/interface/template'

const getServerApplicationTemplates = () => {
  return serverNestHttp.get<Template[]>(API_URL.TEMPLATES('application'))
}

export default getServerApplicationTemplates
