'use client'

import * as Styles from './styles'
import { Postings } from '@/interface/postings'
import { OnComingInterview } from '@/features/Calendar'
import { InterviewCalendar } from '@/widgets/Calendar'

interface CalendarContainerProps {
  initialFolder: Postings
  initialSchedule: any
  initialOnComingSchedule: any
  scheduleId: string
}

export const CalendarContainer = ({
  initialFolder,
  initialSchedule,
  initialOnComingSchedule,
  scheduleId,
}: CalendarContainerProps) => {
  return (
    <Styles.CalendarContainer>
      <InterviewCalendar
        initialFolder={initialFolder}
        initialSchedule={initialSchedule}
        scheduleId={scheduleId}
      />
      <Styles.CalendarFooter>
        <OnComingInterview initialOnComingSchedule={initialOnComingSchedule} />
      </Styles.CalendarFooter>
    </Styles.CalendarContainer>
  )
}
