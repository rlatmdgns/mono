import { API_URL } from '@/shared/constants'
import { http } from '@/shared/lib/http'

const updateMailTemplate = (id: number, data: any) => {
  return http.patch(API_URL.UPDATE_MAIL_TEMPLATE(id), data)
}

export default updateMailTemplate
