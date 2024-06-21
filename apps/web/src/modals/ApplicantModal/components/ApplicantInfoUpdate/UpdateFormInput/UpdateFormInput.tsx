'use client'

import { useState } from 'react'
import * as Styles from './styles'
import { UseFormRegisterReturn } from 'react-hook-form'
import { useTranslations } from 'next-intl'

interface UpdateFormProps {
  label: string
  defaultValue: string
  register: UseFormRegisterReturn
  maxLength?: number
}

const UpdateFormInput = ({ label, defaultValue, register, maxLength }: UpdateFormProps) => {
  const [isFocus, setIsFocus] = useState(false)
  const $t = useTranslations('common')

  const handleInputFocus = () => {
    setIsFocus(true)
  }

  return (
    <Styles.Wrapper $isFocus={isFocus}>
      <Styles.Input
        {...register}
        defaultValue={defaultValue}
        placeholder={`${label} ${$t('input')}`}
        maxLength={maxLength}
        onClick={handleInputFocus}
      />
      <Styles.Button type="submit">{$t('save')}</Styles.Button>
    </Styles.Wrapper>
  )
}

export default UpdateFormInput
