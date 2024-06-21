'use client'

import * as Styles from './styles'
import { ButtonProps } from './Button.interface'
import { ICON_SIZES } from './Button.constants'
import { getDefaultStyle, getIconColor } from './Button.functions'
import { Icon } from '@repo/ui'
import { colorType } from "@repo/ui/src/components/Icon";

export const Button = ({
                         size = 'sm',
                         state = 'primary',
                         style,
                         width = '100%',
                         text,
                         iconSource,
                         isIconOnLeft = true,
                         disabled = false,
                         isLoading = false,
                         type = 'button',
                         onClick,
                         onMouseEnter,
                         onMouseLeave,
                       }: ButtonProps) => {
  const iconSizeToUse = ICON_SIZES[size]
  const iconColor = getIconColor(state, getDefaultStyle(state, style)) as colorType

  const handleClick = () => {
    if (!onClick) return
    onClick()
  }

  if (isLoading) {
    return (
      <Styles.Wrapper
        $size={size}
        $state={state}
        $style={getDefaultStyle(state, style)}
        $width={width}
        $isIconOnLeft={isIconOnLeft}
        disabled={disabled}
        type={type}
      >
        <Styles.Loading data-testid="loading-spinner"/>
      </Styles.Wrapper>
    )
  }

  return (
    <Styles.Wrapper
      $size={size}
      $state={state}
      $style={getDefaultStyle(state, style)}
      $width={width}
      $isIconOnLeft={isIconOnLeft}
      disabled={disabled}
      onClick={handleClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      type={type}
    >
      {iconSource && <Icon icon={iconSource} color={iconColor} size={iconSizeToUse}/>}
      {text}
    </Styles.Wrapper>
  )
}
