import { http } from '@/shared/lib/http'
import { API_URL } from '@/shared/constants'
import { CloseEvaluationRequest } from '@/services/evaluation/closeEvaluation/closeEvaluation.interface'

const closeEvaluation = async (data: CloseEvaluationRequest) =>
  await http.patch(API_URL.CLOSE_EVALUATION(data.evaluation_id), data.data)

export default closeEvaluation
