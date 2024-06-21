export interface ApplicantFailRequest {
  applicant_id: string[]
  fail: boolean
}

export interface ApplicantFailResponse {
  message: string
  success: boolean
}
