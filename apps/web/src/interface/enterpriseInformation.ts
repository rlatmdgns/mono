export interface EnterpriseInformationResponse {
  success: boolean
  enterprise: Enterprise
}

export interface Enterprise {
  enterprise_name: string
  enterprise_email: string
  enterprise_explanation: string
  enterprise_logo: string
  enterprise_background: EnterpriseBackground[]
  enterprise_address: string
  enterprise_detail_address: string
  enterprise_recruit_url: string
  application_blocking: number
  enterprise_work_place: string[]
  enterprise_plan: EnterprisePlan
}

export interface EnterpriseBackground {
  [index: number]: string | number

  file_url: string
  file_state: number
}

interface EnterpriseWorkPlace {
  folder_id: string
  folder_name: string
}

interface EnterprisePlan {
  plan: number
  plan_end_date: string
  plan_state: number
  plan_available: boolean
}

export interface PostEnterpriseMember {
  invite_member: (InviteMember | undefined)[]
}

export interface UpdateMemberAuthority {
  user_authority: string | number
  identification: string
}

export interface InviteMember {
  email: string
  user_authority: string | number
}

export interface PostEnterpriseMemberResponse {
  success: boolean
}
