import * as Styles from './styles'
import Header from '@/modals/ApplicantModal/components/ApplicantModalSidebar/Header'
import ApplicantControlMenu from '@/modals/ApplicantModal/components/ApplicantModalSidebar/ApplicantControlMenu'
import VoteButtonBox from '@/modals/ApplicantModal/components/ApplicantModalSidebar/VoteButtonBox'
import RecruitmentProcessControlBox from '@/modals/ApplicantModal/components/ApplicantModalSidebar/RecruitmentProcessControlBox'
import { ApplicantModalResponse } from '@/services/applicant/getApplicantModal/getApplicantModal.interface'
import { useRecoilValue } from 'recoil'
import MailBoxHistoryButtonBox from '@/modals/ApplicantModal/components/ApplicantModalSidebar/MailBoxHistoryButtonBox'
import { applicantModalSidebarIsFoldAtom } from '@/modals/ApplicantModal/recoil'
import ApplicantInfo from '@/modals/ApplicantModal/components/ApplicantModalSidebar/ApplicantInfo'
import { ApplicantResponse } from '@/services/applicant/getApplicant/getApplicant.interface'
import ApplicantTag from '@/modals/ApplicantModal/components/ApplicantModalSidebar/ApplicantInfo/ApplicantTag'

interface ApplicantModalSidebarProps {
  applicantModal?: ApplicantModalResponse
  applicant?: ApplicantResponse
  isEvaluator: boolean
  onClose: () => void
}

const ApplicantModalSidebar = ({
  applicantModal,
  applicant,
  isEvaluator,
  onClose,
}: ApplicantModalSidebarProps) => {
  const isFold = useRecoilValue(applicantModalSidebarIsFoldAtom)

  if (!applicantModal) return null

  const {
    posting_title,
    applicant_name,
    applicant_state,
    vote_me,
    posting_id,
    vote_pass_log,
    vote_fail_log,
    step_name,
    step_id,
    posting_step,
    interview_state,
  } = applicantModal

  return (
    <Styles.Wrapper $isFold={isFold}>
      <Header title={posting_title} />
      <ApplicantControlMenu
        applicant={applicant}
        applicantName={applicant_name}
        stepName={step_name}
        onClose={onClose}
      />
      <Styles.Container $isFold={isFold}>
        <RecruitmentProcessControlBox
          postingId={posting_id}
          applicantName={applicant_name}
          applicantState={applicant_state}
          stepId={step_id}
          steps={posting_step}
          interviewState={interview_state}
          isEvaluator={isEvaluator}
        />
        <VoteButtonBox
          applicantState={applicant_state}
          isEvaluator={isEvaluator}
          votePassLog={vote_pass_log}
          voteFailLog={vote_fail_log}
          myVote={vote_me}
        />
        <ApplicantInfo applicant={applicant} isEvaluator={isEvaluator} />
        <ApplicantTag isEvaluator={isEvaluator} />
        <MailBoxHistoryButtonBox
          applicant={applicant}
          applicantState={applicant_state}
          postingId={posting_id}
          isEvaluator={isEvaluator}
        />
      </Styles.Container>
    </Styles.Wrapper>
  )
}

export default ApplicantModalSidebar
