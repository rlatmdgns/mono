import { QUERY_KEY } from '@/shared/constants'
import { useQuery } from '@tanstack/react-query'
import { getScenariosWithFreshmen } from '@/entities/onboarding/api/getScenariosWithFreshmen'

export const useGetScenarioWithFreshmen = (id: number) => {
  const { data, isLoading } = useQuery({
    queryKey: [QUERY_KEY.SCENARIO],
    queryFn: () => getScenariosWithFreshmen(id),
  })
  return {
    isLoading,
    data,
  }
}
