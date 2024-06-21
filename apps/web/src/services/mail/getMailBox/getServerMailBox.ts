import { API_URL } from '@/shared/constants'
import { MailBox } from '@/interface/mail'
import { serverHttp } from '@/shared/lib/serverHttp'

export const getServerMailBox = () => {
  return serverHttp.get<MailBox>(API_URL.MAIL_BOX)
}
