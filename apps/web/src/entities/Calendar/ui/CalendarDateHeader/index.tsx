import dayjs from 'dayjs'
import { useLocale } from 'next-intl'

export const CalendarDateHeader = ({ date }: { date: Date }) => {
  const currentLocale = useLocale()
  dayjs.locale(currentLocale)
  const dayOfWeek = dayjs(date).format('ddd')

  const dayOfWeekKor = () => {
    if (dayOfWeek === 'Sun' || dayOfWeek === '일') return 'rbc-sunday'
    if (dayOfWeek === 'Sat' || dayOfWeek === '토') return 'rbc-saturday'
    return 'rbc-date'
  }

  return (
    <div className={`rbc-week ${dayOfWeekKor()}`}>
      <span className="day-of-week">{dayOfWeek}</span>
    </div>
  )
}
