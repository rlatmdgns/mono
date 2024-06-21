import { RequestSchedule } from '@/interface/schedules'
import * as Styles from './styles'
import { ScheduleItem } from '@/features/Schedules/ui'

interface ScheduleListProps {
  date: string
  schedules: RequestSchedule[]
  handleScheduleDelete: (id: string) => void
}

export const ScheduleList = ({ date, schedules, handleScheduleDelete }: ScheduleListProps) => {
  const onlyScheduled = schedules.filter((schedule) => !schedule.isScheduled).length === 0
  if (onlyScheduled) return
  return (
    <Styles.ScheduleListWrap>
      <Styles.ScheduleDate>{date}</Styles.ScheduleDate>
      <Styles.ScheduleList>
        {schedules.map((schedule, scheduleIdx) => (
          <ScheduleItem
            key={`${schedule.id}_${scheduleIdx}`}
            schedule={schedule}
            handleScheduleDelete={handleScheduleDelete}
          />
        ))}
      </Styles.ScheduleList>
    </Styles.ScheduleListWrap>
  )
}
