import { http } from '@/shared/lib/http'
import { API_URL } from '@/shared/constants'
import { ClosePostingResponse } from '@/services/posting/closePosting/closePosting.interface'

const closePosting = (id: string | number) => {
  return http.put<unknown, ClosePostingResponse>(API_URL.POSTING_CLOSE(id))
}

export default closePosting
