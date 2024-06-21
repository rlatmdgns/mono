import { API_URL } from '@/shared/constants'
import { PostingMemberResponse } from '@/interface/posting'
import { http } from '@/shared/lib/http'

const getPostingMember = (id: string | number, search?: string) => {
  return http.get<PostingMemberResponse>(API_URL.POSTING_MEMBER(id, search))
}

export default getPostingMember
