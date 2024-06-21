import { InterviewState } from '@/interface/interview'
import { EvaluationStatus } from '@/interface/evaluation'

export interface ApplicantsResponse {
  posting_step: PostingStep[]
  applicant_list: Applicant[]
  posting_applicant_form: boolean
  success: boolean
}

export interface ApplicantsRequest {
  search?: string
  is_view_fail: boolean
}

export interface PostingStep {
  step_id: string
  step_name: string
  step_state: boolean
  applicant_count: number
  is_evaluation_member: boolean
  evaluation_v2_id?: number
}

export interface Applicant {
  applicant_id: number
  applicant_email: string
  step_id: string
  applicant_name: string
  applicant_re_url: string
  applicant_tag: null
  sort: number
  application_date: string
  applicant_state: number
  applicant_history: ApplicantHistory
  step_name: string
  interview_schedule?: InterviewSchedule
  vote_pass_count: number
  vote_fail_count: number
  vote_state: number
  is_public: boolean
  is_fail?: string
  evaluation_state: EvaluationStatus
  evaluation_identification_list: EvaluationIdentification[]
}

export interface SelectApplicant extends Applicant {
  schedule?: string
  evaluation_id?: number
}

export interface ApplicantHistory {
  posting_id: number
  history_type: 'multipleApplication' | 'reApplication' | 'duplicateApplication'
  posting_title: string
  application_date: string
}

export interface InterviewSchedule {
  posting_color: string
  posting_id: number
  posting_title: string
  schedule_alarm: string
  schedule_applicant: ScheduleApplicant[]
  schedule_attendant: ScheduleAttendant[]
  interview_change: boolean
  interview_state: InterviewState
  schedule_end: string
  schedule_id: number
  canceled_reason?: string
  schedule_address: string
  schedule_detail_address: string
  schedule_start: string
  schedule_title: string
}

export interface ScheduleApplicant {
  applicant_id: number
  applicant_name: string
}

export interface ScheduleAttendant {
  identification: string
  user_name: string
  user_profile: string
}

export interface EvaluationIdentification {
  is_submitted: boolean
  user_name: string
  user_profile: string
}
