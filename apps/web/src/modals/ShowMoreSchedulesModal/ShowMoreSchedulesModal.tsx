import { IconButton, ModalLayout } from '@/shared/ui'
import * as Styles from './styles'
import { InterviewSchedule } from '@/interface/schedules'
import { useCalendars } from '@/shared/hooks/useCalendars'
import { useTranslations } from 'next-intl'
import React from 'react'

interface ShowMoreSchedulesModalProps {
  date: string
  scheduleLength: number
  modalEvents: InterviewSchedule[]
  onClose: () => void
}

const ShowMoreSchedulesModal = ({
  date,
  scheduleLength,
  modalEvents,
  onClose,
}: ShowMoreSchedulesModalProps) => {
  const $t = useTranslations()
  const { handleCalendarSelect } = useCalendars()
  const scheduleIds = modalEvents.map((event) => event.schedule_id)

  const onGetScheduleDetail = (index: number, schedule_id: string) => {
    const currentIdx = scheduleIds.findIndex((id: string) => id === schedule_id)
    handleCalendarSelect(currentIdx, scheduleIds)
  }

  return (
    <ModalLayout onClick={onClose} isDimmed>
      <Styles.ShowMoreSchedules>
        <Styles.Header>
          {date}
          <Styles.Length>{$t('schedule.interview_count', { scheduleLength })}</Styles.Length>
          <IconButton
            icon="icon/cancle-line1"
            onClick={onClose}
            ariaLabel={$t('common.close')}
            size="sm"
            color="neutralGray600"
          />
        </Styles.Header>
        <Styles.Interviews>
          {modalEvents.map((event: InterviewSchedule, index) => {
            return (
              <Styles.Interview
                key={event.schedule_id}
                onClick={() => onGetScheduleDetail(index, event.schedule_id)}
              >
                {event.title}
              </Styles.Interview>
            )
          })}
        </Styles.Interviews>
      </Styles.ShowMoreSchedules>
    </ModalLayout>
  )
}
export default ShowMoreSchedulesModal
