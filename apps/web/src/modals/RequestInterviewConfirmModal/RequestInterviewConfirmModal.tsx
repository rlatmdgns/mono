'use client'

import { ModalLayout } from '@/shared/ui/ModalLayout'
import { Button, ModalFooter } from '@repo/ui'
import * as Styles from './styles'

interface RequestInterviewConfirmModalProps {
  length: number
  onClose: () => void
  onClick: () => void
}

const RequestInterviewConfirmModal = ({
  length,
  onClose,
  onClick,
}: RequestInterviewConfirmModalProps) => {
  return (
    <ModalLayout onClick={onClose} isDimmed>
      <Styles.Wrapper>
        <Styles.ConfirmText>
          {length} 명의 지원자에게 면접 일정 요청 이메일을 보내겠습니까?
        </Styles.ConfirmText>
        <ModalFooter>
          <Button
            text="취소"
            state="secondary"
            style="mono"
            size="md"
            width="58px"
            onClick={onClick}
          />
          <Button
            text="보내기"
            trailingIcon={'icon/send-solid'}
            size="md"
            width="58px"
            onClick={onClick}
          />
        </ModalFooter>
      </Styles.Wrapper>
    </ModalLayout>
  )
}

export default RequestInterviewConfirmModal
