import { QUERY_KEY } from '@/shared/constants'
import { useQuery } from '@tanstack/react-query'
import { getTemplateScenarios } from '@/entities/onboarding/api/getTemplateScenarios'

export const useGetTemplateScenarios = (initialData: any) => {
  const { data } = useQuery({
    queryKey: [QUERY_KEY.TEMPLATE_SCENARIOS],
    queryFn: () => getTemplateScenarios(),
    initialData,
  })
  return {
    data,
  }
}
