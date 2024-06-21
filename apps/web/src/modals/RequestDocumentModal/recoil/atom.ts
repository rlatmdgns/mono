import { atom } from 'recoil'

export type RequestItemType = {
  type: string
  value: string
}

export type RequestDocument = {
  name: string
  value: string
}

export const requestItemsAtom = atom<RequestItemType[]>({
  key: 'requestItemsAtom',
  default: [],
})

export const requestDocumentsAtom = atom<RequestDocument[]>({
  key: 'requestDocumentsAtom',
  default: [],
})

export const requestViewDocumentsAtom = atom<RequestDocument[]>({
  key: 'requestViewDocumentsAtom',
  default: [],
})
