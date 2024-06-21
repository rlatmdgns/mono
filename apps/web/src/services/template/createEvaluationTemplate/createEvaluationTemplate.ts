import { API_URL } from '@/shared/constants'
import { http } from '@/shared/lib/http'
import { EvaluationTemplateRequest } from '@/interface/evaluation'

const createEvaluationTemplate = async (data: EvaluationTemplateRequest) =>
  await http.post(API_URL.CREATE_EVALUATION_TEMPLATE, data)

export default createEvaluationTemplate
