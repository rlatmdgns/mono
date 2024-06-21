import {
  BasicApplicationItem,
  RecruitApplicationItem,
} from '@/entities/build-application/types/applicationItem'

export interface BuildApplicationForm {
  basic_list: BasicApplicationItem[]
  applicant_list: RecruitApplicationItem[]
  terms: {
    description: string
    key: string
    is_required: boolean
  }
  is_template?: boolean
  template_title?: string
}
