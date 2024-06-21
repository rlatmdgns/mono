import { Icon } from '../Icon'
import { item, unknownAvatar } from './styles.css'

interface UnknownAvatarProps {
  index: number
  size?: 'sm'
}

export const UnknownAvatar = ({ size, index }: UnknownAvatarProps) => {
  return (
    <li className={item({ size })} key={`unknown-avatar-${index}`}>
      <div className={unknownAvatar}>
        <Icon icon="icon/member-solid" color="neutralGray200" size={16} />
      </div>
    </li>
  )
}
