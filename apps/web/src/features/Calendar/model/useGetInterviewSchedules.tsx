import { QUERY_KEY } from '@/shared/constants'
import getSchedules from '../api/getSchedules'
import { useQuery } from '@tanstack/react-query'

export const useGetInterviewSchedules = (params: any, initialSchedule: any) => {
  const { data, refetch } = useQuery({
    queryKey: [QUERY_KEY.SCHEDULE],
    queryFn: () => getSchedules(params),
    initialData: initialSchedule,
    enabled: !!params,
  })
  return {
    data,
    refetch,
  }
}
