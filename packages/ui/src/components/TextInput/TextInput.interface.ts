import React from 'react'

export interface TextInputProps {
  type?: 'text' | 'password' | 'tel' | 'email' | 'number'
  state?: 'success' | 'error'
  defaultValue?: string
  value?: string
  placeholder?: string
  width?: string
  onClick?: (event: React.MouseEvent<HTMLInputElement>) => void
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
  onKeyUp?: (event: React.KeyboardEvent<HTMLInputElement>) => void
  onClickReset?: () => void
  pattern?: string
  disabled?: boolean
  isReadOnly?: boolean
  maxLength?: number
  autoFocus?: boolean
  onKeyDown?: (event: React.KeyboardEvent<any>) => void
  step?: string
  register?: any
}
