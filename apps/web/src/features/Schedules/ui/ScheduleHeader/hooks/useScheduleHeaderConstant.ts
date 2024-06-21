import { useTranslations } from 'next-intl'

export const useScheduleHeaderConstant = () => {
  const $t = useTranslations()
  const time = $t('common.time')
  const minute = $t('common.minute')

  const INTERVIEW_TIME = {
    TIME: [
      { id: 1, label: `30${minute}`, value: 30 },
      { id: 2, label: `1${time}`, value: 60 },
      { id: 3, label: `1${time} 30${minute}`, value: 90 },
      { id: 4, label: `2${time}`, value: 120 },
    ],
    INTERVAL: [
      { id: 0, label: $t('interview_request.not_interval'), value: 0 },
      { id: 1, label: `5${minute}`, value: 5 },
      { id: 2, label: `10${minute}`, value: 10 },
      { id: 3, label: `15${minute}`, value: 15 },
      { id: 4, label: `20${minute}`, value: 20 },
      { id: 5, label: `30${minute}`, value: 30 },
      { id: 6, label: `1${time}`, value: 60 },
    ],
  }

  const SCHEDULE_VIEWS = [
    { id: 0, label: '주', value: 'week' },
    { id: 1, label: '일', value: 'day' },
  ]

  return { INTERVIEW_TIME, SCHEDULE_VIEWS }
}
