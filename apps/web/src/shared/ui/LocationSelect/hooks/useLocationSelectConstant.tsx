import { UntactInterface } from '@/shared/ui/LocationSelect/LocationSelect.interface'
import { useTranslations } from 'next-intl'

export const useLocationSelectConstant = () => {
  const $t = useTranslations('interview')
  const UNTACT_LISTS: UntactInterface[] = [
    {
      iconSource: 'icon/video-solid',
      text: $t('video_interview'),
    },
    {
      iconSource: 'icon/phone-solid',
      text: $t('phone_interview'),
    },
  ]
  const LOCATION_BODY_PADDING = 16

  return { UNTACT_LISTS, LOCATION_BODY_PADDING }
}
