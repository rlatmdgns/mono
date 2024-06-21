import { http } from '@/shared/lib/http'
import { API_URL } from '@/shared/constants'
import {
  PasswordResetMailRequest,
  PasswordResetMailResponse,
} from '@/services/auth/sendPasswordResetMail/sendPasswordResetMail.interface'

const sendPasswordResetMail = async (data: PasswordResetMailRequest) => {
  await http.post<PasswordResetMailRequest, PasswordResetMailResponse>(
    API_URL.PASSWORD_RESET_MAIL,
    data,
  )
}

export default sendPasswordResetMail
