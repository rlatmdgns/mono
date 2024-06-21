import * as Styles from './styles'
import { getDayFormat } from '@/shared/lib'
import React, { useState } from 'react'
import { BeforeTheChange } from '@/interface/schedules'
import { Icon } from '@repo/ui'

interface ScheduleTimeProps {
  interviewTime: string
  beforeTheChange?: BeforeTheChange | null
}

export const ScheduleTime = ({ interviewTime, beforeTheChange }: ScheduleTimeProps) => {
  const [isChangeInterview, setIsChangeInterview] = useState(false)

  const handleToggleIsChangeInterview = () => {
    setIsChangeInterview(!isChangeInterview)
  }

  return (
    <Styles.Wrapper>
      <Styles.Time>
        <Icon icon="icon/interview-solid" color="blue500" />
        {interviewTime}
      </Styles.Time>
      {beforeTheChange && (
        <Styles.ChangeStatus
          $toggleStatus={isChangeInterview}
          onClick={handleToggleIsChangeInterview}
        >
          변경됨
          <Icon icon="icon/down-solid" color="neutralGray500" size={14} />
        </Styles.ChangeStatus>
      )}
      {beforeTheChange && isChangeInterview && (
        <Styles.ChangeTime>
          {getDayFormat(beforeTheChange.schedule_start, 'YY년 MM월 DD일 (dd) a h:mm')} ~{' '}
          {getDayFormat(beforeTheChange.schedule_end, 'a h:mm')}
        </Styles.ChangeTime>
      )}
    </Styles.Wrapper>
  )
}
