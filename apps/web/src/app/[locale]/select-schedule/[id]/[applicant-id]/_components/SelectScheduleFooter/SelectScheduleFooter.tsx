import * as Styles from './styles'
import { Button } from '@/shared/ui'
import { useRecoilValue } from 'recoil'
import {
  ApplicantIdAtom,
  InterviewCodeAtom,
  InterviewDateAtoms,
} from '@/app/[locale]/select-schedule/[id]/[applicant-id]/_recoil/atom'
import { useEffect, useState } from 'react'
import useUpdateSelectInterview from '@/app/[locale]/select-schedule/[id]/[applicant-id]/_components/SelectScheduleFooter/hooks/useUpdateSelectInterview'
import { InterviewPostRequest } from '@/interface/interview'

interface SelectScheduleFooterProps {
  status: string
  buttonText?: string
}

const SelectScheduleFooter = ({ buttonText, status }: SelectScheduleFooterProps) => {
  const [isDisabled, setIsDisabled] = useState(true)
  const applicantId = useRecoilValue(ApplicantIdAtom)
  const interviewCode = useRecoilValue(InterviewCodeAtom)
  const interviewDate = useRecoilValue(InterviewDateAtoms)
  const { updateSelectInterviewMutate } = useUpdateSelectInterview()

  const onClick = async () => {
    if (status === 'EXPIRE') {
      window.close()
    }

    if (status === 'SELECT') {
      const postData: InterviewPostRequest = {
        applicant_id: parseInt(applicantId),
        interview_id: parseInt(interviewCode),
        interview_date: interviewDate[0].split(','),
      }
      updateSelectInterviewMutate(postData)
      setIsDisabled(true)
    }
  }

  const handleSetDisabled = () => {
    if (status === 'SELECT' && interviewDate) {
      interviewDate.length === 0 ? setIsDisabled(true) : setIsDisabled(false)
    }
  }

  useEffect(() => {
    handleSetDisabled()
  }, [interviewDate])

  if (!buttonText) {
    return
  }

  return (
    <Styles.SelectScheduleFooter>
      <Button size="md" text={buttonText} onClick={onClick} disabled={isDisabled} />
    </Styles.SelectScheduleFooter>
  )
}
export default SelectScheduleFooter
