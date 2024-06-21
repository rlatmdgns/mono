'use client'

import { RadioIconButton } from '@/shared/ui'
import * as Styles from './styles'

interface LanguageRadioProps {
  hasLanguage: boolean
  onChange: (state: boolean) => void
}

export const LanguageRadio = ({ hasLanguage, onChange }: LanguageRadioProps) => {
  return (
    <Styles.RadioWrap>
      <RadioIconButton
        name="language"
        labelText="없음"
        checked={!hasLanguage}
        onChange={() => onChange(false)}
      />
      <RadioIconButton
        name="language"
        labelText="있음"
        checked={hasLanguage}
        onChange={() => onChange(true)}
      />
    </Styles.RadioWrap>
  )
}
