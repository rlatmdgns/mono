export interface PasswordResetMailRequest {
  user_email: string
}

export interface PasswordResetMailResponse {
  success: boolean
  message?: string
}
