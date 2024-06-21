import { AddSequenceDay } from '@/features/onboarding/type'
import { getConvertDifferDay } from '@/features/onboarding/lib'
import dayjs from 'dayjs'

export const getConvertAppendModalDday = (value: AddSequenceDay) => {
  if (Number(value.join_date) === 0) return 0
  if (value.date_type === 'before') return Number(value.join_date) * -1
  return Number(value.join_date)
}

export const getConvertUpdateModalDday = (updateDate: string, originalJoinDate?: string) => {
  if (!originalJoinDate) return
  return getConvertDifferDay(originalJoinDate, dayjs(updateDate).toDate())
}
