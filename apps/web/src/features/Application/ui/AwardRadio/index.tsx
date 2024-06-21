'use client'

import { RadioIconButton } from '@/shared/ui'
import * as Styles from './styles'

interface AwardRadioProps {
  hasAward: boolean
  onChange: (state: boolean) => void
}

export const AwardRadio = ({ hasAward, onChange }: AwardRadioProps) => {
  return (
    <Styles.RadioWrap>
      <RadioIconButton
        name={'award'}
        labelText={'없음'}
        checked={!hasAward}
        onChange={() => onChange(false)}
      />
      <RadioIconButton
        name={'award'}
        labelText={'있음'}
        checked={hasAward}
        onChange={() => onChange(true)}
      />
    </Styles.RadioWrap>
  )
}
