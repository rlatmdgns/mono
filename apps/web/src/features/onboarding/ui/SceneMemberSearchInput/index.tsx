import { SearchInput } from '@/shared/ui'
import { ChangeEvent } from 'react'

interface SceneMemberSearchInputProps {
  value: string
  onChange: (event: ChangeEvent<HTMLInputElement>) => void
}

export const SceneMemberSearchInput = ({ value, onChange }: SceneMemberSearchInputProps) => {
  return (
    <>
      <SearchInput
        value={value}
        placeholder="이름 또는 이메일을 검색해주세요."
        onChange={(event) => onChange(event)}
      />
    </>
  )
}
