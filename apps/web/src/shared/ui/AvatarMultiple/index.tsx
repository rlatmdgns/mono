'use client'

import { PostingMember } from '@/interface/posting'
import { Avatar } from '@/shared/ui'
import { UnknownAvatar } from './UnknownAvatar'
import * as Styles from './styles'

interface AvatarMultipleProps {
  members: PostingMember[]
  size?: 'sm'
}

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
      <Styles.Wrapper>
        <Styles.List $size={size}>
          {members?.slice(0, 3).map((member, index) => (
            <Styles.Item key={`${member.user_email}-${index}`} $size={size}>
              <Avatar
                alt={member?.user_name}
                src={member?.user_profile}
                disabled={member.disabled}
                size={size}
                isBorder
              />
            </Styles.Item>
          ))}
        </Styles.List>
        <Styles.Length $size={size}>+{members?.length - 3}</Styles.Length>
      </Styles.Wrapper>
    )
  }

  return (
    <Styles.Wrapper>
      <Styles.List $size={size}>
        {members?.map((member, index) => (
          <Styles.Item key={`${member.user_email}-${index}`} $size={size}>
            <Avatar
              alt={member.user_name}
              src={member.user_profile}
              disabled={member.disabled}
              size={size}
              isBorder
            />
          </Styles.Item>
        ))}
        {shouldRenderUnknownAvatars && renderUnknownAvatars()}
      </Styles.List>
    </Styles.Wrapper>
  )
}
