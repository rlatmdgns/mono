export interface CheckBoxProps {
  name?: string
  disabled?: boolean
  isChecked: boolean
  onChange: (checked: boolean) => void
  size?: 'sm' | 'md'
  text?: string
}

export interface StylesProps {
  $size: number
  $isChecked: boolean
  $disabled: boolean
}

export interface BoxStylesProps {
  $size: number
  $isChecked: boolean
}

export interface IconStylesProps {
  $isChecked: boolean
}
