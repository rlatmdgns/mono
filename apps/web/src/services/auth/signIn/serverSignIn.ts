import { SignInRequest, SignInResponse } from '@/services/auth/signIn/sign.interface'
import { API_URL } from '@/shared/constants'
import { serverHttp } from '@/shared/lib/serverHttp'

const serverSignIn = async (data: SignInRequest) => {
  return await serverHttp.post<SignInRequest, SignInResponse>(API_URL.LOGIN, data)
}

export default serverSignIn
