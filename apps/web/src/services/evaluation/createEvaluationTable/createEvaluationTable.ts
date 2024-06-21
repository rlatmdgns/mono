import { http } from '@/shared/lib/http'
import { API_URL } from '@/shared/constants'
import {
  CreateEvaluationTableRequest,
  CreateEvaluationTableResponse,
  EvaluationTable,
} from './createEvaluationTable.interface'

const createEvaluationTable = async (data: CreateEvaluationTableRequest) =>
  await http.post<EvaluationTable, CreateEvaluationTableResponse>(
    API_URL.CREATE_EVALUATION_TABLE(data.evaluation_id),
    data.data,
  )

export default createEvaluationTable
