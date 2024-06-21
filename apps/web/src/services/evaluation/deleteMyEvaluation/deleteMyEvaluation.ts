import { http } from '@/shared/lib/http'
import { API_URL } from '@/shared/constants'

const deleteMyEvaluation = async (evaluation_id: string, applicant_id: string, table_id: string) =>
  await http.delete(API_URL.DELETE_MY_EVALUATION(evaluation_id, applicant_id, table_id))

export default deleteMyEvaluation
