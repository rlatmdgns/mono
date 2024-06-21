import { API_URL } from '@/shared/constants'
import { serverNestHttp } from '@/shared/lib/serverHttp'
import { Template } from '@/interface/template'

const getServerEvaluationTemplates = () => {
  return serverNestHttp.get<Template[]>(API_URL.TEMPLATES('evaluation'))
}

export default getServerEvaluationTemplates
