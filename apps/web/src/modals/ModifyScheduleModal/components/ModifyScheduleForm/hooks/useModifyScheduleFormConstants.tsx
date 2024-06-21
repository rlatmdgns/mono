import { useTranslations } from 'next-intl'
import { ScheduleDetail } from '@/interface/schedules'
import dayjs from 'dayjs'

export const useModifyScheduleFormConstants = () => {
  const $t = useTranslations('alarm')
  const alarmOptions = [
    { value: `-1days`, label: $t('one_day_ago') },
    { value: `-1hours`, label: $t('one_hour_ago') },
    { value: `-30minutes`, label: $t('half_hour_minutes_ago') },
  ]

  const getModifyScheduleDefaultForm = (
    scheduleDetail: ScheduleDetail,
    attendantOptions: any[],
  ) => {
    let defaultValues: any = {}
    defaultValues.schedule_alarm = alarmOptions.find(
      (option) => option.value === scheduleDetail?.schedule_alarm,
    )
    defaultValues.schedule_address = scheduleDetail?.schedule_address
    defaultValues.schedule_detail_address = scheduleDetail?.schedule_detail_address
    defaultValues.schedule_title = scheduleDetail?.schedule_title
    defaultValues.schedule_attendant = attendantOptions.filter((option) =>
      scheduleDetail?.schedule_attendant.some(
        (attendant) => option.value === attendant.identification,
      ),
    )
    defaultValues.interview_guide = scheduleDetail.interview_guide || ''
    defaultValues.date = dayjs(scheduleDetail?.schedule_start).toDate()
    defaultValues.start_time = dayjs(scheduleDetail?.schedule_start).toDate()
    defaultValues.end_time = dayjs(scheduleDetail?.schedule_end).toDate()
    return defaultValues
  }

  return { getModifyScheduleDefaultForm }
}
