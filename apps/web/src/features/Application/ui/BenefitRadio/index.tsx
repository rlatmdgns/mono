'use client'

import { RadioIconButton } from '@/shared/ui'
import * as Styles from './styles'

interface BenefitRadioProps {
  hasBenefit: boolean
  onChange: (state: boolean) => void
}

export const BenefitRadio = ({ hasBenefit, onChange }: BenefitRadioProps) => {
  return (
    <Styles.RadioWrap>
      <RadioIconButton
        name={'benefit'}
        labelText={'비대상'}
        checked={!hasBenefit}
        onChange={() => onChange(false)}
      />
      <RadioIconButton
        name={'benefit'}
        labelText={'대상'}
        checked={hasBenefit}
        onChange={() => onChange(true)}
      />
    </Styles.RadioWrap>
  )
}
