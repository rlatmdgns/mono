import * as Styles from './styles'
import { Button, Toast } from '@/shared/ui'
import { useEffect, useState } from 'react'
import {
  IsRefusalStatusAtom,
  RefusalReasonAtom,
  RefuseApplicantIdAtom,
  RefuseInterviewCodeAtom,
} from '@/app/[locale]/refuse-interview/[id]/[applicant-id]/_recoil/atom'
import { useRecoilState, useRecoilValue } from 'recoil'
import refuseInterview from '@/services/interview/refuseInterview'

const RefuseScheduleFooter = ({ status }: { status: boolean }) => {
  const [isDisabled, setIsDisabled] = useState(true)
  const applicantId = useRecoilValue(RefuseApplicantIdAtom)
  const interviewCode = useRecoilValue(RefuseInterviewCodeAtom)
  const refusalReason = useRecoilValue(RefusalReasonAtom)
  const [isRefusalStatus, setIsRefusalStatus] = useRecoilState(IsRefusalStatusAtom)

  const onClick = async () => {
    const postData = {
      applicant_id: parseInt(applicantId),
      interview_id: parseInt(interviewCode),
      refusal_reason: refusalReason,
    }

    const response = await refuseInterview(postData)
    if (!response.success) {
      Toast.error('면접 일정 확정에 실패하였습니다.')
      return
    }
    Toast.success('면접이 거절되었습니다.')
    setIsRefusalStatus(true)
  }

  const handleSetDisabled = () => {
    !refusalReason ? setIsDisabled(true) : setIsDisabled(false)
  }

  useEffect(() => {
    handleSetDisabled()
  }, [refusalReason])

  if (status && !isRefusalStatus) {
    return (
      <Styles.SelectScheduleFooter>
        <Button text={'면접 거절하기'} onClick={onClick} disabled={isDisabled} />
      </Styles.SelectScheduleFooter>
    )
  }
}
export default RefuseScheduleFooter
