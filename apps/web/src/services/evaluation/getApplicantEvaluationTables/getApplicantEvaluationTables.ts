import { API_URL } from '@/shared/constants'
import { http } from '@/shared/lib/http'
import { ApplicantEvaluationTablesResponse } from '@/services/evaluation/getApplicantEvaluationTables/getApplicantEvaluationTables.interface'

const getApplicantEvaluationTables = async (evaluation_id: string, applicant_id: string) =>
  await http.get<ApplicantEvaluationTablesResponse>(
    API_URL.GET_APPLICANT_EVALUATION_TABLES(evaluation_id, applicant_id),
  )

export default getApplicantEvaluationTables
