import * as Styles from '@/features/Schedules/styles'
import React from 'react'
import { Tooltip } from '@/shared/ui'
import { Icon } from '@repo/ui'
import { useTranslations } from 'next-intl'

interface WeekDateDeleteProps {
  data: any
  handleScheduleDelete: (id: string) => void
}

export const WeekDateBody = ({ data, handleScheduleDelete }: WeekDateDeleteProps) => {
  const $t = useTranslations()
  const { event } = data

  const onDelete = () => {
    handleScheduleDelete(event.id)
  }

  if (event.isScheduled) {
    const tooltipText = `${event.interviewers
      .map((interviewer: any) => interviewer)
      .join(', ')} ${$t('interview_request.duplicate_interview_schedule')}`

    return (
      <>
        <Styles.ScheduledInfo>
          <Tooltip text={tooltipText} direction="right">
            <Styles.ScheduledTooltip />
          </Tooltip>
        </Styles.ScheduledInfo>
      </>
    )
  }

  if (event.isGoogleSchedule) return null

  return (
    <Styles.ScheduleRemoveButton
      data-id={event.id}
      aria-label={$t('common.delete')}
      onClick={onDelete}
    >
      <Icon icon="icon/cancle-line1" color="white" size={12} />
    </Styles.ScheduleRemoveButton>
  )
}
