import { http } from '@/shared/lib/http'
import { API_URL } from '@/shared/constants'
import { PostingActivityResponse } from '@/services/posting/postingActivity/postingActivity.interface'

const postingActivity = (id: string) => {
  return http.put<unknown, PostingActivityResponse>(API_URL.POSTING_ACTIVITY(id))
}

export default postingActivity
