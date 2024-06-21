import { scheduleDayJs, today } from '@/shared/lib'

export const isPastStartTime = (time: Date, date: Date) => {
  if (!date) return false

  const isToday = scheduleDayJs(date).format('YYYYMMDD') === today

  if (isToday) {
    const currentTime = new Date().getTime()
    return currentTime < time.getTime()
  }
  return true
}

export const isPastEndTime = (time: Date, date: Date, startTime: Date) => {
  if (!date || !startTime) return false

  const selectedStartTime = startTime.getTime()
  return selectedStartTime < time.getTime()
}
