'use client'

import { BirthdayInput } from '@/features/Application/ui'
import { ApplicantFormLabel } from '@/shared/ui'
import * as Styles from './styles'

interface BenefitFormProps {
  isRequired: boolean
  isCanView: boolean
  isSelected: boolean
  value: string
  onChange: (value: Date | null) => void
}

const BirthdayForm = ({ isRequired, isCanView, isSelected, value, onChange }: BenefitFormProps) => {
  return (
    <Styles.Wrapper $isSelected={isSelected}>
      <Styles.Inner>
        <ApplicantFormLabel title="생년월일" isRequired={isRequired} isCanView={isCanView} />
        <BirthdayInput value={value} onChange={onChange} />
      </Styles.Inner>
    </Styles.Wrapper>
  )
}

export default BirthdayForm
