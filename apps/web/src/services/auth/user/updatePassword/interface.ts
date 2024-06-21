export interface updatePasswordRequest {
  password: string
  new_password: string
  new_password_check: string
}

export interface updatePasswordResponse {
  success: boolean
}
