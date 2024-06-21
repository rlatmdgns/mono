'use client'

import React from 'react'
import * as Styles from './styles'
import PostingTopSkeleton from '@/app/[locale]/postings/_components/PostingTop/PostingTopSkeleton'
import StepListSkeleton from '@/app/[locale]/postings/_components/StepList/StepListSkeleton'

const PostingContentSkeleton = () => {
  return (
    <Styles.Wrapper>
      <PostingTopSkeleton />
      <StepListSkeleton />
    </Styles.Wrapper>
  )
}

export default PostingContentSkeleton
