import * as Styles from './styles'
import { getDayFormat, scheduleDayJs } from '@/shared/lib'
import { useLocale } from 'next-intl'
import { Icon } from '@repo/ui'

export const TimeSlotWrapper = (props: any) => {
  const currentLocale = useLocale()
  const hour = currentLocale !== 'ko' ? '' : '시'
  const isBefore = scheduleDayJs(props.value).isBefore()

  if (props.resource === null) {
    return (
      <Styles.TimeSlotWrapper $isBefore={isBefore}>
        <Styles.HoverBackground>
          <Icon icon="icon/add-solid" color="blue500" />
        </Styles.HoverBackground>
        {props.children}
      </Styles.TimeSlotWrapper>
    )
  } else if (props.value.getHours() % 2 === 0 && props.value.getMinutes() === 0) {
    return (
      <Styles.Time>
        <Styles.Hour>
          {getDayFormat(props.value, 'a')}
          {` ${getDayFormat(props.value, 'h')} ${hour}`}
        </Styles.Hour>
      </Styles.Time>
    )
  }
}
