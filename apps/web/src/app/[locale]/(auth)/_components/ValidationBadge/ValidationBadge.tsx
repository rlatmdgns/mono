import * as Styles from './styles'
import { Icon } from '@repo/ui'

interface ValidationBadgeProps {
  isChecked?: boolean
  text: string
}

const ValidationBadge = ({ isChecked = false, text }: ValidationBadgeProps) => {
  const iconColor = isChecked ? 'blue500' : 'neutralGray600'

  return (
    <Styles.Badge $isChecked={isChecked}>
      <Icon icon="icon/check-line1" color={iconColor} />
      <Styles.Text $isChecked={isChecked}>{text}</Styles.Text>
    </Styles.Badge>
  )
}

export default ValidationBadge
