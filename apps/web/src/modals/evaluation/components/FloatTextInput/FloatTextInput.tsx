import * as Styles from './styles'
import React from 'react'
import { UseFormRegisterReturn } from 'react-hook-form'
import { useTranslations } from 'next-intl'

interface FloatTextInputProps {
  label: string
  placeholder: string
  isFocused?: boolean
  isTitle?: boolean
  isDescription?: boolean
  isPoint?: boolean
  register?: UseFormRegisterReturn
  maxLength?: number
}

const FloatTextInput = ({
  label,
  placeholder,
  isFocused = false,
  isTitle = false,
  isDescription = false,
  isPoint,
  register,
  maxLength,
}: FloatTextInputProps) => {
  const $t = useTranslations('evaluation')
  return (
    <Styles.Wrapper>
      <Styles.Input
        placeholder={placeholder}
        $isFocused={isFocused}
        $isTitle={isTitle}
        $isDescription={isDescription}
        $isPoint={isPoint}
        {...register}
        autoComplete="off"
        maxLength={maxLength}
      />
      <Styles.Label>{label}</Styles.Label>
      <Styles.ChildrenBox $isPoint={isPoint} $isFocused={isFocused}>
        {$t('max_score', { score: 10 })}
      </Styles.ChildrenBox>
    </Styles.Wrapper>
  )
}

export default FloatTextInput
