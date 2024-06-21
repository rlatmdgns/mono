import { http } from '@/shared/lib/http'
import { API_URL } from '@/shared/constants'
import { Response } from './interface'
import { InvitedSignUpRequest } from '@/app/[locale]/(auth)/invited-sign-up/_components/InvitedSignUpForm/InvitedSignUpForm.interface'

const invitedSignUp = async (formData: InvitedSignUpRequest): Promise<Response> => {
  return await http.post(API_URL.INVITED_SIGN_UP, formData)
}

export default invitedSignUp
