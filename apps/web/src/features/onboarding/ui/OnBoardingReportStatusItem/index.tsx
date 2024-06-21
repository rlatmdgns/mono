import React from 'react'
import { Chip } from '@repo/ui'

interface OnBoardingReportStatusItemProps {
  complete: number
  total: number
}

const OnBoardingReportStatusItem = ({ complete, total }: OnBoardingReportStatusItemProps) => {
  const isComplete = complete === total
  if (!isComplete) {
    return <Chip label={`${complete}/${total} 완료`} status="info" />
  }
  return <Chip label="완료" />
}

export default OnBoardingReportStatusItem
