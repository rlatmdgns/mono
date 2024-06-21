'use client'
import React from 'react'
import * as Styles from './styles'

interface TagProps {
  readonly text: string
  readonly type?: 'standard' | 'primary' | 'warning' | 'gray'
  readonly isDisabled?: boolean
  readonly size?: 'md' | 'lg'
}

export const Tag = ({ text, type = 'standard', size = 'lg', isDisabled }: TagProps) => {
  return (
    <Styles.Wrapper $type={type} $isDisabled={isDisabled} $size={size}>
      {text}
    </Styles.Wrapper>
  )
}
