'use client'

import * as Styles from './styles'
import 'react-big-calendar/lib/addons/dragAndDrop/styles.css'
import 'react-big-calendar/lib/css/react-big-calendar.css'

import { useCalendars } from '@/shared/hooks/useCalendars'
import { formatSchedules, localized, today } from '@/shared/lib'
import { useModal } from '@/shared/hooks'
import { MODAL } from '@/shared/constants'
import { CalendarDateHeader, DateCellWrapper, ScheduleEvent } from '@/entities/Calendar'
import { DateAtom, postingIdAtom } from '../../model/atom'
import { useGetInterviewSchedules } from '../../model/useGetInterviewSchedules'
import { ScheduleToolbar } from '../ScheduleToolbar'

import { InterviewSchedule } from '@/interface/schedules'
import { getDayFormat } from '@/shared/lib/utils'

import { useEffect, useMemo, useRef, useState } from 'react'
import { useRecoilValue } from 'recoil'
import { useLocale } from 'next-intl'
import { Calendar } from 'react-big-calendar'

interface InterviewSchedulesProps {
  initialSchedule: any
  scheduleId: string
}

export const InterviewSchedules = ({ scheduleId, initialSchedule }: InterviewSchedulesProps) => {
  const [schedules, setSchedules] = useState<InterviewSchedule[]>([])
  const scheduleIds = useRef<string[]>([])
  const posting_id = useRecoilValue(postingIdAtom)
  const date = useRecoilValue(DateAtom)
  const currentLocale = useLocale()
  const params = {
    year: getDayFormat(date, 'YYYY'),
    month: getDayFormat(date, 'MM'),
    posting_id: posting_id > 0 ? posting_id : '',
  }

  const { data, refetch } = useGetInterviewSchedules(params, initialSchedule)

  const { handleCalendarSelect } = useCalendars()

  const { components } = useMemo(
    () => ({
      components: {
        toolbar: ScheduleToolbar,
        dateCellWrapper: DateCellWrapper,
        month: {
          header: CalendarDateHeader,
          event: ScheduleEvent,
        },
      },
    }),
    [],
  )

  const { openModal, closeModal } = useModal()

  const messages = {
    showMore: (total: number) =>
      currentLocale === 'ko' ? `+${total} 건 더보기` : `+${total} More Articles`,
  }

  const getSchedules = () => {
    if (!data) return
    if (data?.schedule_list.length === 0) {
      scheduleIds.current = []
      setSchedules([])
      return
    }

    const schedule_list = formatSchedules(data?.schedule_list)
    setSchedules([...schedule_list])
    scheduleIds.current = schedule_list.map((schedule: InterviewSchedule) => {
      return schedule.schedule_id
    })
  }

  const handleSelectEvent = (event: any) => {
    const currentIdx = scheduleIds.current.findIndex((id: string) => id === event.schedule_id)
    handleCalendarSelect(currentIdx, scheduleIds.current)
  }

  const handleShowMore = (events: any, date: Date) => {
    const modalEvents = events.slice(1)
    openModal(MODAL.SHOW_MORE_SCHEDULES, {
      date:
        currentLocale === 'ko'
          ? getDayFormat(date, 'MM월 DD일 (ddd)')
          : getDayFormat(date, 'MM.DD (ddd)'),
      scheduleLength: events.length,
      modalEvents: modalEvents,
      onClose: () => {
        closeModal(MODAL.SHOW_MORE_SCHEDULES)
      },
    })
  }

  const getScheduleParamsDetail = async () => {
    if (!scheduleId) return
    openModal(MODAL.SCHEDULE_DETAIL, {
      currentIdx: 0,
      scheduleIds: [scheduleId],
    })
  }

  useEffect(() => {
    refetch()
  }, [params])

  useEffect(() => {
    getSchedules()
    getScheduleParamsDetail()
  }, [data])

  return (
    <Styles.InterviewSchedules>
      <Calendar
        localizer={localized}
        events={schedules}
        components={components}
        defaultView="month"
        defaultDate={today}
        selectable
        onSelectEvent={handleSelectEvent}
        onShowMore={handleShowMore}
        doShowMoreDrillDown={false}
        messages={messages}
      />
    </Styles.InterviewSchedules>
  )
}
