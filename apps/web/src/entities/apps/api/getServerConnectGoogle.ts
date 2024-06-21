'use server'

import { API_URL } from '@/shared/constants'
import { GetConnectGoogleCalendarResponse } from '@/entities/apps/types/calendar'
import { serverHttp } from '@/shared/lib/serverHttp'

export const getServerConnectGoogle = () => {
  return serverHttp.get<GetConnectGoogleCalendarResponse>(API_URL.CONNECT_GOOGLE)
}
