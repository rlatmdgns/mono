import { atom } from 'recoil'
import { scheduleDayJs } from '@/shared/lib'

export const DateAtom = atom<Date>({
  key: 'Date',
  default: scheduleDayJs().toDate(),
})

export const postingIdAtom = atom<number>({
  key: 'postingId',
  default: 0,
})
