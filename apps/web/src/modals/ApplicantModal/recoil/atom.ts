import { atom } from 'recoil'
import { FileDetail } from '@/interface/applicantFile'
import { EvaluationStatus } from '@/interface/evaluation'

export const activeTabIndexAtom = atom({
  key: 'activeTabIndexAtom',
  default: 0,
})

export const activeFileIdAtom = atom<number>({
  key: 'activeFileIdAtom',
  default: 0,
})

export const fileNamesAtom = atom<string[]>({
  key: 'fileNamesAtom',
  default: [],
})

export const pdfDataAtom = atom<FileDetail | null>({
  key: 'pdfDataAtom',
  default: null,
})

export const isFileLoadingAtom = atom({
  key: 'isFileLoadingAtom',
  default: true,
})

export const applicantModalSidebarIsFoldAtom = atom({
  key: 'applicantModalSidebarIsFoldAtom',
  default: false,
})

export const applicantIdAtom = atom<string>({
  key: 'applicantIdAtom',
  default: '',
})

export const applicantNameAtom = atom<string>({
  key: 'applicantNameAtom',
  default: '',
})

export const evaluationStateAtom = atom<EvaluationStatus>({
  key: 'applicantEvaluationStateAtom',
  default: 'none',
})
