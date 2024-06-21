import { SelectScheduleProps } from '@/interface/interview'
import * as Styles from './styles'
import dayjs from 'dayjs'
import 'dayjs/locale/ko'
import SelectSchedule from '@/app/[locale]/select-schedule/[id]/[applicant-id]/_components/SelectScheduleBody/components/SelectSchedule'

dayjs.locale('ko')

const SelectScheduleList = ({ interviewDate }: SelectScheduleProps) => {
  let ScheduleComponent = []
  for (const date in interviewDate) {
    const scheduleList: string[] = interviewDate[date]
    if (scheduleList.length < 1) {
      continue
    }
    ScheduleComponent.push(
      <Styles.InterviewDateWrap key={date}>
        <Styles.InterviewDate>{dayjs(date).format('YYYY년 MM월 DD일 (dd)')}</Styles.InterviewDate>
        <Styles.ScheduleList>
          {scheduleList.map((list) => {
            const startTime = list[0]
            const endTime = list[1]
            return <SelectSchedule key={list} start={startTime} end={endTime} />
          })}
        </Styles.ScheduleList>
      </Styles.InterviewDateWrap>,
    )
  }

  return <>{ScheduleComponent.map((schedule) => schedule)}</>
}
export default SelectScheduleList
