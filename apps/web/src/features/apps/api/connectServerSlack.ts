import { API_URL } from '@/shared/constants'
import { serverHttp } from '@/shared/lib/serverHttp'

export const connectServerSlack = (code: string) => {
  return serverHttp.post(API_URL.CONNECT_SLACK, { code })
}
