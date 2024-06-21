import * as Styles from './styles'
import { Postings } from '@/interface/postings'
import { CalendarSidebar, InterviewSchedules } from '@/features/Calendar'

interface InterviewCalendarProps {
  initialFolder: Postings
  initialSchedule: any
  scheduleId: string
}

export const InterviewCalendar = ({
  initialFolder,
  initialSchedule,
  scheduleId,
}: InterviewCalendarProps) => {
  return (
    <Styles.Wrapper>
      <CalendarSidebar initialFolder={initialFolder} />
      <Styles.InterviewSchedulesWrapper>
        <InterviewSchedules initialSchedule={initialSchedule} scheduleId={scheduleId} />
      </Styles.InterviewSchedulesWrapper>
    </Styles.Wrapper>
  )
}
