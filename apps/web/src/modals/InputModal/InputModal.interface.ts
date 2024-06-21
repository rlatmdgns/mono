export interface InputModalProps {
  title: string
  subtitle: string
  isInfo?: boolean
  value?: string | undefined
  placeholder?: string
  onChange?: (value: React.ChangeEvent<HTMLInputElement>) => void
  onSubmit: (value: string) => void
  onClose: () => void
  textSubmit?: string
  maxLength?: number
  state?: 'success' | 'error'
  guideText?: string
  disabled?: boolean
}
