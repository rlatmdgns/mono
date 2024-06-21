import { Empty } from '@/shared/ui'
import PostingItem from '@/features/Home/components/PostingItem/PostingItem'
import { PostingMember } from '@/interface/posting'
import { ProceedingPosting } from '@/services/home/getHome.interface'
import React from 'react'
import * as Styles from './styles'
import { useTranslations } from 'next-intl'

interface PostingListProps {
  postings: ProceedingPosting[]
  adminMembers: PostingMember[]
}

const PostingList = ({ postings, adminMembers }: PostingListProps) => {
  const $t = useTranslations('messages')
  if (postings.length < 1) {
    return <Empty iconSource="icon/recruitment-solid" title={$t('empty_announcement_list')} />
  }
  return (
    <Styles.List>
      {postings?.map((posting) => (
        <PostingItem
          key={posting.posting_id}
          id={posting.posting_id}
          title={posting.posting_title}
          field={posting.posting_field}
          createdAt={posting.posting_date}
          dueDate={posting.posting_deadline || posting.close_date}
          members={[...posting.posting_member, ...adminMembers]}
          total={posting.total_applicants_count}
          passCount={posting.pass_applicants_count}
          failCount={posting.fail_applicants_count}
          isAccess={posting.is_access}
          closeState={posting.close_state}
          activateState={posting.activate_state}
        />
      ))}
    </Styles.List>
  )
}

export default PostingList
