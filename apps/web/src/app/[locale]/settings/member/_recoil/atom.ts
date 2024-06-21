import { atom } from 'recoil'

interface TabCount {
  [index: string]: number
}

export const CurrentTabAtom = atom({
  key: 'CurrentTab',
  default: 'enterprise',
})

export const TabCountAtom = atom<TabCount>({
  key: 'TabCount',
  default: {
    admin: 0,
    waiting: 0,
    enterprise: 0,
    evaluation: 0,
    recruitment: 0,
  },
})

export const searchAtom = atom({
  key: 'search',
  default: '',
})

export const CurrentMemberAtom = atom<any>({
  key: 'currentMember',
  default: {
    identification: '',
    user_authority: '',
    user_department: '',
    user_email: '',
    user_job: '',
    user_name: '',
    user_profile: '',
  },
})

export const CurrentAuthorityAtom = atom({
  key: 'currentAuthority',
  default: {
    label: '',
    value: '',
  },
})
