'use client'

import * as Styles from './styles'
import { TextareaProps } from './Textarea.interface'

export const Textarea = ({
  value,
  defaultValue,
  onChange,
  maxLength = 20,
  placeholder,
  rows = 4,
  disabled = false,
  register,
  state = 'success',
}: TextareaProps) => {
  return (
    <Styles.Textarea
      value={value}
      defaultValue={defaultValue}
      onChange={onChange}
      placeholder={placeholder}
      disabled={disabled}
      maxLength={maxLength}
      rows={rows}
      $state={state}
      {...register}
    />
  )
}
