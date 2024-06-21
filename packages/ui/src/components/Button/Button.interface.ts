import { colorType, IconNames } from '../Icon'

export type Size = 'xs' | 'sm' | 'md' | 'lg' | 'xl'
export type State = 'primary' | 'secondary' | 'danger'
export type Style = 'fill-strong' | 'fill-weak' | 'line' | 'mono'

export interface ButtonProps {
  type?: 'button' | 'submit' | 'reset'
  size?: Size
  state?: State
  style?: Style
  width?: string
  text?: string
  leadingIcon?: IconNames
  trailingIcon?: IconNames
  leadingIconColor?: colorType
  trailingIconColor?: colorType
  href?: string
  isNewTab?: boolean
  isLoading?: boolean
  disabled?: boolean
  onClick?: () => void
  onMouseEnter?: () => void
  onMouseLeave?: () => void
}

export interface StyleProps {
  $size: Size
  $state: State
  $style: Style
  $width?: string
  $disabled?: boolean
}
