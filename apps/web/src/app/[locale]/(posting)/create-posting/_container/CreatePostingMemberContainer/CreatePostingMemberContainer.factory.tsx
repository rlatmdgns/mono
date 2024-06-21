import { MemberData } from '@/interface/member'

export const createMemberOptions = (members: MemberData[]) => {
  return members.map((member) => ({
    label: member.user_name,
    value: member.identification,
    email: member.user_email,
    profile: member.user_profile,
    authority: member.user_authority,
  }))
}
