'use client'

import * as Styles from './styles'
import React from 'react'

interface DropdownItemProps {
  size?: 'md' | 'lg'
  disabled?: boolean
  isWarning?: boolean
  children: React.ReactNode
  onClick?: () => void
  testId?: string
}

const DropdownItem = ({
  size = 'md',
  disabled = false,
  isWarning = false,
  children,
  onClick,
  testId,
}: DropdownItemProps) => {
  const handleClick = () => {
    if (disabled) return
    onClick?.()
  }

  return (
    <Styles.Item
      onClick={handleClick}
      $disabled={disabled}
      $size={size}
      $isWarning={isWarning}
      data-testid={testId}
    >
      {children}
    </Styles.Item>
  )
}

export default DropdownItem
