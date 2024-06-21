import * as Styles from './styles'
import { Icon } from '@repo/ui'
import { colorType, IconNames } from "@repo/ui/src/components/Icon";

interface SelectScheduleHeaderProps {
  icon?: IconNames
  iconColor?: colorType
  text: string
}

const SelectScheduleHeader = ({text, icon, iconColor}: SelectScheduleHeaderProps) => {
  return (
    <Styles.ScheduleHeader>
      {icon && iconColor && <Icon icon={icon} color={iconColor} size={64}/>}
      <Styles.Title>{text}</Styles.Title>
    </Styles.ScheduleHeader>
  )
}

export default SelectScheduleHeader
