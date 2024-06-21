import { http } from '@/shared/lib/http'
import { API_URL } from '@/shared/constants'
import { SubmitEvaluationRequest } from '@/services/evaluation/submitEvaluation/submitEvaluation.interface'

const updateMyEvaluation = async (data: SubmitEvaluationRequest) =>
  await http.patch(
    API_URL.UPDATE_MY_EVALUATION(data.evaluation_id, data.applicant_id, data.table_id),
    data.data,
  )

export default updateMyEvaluation
