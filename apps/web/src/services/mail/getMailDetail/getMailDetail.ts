import { API_URL } from '@/shared/constants'
import { http } from '@/shared/lib/http'
import { MailDetailResponse } from '@/interface/mail'

const getMailDetail = (id?: string) => {
  return http.get<MailDetailResponse>(API_URL.MAIL_DETAIL(id))
}

export default getMailDetail
