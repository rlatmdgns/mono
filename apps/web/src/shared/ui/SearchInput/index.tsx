'use client'

import * as Styles from './styles'
import React from 'react'
import { UseFormRegisterReturn } from 'react-hook-form'
import { TextInput } from '@/shared/ui'
import { Icon } from '@repo/ui'

export interface SearchInputProps {
  value?: string
  placeholder?: string
  maxWidth?: string
  width?: string
  onClick?: (event: React.MouseEvent<HTMLInputElement>) => void
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
  onKeyUp?: (event: React.KeyboardEvent<HTMLInputElement>) => void
  register?: UseFormRegisterReturn
  size?: 'sm' | 'md'
  disabled?: boolean
}

export const SearchInput = ({
  value,
  placeholder,
  onClick,
  onChange,
  onKeyUp,
  register,
  maxWidth = '100%',
  width = '100%',
  size = 'md',
  disabled = false,
}: SearchInputProps) => {
  return (
    <Styles.Box $maxWidth={maxWidth} $width={width} $size={size}>
      <TextInput
        value={value}
        placeholder={placeholder}
        width={'100%'}
        onClick={onClick}
        onChange={onChange}
        onKeyUp={onKeyUp}
        register={register}
        disabled={disabled}
      />
      <Styles.IconBox>
        <Icon icon={'icon/search-line'} color="neutralGray300" />
      </Styles.IconBox>
    </Styles.Box>
  )
}
