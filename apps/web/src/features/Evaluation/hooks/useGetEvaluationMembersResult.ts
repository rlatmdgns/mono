import { useQuery } from '@tanstack/react-query'
import { QUERY_KEY } from '@/shared/constants'
import getEvaluationMembersResult from '@/services/evaluation/getEvaluationMembersResult/getEvaluationMembersResult'

const useGetEvaluationMembersResult = (
  evaluation_id: string,
  applicant_id: string,
  table_id: string,
  evaluationMemberAccess: boolean,
) => {
  const { data } = useQuery({
    queryKey: [QUERY_KEY.EVALUATION_MEMBERS_RESULT, evaluation_id, applicant_id, table_id],
    queryFn: () => getEvaluationMembersResult(evaluation_id, applicant_id, table_id),
    enabled: !!table_id && evaluationMemberAccess,
  })

  return {
    data,
  }
}

export default useGetEvaluationMembersResult
