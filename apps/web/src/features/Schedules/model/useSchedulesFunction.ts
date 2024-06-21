import { Toast } from '@/shared/ui'
import { DAY_FORMAT, TIME_FORMAT } from '@/shared/constants'
import {
  InterviewDates,
  Schedule,
  ScheduleGroupConvertResponse,
  ScheduleGroupsInterface,
} from '@/interface/schedules'
import { getDayFormat } from '@/shared/lib/utils'
import { scheduleDayJs } from '@/shared/lib'
import { MAX_SCHEDULE } from '../consts'
import { useLocale, useTranslations } from 'next-intl'

export const useSchedulesFunction = () => {
  const currentLocale = useLocale()
  const $t = useTranslations()
  // 일정관리 드래그 이벤트 데이터 변환
  const getScheduleEvent = (data: any, schedules: Schedule[], applicantIds: string[]) => {
    const { start, end, event } = data
    const moveStartDate = getDayFormat(start, DAY_FORMAT)
    const moveStartTime = getDayFormat(start, TIME_FORMAT)
    const moveEndTime = getDayFormat(end, TIME_FORMAT)

    let isMoveStatus = true
    let errorMsg = ''

    schedules.find((schedule) => {
      const scheduleStartDate = getDayFormat(schedule.start, DAY_FORMAT)

      const scheduleStartTime = getDayFormat(schedule.start, TIME_FORMAT)
      const scheduleEndTime = getDayFormat(schedule.end, TIME_FORMAT)
      if (
        (schedule.id === event.id && moveStartDate !== scheduleStartDate) ||
        scheduleDayJs(start).isBefore()
      ) {
        errorMsg = $t('messages.another_schedule_not_change')
        isMoveStatus = false
      }

      const containSchedules = schedules.filter(
        (schedule) =>
          getDayFormat(schedule.start, 'YYYYMMDD hh:mm') ===
            getDayFormat(start, 'YYYYMMDD hh:mm') &&
          getDayFormat(schedule.end, 'YYYMMDD hh:mm') === getDayFormat(end, 'YYYMMDD hh:mm'),
      )

      const is_multiple_applicantIds = applicantIds.length > 1
      const isSameTime = moveStartTime === scheduleStartTime && moveEndTime === scheduleEndTime

      if (is_multiple_applicantIds && isSameTime) {
        errorMsg =
          currentLocale === 'ko'
            ? `동일한 시간에는 최대 ${MAX_SCHEDULE}건까지 추가할 수 있습니다.`
            : `You can add up to ${MAX_SCHEDULE} schedules at the same time.`
        isMoveStatus = false
      }
    })

    if (!isMoveStatus) {
      Toast.error(errorMsg)
    }

    const changeCheckSchedule = schedules.find((schedule) => schedule.id === event.id)

    /**
     * 변경된 스케쥴의 시간이 변경되었는지 체크
     */
    const isChangeStatus =
      scheduleDayJs(changeCheckSchedule?.end).diff(changeCheckSchedule?.start, 'minute') ===
      scheduleDayJs(end).diff(start, 'minute')

    const moveSchedules = schedules?.map((schedule: Schedule) => {
      if (!isMoveStatus) {
        return {
          ...schedule,
        }
      }

      if (isChangeStatus && schedule.id === event.id) {
        return {
          ...schedule,
          start: scheduleDayJs(start).toDate(),
          end: scheduleDayJs(end).toDate(),
        }
      }

      return {
        ...schedule,
      }
    })

    return {
      moveSchedules,
      isChangeStatus,
      changeScrollTime: scheduleDayJs(start).toDate(),
    }
  }

  // 일정관리 데이터 그룹 (날짜별) 객체 변환
  const schedulesGroup = (schedules: Schedule[]) => {
    return schedules.reduce(function (acc: any, schedule) {
      let key = getDayFormat(schedule['start'], DAY_FORMAT)
      if (!acc[key]) {
        acc[key] = []
      }
      acc[key].push(schedule)
      return acc
    }, {})
  }

  // 일정관리 데이터 그룹 (날짜별) 객체 변환 후, 면접 일정 그룹화(우측 리스트 출력)
  const scheduleGroupConvert = (schedules: Schedule[]): ScheduleGroupConvertResponse => {
    let schedulesRender: ScheduleGroupsInterface[] = []
    let interviewDates: InterviewDates = {}
    let interviewPostDates: InterviewDates = {}

    for (let scheduleDate in schedulesGroup(schedules)) {
      const month = `${getDayFormat(scheduleDate, 'MM')}${currentLocale === 'ko' ? '월' : ''}`
      const date = `${getDayFormat(scheduleDate, 'DD')}${currentLocale === 'ko' ? '일' : ''}`
      const dayOfWeek = `(${getDayFormat(scheduleDate, 'ddd')}${currentLocale === 'ko' ? '요일' : ''})`
      const data = {
        date: `${month} ${date} ${dayOfWeek}`,
        schedulesList: schedulesGroup(schedules)[scheduleDate].filter(
          (schedule: any) => !schedule.isScheduled && !schedule.isGoogleSchedule,
        ),
      }

      if (data.schedulesList.length > 0) {
        interviewDates[getDayFormat(scheduleDate, 'YYYY-MM-DD')] = data.schedulesList
          .sort((a: Schedule, b: Schedule) => {
            if (a.start < b.start) {
              return -1
            }

            if (a.start > b.start) {
              return 1
            }
          })
          .map((schedule: Schedule) => {
            return [
              getDayFormat(schedule.start, 'YYYY-MM-DD hh:mm'),
              getDayFormat(schedule.end, 'YYYY-MM-DD hh:mm'),
            ]
          })

        data.schedulesList.forEach((item: Schedule, itemIndex: number) => {
          item.id = `${getDayFormat(item.start, 'YYYYMMDD hh:mm')}_${getDayFormat(
            item.end,
            'YYYMMDD hh:mm',
          )}_${itemIndex}`
        })
        schedulesRender.push(data)

        interviewPostDates[getDayFormat(scheduleDate, 'YYYY-MM-DD')] = data.schedulesList
          .sort((a: Schedule, b: Schedule) => {
            if (a.start < b.start) {
              return -1
            }

            if (a.start > b.start) {
              return 1
            }
          })
          .map((schedule: Schedule) => {
            return [
              getDayFormat(schedule.start, 'YYYY-MM-DD HH:mm'),
              getDayFormat(schedule.end, 'YYYY-MM-DD HH:mm'),
            ]
          })
      }
    }
    return {
      schedulesRender,
      interviewDates,
      interviewPostDates,
    }
  }

  // 일정관리 드래그 이벤트 데이터 변환
  const getScheduleDivide = (
    schedules: Schedule[],
    scheduleDataKeys: string,
    start: Date,
    end: Date,
    interviewTime: number,
    intervalTime: number,
  ) => {
    const scheduleData = {
      id: `schedule_${scheduleDataKeys}_${scheduleDayJs().format('mmSSS')}`,
      start: scheduleDayJs(`${start}`).toDate(),
      end: scheduleDayJs(`${end}`).toDate(),
    }

    const interviewTimeDivide =
      scheduleDayJs(scheduleData.end).diff(scheduleData.start, 'minute') / interviewTime

    let interviewTimeDivideList: any[] = []

    for (let i = 0; i <= interviewTimeDivide; i++) {
      let startTime = scheduleDayJs(scheduleData.start).add(i * interviewTime, 'minute')
      let endTime = scheduleDayJs(startTime).add(interviewTime, 'minute')

      if (i > 0) {
        startTime = scheduleDayJs(scheduleData.start).add(
          i * interviewTime + intervalTime * i,
          'minute',
        )

        endTime = startTime.add(interviewTime, 'minute')
      }

      const divideSchedule = {
        id: `${getDayFormat(startTime.toDate(), 'YYYYMMDDHHmm')}_${i}`,
        start: scheduleDayJs(startTime).toDate(),
        end: scheduleDayJs(endTime).toDate(),
        isScheduled: false,
        interviewers: [],
      }

      // 현재시간 이후와 종료시간이 넘지 않은 것들만 추가
      if (scheduleDayJs(divideSchedule.start).isAfter() && divideSchedule.end <= end) {
        interviewTimeDivideList.push({ ...divideSchedule })
      }
    }

    return interviewTimeDivideList
  }

  return { getScheduleEvent, scheduleGroupConvert, getScheduleDivide }
}
