import { API_URL } from '@/shared/constants'
import { http } from '@/shared/lib/http'

const deleteUser = async () => {
  return await http.delete(API_URL.USER)
}

export default deleteUser
