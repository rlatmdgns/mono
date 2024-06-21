import * as Styles from './styles'
import { scheduleDayJs } from '@/shared/lib'

export const ScheduleEvent = (props: any) => {
  const today = scheduleDayJs()

  const { event } = props
  return (
    <Styles.ScheduleEvent>
      <Styles.ScheduleTitle
        $backgroundColor={event.posting_color}
        $isCanceled={event.is_canceled}
        $isBefore={scheduleDayJs(scheduleDayJs(props.event.start).format('YYYY-MM-DD')).isBefore(
          scheduleDayJs(today).format('YYYY-MM-DD'),
        )}
      >
        {event.title}
      </Styles.ScheduleTitle>
      <Styles.ScheduleBg
        $backgroundColor={event.posting_color}
        $isBefore={scheduleDayJs(scheduleDayJs(props.event.start).format('YYYY-MM-DD')).isBefore(
          scheduleDayJs(today).format('YYYY-MM-DD'),
        )}
      ></Styles.ScheduleBg>
    </Styles.ScheduleEvent>
  )
}
