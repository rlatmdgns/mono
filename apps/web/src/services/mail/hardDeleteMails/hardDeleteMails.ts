import { http } from '@/shared/lib/http'
import { API_URL } from '@/shared/constants'

const hardDeleteMails = (ids: number[]) => {
  return http.delete(API_URL.MAIL, {
    mail_id: ids,
  })
}

export default hardDeleteMails
