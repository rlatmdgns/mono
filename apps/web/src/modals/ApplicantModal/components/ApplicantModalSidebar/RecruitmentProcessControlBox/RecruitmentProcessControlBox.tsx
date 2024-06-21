import * as Styles from './styles'
import { useRecoilValue } from 'recoil'
import { applicantModalSidebarIsFoldAtom } from '@/modals/ApplicantModal/recoil'
import { ApplicantPostingStep } from '@/services/applicant/getApplicantModal/getApplicantModal.interface'
import UpdateStepButton from '@/modals/ApplicantModal/components/ApplicantModalSidebar/UpdateStepButton'
import FailButton from '@/modals/ApplicantModal/components/ApplicantModalSidebar/FailButton'
import { InterviewState } from '@/interface/interview'

interface PassFailButtonBoxProps {
  isEvaluator: boolean
  applicantName: string
  applicantState: number
  postingId: number
  stepId: string
  interviewState: InterviewState
  steps: ApplicantPostingStep[]
}

const RecruitmentProcessControlBox = ({
  isEvaluator,
  applicantName,
  applicantState,
  postingId,
  stepId,
  steps,
  interviewState,
}: PassFailButtonBoxProps) => {
  const isFold = useRecoilValue(applicantModalSidebarIsFoldAtom)

  if (isEvaluator) return null

  return (
    <Styles.Wrapper $isFold={isFold}>
      <UpdateStepButton
        stepId={stepId}
        steps={steps}
        applicantName={applicantName}
        postingId={postingId}
        interviewState={interviewState}
      />
      <FailButton
        applicantState={applicantState}
        applicantName={applicantName}
        postingId={postingId}
      />
    </Styles.Wrapper>
  )
}

export default RecruitmentProcessControlBox
