import { QUERY_KEY } from '@/shared/constants'
import { useQuery } from '@tanstack/react-query'
import getMyEvaluation from '@/services/evaluation/getMyEvaluation'
const useGetMyEvaluation = (
  evaluation_id: string,
  applicant_id: string,
  table_id: string,
  access: boolean,
) => {
  const { data } = useQuery({
    queryKey: [QUERY_KEY.EVALUATION_MY_RESULT, evaluation_id, applicant_id, table_id],
    queryFn: () => getMyEvaluation(evaluation_id, applicant_id, table_id),
    enabled: access,
  })

  return {
    data,
  }
}

export default useGetMyEvaluation
