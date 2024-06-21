import { MemberData } from '@/interface/member'
import { Folder } from '@/interface/sidebar'
import { Template } from '@/interface/template'

export interface PostingRequirementResponse {
  folder_list: Folder[]
  template_list: Template[]
  enterprise_member_list: MemberData[]
  enterprise_information: {
    enterprise_address: string
    enterprise_background: string
    enterprise_explanation: string
    enterprise_logo: string
    enterprise_name: string
    enterprise_work_place: string[]
  }
}
