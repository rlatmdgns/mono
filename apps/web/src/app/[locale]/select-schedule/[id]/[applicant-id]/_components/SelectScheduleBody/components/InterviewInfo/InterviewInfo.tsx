import * as Styles from './styles'

import { getConvertObjectKey } from '@/app/[locale]/select-schedule/[id]/[applicant-id]/_components/SelectScheduleBody/components/InterviewInfo/InterviewInfo.function'

const InterviewInfo = ({ objectKey, desc }: { objectKey: string; desc: string }) => {
  return (
    <Styles.InterviewInfo>
      <Styles.InterviewTitle>{getConvertObjectKey(objectKey)}</Styles.InterviewTitle>
      <Styles.InterviewDesc>{desc}</Styles.InterviewDesc>
    </Styles.InterviewInfo>
  )
}
export default InterviewInfo
