'use client'

import React from 'react'
import * as Styles from './styles'
import Skeleton from 'react-loading-skeleton'

const PostingHeaderSkeleton = () => {
  return (
    <Styles.PostingHeader>
      <Styles.Inner>
        <Styles.Left>
          <Styles.Title>
            <Skeleton width={200} height={26} />
          </Styles.Title>
          <Skeleton width={30} height={20} />
        </Styles.Left>
        <Styles.Menu>
          <Styles.MenuItem>
            <Skeleton width={100} height={38} />
          </Styles.MenuItem>
          <Styles.MenuItem>
            <Skeleton width={98} height={40} />
          </Styles.MenuItem>
        </Styles.Menu>
      </Styles.Inner>
    </Styles.PostingHeader>
  )
}

export default PostingHeaderSkeleton
