import { JobPosting } from '@/interface/jobPosting'

export interface SidebarResponse {
  authority: Authority
  notification_count: number
  folder_list: Folder[]
  none_folder: NoneFolder[]
}

interface Authority {
  enterprise_plan: number
  user_authority: string
}

export interface Folder {
  folder_id: string
  folder_name?: string
  postings?: JobPosting[]
}

interface NoneFolder {
  activate_state: boolean
  close_state: boolean
  posting_id: number
  posting_member: boolean
  posting_title: string
  sort: number
}

export interface CustomNonFolder {
  folder_id: string
  postings: JobPosting[]
}
