import { API_URL } from '@/shared/constants'
import { http } from '@/shared/lib/http'
import {
  updatePasswordRequest,
  updatePasswordResponse,
} from '@/services/auth/user/updatePassword/interface'

const updatePassword = async (data: updatePasswordRequest) => {
  return await http.patch<updatePasswordRequest, updatePasswordResponse>(
    API_URL.USER_PASSWORD,
    data,
  )
}

export default updatePassword
