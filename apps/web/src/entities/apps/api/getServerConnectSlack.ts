import { API_URL } from '@/shared/constants'
import { GetConnectSlackResponse } from '@/entities/apps/types/slack'
import { serverHttp } from '@/shared/lib/serverHttp'

export const getServerConnectSlack = async () => {
  return await serverHttp.get<GetConnectSlackResponse>(API_URL.CONNECT_SLACK)
}
