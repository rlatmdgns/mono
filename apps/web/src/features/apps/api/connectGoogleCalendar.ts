import { http } from '@/shared/lib'

export const connectGoogleCalendar = () => {
  return http.get('/api/callback/google-calendar')
}
