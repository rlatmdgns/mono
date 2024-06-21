import { http } from '@/shared/lib/http'
import { API_URL } from '@/shared/constants'
import { MailComponent } from '@/interface/mail'

const getMailComponent = (id?: string) => {
  return http.get<MailComponent>(API_URL.MAIL_COMPONENT(id))
}

export default getMailComponent
