import { http } from '@/shared/lib/http'
import { API_URL } from '@/shared/constants'
import { EvaluationTableForm } from '@/features/Evaluation/Evaluation.interface'

const getEvaluationTable = async (evaluation_id: string, table_id: string) =>
  await http.get<EvaluationTableForm>(API_URL.GET_EVALUATION_TABLE(evaluation_id, table_id))

export default getEvaluationTable
