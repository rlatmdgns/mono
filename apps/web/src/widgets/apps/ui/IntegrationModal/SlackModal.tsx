import { Button, ModalHeader, ModalLayout } from '@/shared/ui'
import * as Styles from './styles'
import { useConnectSlack } from '@/features/apps/hooks/useConnectSlack'
import { Icon } from '@repo/ui'

interface IntegrationModalProps {
  isConnected: boolean
  onClose: () => void
}

const IntegrationSlackModal = ({ isConnected, onClose }: IntegrationModalProps) => {
  const { connectSlackMutate } = useConnectSlack()
  const handleConnect = () => connectSlackMutate()

  const title = isConnected ? 'Slack 계졍 연동 채널 변경' : 'Slack 계정 연동'
  const buttonText = isConnected ? 'Slack 채널 변경' : 'Slack 계정 연동하기'

  return (
    <ModalLayout isDimmed onClick={onClose}>
      <Styles.Wrapper>
        <ModalHeader title={title} onClick={onClose} />
        <Styles.Content>
          <Styles.GuideWrapper>
            <Icon icon="icon/info-line" color="neutralGray800" />
            <Styles.Guide>
              <li>
                Stead의 알림은 개인화 알림입니다.
                <br />
                <Styles.Importance>본인의 다이렉트 메시지</Styles.Importance> 혹은
                <Styles.Importance>비공개로 만든 채널</Styles.Importance>에 연동하는 것을
                권장합니다.
              </li>
            </Styles.Guide>
          </Styles.GuideWrapper>
          <Button text={buttonText} onClick={handleConnect} />
        </Styles.Content>
      </Styles.Wrapper>
    </ModalLayout>
  )
}

export default IntegrationSlackModal
