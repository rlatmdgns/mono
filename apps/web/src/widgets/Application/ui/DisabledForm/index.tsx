'use client'

import { DisabledInput, DisabledRadio } from '@/features/Application/ui'
import * as Styles from './styles'
import { useFormContext } from 'react-hook-form'
import { useState } from 'react'
import { ApplicantFormLabel } from '@/shared/ui'
import { Disabled } from '@/entities/Application/types/ApplicantRequest'

interface DisabledFormProps {
  isCanView: boolean
  isRequired: boolean
  isSelected: boolean
  name: string
  value: Disabled
}

const DisabledForm = ({ isCanView, isRequired, isSelected, value, name }: DisabledFormProps) => {
  const [hasDisabled, setHasDisabled] = useState(value?.is_disabled || false)

  const { setValue, getValues } = useFormContext()
  const values = getValues(name)

  const handleDisabledChange = (value: boolean) => {
    if (!value) {
      setValue(name, {
        is_disabled: value,
      })
      setHasDisabled(value)
      return
    }
    setValue(name, {
      classification: '',
      level: '',
      is_disabled: value,
    })
    setHasDisabled(value)
  }

  const handleTypeChange = (classification: string) => {
    setValue(name, {
      ...values,
      classification,
    })
  }

  const handleLevelChange = (level: string) => {
    setValue(name, {
      ...values,
      level,
    })
  }

  return (
    <Styles.Wrapper $isSelected={isSelected}>
      <Styles.Inner>
        <ApplicantFormLabel title={'장애 여부'} isRequired={isRequired} isCanView={isCanView} />
        <DisabledRadio hasDisabled={hasDisabled} onChange={handleDisabledChange} />
        <DisabledInput
          hasDisabled={hasDisabled}
          onTypeChange={handleTypeChange}
          onLevelChange={handleLevelChange}
        />
      </Styles.Inner>
    </Styles.Wrapper>
  )
}

export default DisabledForm
