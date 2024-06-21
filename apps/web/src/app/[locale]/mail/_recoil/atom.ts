import { atom } from 'recoil'

export const isMailDeleteAtom = atom<boolean>({
  key: 'isMailDeleteAtom',
  default: false,
})

export const mailIdsAtom = atom<number[]>({
  key: 'mailIdsAtom',
  default: [],
})
