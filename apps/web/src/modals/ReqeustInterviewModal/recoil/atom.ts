import { atom } from 'recoil'
import { InterviewDates } from '@/interface/schedules'
import { OverlappingSchedule } from '@/services/interview/getScheduleSearch/getScheduleSearch.interface'

export const InterviewRequestStepAtom = atom({
  key: 'InterviewRequestStep',
  default: 1,
})

export const InterviewInformationAtom = atom({
  key: 'InterviewInformation',
  default: '',
})

export const InterviewTimeAtom = atom<InterviewDates>({
  key: 'InterviewTime',
  default: {},
})

export const CurrentScheduleAtom = atom({
  key: 'CurrentSchedule',
  default: '',
})

export const ApplicantsIdsAtom = atom<string[]>({
  key: 'ApplicantsIds',
  default: [],
})

export const InterviewerAtom = atom<string[]>({
  key: 'Interviewer',
  default: [],
})

export const NextDisabledStatusAtom = atom({
  key: 'NextDisabledStatus',
  default: true,
})

export const SubmitDisabledStatusAtom = atom({
  key: 'SubmitDisabledStatus',
  default: true,
})
