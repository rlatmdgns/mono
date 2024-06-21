export interface RecruitPageResponse {
  posting: RecruitPage
  is_closed: boolean
}

export interface RecruitPage {
  posting_id: number
  sort: number
  posting_title: string
  posting_field: string
  posting_position: string
  posting_work_info: string
  posting_qualification: string
  posting_advantage: string
  posting_benefits_welfare: string
  min_experience_years: number
  max_experience_years: number
  is_irrelevant: boolean
  is_newcomer: boolean
  is_experienced: boolean
  posting_request_file: RequestedFile[]
  posting_add_question: AddQuestion[]
  posting_deadline: null | string
  posting_work_place: string
  posting_work_place_detail: string
  posting_date: string
  posting_time: string
  close_state: boolean
  activate_state: boolean
  application_blocking: number
  enterprise_name: string
  enterprise_explanation: string
  enterprise_background: string | null
  days_remaining: number
}

export interface RecruitPageRequest {
  enterprise_recruit_url: string
  history_url: string | null
}

export interface RecruitContent {
  isClosed?: boolean
  recruit: RecruitPage
  id: string
  enterpriseName: string
  refererURL?: string
}

export interface AddQuestion {
  add_question: string
  add_question_key: number
  add_question_required: boolean
  add_question_view: boolean
}

export interface RequestedFile {
  file_key: number
  file_notice: string
  file_state: boolean
  file_title: string
}
