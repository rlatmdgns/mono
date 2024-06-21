'use client'

import { SelectDatePicker } from '@/shared/ui'

interface BirthdayInputProps {
  value: string
  onChange: (date: Date | null) => void
}

export const BirthdayInput = ({ value, onChange }: BirthdayInputProps) => {
  return (
    <>
      <SelectDatePicker
        placeholder="생년월일을 입력해주세요."
        value={value}
        onChange={onChange}
        closeOnScroll
      />
    </>
  )
}
