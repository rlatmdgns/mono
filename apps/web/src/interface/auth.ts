export interface Auth {
  login_type: string
  token: string
  user_type: number
  user_email: string
  enterprise: {
    enterprise_name: string
    enterprise_id: number
    user_authority: string
    enterprise_email: boolean
    plan: boolean
  }
}
