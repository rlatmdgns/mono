export interface MemberData {
  identification: string
  user_authority?: string | number
  user_email?: string
  user_me?: number
  user_department?: string
  user_job?: string
  user_name: string
  user_profile: string
}

export interface PostingMemberResponse {
  success: boolean
}

export interface SendEmailMember {
  memberRowNum: number
  memberKey: string
  email: string
  user_authority: string | number
}

export interface InvitedMember {
  invite_date: string
  invite_email: string
  user_authority: string
  member_id: string
}

export interface WaitingMemberResponse {
  success: boolean
  waiting_member: InvitedMember[]
}

export interface InviteMemberRequest {
  email: string
  user_authority: string
}
