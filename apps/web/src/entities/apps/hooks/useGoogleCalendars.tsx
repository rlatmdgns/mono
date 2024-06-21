import { useQuery } from '@tanstack/react-query'
import { QUERY_KEY } from '@/shared/constants'
import { getGoogleCalendars } from '@/entities/apps/api'

export const useGoogleCalendars = (isConnected: boolean) => {
  const { data } = useQuery({
    queryKey: [QUERY_KEY.GOOGLE_CALENDAR],
    queryFn: getGoogleCalendars,
    enabled: isConnected,
  })

  return {
    data,
  }
}
