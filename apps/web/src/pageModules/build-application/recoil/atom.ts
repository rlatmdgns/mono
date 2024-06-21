import { atom } from 'recoil'
import { SelectedApplicantItem } from '@/features/build-application/types'

export const SelectedApplicantBasicItemAtom = atom<SelectedApplicantItem>({
  key: 'SelectedApplicantBasicItemAtom',
  default: { key: '', index: 0 },
})

export const SelectedApplicantItemAtom = atom<SelectedApplicantItem>({
  key: 'SelectedApplicantItemAtom',
  default: { key: '', index: 0 },
})

export const SelectedApplicantPersonItemAtom = atom<SelectedApplicantItem>({
  key: 'SelectedApplicantPersonItemAtom',
  default: { key: '', index: 0 },
})

export const SelectedDocumentIndexAtom = atom<number | null>({
  key: 'SelectedDocumentIndexAtom',
  default: null,
})
