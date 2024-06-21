import { Career } from '@/entities/application-viewer/types'
import dayjs from 'dayjs'

export const getTotalCareer = (careers: Career[]) => {
  const isNewcomer = careers[0]?.experience_type === '신입'

  if (isNewcomer) return ''
  const monthlySum = careers
    .map((item) => {
      const endDate = item.working_status === '재직 중' ? dayjs() : dayjs(item.end_date)
      return dayjs(endDate).diff(dayjs(item.start_date), 'month')
    })
    .reduce((acc, cur) => acc + cur)

  const total = dayjs.duration(monthlySum, 'months')
  const years = total.years()
  const months = total.months()

  return `${years}년 ${months}개월`
}
