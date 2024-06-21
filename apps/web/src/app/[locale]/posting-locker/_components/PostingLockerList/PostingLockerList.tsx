'use client'

import { useState } from 'react'
import { postingLockerDataForRender } from '@/app/[locale]/posting-locker/_components/PostingLockerItem/PostingLockerItem.factory'
import { Posting } from '@/interface/postingLocker'
import { PostingMember } from '@/interface/posting'
import { MODAL } from '@/shared/constants'
import { useModal } from '@/shared/hooks'
import useRestorePostingLocker from '@/app/[locale]/posting-locker/_hooks/useRestorePostingLocker'
import PostingLockerItem from '@/app/[locale]/posting-locker/_components/PostingLockerItem'
import * as Styles from './styles'

interface PostingLockerListProps {
  postings: Posting[]
  adminMembers: PostingMember[]
  inViewRef: (node?: Element | null) => void
}

const PostingLockerList = ({ postings, adminMembers, inViewRef }: PostingLockerListProps) => {
  const { openModal, closeModal } = useModal()
  const { restoreMutate } = useRestorePostingLocker()

  const [dropdownId, setDropdownId] = useState<number | null>(null)

  const handleDropdownToggle = (id: number) => {
    setDropdownId(id)
  }

  const handleReStore = async (id: number) => {
    openModal(MODAL.CONFIRM, {
      state: 'positive',
      title: '마감된 채용 공고를 복구하시겠습니까?',
      subtitle: '복구된 공고는 공고 탭 목록에서 확인할 수 있습니다.',
      iconSource: 'icon/return-solid',
      onClick: () => {
        restoreMutate(id)
        closeModal(MODAL.CONFIRM)
      },
      textConfirm: '복구',
    })
  }

  return (
    <Styles.List>
      {postings?.map((posting, index) => (
        <PostingLockerItem
          key={`${posting.posting_title}_${index}`}
          {...postingLockerDataForRender(posting)}
          onClick={handleReStore}
          adminMembers={adminMembers}
          isDropdownActive={dropdownId === posting.posting_id}
          onDropdownToggle={() => handleDropdownToggle(posting.posting_id)}
        />
      ))}
      <Styles.Target ref={inViewRef}></Styles.Target>
    </Styles.List>
  )
}

export default PostingLockerList
