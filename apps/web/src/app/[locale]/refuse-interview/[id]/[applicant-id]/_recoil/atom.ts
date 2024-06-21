import { atom } from 'recoil'

export const RefuseInterviewCodeAtom = atom({
  key: 'expireInterviewCode',
  default: '',
})

export const RefuseApplicantIdAtom = atom({
  key: 'expireApplicantId',
  default: '',
})

export const RefusalReasonAtom = atom({
  key: 'refusalReason',
  default: '',
})

export const IsRefusalStatusAtom = atom({
  key: 'isRefusalStatus',
  default: false,
})
