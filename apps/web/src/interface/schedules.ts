export interface Schedule {
  id: string
  start: Date
  end: Date
}

export interface RequestSchedule extends Schedule {
  isGoogleSchedule?: boolean
  isScheduled?: boolean
  interviewers?: string[]
}

export interface ScheduleGroupItem {
  date: string
  schedulesList: RequestSchedule[]
}

export interface ScheduleGroupConvertResponse {
  schedulesRender: ScheduleGroupsInterface[]
  interviewDates: InterviewDates
  interviewPostDates: InterviewDates
}

export interface InterviewDates {
  [index: string]: string[]
}

export interface ScheduleGroupsInterface {
  date: string
  scheduleList?: ScheduleGroupItem[]
}

/* 면접일정 */
export interface InterviewScheduleResponseList {
  schedule_id: string
  posting_id: string
  schedule_title: string
  schedule_start: string | Date
  schedule_end: string | Date
  is_canceled: boolean
  posting_title: string
  posting_color: string
}

export interface InterviewScheduleResponse {
  success: boolean
  schedule_list: InterviewScheduleResponseList[]
}

export interface Applicant {
  id: string
  name: string
  applicant_id?: string | number
  applicant_name?: string | number
  applicant_email?: string
  is_deleted?: boolean
}

export interface Attendant {
  identification: string
  user_name?: string
  user_profile?: string
}

export interface AttendantCheckBoxItem {
  image: string
  label: string
  value: string
}

export interface InterviewScheduleApplicant {
  applicant_name: string
  is_deleted: boolean
}

export interface InterviewSchedule {
  id: string
  schedule_id: string
  posting_id: string
  title: string
  is_canceled: boolean
  posting_color: string
  start: Date
  end: Date
  schedule_address?: string
  schedule_detail_address?: string
  schedule_applicant?: InterviewScheduleApplicant[]
}

export interface BeforeTheChange {
  schedule_start: string
  schedule_end: string
}

export interface ScheduleDetail {
  id: string
  schedule_id: string | number
  enterprise_id: string | number
  posting_id: number
  title: string
  schedule_applicant: Applicant[]
  schedule_attendant: Attendant[]
  schedule_start: string
  schedule_end: string
  schedule_title: string
  schedule_address: string
  interview_guide?: string
  schedule_detail_address: string
  schedule_alarm: string
  canceled_reason: string
  before_the_change: BeforeTheChange | null
  interview_state: string
  posting_title: string
  posting_color: string
}

export interface ScheduleDetailResponse {
  success?: boolean
  data: ScheduleDetail
}

export interface ScheduleParams {
  year?: number | string
  month?: number | string
  posting_id?: number | string
}

export interface OnComingSchedule {
  schedule_id: number
  schedule_title: string
  schedule_start: string
  schedule_end: string
  schedule_address: string
  schedule_detail_address: string
  posting_title: string
  posting_color: string
}

export interface ScheduleSearchParams {
  interviewer: string[]
  start_date: string
  end_date: string
}
