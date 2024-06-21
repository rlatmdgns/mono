import { useTranslations } from 'next-intl'

export const useConvertInterviewPlaceholder = (value: string) => {
  const $t = useTranslations('interview')
  let placeholder = $t('notification_placeholder')
  const lineBreak = `\r\n`

  if (value.match($t('video'))) {
    placeholder += `${lineBreak} ${$t('notification_video_placeholder')}`
    return placeholder
  }

  if (value.match($t('phone'))) {
    placeholder += `${lineBreak} ${$t('notification_phone_placeholder')}`
    return placeholder
  }

  placeholder += `${lineBreak} ${$t('notification_contact_placeholder')}`
  return placeholder
}
