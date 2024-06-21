import { API_URL } from '@/shared/constants'
import { http } from '@/shared/lib/http'

const updatePostingTemplate = (id: number, data: any) => {
  return http.patch(API_URL.UPDATE_POSTING_TEMPLATE(id), data)
}

export default updatePostingTemplate
