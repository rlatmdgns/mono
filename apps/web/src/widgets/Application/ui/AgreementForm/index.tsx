'use client'

import { ApplicationPrivacyConsent } from '@/features/Application/ui'
import { SelectedApplicantPersonItemAtom } from '@/pageModules/build-application/recoil'
import { useRecoilValue } from 'recoil'
import * as Styles from './styles'

interface AgreementFormProps {
  value: boolean
}

const AgreementForm = ({ value = false }: AgreementFormProps) => {
  const selectedItem = useRecoilValue(SelectedApplicantPersonItemAtom)
  const isSelected = selectedItem.key === 'enterprise_required_personal_terms'
  return (
    <Styles.Wrapper $isSelected={isSelected}>
      <Styles.Inner>
        <ApplicationPrivacyConsent isChecked={value} onChange={() => {}} />
      </Styles.Inner>
    </Styles.Wrapper>
  )
}

export default AgreementForm
