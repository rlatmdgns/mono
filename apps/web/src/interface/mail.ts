import { Applicant } from '@/interface/applicants'
import { PostingMember } from '@/interface/posting'

export interface MailsRequest {
  search?: string
  page: number
  size: number
  type: string
}

export interface MailsResponse {
  mail_count: number
  mail_list: MailList
  success: boolean
}

export interface MailList {
  current_page: number
  last_page: number
  data: Mail[]
}

export interface Mail {
  mail_id: number
  mail_important: number
  mail_reader: number
  mail_category: number
  mail_contents: string
  mail_send_date: string
  mail_subject: string
  mail_type: number
  mail_from: MailToWithFrom
  mail_to: MailToWithFrom[]
}

export interface MailToWithFrom {
  name: string
  email: string
  value?: string
}

export type MailType = 'in' | 'sent' | 'trash'

export interface MailBox {
  mail_inbox: number
  mail_outbox: number
  mail_trash_can: number
}

export interface MailDetailResponse {
  mail_detail: MailDetail
}

export interface MailDetail {
  mail_id: number
  enterprise_id: number
  posting_id: number
  mail_from: MailToWithFrom
  mail_to: MailToWithFrom[]
  mail_cc: any
  mail_bcc: any
  mail_subject: string
  mail_contents?: any
  mail_body?: string
  mail_attached_file?: any
  interview_data: InterviewData
  request_file: any
  response_interview: any
  response_file: any
  mail_send_date: string
  mail_category: number
  mail_type: number
  mail_important: number
  mail_reader: number
  trash_can: number
}

interface InterviewData {
  applicant: Applicant
  interview: Interview
  posting_title: string
}

interface Interview {
  interview_date: string
  interview_title: string
  interview_location: string
  interview_attendees: string[]
}

export interface Enterprise {
  enterprise_logo: string
  enterprise_name: string
}

export interface Posting {
  posting_position: string
  posting_title: string
}

export interface MailComponent {
  applicant_list: Applicant[]
  posting_member: PostingMember[]
  admin_member: PostingMember[]
  enterprise?: Enterprise
  posting?: Posting
}
