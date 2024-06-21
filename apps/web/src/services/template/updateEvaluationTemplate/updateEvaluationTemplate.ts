import { API_URL } from '@/shared/constants'
import { http } from '@/shared/lib/http'
import { UpdateEvaluationTemplateRequest } from '@/interface/evaluation'

const updateEvaluationTemplate = async (data: UpdateEvaluationTemplateRequest) =>
  await http.patch(API_URL.UPDATE_EVALUATION_TEMPLATE(data.id), data.data)

export default updateEvaluationTemplate
