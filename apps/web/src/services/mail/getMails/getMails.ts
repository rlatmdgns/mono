import { API_URL } from '@/shared/constants'
import { http } from '@/shared/lib/http'
import { MailsRequest, MailsResponse } from '@/interface/mail'

const getMails = (data: MailsRequest) => {
  const params: Record<string, any> = {
    ...data,
  }
  const queryString = new URLSearchParams(params).toString()
  return http.get<MailsResponse>(`${API_URL.MAILS}?${queryString}`)
}

export default getMails
