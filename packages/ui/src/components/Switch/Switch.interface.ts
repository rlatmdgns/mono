export interface SwitchProps {
  name?: string
  size?: 'xs' | 'sm' | 'md' | 'lg'
  isDisabled?: boolean
  isChecked: boolean
  onChange: (checked: boolean) => void
}

export interface SizeOptionsProps {
  [index: string]: SizeOptionStyleProps
}

export interface SizeOptionStyleProps {
  [index: string]: string | number
}

export interface SwitchLabelProps {
  $width: SizeOptionStyleProps
  $height: SizeOptionStyleProps
  $size: 'xs' | 'sm' | 'md' | 'lg'
  $backgroundColor: string
  $isDisabled: boolean
}

export interface SwitchToggleProps {
  $toggle: SizeOptionStyleProps
  $transformX: SizeOptionStyleProps
  $size: 'xs' | 'sm' | 'md' | 'lg'
  $isChecked: boolean
  $isDisabled: boolean
}
