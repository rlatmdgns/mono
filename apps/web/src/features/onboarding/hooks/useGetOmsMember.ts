import { QUERY_KEY } from '@/shared/constants'
import { useQuery } from '@tanstack/react-query'
import { getOmsMember } from '@/features/onboarding/api/getOmsMember'

export const useGetOmsMember = () => {
  const { data } = useQuery({
    queryKey: [QUERY_KEY.OMS_MEMBER],
    queryFn: () => getOmsMember(),
  })
  return {
    data,
  }
}
