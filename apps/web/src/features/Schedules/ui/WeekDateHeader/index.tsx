import { useLocale } from 'next-intl'
import dayjs from 'dayjs'

export const WeekDateHeader = ({ date }: { date: Date }) => {
  const currentLocale = useLocale()
  dayjs.locale(currentLocale)
  const day = `${dayjs(date).format('D')}`
  const dayOfWeek = `${dayjs(date).format('ddd')}`

  const dayOfWeekKor = () => {
    if (dayOfWeek === '일' || dayOfWeek === 'Sun') {
      return 'rbc-sunday'
    }
    if (dayOfWeek === '토' || dayOfWeek === 'Sat') {
      return 'rbc-saturday'
    }
    return 'rbc-date'
  }

  return (
    <div className={`rbc-week ${dayOfWeekKor()}`}>
      <span className="day-of-week">{dayOfWeek}</span>
      <span>{day}</span>
    </div>
  )
}
