'use client'

import { RadioIconButton } from '@/shared/ui'
import * as Styles from './styles'

interface CareerRadioProps {
  hasActivity: boolean
  onChange: (state: boolean) => void
}

export const ActivityRadio = ({ hasActivity, onChange }: CareerRadioProps) => {
  return (
    <Styles.RadioWrap>
      <RadioIconButton
        name={'activity'}
        labelText={'없음'}
        checked={!hasActivity}
        onChange={() => onChange(false)}
      />
      <RadioIconButton
        name={'activity'}
        labelText={'있음'}
        checked={hasActivity}
        onChange={() => onChange(true)}
      />
    </Styles.RadioWrap>
  )
}
