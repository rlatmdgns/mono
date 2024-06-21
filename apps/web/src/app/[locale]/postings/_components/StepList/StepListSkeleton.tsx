'use client'

import React from 'react'
import * as Styles from './styles'
import Skeleton from 'react-loading-skeleton'

const StepListSkeleton = () => {
  return (
    <div style={{ marginTop: '20px' }}>
      <Styles.Wrapper>
        <Skeleton width={285} height="100vh" />
        <Skeleton width={285} height="100vh" />
        <Skeleton width={285} height="100vh" />
        <Skeleton width={285} height="100vh" />
      </Styles.Wrapper>
    </div>
  )
}

export default StepListSkeleton
