import { IconNames } from "@repo/ui/src/components/Icon";

export interface ConfirmRadioModalProps {
  state?: 'positive' | 'negative'
  iconSource?: IconNames
  title: string
  subtitle?: string
  textCancel?: string
  textConfirm?: string
  onClose: () => void
  options: ConfirmRadioModalOption[]
  onSubmit: (value: string) => void
}

export interface ConfirmRadioModalOption {
  label: string
  isDirectInput?: boolean
}
