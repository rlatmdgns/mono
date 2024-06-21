import React from 'react'
import { FreshmanReport } from '@/entities/onboarding/types/reports'
import { OnBoardingReportRow } from '@/entities/onboarding'

interface OnBoardingReportRowListProps {
  freshmen: FreshmanReport[]
}

const OnBoardingReportRowList = ({ freshmen }: OnBoardingReportRowListProps) => {
  return (
    <>
      {freshmen.map((freshman) => {
        return <OnBoardingReportRow key={freshman.id} freshman={freshman} />
      })}
    </>
  )
}

export default OnBoardingReportRowList
