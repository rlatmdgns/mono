import SettingDropDown from '@/app/[locale]/postings/_components/SettingDropDown'
import { PostingMember } from '@/interface/posting'
import React from 'react'
import * as Styles from './styles'
import PostingMemberButton from '@/app/[locale]/postings/_components/PostingMemberButton'

interface PostingHeaderMenuProps {
  url: string
  id: number
  title: string
  isClose: boolean
  isActive: boolean
  isStored: boolean
  isReApplyBlocked: boolean
  isMultipleApplyBlocked: boolean
  isDuplicateApplyBlocked: boolean
  hasApplicationForm: boolean
  members: PostingMember[]
  adminMembers: PostingMember[]
}

const PostingHeaderMenu = ({
  url,
  id,
  title,
  isClose,
  isActive,
  isStored,
  isReApplyBlocked,
  isMultipleApplyBlocked,
  isDuplicateApplyBlocked,
  hasApplicationForm,
  members,
  adminMembers,
}: PostingHeaderMenuProps) => {
  const postingMembers = [...members, ...adminMembers]

  return (
    <Styles.Menu>
      <Styles.MenuItem>
        <PostingMemberButton members={postingMembers} id={id} />
      </Styles.MenuItem>
      <Styles.MenuItem>
        <SettingDropDown
          url={url}
          id={id}
          title={title}
          isClose={isClose}
          isActive={isActive}
          isStored={isStored}
          isReApplyBlocked={isReApplyBlocked}
          isMultipleApplyBlocked={isMultipleApplyBlocked}
          isDuplicateApplyBlocked={isDuplicateApplyBlocked}
          hasApplicationForm={hasApplicationForm}
        />
      </Styles.MenuItem>
    </Styles.Menu>
  )
}

export default PostingHeaderMenu
