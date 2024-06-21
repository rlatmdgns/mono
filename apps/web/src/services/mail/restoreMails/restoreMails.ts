import { http } from '@/shared/lib/http'
import { API_URL } from '@/shared/constants'

const restoreMails = (ids: number[]) => {
  return http.put(API_URL.MAIL, {
    mail_id: ids,
    trash_can_state: 0,
  })
}

export default restoreMails
