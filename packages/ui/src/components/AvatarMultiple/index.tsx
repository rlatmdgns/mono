import { Avatar } from '../Avatar'
import { AvatarMultipleProps } from './AvatarMultiple.interface'
import { UnknownAvatar } from './UnknownAvatar'
import { item, lengthStyle, list, wrapper } from './styles.css'

export const AvatarMultiple = ({ members, size }: AvatarMultipleProps) => {
  const length = members?.length
  const isMoreThanTree = members?.length > 3
  const shouldRenderUnknownAvatars = length < 3

  const renderUnknownAvatars = () => {
    const unknownAvatarList = []

    for (let i = 0; i < 3 - length; i++) {
      unknownAvatarList.push(<UnknownAvatar index={i} size={size} />)
    }

    return unknownAvatarList
  }

  if (isMoreThanTree) {
    return (
      <div className={wrapper}>
        <ul className={list({ size })}>
          {members?.slice(0, 3).map((member, index) => (
            <li className={item({ size })} key={`${member.user_email}-${index}`}>
              <Avatar
                alt={member?.user_name}
                src={member?.user_profile}
                disabled={member.disabled}
                size={size}
                isBorder
              />
            </li>
          ))}
        </ul>
        <div className={lengthStyle({ size })}>+{members?.length - 3}</div>
      </div>
    )
  }

  return (
    <div className={wrapper}>
      <ul className={list({ size })}>
        {members?.map((member, index) => (
          <li className={item({ size })} key={`${member.user_email}-${index}`}>
            <Avatar
              alt={member.user_name}
              src={member.user_profile}
              size={size}
              disabled={member.disabled}
              isBorder
            />
          </li>
        ))}
        {shouldRenderUnknownAvatars && renderUnknownAvatars()}
      </ul>
    </div>
  )
}
