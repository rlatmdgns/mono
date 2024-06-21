import { InterviewSchedule } from '@/interface/schedules'
import { scheduleDayJs } from '@/shared/lib/index'

export const formatSchedules = (schedule?: InterviewSchedule[]) => {
  if (!schedule) return []
  return schedule.map((schedule: any) => {
    return {
      id: schedule.schedule_id,
      schedule_id: schedule.schedule_id,
      posting_id: schedule.posting_id,
      title: schedule.posting_title,
      is_canceled: schedule.is_canceled,
      posting_color: schedule.posting_color,
      start: scheduleDayJs(schedule.schedule_start).toDate(),
      end: scheduleDayJs(schedule.schedule_end).toDate(),
      schedule_address: schedule.schedule_address,
      schedule_detail_address: schedule.detail_address,
      schedule_applicant: schedule.schedule_applicant,
    }
  })
}
