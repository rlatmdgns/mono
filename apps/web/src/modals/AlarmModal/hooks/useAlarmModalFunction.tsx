import { useTranslations } from 'next-intl'

export const useAlarmModalFunction = () => {
  const $t = useTranslations()
  const getNotificationType = (type: number) => {
    switch (type) {
      case 0:
        return $t('common.whole')

      case 1:
        return '멘션'

      case 2:
        return $t('alarm.remind')

      case 3:
        return $t('alarm.new_applicant')

      case 4:
        return $t('common.mail')

      case 5:
        return $t('alarm.remind')

      default:
        return ''
    }
  }
  return { getNotificationType }
}
