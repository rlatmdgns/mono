import { atom } from 'recoil'
import { InviteMemberRequest } from '@/interface/member'

export const RequestMembersAtom = atom<InviteMemberRequest[]>({
  key: 'requestMembers',
  default: [],
})

export const RegisterOrInvitedMembersAtom = atom<InviteMemberRequest[]>({
  key: 'InvitedOrRegistryMembers',
  default: [],
})
