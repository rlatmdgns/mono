import { API_URL } from '@/shared/constants'
import { GetConnectGoogleCalendarResponse } from '@/entities/apps/types/calendar'
import { http } from '@/shared/lib'

export const getConnectGoogle = async () => {
  return await http.get<GetConnectGoogleCalendarResponse>(API_URL.CONNECT_GOOGLE)
}
