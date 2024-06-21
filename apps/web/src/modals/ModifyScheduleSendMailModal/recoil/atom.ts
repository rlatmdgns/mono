import { atom } from 'recoil'

export const SendAlarmAtom = atom({
  key: 'SendAlarm',
  default: true,
})

export const SendApplicantsAtom = atom({
  key: 'SendApplicants',
  default: [],
})

export const SendInterviewersAtom = atom({
  key: 'SendInterviewers',
  default: [],
})
