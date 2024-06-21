import { atom } from 'recoil'
import { ScheduleDetail } from '@/interface/schedules'

export const ScheduleDetailAtom = atom<ScheduleDetail | null>({
  key: 'ScheduleDetail',
  default: null,
})
