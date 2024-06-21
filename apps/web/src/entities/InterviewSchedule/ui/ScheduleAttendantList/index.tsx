import * as Styles from './styles'
import { Attendant } from '@/interface/schedules'
import React from 'react'
import { ScheduleAttendantItem } from '../ScheduleAttendantItem'

interface ScheduleAttendantListProps {
  scheduleAttendants: Attendant[]
}

export const ScheduleAttendantList = ({ scheduleAttendants }: ScheduleAttendantListProps) => {
  return (
    <Styles.Wrapper>
      {scheduleAttendants.map((attendant, index) => (
        <ScheduleAttendantItem
          key={`attendant_${index}`}
          userName={attendant.user_name}
          userProfile={attendant.user_profile}
        />
      ))}
    </Styles.Wrapper>
  )
}
