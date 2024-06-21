import { API_URL } from '@/shared/constants'
import { User } from '@/interface/user'
import { http } from '@/shared/lib/http'

const getUser = async () => {
  return await http.get<User>(API_URL.USER)
}

export default getUser
