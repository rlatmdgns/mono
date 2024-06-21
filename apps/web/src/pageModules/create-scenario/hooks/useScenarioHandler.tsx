import { MODAL } from '@/shared/constants'
import { useModal } from '@/shared/hooks'

export const useScenarioHandler = () => {
  const { openModal, closeModal } = useModal()
  const handleOpenModal = (callBack: () => void) => {
    openModal(MODAL.CONFIRM, {
      state: 'negative',
      title: '추가되어있는 씬이 있습니다. 삭제하시겠습니까?',
      iconSource: 'icon/warning-solid',
      onClick: () => {
        callBack()
        closeModal(MODAL.CONFIRM)
      },
      onClose: () => closeModal(MODAL.CONFIRM),
    })
  }
  const handleUpdateConfirmModal = (callback: () => void) => {
    openModal(MODAL.CONFIRM, {
      state: 'negative',
      title: '이미 해당 일자의 시퀀스가 존재합니다. 덮어쓰시겠습니까?',
      iconSource: 'icon/warning-solid',
      onClick: () => {
        callback()
        closeModal(MODAL.CONFIRM)
      },
      onClose: () => closeModal(MODAL.CONFIRM),
    })
  }
  return { handleUpdateConfirmModal, handleOpenModal }
}
