import { http } from '@/shared/lib'
import { API_URL } from '@/shared/constants'
import { GoogleCalendars } from '@/entities/apps/types/calendar'

export const getGoogleCalendars = () => {
  return http.get<GoogleCalendars>(API_URL.GOOGLE_CALENDAR)
}
