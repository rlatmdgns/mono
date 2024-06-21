import { Icon } from '../Icon'
import { required, text, wrapper } from './styles.css'

interface LabelProps {
  label: string
  size?: 'md' | 'lg'
  isRequired?: boolean
  hasInfo?: boolean
  isActive?: boolean
}

export const Label = ({
  label,
  size = 'md',
  isRequired = false,
  hasInfo = false,
  isActive = true,
}: LabelProps) => {
  return (
    <div className={wrapper({ size })}>
      <span className={text({ size, isActive })}>{label}</span>
      {isRequired && <span className={required({ size })}>*</span>}
      {hasInfo && <Icon icon="icon/info-line" color="neutralGray800" />}
    </div>
  )
}
