import { EvaluationTableForm } from '@/interface/evaluation'

export interface CreateEvaluationTableRequest {
  evaluation_id: string
  data: EvaluationTable
}

export interface EvaluationTable {
  is_save_template: boolean
  evaluation_data: EvaluationTableForm
}

export interface CreateEvaluationTableResponse {
  success: boolean
  table_id: number
}
