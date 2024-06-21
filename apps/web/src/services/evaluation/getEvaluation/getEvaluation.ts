import { http } from '@/shared/lib/http'
import { API_URL } from '@/shared/constants'
import { EvaluationResponse } from '@/interface/evaluation'

const getEvaluation = async (posting_id: string, step_id: string) =>
  await http.get<EvaluationResponse>(API_URL.GET_EVALUATION(posting_id, step_id))

export default getEvaluation
