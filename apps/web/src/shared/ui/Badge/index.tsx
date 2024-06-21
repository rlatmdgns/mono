'use client'
import React from 'react'
import * as Styles from './styles'

interface BadgeProps {
  readonly text: string
  readonly type?: 'standard' | 'primary' | 'warning' | 'gray' | 'proceeding' | 'success'
  readonly isDisabled?: boolean
  readonly rounded?: number
}

export const Badge = ({ text, type = 'standard', isDisabled, rounded = 4 }: BadgeProps) => {
  return (
    <Styles.Wrapper $type={type} $isDisabled={isDisabled} $rounded={rounded}>
      {text}
    </Styles.Wrapper>
  )
}
