import { useQuery } from '@tanstack/react-query'
import { QUERY_KEY } from '@/shared/constants'
import getEvaluation from '@/services/evaluation/getEvaluation'

const useGetEvaluation = (posting_id: string, step_id: string) => {
  const { data, error, refetch } = useQuery({
    queryKey: [QUERY_KEY.EVALUATION, posting_id, step_id],
    queryFn: () => getEvaluation(posting_id, step_id),
  })

  return {
    data,
    error,
    refetch,
  }
}

export default useGetEvaluation
