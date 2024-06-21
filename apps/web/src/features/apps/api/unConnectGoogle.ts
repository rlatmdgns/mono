import { http } from '@/shared/lib'
import { API_URL } from '@/shared/constants'
import { GetConnectGoogleCalendarResponse } from '@/entities/apps/types/calendar'

export const unConnectGoogle = (): Promise<GetConnectGoogleCalendarResponse> => {
  return http.delete(API_URL.CONNECT_GOOGLE)
}
