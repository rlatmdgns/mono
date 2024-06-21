export interface ApplicantFile {
  applicant_id: string
  request_body: ApplicantFileBody
}

export interface ApplicantFileBody {
  applicant_file?: File
  file_name: string
  is_public: boolean
}
