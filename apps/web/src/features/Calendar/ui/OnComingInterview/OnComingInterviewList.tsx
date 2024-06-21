import * as Styles from './styles'

import { useCalendars } from '@/shared/hooks/useCalendars'
import { OnComingInterviewItem } from '@/shared/ui/OnComingInterviewItem'

import { InterviewSchedule } from '@/interface/schedules'
import React from 'react'
import { useTranslations } from 'next-intl'

export const OnComingInterviewList = ({ schedules }: { schedules: InterviewSchedule[] }) => {
  const { handleCalendarSelect } = useCalendars()
  const $t = useTranslations('oncoming_schedules')

  const scheduleIds: string[] = schedules?.map((schedule: InterviewSchedule) => {
    return schedule.schedule_id
  })

  const onClick = (schedule: InterviewSchedule) => {
    const currentIdx = scheduleIds.findIndex((id: string) => id === schedule.schedule_id)
    handleCalendarSelect(currentIdx, scheduleIds)
  }

  if (schedules.length < 1) {
    return (
      <Styles.InterviewSchedules as={'div'}>
        <Styles.NoInterviewSchedules>
          <Styles.NoInterviewTitle>{$t('no_schedules')}</Styles.NoInterviewTitle>
        </Styles.NoInterviewSchedules>
      </Styles.InterviewSchedules>
    )
  }

  return (
    <Styles.InterviewSchedules>
      {schedules.map((schedule: InterviewSchedule, scheduleIdx: number) => (
        <OnComingInterviewItem
          key={`${schedule.posting_id}-${scheduleIdx}`}
          schedule={schedule}
          onClick={onClick}
        />
      ))}
    </Styles.InterviewSchedules>
  )
}
