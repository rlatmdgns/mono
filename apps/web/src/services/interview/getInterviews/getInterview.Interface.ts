import { InterviewDate } from '@/interface/interview'

export interface getInterviewResponse {
  applicant_name: string
  enterprise_logo: string
  enterprise_name: string
  interview_date: InterviewDate
  posting_title: string
  success: boolean
}
