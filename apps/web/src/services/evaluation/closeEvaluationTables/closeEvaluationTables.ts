import { http } from '@/shared/lib/http'
import { API_URL } from '@/shared/constants'
import {
  CloseEvaluationTablesData,
  CloseEvaluationTablesRequest,
  CloseEvaluationTablesResponse,
} from '@/services/evaluation/closeEvaluationTables/closeEvaluationTables.interface'

const closeEvaluationTables = async (data: CloseEvaluationTablesRequest) =>
  await http.patch<CloseEvaluationTablesData, CloseEvaluationTablesResponse>(
    API_URL.CLOSE_EVALUATION_TABLES(data.evaluation_id, data.table_id),
    data.data,
  )

export default closeEvaluationTables
