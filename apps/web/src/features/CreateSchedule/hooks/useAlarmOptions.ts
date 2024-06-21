import { useTranslations } from 'next-intl'

export const useAlarmOptions = () => {
  const $t = useTranslations('alarm')
  const ALARM_OPTIONS = [
    { value: `-1days`, label: $t('one_day_ago') },
    { value: `-1hours`, label: $t('one_hour_ago') },
    { value: `-30minutes`, label: $t('half_hour_minutes_ago') },
  ]
  return { ALARM_OPTIONS }
}
