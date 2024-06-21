import * as Styles from './style'
import RefuseScheduleSelect from '@/app/[locale]/refuse-interview/[id]/[applicant-id]/_components/RefuseScheduleSelect'
import RefuseScheduleEnd from '@/app/[locale]/refuse-interview/[id]/[applicant-id]/_components/RefuseScheduleEnd/RefuseScheduleEnd'

const RefuseScheduleBody = ({ status }: { status: boolean }) => {
  if (status) {
    return (
      <Styles.ScheduleBody>
        <RefuseScheduleSelect />
        <RefuseScheduleEnd />
      </Styles.ScheduleBody>
    )
  }
}

export default RefuseScheduleBody
