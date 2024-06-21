import { API_URL } from '@/shared/constants'
import { http } from '@/shared/lib'
import { GoogleCalendars } from '@/entities/apps/types/calendar'

export const updateGoogleCalendars = (data: GoogleCalendars) => {
  return http.patch(API_URL.GOOGLE_CALENDAR, data)
}
