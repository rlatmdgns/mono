import { Button, ModalHeader, ModalLayout } from '@/shared/ui'
import * as Styles from './styles'
import { useConnectGoogleCalendar } from '@/features/apps/hooks/useConnectGoogleCalendar'
import { Icon } from '@repo/ui'

interface IntegrationModalProps {
  isConnected: boolean
  isOpen: boolean
  onClick: () => void
  onClose: () => void
}

const IntegrationGoogleModal = ({ onClose }: IntegrationModalProps) => {
  const { connectGoogleMutate } = useConnectGoogleCalendar()

  return (
    <ModalLayout isDimmed onClick={onClose}>
      <Styles.Wrapper>
        <ModalHeader title="Google Calendar 계정 연동" onClick={onClose} />
        <Styles.Content>
          <Styles.GuideWrapper>
            <Icon icon="icon/info-line" color="neutralGray800" />
            <Styles.Guide>
              <li>
                Google calendar 연동 시
                <Styles.Importance> 액세스 권한을 체크해주세요.</Styles.Importance>
              </li>
              <li>
                Google calendar 연동 시
                <Styles.Importance> 개인 일정이 등록되어 있는 캘린더만 추가</Styles.Importance>하는
                것을 권장합니다.
              </li>
            </Styles.Guide>
          </Styles.GuideWrapper>
          <Button text="Google 계정 연동하기" onClick={connectGoogleMutate} />
        </Styles.Content>
      </Styles.Wrapper>
    </ModalLayout>
  )
}

export default IntegrationGoogleModal
