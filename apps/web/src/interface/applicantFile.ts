export interface ApplicantFilesResponse {
  success: boolean
  applicant_file: File[]
}

export interface ApplicantFileResponse {
  success: boolean
  applicant_file: FileDetail
}

export interface File {
  file_url: string
  file_id: number
  file_name: string
  is_public: boolean
  sort: number
}

export interface FileDetail {
  file_id: number
  file_name: string
  file_url: string
  file_masking_url: string
  masking_data: string
  is_public: true
  masking_state: boolean
  original_file_streamdoc_id: StreamdocId
  masking_file_streamdoc_id: StreamdocId
}

export type StreamdocId = string | null | undefined
