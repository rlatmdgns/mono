export interface RequestFile {
  file_title: string
  file_notice: string | null
}

export interface RequestFilesResponse {
  enterprise_name: string
  enterprise_logo: string
  posting_title: string
  request_file: RequestFile[]
  success: boolean
}

export interface RequestFileWatch extends RequestFile {
  attached_file_name?: string
  attached_file_url?: string
  files?: File[]
}

export interface RequestFileData {
  attached_file_name: string
  attached_file_url: string
}
