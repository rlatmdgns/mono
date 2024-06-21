'use client'

import { TextInput } from '@/shared/ui'
import * as Styles from './styles'
import React from 'react'

interface BenefitInputProps {
  hasBenefit: boolean
  onChange: (value?: number) => void
  value?: string
}

export const BenefitInput = ({ hasBenefit, value, onChange }: BenefitInputProps) => {
  if (!hasBenefit) return null

  const hasBlockInvalidChar = (event: React.KeyboardEvent<HTMLInputElement>) => {
    const invalidChars = ['e', 'E', 'ㄷ', '+', '-']
    return invalidChars.includes(event.key)
  }

  const handleKeydown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (hasBlockInvalidChar(event)) {
      event.preventDefault()
    }
  }

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target

    if (value === '') {
      return onChange(undefined)
    }
    if (`${value}`.length > 8) return
    onChange(Number(value))
  }

  return (
    <Styles.Wrapper>
      <Styles.InnerWrapper>
        <Styles.InputItem>
          <Styles.SectionTitle>보훈 번호</Styles.SectionTitle>
          <TextInput
            placeholder="보훈 번호를 입력해주세요."
            type="number"
            value={value}
            onChange={handleOnChange}
            onKeyDown={handleKeydown}
          />
        </Styles.InputItem>
      </Styles.InnerWrapper>
    </Styles.Wrapper>
  )
}
