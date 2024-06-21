import { Control } from 'react-hook-form'

export interface FinalStageApplicant {
  name: string
  posting_id: number
  posting_title?: string
  phone: string
  email: string
  pass_date?: number
  employment_date?: number
  id: string
}

export type FinalStageApplicantControl = Control<{ freshmen: FinalStageApplicant[] }>

export interface FinalStageApplicantResponse {
  applicants: FinalStageApplicant[]
  total: number
  page: number
  limit: number
  last_page: number
}
