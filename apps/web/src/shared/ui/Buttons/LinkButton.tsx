'use client'

import { LinkButtonProps } from './Button.interface'
import { getDefaultStyle, getIconColor } from './Button.functions'
import { ICON_SIZES } from './Button.constants'
import * as Styles from './styles'
import { Icon } from '@repo/ui'
import { colorType } from "@repo/ui/src/components/Icon";

export const LinkButton = ({
                             size = 'sm',
                             state = 'primary',
                             style,
                             width = '100%',
                             text,
                             iconSource,
                             isIconOnLeft = true,
                             href,
                             isNewTab = false,
                             disabled = false,
                           }: LinkButtonProps) => {
  const iconSizeToUse = ICON_SIZES[size]
  const iconColor = getIconColor(state, getDefaultStyle(state, style)) as colorType

  return (
    <Styles.LinkWrapper
      as="a"
      target={isNewTab ? '_blank' : '_self'}
      href={href}
      $size={size}
      $state={state}
      $style={getDefaultStyle(state, style)}
      $width={width}
      $isIconOnLeft={isIconOnLeft}
      $disabled={disabled}
    >
      {iconSource && <Icon icon={iconSource} color={iconColor} size={iconSizeToUse}/>}
      <Styles.TextLabel>{text}</Styles.TextLabel>
    </Styles.LinkWrapper>
  )
}
