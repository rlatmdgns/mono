import { API_URL } from '@/shared/constants'
import { MailDetailResponse } from '@/interface/mail'
import { serverHttp } from '@/shared/lib/serverHttp'

const getServerMailDetail = (id?: string) => {
  if (!id) return

  return serverHttp.get<MailDetailResponse>(API_URL.MAIL_DETAIL(id))
}

export default getServerMailDetail
