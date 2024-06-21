import { Applicant, PostingStep, SelectApplicant } from '@/interface/applicants'
import { PostingRequestFile } from '@/interface/posting'
import { atom } from 'recoil'
import { recoilPersist } from 'recoil-persist'

export const applicantsAtom = atom<Applicant[]>({
  key: 'applicantsAtom',
  default: [],
})
export const stepsAtom = atom<PostingStep[]>({
  key: 'StepsAtom',
  default: [],
})

export const selectApplicantCardsAtom = atom<SelectApplicant[]>({
  key: 'selectApplicantCardsAtom',
  default: [],
})

export const draggingIdAtom = atom<string | null>({
  key: 'draggingIdAtom',
  default: null,
})

const { persistAtom } = recoilPersist()
export const isIncludingFailedAtom = atom<boolean>({
  key: 'isIncludingFailedAtom',
  default: true,
  effects_UNSTABLE: [persistAtom],
})

export const isVoteViewAtom = atom<boolean>({
  key: 'isVoteViewAtom',
  default: false,
  effects_UNSTABLE: [persistAtom],
})

export const searchAtom = atom<string>({
  key: 'searchAtom',
  default: '',
})

export const postingRequestFileAtom = atom<PostingRequestFile[]>({
  key: 'postingRequestFileAtom',
  default: [],
})

export const isBoardViewAtom = atom<boolean>({
  key: 'isBoardViewAtom',
  default: true,
})
export const evaluationIdAtom = atom<number>({
  key: 'evaluationIdAtom',
  default: 0,
})
