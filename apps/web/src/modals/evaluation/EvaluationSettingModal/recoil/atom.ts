import { atom } from 'recoil'
import { PostingStep } from '@/interface/applicants'

export const stepAtom = atom<PostingStep | null>({
  key: 'stepAtom',
  default: null,
})

export const selectedMemberIdsAtom = atom<string[]>({
  key: 'selectedMemberIdsAtom',
  default: [],
})

export const selectedTableIdAtom = atom<number>({
  key: 'selectedTableIdsAtom',
  default: 0,
})
