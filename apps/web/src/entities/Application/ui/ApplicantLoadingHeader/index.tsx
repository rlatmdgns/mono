'use client'

import * as Styles from './styles'
import Skeleton from 'react-loading-skeleton'

export const ApplicantLoadingHeader = () => {
  return (
    <Styles.Header>
      <Styles.Back>
        <Skeleton width={24} height={24} />
        <Styles.ButtonSkeleton>지원서 양식 </Styles.ButtonSkeleton>
      </Styles.Back>
      <Styles.Buttons>
        <Skeleton width={72} height={40} />
        <Skeleton width={72} height={40} />
      </Styles.Buttons>
    </Styles.Header>
  )
}
