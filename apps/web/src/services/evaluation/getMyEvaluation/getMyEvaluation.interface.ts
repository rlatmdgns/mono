import { EvaluationMemberResultResponse } from '@/services/evaluation/getEvaluationMemberResult/getEvaluationMemberResult.interface'

export interface MyEvaluationResponse extends EvaluationMemberResultResponse {
  can_edit: boolean
}
