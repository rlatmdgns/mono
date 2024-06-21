import { QUERY_KEY } from '@/shared/constants'
import getApplicantEvaluationTables from '@/services/evaluation/getApplicantEvaluationTables/getApplicantEvaluationTables'
import { useQuery } from '@tanstack/react-query'

const useGetApplicantEvaluationTables = (
  evaluation_id: string,
  applicant_id: string,
  access: boolean,
) => {
  const { data } = useQuery({
    queryKey: [QUERY_KEY.APPLICANT_EVALUATION_TABLES, evaluation_id, applicant_id],
    queryFn: () => getApplicantEvaluationTables(evaluation_id, applicant_id),
    enabled: access,
  })

  return {
    data,
  }
}

export default useGetApplicantEvaluationTables
