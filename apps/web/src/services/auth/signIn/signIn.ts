import { SignInRequest, SignInResponse } from '@/services/auth/signIn/sign.interface'
import { apiHttp } from '@/shared/lib/apiHttp'
import { http } from '@/shared/lib'

const signIn = async (data: SignInRequest) => {
  const fetch = process.env.NEXT_PUBLIC_API_MOCKING === 'enabled' ? http : apiHttp
  return await fetch.post<SignInRequest, SignInResponse>('/api/sign-in', data)
}

export default signIn
