import { File } from '@/interface/applicantFile'
import { InterviewState } from '@/interface/interview'

export interface ApplicantModalResponse {
  success: boolean
  applicant_history?: ApplicantHistory
  applicant_name: string
  applicant_state: number
  interview_state: InterviewState
  is_public: boolean
  posting_title: string
  step_name: string
  step_id: string
  vote_fail_log: VoteLog[]
  vote_me?: 'pass' | 'fail'
  vote_pass_log: VoteLog[]
  posting_id: number
  posting_step: ApplicantPostingStep[]
}

export interface Applicant {
  applicant_name: string
  applicant_state: number
  posting_id: number
  step_id: string
  vote_fail_count: number
  vote_me: boolean | null
  vote_pass_count: number
  applicant_add_answer: ApplicantAddAnswer[]
  applicant_file: File[]
}

export interface ApplicantAddAnswer {
  add_answer: string
  add_question: string
  add_question_view: boolean
}

export interface VoteLog {
  user_name: string
  user_profile: string
  vote_type: 'fail' | 'pass'
}

export interface ApplicantHistory {
  application_date: string
  history_type: string
  posting_id: number
  posting_title: string
}

export interface ApplicantPostingStep {
  step_id: string
  step_name: string
  step_state: boolean
}
