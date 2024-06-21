import { http } from '@/shared/lib/http'
import { API_URL } from '@/shared/constants'
import { SendMailRequest } from '@/services/mail/sendMail/sendMail.interface'

const sendMail = (id: string, data: SendMailRequest) => {
  return http.post(API_URL.SEND_MAIL(id), data)
}

export default sendMail
