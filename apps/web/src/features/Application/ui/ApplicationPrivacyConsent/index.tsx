import { MODAL } from '@/shared/constants'
import { useModal } from '@/shared/hooks'
import { CheckBox, IconButton } from '@/shared/ui'
import * as Styles from './styles'

interface ApplicationPrivacyConsentProps {
  isChecked: boolean
  onChange: (value: boolean) => void
  enterpriseName?: string
  policy?: string
}

export const ApplicationPrivacyConsent = ({
  isChecked,
  onChange,
  enterpriseName,
  policy,
}: ApplicationPrivacyConsentProps) => {
  const { openModal } = useModal()

  const handleModal = () => openModal(MODAL.APPLICATION_PRIVACY_POLICY, { enterpriseName, policy })

  return (
    <Styles.Content>
      <Styles.Inner>
        <CheckBox isChecked={isChecked} onChange={onChange} />
        <Styles.Text>(필수) 개인정보 수집 및 이용에 동의합니다.</Styles.Text>
      </Styles.Inner>
      <IconButton icon="icon/right-line" size="xs" onClick={handleModal} />
    </Styles.Content>
  )
}
