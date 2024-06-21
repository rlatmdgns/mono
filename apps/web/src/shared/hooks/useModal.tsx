import { useCallback } from 'react'
import { useRecoilCallback } from 'recoil'
import { Modal, ModalProps, ModalType } from '@/shared/model/modal/atom'
import { modalSelector } from '@/shared/model/modal/selector'

export function useModal() {
  const setModal = useRecoilCallback(
    ({ set }) =>
      (id: ModalType, value: Modal) => {
        set(modalSelector(id), value)
      },
    [],
  )

  const handleModalClose = useRecoilCallback(
    ({ reset }) =>
      (id: ModalType) => {
        reset(modalSelector(id))
      },
    [],
  )

  const handleModalOpen = useCallback(
    (id: ModalType, props: ModalProps = null) => {
      const value = {
        id,
        props,
      }
      setModal(id, value)
    },
    [setModal],
  )

  return { openModal: handleModalOpen, closeModal: handleModalClose }
}
