export interface RadioProps {
  state?: 'primary' | 'secondary'
  size?: 'md' | 'lg'
  checked?: boolean
  name: string
  labelText?: string
  value?: string
  onChange?: () => void
  isRequired?: boolean
  hasInfo?: boolean
  disabled?: boolean
}
