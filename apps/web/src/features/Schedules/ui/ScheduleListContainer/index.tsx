import * as Styles from './styles'
import { EmptySchedule, ScheduleGroups } from '@/features/Schedules/ui'
import { ScheduleListContainerProps } from '@/features/Schedules/ui/ScheduleListContainer/ScheduleListContainer.interface'

export const ScheduleListContainer = ({
  isEmpty,
  scheduleGroups,
  handleScheduleDelete,
}: ScheduleListContainerProps) => {
  return (
    <Styles.ScheduleListContainer>
      <EmptySchedule isEmpty={isEmpty} />
      <ScheduleGroups
        isEmpty={isEmpty}
        scheduleGroups={scheduleGroups}
        handleScheduleDelete={handleScheduleDelete}
      />
    </Styles.ScheduleListContainer>
  )
}
