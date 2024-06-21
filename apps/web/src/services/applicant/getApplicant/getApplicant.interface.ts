export interface ApplicantResponse {
  success: boolean
  applicant: {
    step_id: string
    applicant_name: string
    applicant_email: string
    applicant_phone: string
    applicant_re_url: string
    application_date: string
    applicant_state: number
  }
}
