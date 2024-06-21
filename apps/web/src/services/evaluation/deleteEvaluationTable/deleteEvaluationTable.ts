import { http } from '@/shared/lib/http'
import { API_URL } from '@/shared/constants'

const deleteEvaluationTable = async (evaluation_id: string, table_id: string) =>
  await http.delete(API_URL.DELETE_EVALUATION_TABLE(evaluation_id, table_id))

export default deleteEvaluationTable
