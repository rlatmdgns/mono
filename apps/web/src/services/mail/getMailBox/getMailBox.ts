import { API_URL } from '@/shared/constants'
import { http } from '@/shared/lib/http'
import { MailBox } from '@/interface/mail'

function getMailBox() {
  return http.get<MailBox>(API_URL.MAIL_BOX)
}

export default getMailBox
