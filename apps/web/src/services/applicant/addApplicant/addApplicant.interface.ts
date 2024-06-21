export interface AddApplicantRequest {
  applicant_name: string
  applicant_email: string
  applicant_phone: string
  applicant_resume: File

  [file: string]: File | string
}
