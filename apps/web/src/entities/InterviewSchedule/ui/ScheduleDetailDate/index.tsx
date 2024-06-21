import { getDayFormat } from '@/shared/lib/utils'
import React from 'react'
import { useRecoilValue } from 'recoil'
import * as Styles from './styles'
import { ScheduleDetailAtom } from '@/features/InterviewSchedule'

export const ScheduleDetailDate = () => {
  const interviewDetail = useRecoilValue(ScheduleDetailAtom)
  if (!interviewDetail) return null
  const { schedule_start, posting_color } = interviewDetail

  return (
    <Styles.DetailDateWrapper $bgColor={posting_color}>
      <Styles.DetailDate $bgColor={posting_color}>
        <Styles.Weekend>{getDayFormat(schedule_start, 'dddd')}</Styles.Weekend>
        <Styles.Date>{getDayFormat(schedule_start, 'DD')}</Styles.Date>
      </Styles.DetailDate>
    </Styles.DetailDateWrapper>
  )
}
