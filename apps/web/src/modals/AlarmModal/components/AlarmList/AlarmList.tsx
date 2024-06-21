import * as Styles from './styles'
import { Notification } from '@/interface/notification'
import AlarmItem from '@/modals/AlarmModal/components/AlarmItem'
import { useLocale, useTranslations } from 'next-intl'

interface AlarmListProps {
  list: Notification[]
  isAccess: boolean
}

const AlarmList = ({ list, isAccess }: AlarmListProps) => {
  const $t = useTranslations('alarm')
  const currentLocale = useLocale()
  const wrapperWidth = currentLocale === 'ko' ? '354px' : '400px'
  if (list && list.length < 1) {
    return <Styles.NoList as="p">{$t('empty_alarm')}</Styles.NoList>
  }

  return (
    <Styles.AlarmList $wrapperWidth={wrapperWidth}>
      {list.map((item, index) => (
        <AlarmItem
          key={`${item.notification_date}_${item.notification_type}_${index}`}
          item={item}
          isAccess={isAccess}
        />
      ))}
    </Styles.AlarmList>
  )
}

export default AlarmList
