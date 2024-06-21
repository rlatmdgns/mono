'use client'

import { RadioIconButton } from '@/shared/ui'
import * as Styles from './styles'

interface DisabledRadioProps {
  hasDisabled: boolean
  onChange: (state: boolean) => void
}

export const DisabledRadio = ({ hasDisabled = false, onChange }: DisabledRadioProps) => {
  return (
    <Styles.RadioWrap>
      <RadioIconButton
        name={'disabled'}
        labelText={'비대상'}
        checked={!hasDisabled}
        onChange={() => onChange(false)}
      />
      <RadioIconButton
        name={'disabled'}
        labelText={'대상'}
        checked={hasDisabled}
        onChange={() => onChange(true)}
      />
    </Styles.RadioWrap>
  )
}
