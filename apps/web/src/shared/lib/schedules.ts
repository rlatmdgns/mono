import dayjs from 'dayjs'
import timezone from 'dayjs/plugin/timezone'
import duration from 'dayjs/plugin/duration'
import weekday from 'dayjs/plugin/weekday'
import isSameOrAfter from 'dayjs/plugin/isSameOrAfter'

import 'dayjs/locale/ko'
import { dayjsLocalizer } from 'react-big-calendar'

dayjs.locale('ko')
dayjs.extend(timezone)
dayjs.extend(duration)
dayjs.extend(weekday)
dayjs.extend(isSameOrAfter)

export const localized = dayjsLocalizer(dayjs)

export const today = dayjs().format('YYYYMMDD')

export const scheduleDayJs = dayjs
