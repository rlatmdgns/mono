import { MODAL } from '@/shared/constants'
import { useModal } from '@/shared/hooks'
import { ModalLayout } from '@/shared/ui'
import { Icon } from '@repo/ui'
import { SteadPolicyContents } from './SteadPolicyContents'
import * as Styles from './styles'

const ApplicationSteadPolicyModal = () => {
  const { closeModal } = useModal()

  const handleClose = () => closeModal(MODAL.APPLICATION_STEAD_POLICY)

  return (
    <ModalLayout isDimmed>
      <Styles.Wrapper>
        <Styles.Header>
          <Styles.HeaderTitle>개인정보 수집 약관</Styles.HeaderTitle>
          <Icon icon="icon/cancle-line1" onClick={handleClose} />
        </Styles.Header>
        <Styles.Body>
          <Styles.Title>헤드헌팅 서비스 이용약관</Styles.Title>
          <SteadPolicyContents />
        </Styles.Body>
      </Styles.Wrapper>
    </ModalLayout>
  )
}

export default ApplicationSteadPolicyModal
