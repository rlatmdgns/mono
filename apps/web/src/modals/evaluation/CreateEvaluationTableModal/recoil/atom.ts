import { atom } from 'recoil'

export const focusedIdAtom = atom<string>({
  key: 'focusedIdAtom',
  default: '',
})
