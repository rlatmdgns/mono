import { useQuery } from '@tanstack/react-query'
import { QUERY_KEY } from '@/shared/constants'
import getEvaluationTableApplicantStatus from '@/services/evaluation/getEvaluationTableApplicantStatus'

const useGetEvaluationTableApplicantStatus = (evaluation_id: string, table_id: string) => {
  const { data } = useQuery({
    queryKey: [QUERY_KEY.EVALUATION_TABLE_APPLICANT_STATUS_STATUS, table_id],
    queryFn: () => getEvaluationTableApplicantStatus(evaluation_id, table_id),
    enabled: !!evaluation_id && !!table_id,
  })
  return {
    data,
  }
}

export default useGetEvaluationTableApplicantStatus
