'use client'

import * as Styles from './styles'
import { Icon } from '@repo/ui'
import { Tooltip } from '@/shared/ui'
import { formatSchedules } from '@/shared/lib'
import { OnComingInterviewList } from './OnComingInterviewList'
import { useOncomingSchedules } from '../../model/useOncomingSchedules'

import { InterviewSchedule } from '@/interface/schedules'

import React, { useEffect, useState } from 'react'
import { useTranslations } from 'next-intl'

interface OnComingInterviewListProps {
  initialOnComingSchedule: any
}

export const OnComingInterview = ({ initialOnComingSchedule }: OnComingInterviewListProps) => {
  const [schedules, setSchedules] = useState<InterviewSchedule[]>([])
  const $t = useTranslations('oncoming_schedules')
  const { data } = useOncomingSchedules(initialOnComingSchedule)

  const getSchedules = () => {
    if (!data) return
    const schedule_list = formatSchedules(data?.schedule_list)
    setSchedules([...schedule_list])
  }

  useEffect(() => {
    getSchedules()
  }, [data])

  return (
    <Styles.InterviewScheduleContainer>
      <Styles.InterviewSchedulesTitle>
        <Styles.Text>{$t('title')}</Styles.Text>
        <Tooltip text={$t('tooltip')} direction={'right'}>
          <Icon icon="icon/info-solid" color="neutralGray300" />
        </Tooltip>
      </Styles.InterviewSchedulesTitle>
      <OnComingInterviewList schedules={schedules} />
    </Styles.InterviewScheduleContainer>
  )
}
