import { MODAL } from '@/shared/constants'
import { useModal } from '@/shared/hooks'
import { CheckBox, IconButton } from '@/shared/ui'
import * as Styles from './styles'

interface ApplicationSteadPrivacyConsentProps {
  isChecked: boolean
  onChange: (value: boolean) => void
}

export const ApplicationSteadPrivacyConsent = ({
  isChecked,
  onChange,
}: ApplicationSteadPrivacyConsentProps) => {
  const { openModal } = useModal()

  const handleModal = () => openModal(MODAL.APPLICATION_STEAD_POLICY)

  return (
    <Styles.Content>
      <Styles.Inner>
        <CheckBox isChecked={isChecked} onChange={onChange} />
        <Styles.Text>(선택) 개인정보 선택항목 수집 및 이용에 동의합니다.</Styles.Text>
      </Styles.Inner>
      <IconButton icon="icon/right-line" size="xs" onClick={handleModal} />
    </Styles.Content>
  )
}
