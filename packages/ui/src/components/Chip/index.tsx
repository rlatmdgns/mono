import { Icon } from '../Icon'
import { getChipIconColor } from './Chip.factory'
import { ChipProps } from './Chip.interface'
import { labelStyle, wrapper } from './styles.css'

export const Chip = ({
  status = 'default',
  size = 'md',
  label,
  leadingIcon,
  trailingIcon,
}: ChipProps) => {
  const iconColor = getChipIconColor(status)

  return (
    <div
      className={wrapper({
        status,
        size,
      })}
    >
      {leadingIcon && <Icon icon={leadingIcon} color={iconColor} />}
      <span className={labelStyle({ status, size })}>{label}</span>
      {trailingIcon && <Icon icon={trailingIcon} color={iconColor} />}
    </div>
  )
}
