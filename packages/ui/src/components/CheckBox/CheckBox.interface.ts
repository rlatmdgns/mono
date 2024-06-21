export type CheckBoxType = 'primary' | 'secondary'

export interface CheckBoxProps {
  isChecked?: boolean
  isPartial?: boolean
  name?: string
  text?: string
  size?: 'md' | 'lg'
  type?: CheckBoxType
  isRequired?: boolean
  hasInfo?: boolean
  disabled?: boolean
  onChange?: (checked: boolean) => void
}
