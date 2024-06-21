export interface ApplicantInfo {
  applicant_name: string
  applicant_email: string
  applicant_phone: string
  applicant_re_url: string
}

export interface UpdateApplicantRequest {
  success: boolean
  message: string
}
