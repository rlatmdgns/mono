'use client'

import { GenderRadio } from '@/features/Application/ui'
import { ApplicantFormLabel } from '@/shared/ui'
import * as Styles from './styles'

interface GenderFormProps {
  isRequired: boolean
  isCanView: boolean
  isSelected: boolean
  value: string
  onChange: (value: string) => void
  name: string
}

const GenderForm = ({
  isRequired,
  isCanView,
  name,
  isSelected,
  value = '남성',
  onChange,
}: GenderFormProps) => {
  return (
    <Styles.Wrapper $isSelected={isSelected}>
      <Styles.Inner>
        <ApplicantFormLabel title="성별" isRequired={isRequired} isCanView={isCanView} />
        <GenderRadio value={value} name={name} onChange={onChange} />
      </Styles.Inner>
    </Styles.Wrapper>
  )
}

export default GenderForm
