'use client'

import * as Styles from './styles'
import { AvatarMultiple, Dropdown, MemberList } from '@/shared/ui'
import { PostingMember } from '@/interface/posting'

interface PostingLockerItemProps {
  members: PostingMember[]
  isDropdownActive: boolean
  onDropdownToggle: any
}

const PostingLockerMember = ({
  members,
  isDropdownActive,
  onDropdownToggle,
}: PostingLockerItemProps) => {
  if (members.length < 1) {
    return <AvatarMultiple members={members} />
  }

  return (
    <Dropdown
      button={
        <Styles.AvatarWrap onClick={onDropdownToggle}>
          <AvatarMultiple members={members} />
        </Styles.AvatarWrap>
      }
      isNotPortal
      isParentStatusClosed={isDropdownActive}
      direction="left"
    >
      <MemberList members={members} />
    </Dropdown>
  )
}

export default PostingLockerMember
