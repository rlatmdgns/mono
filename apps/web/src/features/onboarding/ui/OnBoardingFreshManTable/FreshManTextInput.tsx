import { input, inputBox } from './styles.css'
import { Button } from '@repo/ui'
import React from 'react'

interface FreshManTextInputProps {
  defaultValue: string
  isChanged: boolean
  isDate: boolean
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  handleChange: () => void
}

export const FreshManTextInput = ({
  defaultValue,
  isChanged,
  isDate,
  onChange,
  handleChange,
}: FreshManTextInputProps) => {
  if (isDate) return null
  return (
    <div className={inputBox}>
      <input className={input} defaultValue={defaultValue} onChange={onChange} />
      <Button disabled={!isChanged} onClick={handleChange} text="저장" size="sm" />
    </div>
  )
}
