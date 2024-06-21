import { http } from '@/shared/lib/http'
import { API_URL } from '@/shared/constants'
import { UpdateEvaluationTableRequest } from '@/services/evaluation/updateEvaluationTable/updateEvaluationTable.interface'

const updateEvaluationTable = async (data: UpdateEvaluationTableRequest) =>
  await http.patch(
    API_URL.UPDATE_EVALUATION_TABLE(data.evaluation_id, data.table_id),
    data.evaluation_data,
  )

export default updateEvaluationTable
