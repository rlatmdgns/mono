import { API_URL } from '@/shared/constants'
import { http } from '@/shared/lib/http'
import {
  resetPasswordData,
  resetPasswordResponse,
} from '@/services/auth/user/resetPassword/interface'

const resetPassword = async (authCode: string, data: resetPasswordData) => {
  return await http.put<resetPasswordData, resetPasswordResponse>(
    API_URL.PASSWORD_RESET(authCode),
    data,
  )
}

export default resetPassword
