import { useQuery } from '@tanstack/react-query'
import { QUERY_KEY } from '@/shared/constants'
import { ScheduleSearchParams } from '@/interface/schedules'
import getScheduleSearch from '@/services/interview/getScheduleSearch/getScheduleSearch'

export const useGetInterviewSchedules = (params: ScheduleSearchParams) => {
  const { data, refetch } = useQuery({
    queryKey: [QUERY_KEY.SCHEDULE_SEARCH],
    queryFn: () => getScheduleSearch(params),
  })
  return {
    data,
    refetch,
  }
}
