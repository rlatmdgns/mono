import { API_URL } from '@/shared/constants'
import { http } from '@/shared/lib'
import { GetConnectSlackResponse } from '@/entities/apps/types/slack'

export const getConnectSlack = async () => {
  return await http.get<GetConnectSlackResponse>(API_URL.CONNECT_SLACK)
}
