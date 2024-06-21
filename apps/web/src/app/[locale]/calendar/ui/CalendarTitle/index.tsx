'use client'

import React from 'react'
import * as Styles from './styles'
import { CreateScheduleButton } from '@/features/Calendar'
import { useTranslations } from 'next-intl'

export const CalendarTitle = () => {
  const $t = useTranslations('page')
  return (
    <Styles.Wrapper>
      {$t('interview_schedule')}
      <CreateScheduleButton />
    </Styles.Wrapper>
  )
}
