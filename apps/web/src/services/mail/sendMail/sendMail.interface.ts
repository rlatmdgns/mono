export interface SendMailRequest {
  mail_to: string[]
  cc: string[]
  bcc: string[]
  mail_subject: string
  mail_subject_html: string
  mail_contents: string
  attached_file_name: string
  attached_file_url: string | File
  request_file?: RequestFile[]
  template_save: boolean
}

interface RequestFile {
  file_title: string
  file_notice: string
}
