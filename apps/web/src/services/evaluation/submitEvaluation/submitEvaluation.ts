import { http } from '@/shared/lib/http'
import { API_URL } from '@/shared/constants'
import { SubmitEvaluationRequest } from '@/services/evaluation/submitEvaluation/submitEvaluation.interface'

const submitEvaluation = async (data: SubmitEvaluationRequest) =>
  await http.post(
    API_URL.SUBMIT_EVALUATION(data.evaluation_id, data.table_id, data.applicant_id),
    data.data,
  )

export default submitEvaluation
