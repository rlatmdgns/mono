import { Button, ModalFooter } from '@repo/ui'

interface AddSequenceFooterProps {
  isValid: boolean
  onCancel: () => void
  onClick: () => void
}

export const ModifySequenceFooter = ({ isValid, onCancel, onClick }: AddSequenceFooterProps) => {
  return (
    <ModalFooter>
      <Button
        text="취소"
        state="secondary"
        style="mono"
        size="md"
        width="58px"
        onClick={onCancel}
      />
      <Button
        text="수정"
        state="primary"
        style="fill-strong"
        size="md"
        width="58px"
        disabled={!isValid}
        onClick={onClick}
      />
    </ModalFooter>
  )
}
