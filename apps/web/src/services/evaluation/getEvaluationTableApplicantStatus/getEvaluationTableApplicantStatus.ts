import { http } from '@/shared/lib/http'
import { API_URL } from '@/shared/constants'
import { EvaluationTableApplicantStatusResponse } from '@/services/evaluation/getEvaluationTableApplicantStatus/getEvaluationTableApplicantStatus.interface'

const getEvaluationTableApplicantStatus = async (evaluation_id: string, table_id: string) =>
  await http.get<EvaluationTableApplicantStatusResponse>(
    API_URL.GET_EVALUATION_TABLE_APPLICANT_STATUS(evaluation_id, table_id),
  )

export default getEvaluationTableApplicantStatus
