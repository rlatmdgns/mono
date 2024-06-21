import { Folder } from '@/interface/sidebar'
import { JobPosting } from '@/interface/jobPosting'

export interface Applicant {
  access: boolean
  applicant_id: number
  applicant_name: string
  applicant_re_url: string
  applicant_tag: string[] | null
  application_date: string
  posting_color: string
  posting_field: string
  posting_id: number
  posting_title: string
  step_id: string
  step_name: string
}

export interface ApplicantPoolResponse {
  applicants: {
    data: Applicant[]
    current_page: number
    last_page: number
  }
}

export interface ApplicantPoolFilter {
  posting_field: string[]
  posting_list: {
    folder_list: Folder[]
    none_folder: JobPosting[]
  }
  route_list: string[]
  step_list: string[]
  tag_list: string[]
}

export interface ApplicantPoolRequest {
  applicant_re_url: string
  page?: number
  posting_field: string
  posting_step: string
  posting_title: string
  search: string
  size?: number
  tag: string
}
