import { http } from '@/shared/lib/http'
import { API_URL } from '@/shared/constants'
import { Response } from './interface'

const checkEmailAuthentication = async (email: string): Promise<Response> => {
  return await http.post(API_URL.EMAIL_AUTHENTICATION, { user_email: email })
}

export default checkEmailAuthentication
