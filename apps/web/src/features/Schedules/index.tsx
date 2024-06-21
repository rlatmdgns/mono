'use client'

import * as Styles from './styles'
import { useCallback, useEffect, useMemo, useRef, useState } from 'react'

import {
  InterviewEventWrapper,
  ScheduleHeader,
  ScheduleListContainer,
  ScheduleLoading,
  ScheduleToolbar,
  TimeSlotWrapper,
  WeekDateBody,
  WeekDateHeader,
} from '@/features/Schedules/ui'

import {
  useGetInterviewSchedules,
  useScheduleController,
  useSchedules,
} from '@/features/Schedules/model'

import withDragAndDrop from 'react-big-calendar/lib/addons/dragAndDrop'
import { Calendar, Formats, Views } from 'react-big-calendar'

import { Button } from '@/shared/ui'
import { useRecoilValue, useSetRecoilState } from 'recoil'
import {
  ApplicantsIdsAtom,
  InterviewerAtom,
  SubmitDisabledStatusAtom,
} from '@/modals/ReqeustInterviewModal/recoil/atom'
import { localized, today } from '@/shared/lib'
import dayjs from 'dayjs'
import { getDayFormat } from '@/shared/lib/utils'
import { useLocale, useTranslations } from 'next-intl'
import { useGetGoogleSchedules } from '@/features/Schedules/model/useGetGoogleSchedules'
import { DateBody } from '@/features/Schedules/ui/DateBody'

const Schedules = () => {
  const applicantIds = useRecoilValue<string[]>(ApplicantsIdsAtom)
  const interviewer = useRecoilValue(InterviewerAtom)
  const currentLocale = useLocale()
  const $t = useTranslations()
  const isSoloApplicants = applicantIds.length === 1
  const setSubmitDisabledStatus = useSetRecoilState(SubmitDisabledStatusAtom)
  const [view, setView] = useState(Views.WEEK)

  const handleChangeView = useCallback((newView: any) => setView(newView), [setView])

  const scheduleSearchParams = {
    interviewer: interviewer,
    start_date: getDayFormat(dayjs(today).weekday(0).toDate(), 'YYYY-MM-DD'),
    end_date: getDayFormat(dayjs(today).weekday(6).toDate(), 'YYYY-MM-DD'),
  }

  const unableToSetSchedule = useRef(true)

  const formats: Formats = {
    timeGutterFormat: 'h:mm',
    dayFormat: currentLocale === 'ko' ? 'DD일(ddd)' : 'DD(ddd)',
    eventTimeRangeFormat: (range, culture, localizer) => {
      return `${localizer?.format(range.start, 'A hh:mm', culture)} - 
        ${localizer?.format(range.end, 'A hh:mm', culture)}`
    },
  }

  const { interviewTime, intervalTime, handleChangeStep, handleChangeInterval } =
    useScheduleController()

  const { data, refetch } = useGetInterviewSchedules(scheduleSearchParams)
  const {
    data: googleSchedules,
    refetch: googleSchedulesRefetch,
    isFetching: isGoogleSchedulesFeching,
    isRefetching: isGoogleSchedulesReFetching,
  } = useGetGoogleSchedules(scheduleSearchParams)

  const setEarlySchedule = (schedule: any) => {
    setSchedules((prev) => [...prev, ...schedule])
  }

  const getEarlySchedule = () => {
    if (!data) return

    const todayAfterSchedules = data.schedules.filter((overlap) => {
      return dayjs(overlap.schedule_end).isAfter(dayjs(today).toDate())
    })

    if (todayAfterSchedules.length === 0) return

    const earlySchedules = todayAfterSchedules.map((overlap) => {
      return {
        id: `overlapping_${overlap.schedule_start}_${overlap.schedule_end}`,
        start: dayjs(overlap.schedule_start).toDate(),
        end: dayjs(overlap.schedule_end).toDate(),
        isScheduled: true,
        isGoogleSchedule: false,
        interviewers: overlap.overlapping_interviewers,
      }
    })

    const notContainEarlySchedules = earlySchedules.filter((earlySchedule) => {
      return !schedules.some((schedule) => {
        return (
          getDayFormat(earlySchedule.start, 'YYYYMMDD a hh:mm') ===
          getDayFormat(schedule.start, 'YYYYMMDD a hh:mm')
        )
      })
    })

    setEarlySchedule(notContainEarlySchedules)
  }

  const setGoogleSchedule = (schedule: any) => {
    setSchedules((prev) => [...prev, ...schedule])
  }

  const getGoogleSchedules = () => {
    if (!googleSchedules || googleSchedules?.length === 0) return
    const todayAfterSchedules = googleSchedules?.filter((google) => {
      return dayjs(google.end).isAfter(dayjs(today).toDate())
    })

    if (todayAfterSchedules.length === 0) return

    const currentGoogleSchedules = todayAfterSchedules.map((google) => {
      return {
        id: `google_${google.start}_${google.end}`,
        summary: google.summary,
        start: dayjs(google.start).toDate(),
        end: dayjs(google.end).toDate(),
        isScheduled: false,
        isGoogleSchedule: true,
        interviewers: google.overlapping_interviewers,
      }
    })

    const notContainGoogleSchedules = currentGoogleSchedules.filter((googleSchedule) => {
      return !schedules.some((schedule) => {
        return (
          getDayFormat(googleSchedule.start, 'YYYYMMDD a hh:mm') ===
          getDayFormat(schedule.start, 'YYYYMMDD a hh:mm')
        )
      })
    })

    setGoogleSchedule(notContainGoogleSchedules)
  }

  const {
    schedules,
    setSchedules,
    isEmpty,
    schedulesRender,
    defaultDate,
    scrollToTime,
    handleScheduleChange,
    handleScheduleSet,
    handleScheduleDelete,
    handleScheduleInit,
  } = useSchedules(interviewTime, intervalTime, applicantIds)

  const DragCalendar = withDragAndDrop(Calendar)
  const { components } = useMemo(
    () => ({
      components: {
        toolbar: ScheduleToolbar,
        eventWrapper: (props: any) => (
          <InterviewEventWrapper props={props} isSoloApplicants={isSoloApplicants} />
        ),
        timeSlotWrapper: TimeSlotWrapper,
        week: {
          header: WeekDateHeader,
          event: (data: any) => (
            <WeekDateBody data={data} handleScheduleDelete={handleScheduleDelete} />
          ),
        },
        day: {
          event: (data: any) => (
            <DateBody data={data} handleScheduleDelete={handleScheduleDelete} />
          ),
        },
      },
    }),
    [],
  )

  const todayWeek = getDayFormat(dayjs().weekday(0).toDate(), 'YYYY-MM-DD')

  const handleChangeRange = (range: any) => {
    const startDate = range[0]
    const endDate = !range[6] ? range[0] : range[6]
    scheduleSearchParams.start_date = getDayFormat(startDate, 'YYYY-MM-DD')
    scheduleSearchParams.end_date = getDayFormat(endDate, 'YYYY-MM-DD')
    defaultDate.current = scheduleSearchParams.start_date
    refetch()
    googleSchedulesRefetch()
  }

  useEffect(() => {
    getEarlySchedule()
    getGoogleSchedules()
  }, [data, googleSchedules])

  useEffect(() => {
    const requestInterviewSchedules = schedules?.filter(
      (schedule) => !(schedule.isScheduled || schedule.isGoogleSchedule),
    )

    setSubmitDisabledStatus(applicantIds.length <= requestInterviewSchedules.length)
    unableToSetSchedule.current =
      dayjs(scheduleSearchParams.start_date).toDate() <= dayjs().toDate()
  }, [schedules])

  if (isGoogleSchedulesFeching) {
    return <ScheduleLoading />
  }

  return (
    <Styles.Container>
      <ScheduleHeader
        interviewTime={interviewTime}
        intervalTime={intervalTime}
        view={view}
        onChangeStep={handleChangeStep}
        onChangeInterval={handleChangeInterval}
        onChangeView={handleChangeView}
      />
      <Styles.Body>
        <Styles.InitButtons>
          <Button
            text={$t('interview_request.initialize')}
            state="standard"
            style={'mono'}
            size={'sm'}
            disabled={schedules.length === 0}
            onClick={handleScheduleInit}
          />
        </Styles.InitButtons>
        <Styles.CalendarWrap
          $unableToSetSchedule={unableToSetSchedule.current}
          $isSoloApplicants={isSoloApplicants}
        >
          <DragCalendar
            localizer={localized}
            events={schedules}
            components={components}
            defaultView="week"
            onEventResize={handleScheduleChange}
            onEventDrop={handleScheduleChange}
            onSelectSlot={handleScheduleSet}
            onRangeChange={handleChangeRange}
            selectable
            resizable
            defaultDate={defaultDate.current}
            scrollToTime={scrollToTime.current}
            step={interviewTime}
            timeslots={2}
            dayLayoutAlgorithm="no-overlap"
            formats={formats}
            onView={handleChangeView}
            view={view}
          />
        </Styles.CalendarWrap>
        <ScheduleListContainer
          scheduleGroups={schedulesRender}
          isEmpty={isEmpty}
          handleScheduleDelete={handleScheduleDelete}
        />
      </Styles.Body>
    </Styles.Container>
  )
}

export default Schedules
