import { http } from '@/shared/lib/http'
import { API_URL } from '@/shared/constants'

const updatePosting = (id: string, data: any) => {
  return http.put(API_URL.POSTING(id), data)
}

export default updatePosting
