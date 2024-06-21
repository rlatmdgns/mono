import { useTranslations } from 'next-intl'

export const useAlarmModalConstants = (isAccess: boolean) => {
  const $t = useTranslations()
  const MAIL_TYPE = 4

  const ALARM_TAB_LIST = [
    {
      title: $t('common.whole'),
      type: 0,
      objectKey: 'all_notification',
    },
    // {
    //   title : '멘션',
    //   type : 1,
    //   objectKey : 'mention_notification'
    // },
    {
      title: $t('alarm.remind'),
      type: 2,
      objectKey: 'remind_notification',
    },
    {
      title: $t('alarm.new_applicant'),
      type: 3,
      objectKey: 'new_applicant_notification',
    },
    {
      title: $t('common.mail'),
      type: 4,
      objectKey: 'mail_notification',
    },
  ]

  if (!isAccess) {
    return { ALARM_TAB_LIST: ALARM_TAB_LIST.filter((item) => item.type !== MAIL_TYPE) }
  }
  return { ALARM_TAB_LIST }
}
