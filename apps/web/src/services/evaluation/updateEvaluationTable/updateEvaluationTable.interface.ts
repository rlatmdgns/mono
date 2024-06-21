import { EvaluationTable } from '@/services/evaluation/createEvaluationTable/createEvaluationTable.interface'

export interface UpdateEvaluationTableRequest extends EvaluationTable {
  evaluation_id: string
  table_id: string
}
