'use client'

import { RadioIconButton } from '@/shared/ui'
import * as Styles from './styles'

interface CareerRadioProps {
  hasCareer: boolean
  onChange: (state: boolean) => void
}

export const CareerRadio = ({ hasCareer, onChange }: CareerRadioProps) => {
  return (
    <Styles.RadioWrap>
      <RadioIconButton
        name={'career'}
        labelText={'신입'}
        checked={!hasCareer}
        onChange={() => onChange(false)}
      />
      <RadioIconButton
        name={'career'}
        labelText={'경력'}
        checked={hasCareer}
        onChange={() => onChange(true)}
      />
    </Styles.RadioWrap>
  )
}
