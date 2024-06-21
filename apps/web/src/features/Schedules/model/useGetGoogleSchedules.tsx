import { useQuery } from '@tanstack/react-query'
import { QUERY_KEY } from '@/shared/constants'
import { ScheduleSearchParams } from '@/interface/schedules'
import getGoogleSchedulesSearch from '@/services/interview/getGoogleSchedulesSearch/getGoogleSchedulesSearch'

export const useGetGoogleSchedules = (params: ScheduleSearchParams) => {
  const { data, refetch, isFetching, isRefetching } = useQuery({
    queryKey: [QUERY_KEY.GOOGLE_SCHEDULES],
    queryFn: () => getGoogleSchedulesSearch(params),
  })
  return {
    data,
    refetch,
    isFetching,
    isRefetching,
  }
}
