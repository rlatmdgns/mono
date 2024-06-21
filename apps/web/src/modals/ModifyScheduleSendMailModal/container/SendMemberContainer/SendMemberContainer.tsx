import * as Styles from './styles'
import ApplicantList from '@/modals/ModifyScheduleSendMailModal/components/ModifyScheduleSendMailForm/ApplicantList'
import AttendantList from '@/modals/ModifyScheduleSendMailModal/components/ModifyScheduleSendMailForm/AttendantList'
import { useRecoilValue } from 'recoil'
import { SendAlarmAtom } from '@/modals/ModifyScheduleSendMailModal/recoil/atom'

const SendMemberContainer = () => {
  const isSendAlarm = useRecoilValue(SendAlarmAtom)

  return (
    <Styles.Wrapper $isSendAlarm={isSendAlarm}>
      <ApplicantList />
      <AttendantList />
    </Styles.Wrapper>
  )
}
export default SendMemberContainer
