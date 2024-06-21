export interface CloseEvaluationTablesRequest {
  evaluation_id: string
  table_id: string
  data: CloseEvaluationTablesData
}

export interface CloseEvaluationTablesData {
  applicant_ids: string[]
}

export interface CloseEvaluationTablesResponse {
  success: boolean
  0: {
    applicant_id: string
    status: string
  }
}
