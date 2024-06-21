import { ScheduleGroupsInterface } from '@/interface/schedules'

export interface ScheduleListContainerProps {
  isEmpty: boolean
  scheduleGroups: ScheduleGroupsInterface[]
  handleScheduleDelete: (id: string) => void
}
