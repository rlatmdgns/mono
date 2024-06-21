import { MODAL } from '@/shared/constants'
import { useModal } from '@/shared/hooks'
import { ModalLayout } from '@/shared/ui'
import { Icon } from '@repo/ui'
import * as Styles from './styles'

interface ApplicationPrivacyPolicyModalProps {
  enterpriseName: string
  policy: string
}

const ApplicationPrivacyPolicyModal = ({
  enterpriseName,
  policy,
}: ApplicationPrivacyPolicyModalProps) => {
  const { closeModal } = useModal()

  const handleClose = () => closeModal(MODAL.APPLICATION_PRIVACY_POLICY)

  return (
    <ModalLayout isDimmed>
      <Styles.Wrapper>
        <Styles.Header>
          <Styles.HeaderTitle>이용약관</Styles.HeaderTitle>
          <Icon icon="icon/cancle-line1" onClick={handleClose} />
        </Styles.Header>
        <Styles.Body>
          <Styles.Title>
            {enterpriseName} (이하 “회사”라 함)은(는) “Stead” 를 통한 채용 절차 진행을 위하여 귀하의
            정보를 수집합니다.
          </Styles.Title>
          <Styles.Content>{policy}</Styles.Content>
        </Styles.Body>
      </Styles.Wrapper>
    </ModalLayout>
  )
}

export default ApplicationPrivacyPolicyModal
