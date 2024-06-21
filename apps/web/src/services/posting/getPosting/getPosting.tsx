import { http } from '@/shared/lib/http'
import { API_URL } from '@/shared/constants'
import { PostingResponse } from '@/interface/posting'

const getPosting = (id: string | number) => {
  return http.get<PostingResponse>(API_URL.POSTING(id))
}

export default getPosting
