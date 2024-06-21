import { http } from '@/shared/lib/http'
import { API_URL } from '@/shared/constants'
import { EvaluationMembersResultResponse } from '@/services/evaluation/getEvaluationMembersResult/getEvaluationMembersResult.interface'

const getEvaluationMembersResult = async (
  evaluation_id: string,
  applicant_id: string,
  table_id: string,
) =>
  await http.get<EvaluationMembersResultResponse>(
    API_URL.GET_EVALUATION_MEMBERS_RESULT(evaluation_id, applicant_id, table_id),
  )

export default getEvaluationMembersResult
