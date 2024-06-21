import React from 'react'
import { colorType, IconNames } from "@repo/ui/src/components/Icon";

export interface ButtonProps {
  state?: 'standard' | 'primary' | 'warning'
  style?: 'fill-strong' | 'fill-weak' | 'line' | 'mono'
  size?: 'xs' | 'sm' | 'md' | 'lg'
  width?: string
  text: string | React.ReactNode
  iconSource?: IconNames
  isIconOnLeft?: boolean
  gap?: number
  disabled?: boolean
  onClick?: () => void
  type?: 'button' | 'submit' | 'reset'
  isLoading?: boolean
  onMouseEnter?: () => void
  onMouseLeave?: () => void
}

export interface StyleProps {
  $size: 'xs' | 'sm' | 'md' | 'lg'
  $state: 'standard' | 'primary' | 'warning'
  $style: 'fill-strong' | 'fill-weak' | 'line' | 'mono'
  $isIconOnLeft?: boolean
  $width?: string
  $disabled?: boolean
}

export interface IconSizes {
  [key: string]: number
}

export interface IconBoxButtonProps {
  state?: 'standard' | 'primary' | 'warning'
  style?: 'fill-strong' | 'fill-weak' | 'line' | 'mono'
  size?: 'xs' | 'sm' | 'md' | 'lg'
  type?: 'button' | 'submit' | 'reset'
  disabled?: boolean
  onClick?: () => void
  icon: IconNames
  onMouseEnter?: () => void
  onMouseLeave?: () => void
}

export interface IconBoxButtonStyleProps {
  $state: 'standard' | 'primary' | 'warning'
  $style: 'fill-strong' | 'fill-weak' | 'line' | 'mono'
  $size: number
}

export interface IconButtonProps {
  icon: IconNames
  color?: colorType
  state?: 'primary' | 'standard'
  size?: 'xs' | 'sm' | 'md' | 'lg'
  onClick?: () => void
  disabled?: boolean
  ariaLabel?: string
}

export interface IconButtonStyleProps {
  $state: 'primary' | 'standard'
  $size: number
}

export interface LinkButtonProps extends ButtonProps {
  href: string
  isNewTab?: boolean
}
