import { atom } from 'recoil'

export const isOriginalViewAtom = atom({
  key: 'isOriginalView',
  default: false,
})

export const isRedactionAtom = atom({
  key: 'isRedaction',
  default: false,
})
