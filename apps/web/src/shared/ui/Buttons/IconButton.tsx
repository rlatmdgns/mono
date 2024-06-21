'use client'

import * as Styles from './styles'
import React from 'react'
import { IconButtonProps } from '@/shared/ui/Buttons/Button.interface'
import { ICON_BUTTON_SIZES, ICON_BUTTON_ICON_SIZES } from './Button.constants'
import { Icon } from '@repo/ui'

export const IconButton = ({
  icon,
  color = 'neutralGray500',
  state = 'standard',
  size = 'lg',
  onClick,
  disabled,
  ariaLabel,
}: IconButtonProps) => {
  const buttonSize = ICON_BUTTON_SIZES[size]
  const iconSize = ICON_BUTTON_ICON_SIZES[size]

  return (
    <Styles.IconButton
      type="button"
      onClick={onClick}
      disabled={disabled}
      $size={buttonSize}
      $state={state}
      aria-label={ariaLabel}
    >
      <Icon icon={icon} color={color} size={iconSize} />
    </Styles.IconButton>
  )
}
