import { atom } from 'recoil'

export const settingPostingIdAtom = atom<number>({
  key: 'settingPostingIdAtom',
  default: 0,
})

export const settingPostingHasAccessAtom = atom<boolean>({
  key: 'settingPostingHasAccessAtom',
  default: false,
})

export const settingPostingHasAccessiblePostingAtom = atom<boolean>({
  key: 'settingPostingHasAccessiblePostingAtom',
  default: false,
})
