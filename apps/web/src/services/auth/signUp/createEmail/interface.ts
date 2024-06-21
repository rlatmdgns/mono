export interface CreateEmailRequest {
  enterprise_email: string
}

export interface CreateEmailResponse {
  success: boolean
  message?: string
}
