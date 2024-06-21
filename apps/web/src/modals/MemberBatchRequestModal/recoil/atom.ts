import { atom } from 'recoil'

interface MemberBatchExcelData {
  email: string
  user_authority: string
  __rowNum__: number
}

export const MemberBatchRequestExcelDataAtom = atom<MemberBatchExcelData[]>({
  key: 'MemberBatchRequestExcelData',
  default: [],
})

export const RequestMembersAtom = atom<any[]>({
  key: 'RequestMembers',
  default: [],
})

export const InvalidMembersAtom = atom<any[]>({
  key: 'InvalidMembers',
  default: [],
})

export const RegisterOrInvitedMembersAtom = atom<any[]>({
  key: 'RegisterOrInvitedMembers',
  default: [],
})

export const DuplicateMembersAtom = atom<any[]>({
  key: 'DuplicateMembers',
  default: [],
})

export const MemberBatchResetStateAtom = atom<boolean>({
  key: 'MemberBatchResetState',
  default: false,
})
