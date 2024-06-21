'use client'

import { NationalityInput } from '@/features/Application/ui'
import * as Styles from './styles'
import { ApplicantFormLabel } from '@/shared/ui'

interface NationalityFormProps {
  isSelected: boolean
  isRequired: boolean
  isCanView: boolean
  onChange: (value: string) => void
}

const NationalityForm = ({ isSelected, isRequired, isCanView, onChange }: NationalityFormProps) => {
  return (
    <Styles.Wrapper $isSelected={isSelected}>
      <Styles.Inner>
        <ApplicantFormLabel title={'국적'} isRequired={isRequired} isCanView={isCanView} />
        <NationalityInput onChange={onChange} />
      </Styles.Inner>
    </Styles.Wrapper>
  )
}

export default NationalityForm
