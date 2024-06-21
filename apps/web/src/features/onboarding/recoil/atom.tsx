import { atom } from 'recoil'

export const CurrentAddSceneAtom = atom({
  key: 'CurrentAddSceneAtom',
  default: {
    status: false,
    index: 0,
    type: '',
  },
})
