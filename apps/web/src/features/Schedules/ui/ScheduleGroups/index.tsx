import { ScheduleListContainerProps } from '@/features/Schedules/ui/ScheduleListContainer/ScheduleListContainer.interface'
import { ScheduleList } from '@/features/Schedules/ui'

export const ScheduleGroups = ({
  isEmpty,
  scheduleGroups,
  handleScheduleDelete,
}: ScheduleListContainerProps) => {
  if (isEmpty) return

  return scheduleGroups?.map((group: any) => (
    <ScheduleList
      key={group.date}
      date={group.date}
      schedules={group?.schedulesList}
      handleScheduleDelete={handleScheduleDelete}
    />
  ))
}
