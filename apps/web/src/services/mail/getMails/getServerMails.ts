import { API_URL } from '@/shared/constants'
import { serverHttp } from '@/shared/lib/serverHttp'
import { MailsResponse, MailType } from '@/interface/mail'

const getServerMails = (type: MailType, page?: string) => {
  const params: Record<string, any> = {
    page: page || 1,
    size: 14,
    type,
  }
  const queryString = new URLSearchParams(params).toString()
  return serverHttp.get<MailsResponse>(`${API_URL.MAILS}?${queryString}`)
}

export default getServerMails
