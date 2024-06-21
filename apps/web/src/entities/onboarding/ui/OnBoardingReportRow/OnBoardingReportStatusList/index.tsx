import React from 'react'
import { SequencesStatus } from '@/entities/onboarding/types/reports'
import OnBoardingReportStatusItem from '@/features/onboarding/ui/OnBoardingReportStatusItem'
import {
  cell,
  sequenceGroup,
} from '@/entities/onboarding/ui/OnBoardingReportRow/OnBoardingReportStatusList/styles.css'

interface OnBoardingReportStatusListProps {
  statuses: SequencesStatus[]
}

export const OnBoardingReportStatusList = ({ statuses }: OnBoardingReportStatusListProps) => {
  return (
    <div className={sequenceGroup}>
      {statuses.map((status, index) => {
        return (
          <div key={`sequences_status_${index}`} className={cell}>
            <OnBoardingReportStatusItem total={status.total} complete={status.complete} />
          </div>
        )
      })}
    </div>
  )
}
