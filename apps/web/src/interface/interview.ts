export interface InterviewDate {
  [key: string]: string[]
}

export interface ContactInterviewPlace {
  address: string
  detail_address: string
  isModify?: boolean

  [key: string]: string | number | boolean | undefined
}

export interface AddInterviewPlaceRequest extends ContactInterviewPlace {
  interview_type: string
}

export interface ModifyInterviewPlaceRequest extends ContactInterviewPlace {
  interview_place_key: number
}

export interface DeleteInterviewPlaceRequest {
  interview_place_key: number
}

export interface InterviewPlaceList {
  contact: ContactInterviewPlace[]
  unContact: string[]
}

export interface InterviewEnterprisePlace {
  enterprise_address: string
  enterprise_detail_address: string
}

export interface InterviewPlaceResponse {
  enterprise_address: InterviewEnterprisePlace
  interview_place_list: InterviewPlaceList
  success: boolean
}

export interface InterviewPostRequest {
  interview_id: string | number
  applicant_id: string | number
  interview_date?: string[]
}

export interface InterviewRefusePostRequest {
  interview_id: string | number
  applicant_id: string | number
  refusal_reason: string
}

export interface InterviewRefuseResponse {
  success: boolean
}

export interface SelectScheduleProps {
  status: string
  interviewDate?: InterviewDate
}

export interface InterviewerOption {
  value: string
  label: React.ReactNode
}

export interface RequestInterview {
  applicant: string[]
  interview_address: string
  interview_detail_address: string
  interview_guide: string
  interviewer: string[]
  interview_date: InterviewDate
}

export interface RequestInterviewResponse {
  success?: boolean
  enterprise_name: string
  posting_title: string
  interview_location: string
  interview_date: string
  applicant_name: string
  applicant_phone: string
  applicant_email: string
  application_date: string

  [keys: string]: string | boolean | undefined
}

export interface ApplicantsOptions {
  label: string
  value: string | number
}

export interface InterviewCancelRequest {
  canceled_reason: string
}

export interface SendInterviewer {
  label: string
  image: string
  value: string
}

export type InterviewState = 'scheduled' | 'completed' | 'ongoing' | 'canceled'
