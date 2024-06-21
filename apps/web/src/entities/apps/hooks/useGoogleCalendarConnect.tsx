import { useQuery } from '@tanstack/react-query'
import { QUERY_KEY } from '@/shared/constants'
import { GetConnectGoogleCalendarResponse } from '@/entities/apps/types/calendar'
import { getConnectGoogle } from '@/entities/apps/api'

export const useGoogleCalendarConnect = (initialData: GetConnectGoogleCalendarResponse) => {
  const { data } = useQuery({
    queryKey: [QUERY_KEY.CONNECT_GOOGLE],
    queryFn: getConnectGoogle,
    initialData,
  })

  return {
    data,
  }
}
