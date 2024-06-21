import { atom, atomFamily } from 'recoil'

export type ModalType = string
export type ModalProps = Record<string, unknown> | null
export type Modal = {
  id: ModalType
  props?: ModalProps
}

export const modalListAtom = atom<Modal[]>({
  key: 'modalListAtom',
  default: [],
})

export const modalAtom = atomFamily<Modal, ModalType>({
  key: 'modalAtom',
  default: (id) => ({
    id,
    props: null,
  }),
})
