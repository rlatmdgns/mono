import { http } from '@/shared/lib/http'
import { API_URL } from '@/shared/constants'

const updatePostingBlocking = async (postingId: number, type: string) => {
  await http.patch(API_URL.POSTING_BLOCKING(postingId), {
    application_blocking: type,
  })
}

export default updatePostingBlocking
