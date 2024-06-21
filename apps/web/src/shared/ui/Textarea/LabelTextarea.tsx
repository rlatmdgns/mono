'use client'

import { Textarea } from '@/shared/ui'
import { Icon } from '@repo/ui'
import React, { useState } from 'react'
import { LabelTextareaProps } from './Textarea.interface'
import * as Styles from './styles'

export const LabelTextarea = ({
  value,
  defaultValue,
  onChange,
  maxLength = 20,
  placeholder,
  rows = 4,
  disabled = false,
  register,
  state = 'success',
  label,
  supportiveText,
}: LabelTextareaProps) => {
  const [textAreaCount, setTextAreaCount] = useState(0)

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { value } = event.target
    if (value.length > maxLength) return
    setTextAreaCount(value.length)
    if (!onChange) return
    onChange(event)
  }

  return (
    <Styles.Wrapper>
      <Styles.LabelText>{label}</Styles.LabelText>
      <Textarea
        value={value}
        defaultValue={defaultValue}
        onChange={handleChange}
        placeholder={placeholder}
        disabled={disabled}
        maxLength={maxLength}
        rows={rows}
        state={state}
        register={register}
      />
      <Styles.TextBox>
        {state === 'error' && supportiveText && (
          <Styles.SupportiveBox>
            <Icon icon="icon/info-line" color="red500" />
            <Styles.SupportiveText>{supportiveText}</Styles.SupportiveText>
          </Styles.SupportiveBox>
        )}
        <Styles.CountBox>
          <Styles.CurrentCount>{textAreaCount}</Styles.CurrentCount>
          {maxLength}
        </Styles.CountBox>
      </Styles.TextBox>
    </Styles.Wrapper>
  )
}
