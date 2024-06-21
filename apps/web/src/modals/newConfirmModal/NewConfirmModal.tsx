import { Button, ModalFooter } from '@repo/ui'
import { ModalLayout } from '@/shared/ui'
import { content, subTitleText, titleText } from '@/modals/newConfirmModal/style.css'
import { IconNames } from "@repo/ui/src/components/Icon";

interface newConfirmModalProps {
  title: string
  subTitle?: string
  state: 'primary' | 'secondary' | 'danger'
  textConfirm?: string
  leadingIcon?: IconNames
  trailingIcon?: IconNames
  onClick: () => void
  onClose: () => void
}

const NewConfirmModal = ({
                           title,
                           subTitle,
                           state,
                           textConfirm = '삭제하기',
                           leadingIcon,
                           trailingIcon,
                           onClick,
                           onClose,
                         }: newConfirmModalProps) => {
  const handleCancel = () => onClose()

  const handleClick = () => {
    onClick()
  }

  return (
    <ModalLayout onClick={onClose} isDimmed>
      <div>
        <div className={content}>
          <p className={titleText}>{title}</p>
          {subTitle && <p className={subTitleText}>{subTitle}</p>}
        </div>
        <ModalFooter>
          <Button
            text="취소"
            state="secondary"
            style="mono"
            size="md"
            width="58px"
            onClick={handleCancel}
          />
          <Button
            text={textConfirm}
            leadingIcon={leadingIcon}
            trailingIcon={trailingIcon}
            state={state}
            style="fill-strong"
            size="md"
            width="58px"
            onClick={handleClick}
          />
        </ModalFooter>
      </div>
    </ModalLayout>
  )
}

export default NewConfirmModal
