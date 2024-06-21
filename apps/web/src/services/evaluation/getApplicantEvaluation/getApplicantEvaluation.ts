import { http } from '@/shared/lib/http'
import { API_URL } from '@/shared/constants'
import { ApplicantEvaluationResponse } from '@/services/evaluation/getApplicantEvaluation/getApplicantEvaluation.interface'

const getApplicantEvaluation = async (posting_id: string, applicant_id: string) =>
  await http.get<ApplicantEvaluationResponse>(
    API_URL.GET_APPLICANT_EVALUATION(posting_id, applicant_id),
  )

export default getApplicantEvaluation
