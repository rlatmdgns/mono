import { HandleRemoveReceive } from '@/entities/onboarding/types/receive'
import { Avatar, Icon } from '@repo/ui'
import { item, nameStyle } from './styles.css'

interface SurveyReceiverProps {
  name?: string
  profile?: string
  email: string
  index: number
  onRemoveReceiver: HandleRemoveReceive
}

export const Receiver = ({
  name,
  profile,
  email,
  index,
  onRemoveReceiver,
}: SurveyReceiverProps) => {
  return (
    <li className={item} key={email}>
      {profile && <Avatar src={profile} alt={!name ? '' : name} size="xs" />}
      {name && <span className={nameStyle}>{name}</span>}
      {!email && <span className={nameStyle}>{email}</span>}
      <Icon
        icon="icon/cancle-solid"
        color="neutralGray300"
        onClick={() => onRemoveReceiver(index)}
      />
    </li>
  )
}
