import React from 'react'
import {
  countBox,
  countWrapper,
  title,
} from '@/entities/onboarding/ui/OnBoardingReportCount/styles.css'

interface OnBoardingReportCountProps {
  count: number
}

export const OnBoardingReportCount = ({ count }: OnBoardingReportCountProps) => {
  return (
    <div className={countWrapper}>
      <h3 className={title}>리포트</h3>
      <em className={countBox}>({count})</em>
    </div>
  )
}
