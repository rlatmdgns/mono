'use client'

import { Select } from '@/shared/ui'
import { NATIONALITY_OPTIONS } from '../../constants'

interface NationalityInputProps {
  onChange: (value: string) => void
}

export const NationalityInput = ({ onChange }: NationalityInputProps) => {
  return (
    <>
      <Select
        options={NATIONALITY_OPTIONS}
        placeholder="국적을 선택해주세요."
        isSearchable
        onChange={({ value }) => onChange(value)}
        closeMenuOnScroll
      />
    </>
  )
}
