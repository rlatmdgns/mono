import { API_URL } from '@/shared/constants'
import { http } from '@/shared/lib/http'

interface UserProfile {
  success: boolean
  user_profile: string
}

const postUser = async (data: FormData) => {
  return await http.postForm<UserProfile>(API_URL.USER, data)
}

export default postUser
