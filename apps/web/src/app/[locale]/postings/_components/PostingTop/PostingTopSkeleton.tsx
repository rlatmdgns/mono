'use client'

import React from 'react'
import * as Styles from './styles'
import Skeleton from 'react-loading-skeleton'

const PostingTopSkeleton = () => {
  return (
    <Styles.Wrapper>
      <Styles.Left>
        <Skeleton width={184} height={40} />
        <Skeleton width={40} height={40} />
      </Styles.Left>
    </Styles.Wrapper>
  )
}

export default PostingTopSkeleton
