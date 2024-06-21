import { useInterviewConstant } from '@/app/[locale]/postings/_components/InterviewBadge/hooks/useInterviewConstant'
import { Tooltip } from '@/shared/ui'
import { Icon } from '@repo/ui'
import { InterviewSchedule } from '@/interface/applicants'
import { getDayFormat } from '@/shared/lib/utils'
import dayjs from 'dayjs'
import 'dayjs/locale/ko'

import React from 'react'
import * as Styles from './styles'
import { useTranslations } from 'next-intl'

dayjs.locale('ko')

interface InterviewBarProps {
  schedule?: InterviewSchedule
  isFail: boolean
  isFinalPass?: boolean
}

const InterviewBadge = ({ schedule, isFail, isFinalPass }: InterviewBarProps) => {
  const { INTERVIEW_STATES } = useInterviewConstant()
  const interview_state = schedule?.interview_state
  const interviewTooltipText = schedule
    ? `${getDayFormat(
        schedule.schedule_start,
        'YY년 M월 D일 (dd) a h:mm',
      )} - ${getDayFormat(schedule.schedule_end, 'a h:mm')}`
    : ''

  const $t = useTranslations('common')
  const renderBadge = () => {
    if (isFail) {
      return (
        <Styles.InterviewBar $state="canceled">
          <Styles.Text>{$t('fail')}</Styles.Text>
        </Styles.InterviewBar>
      )
    }
    if (schedule) {
      const { interview_state } = schedule
      const state = schedule && INTERVIEW_STATES[interview_state]

      return (
        <Styles.InterviewBar $state={interview_state}>
          <Styles.Text>
            <Icon icon={state.icon} color={state.iconColor} />
            {state.label}
          </Styles.Text>
        </Styles.InterviewBar>
      )
    }
  }

  return (
    <Tooltip
      text={interviewTooltipText}
      isLineThrough={interview_state === 'canceled'}
      disabled={!schedule}
      direction={isFinalPass ? 'top' : 'right'}
    >
      {renderBadge()}
    </Tooltip>
  )
}

export default InterviewBadge
