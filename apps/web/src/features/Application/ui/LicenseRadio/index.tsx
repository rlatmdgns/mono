'use client'

import { RadioIconButton } from '@/shared/ui'
import * as Styles from './styles'

interface LicenseRadioProps {
  hasLicense: boolean
  onChange: (state: boolean) => void
}

export const LicenseRadio = ({ hasLicense, onChange }: LicenseRadioProps) => {
  return (
    <Styles.RadioWrap>
      <RadioIconButton
        name="license"
        labelText="없음"
        checked={!hasLicense}
        onChange={() => onChange(false)}
      />
      <RadioIconButton
        name="license"
        labelText="있음"
        checked={hasLicense}
        onChange={() => onChange(true)}
      />
    </Styles.RadioWrap>
  )
}
