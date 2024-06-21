import { PostingMember } from '@/interface/posting'
import { MemberData } from '@/interface/member'

export interface EnterpriseMemberResponse {
  [index: string]: number | boolean | PostingMember[] | MemberData[]

  enterprise_member_count: number
  admin_member_count: number
  recruit_member_count: number
  evaluation_member_count: number
  waiting_member_count: number
  success: boolean
  enterprise_member: PostingMember[] | MemberData[]
}
