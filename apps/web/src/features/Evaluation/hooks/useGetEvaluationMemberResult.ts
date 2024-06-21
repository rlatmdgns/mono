import { QUERY_KEY } from '@/shared/constants'
import { useQuery } from '@tanstack/react-query'
import getEvaluationMemberResult from '@/services/evaluation/getEvaluationMemberResult'
const useGetEvaluationMemberResult = (
  evaluation_id: string,
  applicant_id: string,
  table_id: string,
  identification: string,
) => {
  const { data } = useQuery({
    queryKey: [
      QUERY_KEY.EVALUATION_MEMBER_RESULT,
      evaluation_id,
      applicant_id,
      table_id,
      identification,
    ],
    queryFn: () => getEvaluationMemberResult(evaluation_id, applicant_id, table_id, identification),
    enabled: !!evaluation_id && !!identification,
  })

  return {
    data,
  }
}

export default useGetEvaluationMemberResult
