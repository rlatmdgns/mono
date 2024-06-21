import * as Styles from './styles'
import { useRecoilValue } from 'recoil'
import { IsRefusalStatusAtom } from '@/app/[locale]/refuse-interview/[id]/[applicant-id]/_recoil/atom'

const RefuseScheduleEnd = () => {
  const isRefusalReason = useRecoilValue(IsRefusalStatusAtom)
  if (!isRefusalReason) return null

  return (
    <Styles.RefuseScheduleEnd>
      <Styles.RefuseScheduleEndText>면접이 거절되었습니다.</Styles.RefuseScheduleEndText>
    </Styles.RefuseScheduleEnd>
  )
}
export default RefuseScheduleEnd
