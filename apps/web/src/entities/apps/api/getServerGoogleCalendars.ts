import { API_URL } from '@/shared/constants'
import { GoogleCalendars } from '@/entities/apps/types/calendar'
import { serverHttp } from '@/shared/lib/serverHttp'

export const getServerGoogleCalendars = () => {
  return serverHttp.get<GoogleCalendars>(API_URL.GOOGLE_CALENDAR)
}
