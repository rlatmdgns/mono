'use client'

import { BenefitInput, BenefitRadio } from '@/features/Application/ui'
import * as Styles from './styles'
import { useFormContext } from 'react-hook-form'
import { useState } from 'react'
import { ApplicantFormLabel } from '@/shared/ui'
import React from 'react'
import { VeteranBenefit } from '@/entities/Application/types/ApplicantRequest'

interface BenefitFormProps {
  isSelected: boolean
  isRequired: boolean
  isCanView: boolean
  name: string
  value: VeteranBenefit
}

const BenefitForm = ({ isRequired, isCanView, isSelected, name, value }: BenefitFormProps) => {
  const [hasBenefit, setHasBenefit] = useState(value?.is_veteran_benefit || false)

  const { setValue, getValues } = useFormContext()
  const values = getValues(name)

  const handleChange = (value: boolean) => {
    if (!values) {
      setValue(name, {
        is_veteran_benefit: value,
      })
      setHasBenefit(value)
      return
    }
    setValue(name, {
      ...values,
      is_veteran_benefit: value,
    })
    setHasBenefit(value)
  }

  const handleBenefitNumberChange = (value?: number) => {
    setValue(name, {
      ...values,
      veteran_benefit_number: value,
    })
  }

  return (
    <Styles.Wrapper $isSelected={isSelected}>
      <Styles.Inner>
        <ApplicantFormLabel title={'보훈 여부'} isRequired={isRequired} isCanView={isCanView} />
        <BenefitRadio hasBenefit={hasBenefit} onChange={handleChange} />
        <BenefitInput
          hasBenefit={hasBenefit}
          value={getValues(`${name}.veteran_benefit_number`)}
          onChange={handleBenefitNumberChange}
        />
      </Styles.Inner>
    </Styles.Wrapper>
  )
}

export default BenefitForm
