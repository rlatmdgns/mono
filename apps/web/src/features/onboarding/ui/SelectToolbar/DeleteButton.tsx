import { Button, Toast } from '@repo/ui'
import { useFormContext } from 'react-hook-form'
import { useModal } from '@/shared/hooks'
import { MODAL } from '@/shared/constants'
import { DeleteFreshMenRequest, freshmanData } from '@/entities/onboarding/types/freshman'
import { useDeleteFreshman } from '@/features/onboarding/hooks/useDeleteFreshman'

export const DeleteButton = () => {
  const { openModal, closeModal } = useModal()
  const { watch, reset } = useFormContext()

  const hasScenarios = watch('freshmen').some(
    (freshman: freshmanData) => freshman.scenarios?.length,
  )

  const handleDeleteCallback = () => {
    const user = hasScenarios ? '지원자' : '입사자'
    Toast.success(`${user}가 삭제되었습니다.`)
    closeModal(MODAL.NEW_CONFIRM)
    reset({ freshmen: [] })
  }

  const { deleteFreshmanMutate } = useDeleteFreshman(handleDeleteCallback)

  const handleClick = () => {
    const ids = watch('freshmen').map((freshman: freshmanData) => freshman.id)
    const data: DeleteFreshMenRequest = {
      freshman_ids: ids,
    }

    openModal(MODAL.NEW_CONFIRM, {
      title: '지원자를 삭제하시겠습니까?',
      subTitle:
        hasScenarios &&
        '삭제 시 진행중인 온보딩 시나리오는 모두 중단되며 전송된 링크는 만료됩니다.',
      state: 'danger',
      onClick: () => deleteFreshmanMutate(data),
      onClose: () => closeModal(MODAL.NEW_CONFIRM),
    })
  }

  return (
    <Button
      leadingIcon="icon/delete-line"
      text="삭제"
      state="danger"
      style="mono"
      size="sm"
      onClick={handleClick}
    />
  )
}
