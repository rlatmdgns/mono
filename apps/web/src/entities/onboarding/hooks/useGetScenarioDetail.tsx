import { QUERY_KEY } from '@/shared/constants'
import { useQuery } from '@tanstack/react-query'
import { getScenarioDetail } from '@/entities/onboarding/api/getScenarioDetail'

export const useGetTemplateScenarios = (id: number | string, initialData: any) => {
  const { data } = useQuery({
    queryKey: [QUERY_KEY.TEMPLATE_SCENARIO_DETAIL],
    queryFn: () => getScenarioDetail(id),
    initialData,
  })

  return {
    data,
  }
}
