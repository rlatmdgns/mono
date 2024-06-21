import React from 'react'
import {
  processBar,
  processBarBox,
} from '@/entities/onboarding/ui/OnBoardingReportRow/ProgressBar/styles.css'

interface ProgressBarProps {
  total: number
  complete: number
}

export const ProgressBar = ({ total, complete }: ProgressBarProps) => {
  return (
    <div className={processBarBox}>
      <progress className={processBar} value={complete} max={total} />총 {total}개 작업 중{' '}
      {complete}개 완료
    </div>
  )
}
