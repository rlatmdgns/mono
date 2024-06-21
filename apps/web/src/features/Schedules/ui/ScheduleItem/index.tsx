import { Schedule } from '@/interface/schedules'
import * as Styles from './styles'
import { IconButton } from '@/shared/ui'
import { useRecoilValue } from 'recoil'
import { CurrentScheduleAtom } from '@/modals/ReqeustInterviewModal/recoil/atom'
import { getDayFormat } from '@/shared/lib/utils'

interface ScheduleProps {
  schedule: Schedule
  handleScheduleDelete: (id: string) => void
}

export const ScheduleItem = ({ schedule, handleScheduleDelete }: ScheduleProps) => {
  const currentSchedule = useRecoilValue(CurrentScheduleAtom)
  const { id, start, end } = schedule
  const onDelete = () => {
    handleScheduleDelete(id)
  }
  return (
    <Styles.ScheduleItem $isHover={id === currentSchedule}>
      <Styles.Day>
        <Styles.Time>{getDayFormat(start, 'a hh:mm')}</Styles.Time> ~{' '}
        <Styles.Time>{getDayFormat(end, 'a hh:mm')}</Styles.Time>
      </Styles.Day>
      <IconButton icon="icon/cancle-line1" onClick={onDelete} />
    </Styles.ScheduleItem>
  )
}
