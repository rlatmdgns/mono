import { http } from '@/shared/lib/http'
import { API_URL } from '@/shared/constants'
import { EvaluationMemberResultResponse } from '@/services/evaluation/getEvaluationMemberResult/getEvaluationMemberResult.interface'

const getEvaluationMemberResult = async (
  evaluation_id: string,
  applicant_id: string,
  table_id: string,
  identification: string,
) =>
  await http.get<EvaluationMemberResultResponse>(
    API_URL.GET_EVALUATION_MEMBER_RESULT(evaluation_id, applicant_id, table_id, identification),
  )

export default getEvaluationMemberResult
