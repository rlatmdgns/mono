import { EvaluationStatus } from '@/interface/evaluation'

export interface ApplicantEvaluationResponse {
  step: ApplicantStepEvaluation[]
}

export interface ApplicantStepEvaluation {
  step_id: string
  step_name: string
  evaluation_v2_id: string
  evaluation_status: EvaluationStatus
  table_total_score: number
  table_score: number
  user_authority: string
  access: boolean
}
