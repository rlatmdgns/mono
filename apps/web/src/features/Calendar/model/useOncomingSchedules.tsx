import { QUERY_KEY } from '@/shared/constants'
import getScheduleOncoming from '../api/getScheduleOncoming'
import { useQuery } from '@tanstack/react-query'

export const useOncomingSchedules = (initialOnComingSchedule: any) => {
  const { data } = useQuery({
    queryKey: [QUERY_KEY.SCHEDULE_ONCOMING],
    queryFn: () => getScheduleOncoming(),
    initialData: initialOnComingSchedule,
  })
  return {
    data,
  }
}
