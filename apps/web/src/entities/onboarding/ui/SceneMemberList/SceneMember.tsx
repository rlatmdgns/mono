import { Avatar } from '@/shared/ui'
import { emailStyle, info, item, nameStyle } from './style.css'
import { SceneMemberItem } from '../../types/scenario'
import { HandleAppendReceive } from '@/entities/onboarding/types/receive'

interface SceneMemberProps extends SceneMemberItem {
  receivers: any
  onClick: HandleAppendReceive
}

export const SceneMember = ({
  id,
  type,
  name,
  profile,
  email,
  receivers,
  onClick,
}: SceneMemberProps) => {
  const handleClick = () => {
    const hasReceiver = receivers.some((receiver: SceneMemberItem) => receiver.id === id)
    if (hasReceiver) return

    onClick(type, email, id, name, profile)
  }
  return (
    <li className={item} onClick={() => handleClick()}>
      <Avatar src={profile} alt={name} size="sm" />
      <div className={info}>
        <span className={nameStyle}>{name}</span>
        <span className={emailStyle}>{email}</span>
      </div>
    </li>
  )
}
