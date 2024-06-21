import { Dropdown, Toast } from '@/shared/ui'
import { Icon } from '@repo/ui'
import { useModal } from '@/shared/hooks'
import { MODAL } from '@/shared/constants'
import { useDeleteScenario } from '@/features/onboarding/hooks/useDeleteScenario'

interface DeleteScenarioButtonProps {
  id: number
  number: number
}

export const DeleteScenarioButton = ({ id, number }: DeleteScenarioButtonProps) => {
  const { openModal, closeModal } = useModal()
  const { deleteScenarioMutate } = useDeleteScenario(id, () => {
    closeModal(MODAL.NEW_CONFIRM)
  })

  const handleDeleteScenario = () => {
    deleteScenarioMutate()
  }

  const handleCloseDeleteSceneModal = () => {
    closeModal(MODAL.NEW_CONFIRM)
  }

  const handleClick = () => {
    if (number) {
      return Toast.error('온보딩 진행중인 입사자가 있습니다.')
    }
    openModal(MODAL.NEW_CONFIRM, {
      title: '시나리오를 삭제하시겠습니까?',
      subTitle: '삭제한 정보는 복구가 불가합니다.',
      state: 'danger',
      confirmText: '삭제하기',
      onClick: handleDeleteScenario,
      onClose: handleCloseDeleteSceneModal,
    })
  }

  return (
    <Dropdown.Item onClick={handleClick} isWarning>
      <Icon icon="icon/delete-line" color="red500" />
      삭제
    </Dropdown.Item>
  )
}
