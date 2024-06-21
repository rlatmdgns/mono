import { QUERY_KEY } from '@/shared/constants'
import { useQuery } from '@tanstack/react-query'
import { getOmsPosting } from '@/entities/onboarding/api/getOmsPosting'

export const useGetOmsPosting = () => {
  const { data } = useQuery({
    queryKey: [QUERY_KEY.OMS_POSTING],
    queryFn: () => getOmsPosting(),
  })
  return {
    data,
  }
}
