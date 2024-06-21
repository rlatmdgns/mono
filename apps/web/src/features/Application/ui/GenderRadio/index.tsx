'use client'

import { RadioIconButton } from '@/shared/ui'
import * as Styles from './styles'

interface GenderRadioProps {
  value: string
  name: string
  onChange: (value: string) => void
}

export const GenderRadio = ({ value, name, onChange }: GenderRadioProps) => {
  const isMale = value === '남성'
  const isFemale = value === '여성'

  return (
    <Styles.RadioWrap>
      <RadioIconButton
        name={name}
        labelText={'남성'}
        value={'남성'}
        checked={isMale}
        onChange={() => onChange('남성')}
      />
      <RadioIconButton
        name={name}
        labelText={'여성'}
        value={'여성'}
        checked={isFemale}
        onChange={() => onChange('여성')}
      />
    </Styles.RadioWrap>
  )
}
