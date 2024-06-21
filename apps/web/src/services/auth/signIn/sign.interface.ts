import { Auth } from '@/interface/auth'

export interface SignInRequest {
  user_email?: string
  user_password?: string
}

export interface SignInResponse extends Auth {
  success?: boolean
  message?: string
}
