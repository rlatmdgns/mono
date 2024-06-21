import { RecruitApplicationItem } from '@/entities/build-application/types/applicationItem'

export interface PostingApplicationFormResponse {
  enterprise_name: string
  posting: {
    title: string
    activate_state: boolean
    application_blocking: number
  }
  datas: RecruitApplicationItem[]
  terms: {
    enterprise_required_personal_terms: string
    enterprise_select_personal_terms: string | null
  }
  template_title?: string
}
