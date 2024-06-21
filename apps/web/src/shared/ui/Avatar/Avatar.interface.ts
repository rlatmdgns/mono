export interface AvatarProps {
  size?: 'xs' | 'sm' | 'md' | 'lg'
  alt: string
  src: string
  isBorder?: boolean
  disabled?: boolean
}

export interface WrapperProps {
  $size: number
  $fontSize?: number
  $isBorder?: boolean
  $background?: string
  $disabled?: boolean
}

export interface SizeOptions {
  [key: string]: number
}
