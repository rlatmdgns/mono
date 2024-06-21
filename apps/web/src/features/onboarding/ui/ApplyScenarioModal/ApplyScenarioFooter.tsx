import { MODAL } from '@/shared/constants'
import { useModal } from '@/shared/hooks'
import { Button, ModalFooter } from '@repo/ui'

interface ApplyScenarioFooterProps {
  isDisabled?: boolean
}

export const ApplyScenarioFooter = ({ isDisabled = false }: ApplyScenarioFooterProps) => {
  const { closeModal } = useModal()

  const handleClose = () => {
    closeModal(MODAL.APPLY_SCENARIO)
  }

  const handleClick = () => {
    // TODO: 온보딩 적용 로직
  }

  return (
    <ModalFooter>
      <Button text="취소" state="secondary" style="mono" onClick={handleClose} />
      <Button text="적용하기" disabled={isDisabled} onClick={handleClick} />
    </ModalFooter>
  )
}
