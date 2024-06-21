'use client'

import Board from '@/app/[locale]/postings/_components/Board'
import ListView from '@/app/[locale]/postings/_components/ListView'
import PostingTop from '@/app/[locale]/postings/_components/PostingTop'
import useApplicants from '@/app/[locale]/postings/_hooks/useApplicants'
import { useDebounce } from '@/shared/hooks'
import { ApplicantsResponse } from '@/interface/applicants'
import React, { useDeferredValue, useEffect } from 'react'
import { useRecoilValue, useSetRecoilState } from 'recoil'
import {
  applicantsAtom,
  isBoardViewAtom,
  isIncludingFailedAtom,
  searchAtom,
  stepsAtom,
} from '@/app/[locale]/postings/_recoil'
import * as Styles from './styles'

interface PostingContentProps {
  initialApplicants: ApplicantsResponse
  postingId: string
}

const PostingContent = ({ initialApplicants, postingId }: PostingContentProps) => {
  const search = useRecoilValue(searchAtom)
  const deferredQuery = useDeferredValue(search)
  const isIncludingFailed = useRecoilValue(isIncludingFailedAtom)

  const setApplicants = useSetRecoilState(applicantsAtom)
  const setSteps = useSetRecoilState(stepsAtom)
  const isBoardView = useRecoilValue(isBoardViewAtom)

  const { data, refetch } = useApplicants(postingId, initialApplicants, {
    search,
    is_view_fail: isIncludingFailed,
  })

  useEffect(() => {
    if (!data) return
    setSteps(data?.posting_step)
    setApplicants(data?.applicant_list)
  }, [data])

  useEffect(() => {
    refetch()
  }, [isIncludingFailed])

  useDebounce(
    () => {
      refetch()
    },
    500,
    deferredQuery,
  )
  return (
    <Styles.Wrapper>
      <PostingTop id={postingId} />
      {isBoardView ? (
        <Board postingId={postingId} />
      ) : (
        <ListView applicants={data.applicant_list} />
      )}
    </Styles.Wrapper>
  )
}

export default PostingContent
