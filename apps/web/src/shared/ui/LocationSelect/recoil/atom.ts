import { atom } from 'recoil'

export const CurrentInterviewPlaceAtom = atom({
  key: 'CurrentInterviewPlace',
  default: {
    type: 'contact',
    desc: '',
  },
})

export const CurrentContactPlaceAtom = atom({
  key: 'currentContactPlace',
  default: {
    address: '',
    detail_address: '',
  },
})

export const DeleteInterviewPlaceAtom = atom({
  key: 'DeleteInterviewPlace',
  default: {
    address: '',
    detail_address: '',
  },
})

export const DeleteInterviewPlaceIndexAtom = atom({
  key: 'DeleteInterviewPlaceIndex',
  default: 0,
})
