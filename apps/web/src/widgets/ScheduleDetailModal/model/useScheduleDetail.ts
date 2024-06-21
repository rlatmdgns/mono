import { useQuery } from '@tanstack/react-query'
import { QUERY_KEY } from '@/shared/constants'
import getScheduleDetail from '../api/getScheduleDetail'

export const useScheduleDetail = (scheduleId: string) => {
  const { data } = useQuery({
    queryKey: [QUERY_KEY.SCHEDULE_DETAIL, scheduleId],
    queryFn: () => getScheduleDetail(scheduleId),
  })
  return {
    data,
  }
}
