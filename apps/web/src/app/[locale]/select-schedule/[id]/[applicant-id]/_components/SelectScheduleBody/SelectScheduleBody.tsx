import * as Styles from './style'
import SelectScheduleList from '@/app/[locale]/select-schedule/[id]/[applicant-id]/_components/SelectScheduleBody/components/SelectScheduleList'
import { SelectScheduleProps } from '@/interface/interview'
import { useRecoilValue } from 'recoil'
import {
  InterviewResponseAtoms,
  InterviewResponseDataAtoms,
} from '@/app/[locale]/select-schedule/[id]/[applicant-id]/_recoil/atom'
import InterviewInfo from '@/app/[locale]/select-schedule/[id]/[applicant-id]/_components/SelectScheduleBody/components/InterviewInfo'

const SelectScheduleBody = ({ interviewDate, status }: SelectScheduleProps) => {
  const interviewResponse = useRecoilValue(InterviewResponseAtoms)
  const interviewResponseData = useRecoilValue(InterviewResponseDataAtoms)
  if (!interviewResponse && status !== 'EXPIRE') {
    // 면접 일시 선택
    return (
      <Styles.ScheduleBody>
        <SelectScheduleList status={status} interviewDate={interviewDate} />
      </Styles.ScheduleBody>
    )
  }

  if (interviewResponse) {
    // 지원자 정보
    return (
      <Styles.InterviewWrap>
        <Styles.InterviewInfoWrap>
          {Object.keys(interviewResponseData).map((data: string) => {
            const info = interviewResponseData[data] as string
            if (!interviewResponseData[data]) {
              return
            }
            return <InterviewInfo key={data} objectKey={data} desc={info} />
          })}
        </Styles.InterviewInfoWrap>
      </Styles.InterviewWrap>
    )
  }
}

export default SelectScheduleBody
