'use client'

import { RadioIconButton } from '@/shared/ui'
import * as Styles from './styles'

interface MilitaryRadioProps {
  hasMilitary: boolean
  onChange: (state: boolean) => void
}

export const MilitaryRadio = ({ hasMilitary, onChange }: MilitaryRadioProps) => {
  return (
    <Styles.RadioWrap>
      <RadioIconButton
        name={'Military'}
        labelText={'비대상'}
        checked={!hasMilitary}
        onChange={() => onChange(false)}
      />
      <RadioIconButton
        name={'Military'}
        labelText={'대상'}
        checked={hasMilitary}
        onChange={() => onChange(true)}
      />
    </Styles.RadioWrap>
  )
}
