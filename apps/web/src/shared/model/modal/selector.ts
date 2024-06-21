import { DefaultValue, selectorFamily } from 'recoil'
import { Modal, modalAtom, modalListAtom, ModalType } from '@/shared/model/modal/atom'

export const modalSelector = selectorFamily<Modal, ModalType>({
  key: 'modalSelector',
  get:
    (id) =>
    ({ get }) =>
      get(modalAtom(id)),
  set:
    (id) =>
    ({ get, set, reset }, newModal) => {
      if (newModal instanceof DefaultValue) {
        set(modalListAtom, (prev) => prev.filter((modal) => modal.id !== id))
        reset(modalAtom(id))
        return
      }

      set(modalAtom(id), newModal)

      if (get(modalListAtom).find((modal) => modal.id === newModal.id)) return
      set(modalListAtom, (prev) => [...prev, newModal])
    },
})
