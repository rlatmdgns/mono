import * as Styles from './styles'
import dayjs from 'dayjs'
import 'dayjs/locale/ko'
import { InterviewDateAtoms } from '@/app/[locale]/select-schedule/[id]/[applicant-id]/_recoil/atom'
import { useRecoilState } from 'recoil'

interface SelectTimeProps {
  start: string
  end: string
}

const SelectSchedule = ({ start, end }: SelectTimeProps) => {
  const startTime = dayjs(start).format('A h:mm')
  const endTime = dayjs(end).format('A h:mm')
  const [interviewDate, setInterviewDate] = useRecoilState(InterviewDateAtoms)
  const isActive = interviewDate.some((date) => date === `${start},${end}`)
  const handleClick = () => {
    const newInterviewDate = `${start},${end}`
    !interviewDate.includes(newInterviewDate) && setInterviewDate([newInterviewDate])
  }

  return (
    <Styles.SelectSchedule>
      <Styles.TimeWrap onClick={handleClick} $isActive={isActive}>
        <Styles.Time>{startTime}</Styles.Time> - <Styles.Time>{endTime}</Styles.Time>
      </Styles.TimeWrap>
    </Styles.SelectSchedule>
  )
}
export default SelectSchedule
