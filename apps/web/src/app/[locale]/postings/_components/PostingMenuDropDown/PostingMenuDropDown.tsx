'use client'

import PostingMenuDropdownAuth from '@/app/[locale]/postings/_components/PostingMenuDropdownAuth'
import useSearchApplicants from '@/app/[locale]/postings/_hooks/useSearchApplicants'
import { IconBoxButton, Dropdown } from '@/shared/ui'
import { AUTHORITY } from '@/shared/constants'
import React, { useState } from 'react'
import { useRecoilState, useRecoilValue } from 'recoil'
import {
  isBoardViewAtom,
  isIncludingFailedAtom,
  isVoteViewAtom,
  searchAtom,
} from '@/app/[locale]/postings/_recoil'
import PostingMenuSwitch from '@/app/[locale]/postings/_components/PostingMenuDropDown/components/PostingMenuSwitch/PostingMenuSwitch'
import { useAuthority } from '@/shared/hooks'

interface PostingMenuDropDownProps {
  id: string
}

const PostingMenuDropDown = ({ id }: PostingMenuDropDownProps) => {
  const { authority } = useAuthority()
  const isEvaluator = authority === AUTHORITY.EVALUATOR

  const search = useRecoilValue(searchAtom)
  const { searchApplicantsMutate } = useSearchApplicants(id)
  const [isIncludingFailed, setIsIncludingFailed] = useRecoilState(isIncludingFailedAtom)
  const [isVoteView, setIsVoteView] = useRecoilState(isVoteViewAtom)
  const isBoardView = useRecoilValue(isBoardViewAtom)

  const [isClosed, setIsClosed] = useState(false)

  const handleClosedToggle = (status: boolean) => {
    setIsClosed(status)
  }

  const handleApplicantToggle = () => {
    setIsIncludingFailed(!isIncludingFailed)
    searchApplicantsMutate({ search, is_view_fail: !isIncludingFailed })
  }

  const handleVoteViewToggle = () => {
    setIsVoteView(!isVoteView)
  }

  if (isEvaluator && !isBoardView) return null
  return (
    <Dropdown
      direction="left"
      button={
        <IconBoxButton
          state="standard"
          style="line"
          icon={'icon/more-solid'}
          onClick={() => handleClosedToggle(true)}
        />
      }
      isParentStatusClosed={isClosed}
    >
      <PostingMenuDropdownAuth id={id} handleClosedToggle={handleClosedToggle} />
      <PostingMenuSwitch
        isIncludingFailed={isIncludingFailed}
        handleApplicantToggle={handleApplicantToggle}
        isVoteView={isVoteView}
        handleVoteViewToggle={handleVoteViewToggle}
      />
    </Dropdown>
  )
}

export default PostingMenuDropDown
