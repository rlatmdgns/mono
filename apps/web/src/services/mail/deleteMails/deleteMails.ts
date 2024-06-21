import { http } from '@/shared/lib/http'
import { API_URL } from '@/shared/constants'

const deleteMails = (ids: number[]) => {
  return http.put(API_URL.MAIL, {
    mail_id: ids,
    trash_can_state: 1,
  })
}

export default deleteMails
