export type EvaluationTableApplicantStatusResponse = EvaluationTableApplicantStatus[]

export interface EvaluationTableApplicantStatus {
  applicant_id: string
  applicant_name: string
  table_applicant_status: EvaluationTableStatus
  evaluation_members_count: number
  evaluation_count: number
}

export type EvaluationTableStatus = 'TA_COMPLETE' | 'TA_CLOSED' | 'TA_PROCEEDING'
