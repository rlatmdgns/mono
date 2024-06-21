import { API_URL } from '@/shared/constants'
import { http } from '@/shared/lib/http'

const deletePostingMember = (id: number, identification: string) => {
  return http.delete(API_URL.DELETE_POSTING_MEMBER(id, identification))
}

export default deletePostingMember
