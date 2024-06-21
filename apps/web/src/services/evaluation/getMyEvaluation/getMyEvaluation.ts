import { http } from '@/shared/lib/http'
import { API_URL } from '@/shared/constants'
import { MyEvaluationResponse } from '@/services/evaluation/getMyEvaluation/getMyEvaluation.interface'

const getMyEvaluation = async (evaluation_id: string, applicant_id: string, table_id: string) =>
  await http.get<MyEvaluationResponse>(
    API_URL.GET_MY_EVALUATION(evaluation_id, applicant_id, table_id),
  )

export default getMyEvaluation
