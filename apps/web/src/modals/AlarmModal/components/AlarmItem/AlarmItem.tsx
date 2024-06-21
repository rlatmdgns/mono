import * as Styles from './styles'
import Link from 'next/link'
import { Notification } from '@/interface/notification'
import { getNotificationIconType } from '@/modals/AlarmModal/AlarmModal.function'
import { getLink } from './AlarmItem.function'
import { Icon } from '@repo/ui'
import { useAlarmModalFunction } from '@/modals/AlarmModal/hooks/useAlarmModalFunction'
import { Toast } from '@/shared/ui'

interface AlarmItemProps {
  item: Notification
  isAccess: boolean
}

const AlarmItem = ({ item, isAccess }: AlarmItemProps) => {
  const link = getLink(item.notification_link, item.notification_title)
  const { getNotificationType } = useAlarmModalFunction()

  const isLickAccess = item.notification_type !== 4 ? true : isAccess

  const handleToast = () => {
    if (isLickAccess) return
    Toast.error('평가 담당자는 메일 접근 권한이 없습니다.')
  }

  return (
    <Styles.AlarmItem $icon={getNotificationIconType(item.notification_type)}>
      <Styles.IconBox>
        <Icon icon={getNotificationIconType(item.notification_type)} color="blue500" />
      </Styles.IconBox>
      <Styles.AlarmInformation>
        <Styles.AlarmHeader>
          <Styles.AlarmType>{getNotificationType(item.notification_type)}</Styles.AlarmType>
          <Styles.AlarmDate>{item.notification_date}</Styles.AlarmDate>
        </Styles.AlarmHeader>
        <Styles.AlarmMessage>
          {link && (
            <Styles.LinkBox $isLickAccess={isLickAccess} onClick={handleToast}>
              <Link href={link} prefetch={false}>
                {item.notification_contents}
              </Link>
            </Styles.LinkBox>
          )}
          {!link && item.notification_contents}
        </Styles.AlarmMessage>
      </Styles.AlarmInformation>
    </Styles.AlarmItem>
  )
}

export default AlarmItem
