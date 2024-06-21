import { Icon } from '@repo/ui'
import * as Styles from './styles'

interface UnknownAvatarProps {
  index: number
  size?: 'sm'
}

export const UnknownAvatar = ({ index, size }: UnknownAvatarProps) => {
  return (
    <Styles.Item key={`unknown-avatar-${index}`} $size={size}>
      <Styles.UnknownAvatar $size={size}>
        <Icon icon={'icon/member-solid'} color="neutralGray200" size={size === 'sm' ? 12 : 16} />
      </Styles.UnknownAvatar>
    </Styles.Item>
  )
}
