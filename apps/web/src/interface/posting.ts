import { PostingStep } from '@/interface/applicants'

export interface PostingResponse {
  posting: PostingData
  enterprise: EnterpriseData
  success: boolean
}

export interface EnterpriseData {
  enterprise_name: string
  enterprise_explanation: string
  enterprise_recruit_url: string
  admin_member: PostingMember[]
}

export interface PostingData {
  posting_id: number
  sort: number
  posting_title: string
  posting_field: string
  posting_position: string
  posting_work_info: string
  posting_qualification: string
  posting_advantage?: string
  posting_benefits_welfare?: string
  min_experience_years: number
  max_experience_years: number
  is_irrelevant: boolean
  is_newcomer: boolean
  is_experienced: boolean
  posting_request_file: PostingRequestFile[]
  posting_add_question: postingAddQuestion
  posting_member: PostingMember[]
  posting_deadline: string
  posting_step: PostingStep[]
  posting_work_place: string
  posting_date: string
  posting_time: string
  close_state: boolean
  close_date?: string
  activate_state: boolean
  application_blocking: number
  enterprise_name: string
  enterprise_explanation: string
  enterprise_background: string
  hidden_state: boolean
  can_re_apply: boolean
  can_multiple_apply: boolean
  can_duplicate_apply: boolean
  posting_applicant_form: boolean
}

export interface PostingMember {
  identification: string
  user_authority?: string
  user_email?: string
  user_me?: number
  user_name: string
  user_profile: string
  disabled?: boolean
  user_department?: string
  user_job?: string
  is_google_connect?: boolean
}

export interface PostingRequestFile {
  file_key: number
  file_state: boolean
  file_title: string
  file_notice: string
}

export interface PostingMemberResponse {
  admin_member: PostingMember[]
  posting_member: PostingMember[]
  posting_member_count: number
}

export interface postingAddQuestion {}
