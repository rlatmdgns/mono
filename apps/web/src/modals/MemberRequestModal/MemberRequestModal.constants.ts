import { SendEmailMember } from '@/interface/member'

export interface InviteMemberProps {
  member: SendEmailMember
  onChangeEmail: (memberKey: string, value: string) => void
  onChangeAuthority: (memberKey: string, value: string | number) => void
  onRemoveMember: (memberKey: string) => void
}
