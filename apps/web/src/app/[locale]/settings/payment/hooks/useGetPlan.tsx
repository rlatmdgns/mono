import { useQuery } from '@tanstack/react-query'
import { QUERY_KEY } from '@/shared/constants'
import getPlan from '@/services/plan/getPlan'

const useGetPlan = () => {
  const { data } = useQuery({
    queryKey: [QUERY_KEY.PLAN],
    queryFn: () => getPlan(),
  })
  return {
    planData: data,
  }
}

export default useGetPlan
