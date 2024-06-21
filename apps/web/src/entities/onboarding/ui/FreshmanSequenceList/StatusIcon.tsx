import { Icon } from '@repo/ui'
import { dot } from './styles.css'

interface TodoStatusDotProps {
  isCompleted: boolean
  isPast: boolean
  isToday: boolean
  isFuture: boolean
}

export const StatusIcon = ({ isCompleted, isPast, isToday, isFuture }: TodoStatusDotProps) => {
  const isNotCompleted = (!isCompleted && isPast) || isToday

  return (
    <>
      {isCompleted && <Icon icon="icon/check-line1" color="green500" />}
      {isNotCompleted && <div className={dot} />}
      {isFuture && <Icon icon="icon/lock-solid" color="neutralGray300" />}
    </>
  )
}
