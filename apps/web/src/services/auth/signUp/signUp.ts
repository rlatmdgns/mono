import { http } from '@/shared/lib/http'
import { API_URL } from '@/shared/constants'
import { Response } from './interface'
import { SignUpRequest } from '@/app/[locale]/(auth)/sign-up/_components/SignUpForm/SignUpForm.interface'

const signUp = async (formData: SignUpRequest): Promise<Response> => {
  return await http.post(API_URL.SIGN_UP, formData)
}

export default signUp
