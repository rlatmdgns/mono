import 'react-big-calendar/lib/addons/dragAndDrop/styles.css'
import 'react-big-calendar/lib/css/react-big-calendar.css'
import { TIME_FORMAT } from '@/shared/constants'
import { RequestSchedule, Schedule, ScheduleGroupConvertResponse } from '@/interface/schedules'
import { useEffect, useRef, useState } from 'react'
import { useRecoilValue, useSetRecoilState } from 'recoil'
import {
  InterviewerAtom,
  InterviewTimeAtom,
  SubmitDisabledStatusAtom,
} from '@/modals/ReqeustInterviewModal/recoil/atom'
import { getDayFormat } from '@/shared/lib/utils'
import { Toast } from '@/shared/ui'
import { scheduleDayJs } from '@/shared/lib'
import { MAX_SCHEDULE } from '../consts'
import { useTranslations } from 'next-intl'
import { useSchedulesFunction } from '@/features/Schedules/model/useSchedulesFunction'

export const useSchedules = (
  interviewTime: number,
  intervalTime: number,
  applicantIds: string[],
) => {
  const [schedules, setSchedules] = useState<RequestSchedule[]>([])
  const interviewers = useRecoilValue(InterviewerAtom)
  const defaultDate = useRef(scheduleDayJs().format('YYYYMMDD 08:00'))
  const scrollToTime = useRef(new Date(new Date().setHours(8, 1)))
  const $t = useTranslations('messages')
  const { getScheduleDivide, getScheduleEvent, scheduleGroupConvert } = useSchedulesFunction()

  // 면접 일정 초기화
  const handleScheduleInit = () => {
    const isScheduled = schedules.filter((schedule) => schedule.isScheduled)
    const isGoogleSchedule = schedules.filter((schedule) => schedule.isGoogleSchedule)
    setSchedules([...isScheduled, ...isGoogleSchedule])
  }

  // 면접 일정 변경
  const handleScheduleChange = (data: any) => {
    if (data.event.isScheduled || data.event.isGoogleSchedule) return

    const { moveSchedules, isChangeStatus, changeScrollTime } = getScheduleEvent(
      data,
      schedules,
      applicantIds,
    )

    scrollToTime.current = changeScrollTime

    if (!moveSchedules) return

    const { start, end } = data
    const isSoloApplicant = applicantIds.length === 1
    const scheduleDataKeys = `${getDayFormat(start, TIME_FORMAT)}_${getDayFormat(end, TIME_FORMAT)}`

    // 시간 변경 없이, 이동만 했을 때,
    if (isChangeStatus) {
      return setSchedules((prev) => moveSchedules)
    }

    // if (isSoloApplicant) return

    // 드래그한 일정 분할
    return handleScheduleDivide(scheduleDataKeys, start, end)
  }

  const getNotDuplicateList = (checkScheduleList: any[]) => {
    const notDuplicateList = checkScheduleList.filter((schedule) => {
      const startTime = scheduleDayJs(schedule.start)
      const endTime = scheduleDayJs(schedule.end)
      return !schedules.some((prevSchedule) => {
        // 구글 일정은 중복 체크 제외
        if (prevSchedule.isGoogleSchedule) return false

        const prevStart = scheduleDayJs(prevSchedule.start)
        const prevEnd = scheduleDayJs(prevSchedule.end)

        const coverage = scheduleDayJs(prevSchedule.end).diff(
          scheduleDayJs(prevSchedule.start),
          'minute',
        )

        for (let i = 0; i < coverage; i++) {
          const checkStartSchedule = prevStart.add(i, 'minute')
          const checkEndSchedule = prevEnd.add(i, 'minute')
          if (startTime.isBefore(checkEndSchedule) && endTime.isAfter(checkStartSchedule)) {
            // 설정 불가능
            return true
          }

          if (
            startTime.isAfter(prevEnd) ||
            (startTime.isSame(prevEnd) && endTime.isAfter(prevEnd))
          ) {
            // 설정 가능
            return false
          }
        }
        return false
      })
    })

    return notDuplicateList
  }

  // 일정 분할
  const handleScheduleDivide = (scheduleDataKeys: string, start: Date, end: Date) => {
    // 드래그한 일정 분할
    const interviewTimeDivideList = getScheduleDivide(
      schedules,
      scheduleDataKeys,
      start,
      end,
      interviewTime,
      intervalTime,
    )

    // 요소가 없을 때
    const isAcceptDuplicateSchedules = schedules.length === 0
    if (isAcceptDuplicateSchedules) {
      setSchedules((prev) => [...prev, ...interviewTimeDivideList])
      return
    }

    // 중복 체크
    const notDuplicateList = getNotDuplicateList(interviewTimeDivideList)

    const mergeSchedules = (prev: Schedule[]) => {
      const prevSchedules = [...prev, ...notDuplicateList].reduce(
        (acc: Schedule[], cur: Schedule) => {
          const isFilteredList =
            acc.filter((x: Schedule) => {
              return (
                getDayFormat(x.start, 'YYYYMMDD a hh:mm') ===
                  getDayFormat(cur.start, 'YYYYMMDD a hh:mm') &&
                getDayFormat(cur.end, 'YYYYMMDD a hh:mm') ===
                  getDayFormat(cur.end, 'YYYYMMDD a hh:mm')
              )
            }).length <= MAX_SCHEDULE

          if (isFilteredList) {
            acc.push(cur)
          }
          return acc
        },
        [],
      )

      return [...prevSchedules]
    }

    defaultDate.current = getDayFormat(start, 'YYYYMMDD')
    scrollToTime.current = start

    setSchedules((prev) => mergeSchedules(prev))
  }

  // 면접 일정 셋팅
  const handleScheduleSet = (data: any) => {
    const { start, end } = data

    const today = scheduleDayJs()

    if (scheduleDayJs(start).isBefore(today)) {
      return Toast.error($t('not_registered_before_date'))
    }

    const scheduleDataKeys = `${getDayFormat(start, TIME_FORMAT)}_${getDayFormat(end, TIME_FORMAT)}`

    if (data.action.match(/click/gi)) {
      const containSchedules = schedules.find((schedule) => {
        if (schedule.isGoogleSchedule) return
        return (
          scheduleDayJs(schedule.start).isSame(start) && scheduleDayJs(schedule.end).isSame(end)
        )
      })

      // 지원자가 1명일때에만, 제한
      if (containSchedules) {
        Toast.error($t('max_schedule_limit_message', { MAX_SCHEDULE }))
        return
      }

      const clickScheduleData = {
        id: `schedule_${scheduleDataKeys}_${scheduleDayJs().format('mmSSS')}`,
        start: scheduleDayJs(`${start}`).toDate(),
        end: scheduleDayJs(`${end}`).toDate(),
        interviewer: [],
        isScheduled: false,
        isGoogleSchedule: false,
      }

      scrollToTime.current = start
      return setSchedules((prev) => [...prev, { ...clickScheduleData }])
    }

    return handleScheduleDivide(scheduleDataKeys, start, end)
  }

  // 면접일정 삭제
  const handleScheduleDelete = (dataId: string) => {
    if (!dataId) return
    setSchedules((prev) => prev.filter((schedule) => schedule.id !== dataId))
  }

  const setInterviewTime = useSetRecoilState(InterviewTimeAtom)
  const setSubmitStatus = useSetRecoilState(SubmitDisabledStatusAtom)

  const isEmpty =
    schedules.filter((schedule) => !(schedule?.isScheduled || schedule.isGoogleSchedule)).length ===
    0

  // 면접 일정 그룹화(우측 리스트 출력)
  const { schedulesRender, interviewDates, interviewPostDates }: ScheduleGroupConvertResponse =
    scheduleGroupConvert(schedules)

  useEffect(() => {
    setInterviewTime(interviewPostDates)
  }, [interviewDates])

  return {
    schedules,
    defaultDate,
    scrollToTime,
    isEmpty,
    schedulesRender,
    setSchedules,
    handleScheduleChange,
    handleScheduleSet,
    handleScheduleDelete,
    handleScheduleInit,
  }
}
