export interface SignUpRequest {
  user_email: string
  user_password: string
  user_name: string
  user_phone: string
  enterprise_name: string
  user_access_path: string | undefined
  consent_to_marketing: boolean
}
