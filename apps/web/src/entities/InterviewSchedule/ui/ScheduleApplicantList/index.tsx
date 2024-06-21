import * as Styles from './styles'
import { Applicant } from '@/interface/schedules'
import { ScheduleApplicantItem } from '../ScheduleApplicantItem'
import React from 'react'

interface ScheduleApplicantListProps {
  scheduleApplicants: Applicant[]
}

export const ScheduleApplicantList = ({ scheduleApplicants }: ScheduleApplicantListProps) => {
  const isEmptyApplicants = scheduleApplicants.every((applicant) => !applicant)

  if (isEmptyApplicants) return null
  return (
    <Styles.Wrapper>
      {scheduleApplicants?.map((applicant) => (
        <ScheduleApplicantItem
          key={`schedule_applicant_${applicant.applicant_id}`}
          applicant={applicant}
        />
      ))}
    </Styles.Wrapper>
  )
}

export default ScheduleApplicantList
