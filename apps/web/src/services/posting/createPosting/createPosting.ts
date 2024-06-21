import { API_URL } from '@/shared/constants'
import { http } from '@/shared/lib/http'
import { CreatePostingResponse } from '@/services/posting/createPosting/createPosting.interface'

const createPosting = (data: any) => {
  return http.post<unknown, CreatePostingResponse>(API_URL.CREATE_POSTING, data)
}

export default createPosting
