export interface CloseEvaluationRequest {
  evaluation_id: string
  data: {
    applicant_ids: string[]
  }
}
