import * as Styles from './styles'
import { InterviewSchedule } from '@/interface/schedules'
import { ScheduleApplicantList } from './ScheduleApplicantList'
import { getDayFormat } from '@/shared/lib/utils'
import { Location } from '@/shared/ui'
import React from 'react'
import { Icon } from '@repo/ui'

interface OnComingInterviewItemProps {
  schedule: InterviewSchedule
  onClick: (schedule: InterviewSchedule) => void
}

export const OnComingInterviewItem = ({ schedule, onClick }: OnComingInterviewItemProps) => {
  return (
    <Styles.InterviewSchedule
      onClick={() => onClick(schedule)}
      $postingColor={schedule.posting_color}
    >
      <Styles.InterviewScheduleTitle>{schedule.title}</Styles.InterviewScheduleTitle>
      <ScheduleApplicantList applicants={schedule.schedule_applicant} />
      <Styles.InterviewScheduleTime>
        <Icon icon="icon/calendar-solid" color="blue500" />
        <Styles.Text>
          {getDayFormat(schedule.start, 'M월 D일 (dd) a h:mm')}
          {' ~ '}
          {getDayFormat(schedule.end, 'a h:mm')}
        </Styles.Text>
      </Styles.InterviewScheduleTime>
      {schedule.schedule_address && (
        <Location
          scheduleAddress={schedule.schedule_address}
          scheduleDetailAddress={schedule.schedule_detail_address}
        />
      )}
    </Styles.InterviewSchedule>
  )
}
