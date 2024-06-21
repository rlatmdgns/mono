'use client'

import * as Styles from './styles'
import React from 'react'
import { BUTTON_SIZES, ICON_SIZES } from './Button.constants'
import { IconBoxButtonProps } from './Button.interface'
import { getDefaultStyle, getIconColor } from './Button.functions'
import { Icon } from '@repo/ui'
import { colorType } from "@repo/ui/src/components/Icon";

export const IconBoxButton = ({
                                size = 'sm',
                                state = 'primary',
                                type = 'button',
                                style,
                                icon,
                                onClick,
                                disabled,
                                onMouseEnter,
                                onMouseLeave,
                              }: IconBoxButtonProps) => {
  const wrapperSize = BUTTON_SIZES[size]
  const iconSize = ICON_SIZES[size]
  const iconColor = getIconColor(state, getDefaultStyle(state, style)) as colorType

  return (
    <Styles.IconWrapper
      onClick={onClick}
      disabled={disabled}
      type={type}
      $size={wrapperSize}
      $state={state}
      $style={getDefaultStyle(state, style)}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <Icon icon={icon} color={iconColor} size={iconSize}/>
    </Styles.IconWrapper>
  )
}
