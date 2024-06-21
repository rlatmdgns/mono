import * as Styles from './styles'
import { getExpireScheduleHeaderInfo } from '@/app/[locale]/refuse-interview/[id]/[applicant-id]/_components/RefuseScheduleHeader/RefuseScheduleHeader.function'

const RefuseScheduleHeader = ({ status }: { status: boolean }) => {
  const headerInfo = getExpireScheduleHeaderInfo(status)

  if (!headerInfo) return
  return (
    <Styles.ScheduleHeader>
      {headerInfo?.icon}
      <Styles.Title>{headerInfo?.title}</Styles.Title>
    </Styles.ScheduleHeader>
  )
}

export default RefuseScheduleHeader
