import * as Styles from './styles'
import ApplicantCardItem from '@/modals/evaluation/EvaluationTableClosingStatusModal/components/ApplicantCardItem'
import { EvaluationTableApplicantStatus } from '@/services/evaluation/getEvaluationTableApplicantStatus/getEvaluationTableApplicantStatus.interface'

interface ApplicantCardListProps {
  applicants: EvaluationTableApplicantStatus[]
}

const ApplicantCardList = ({ applicants }: ApplicantCardListProps) => {
  return (
    <Styles.Wrapper>
      {applicants.map((applicant) => (
        <ApplicantCardItem
          key={applicant.applicant_id}
          applicantName={applicant.applicant_name}
          defaultTableApplicantStatus={applicant.table_applicant_status}
          evaluationMembersCount={applicant.evaluation_members_count}
          evaluationCount={applicant.evaluation_count}
          applicantId={applicant.applicant_id}
        />
      ))}
    </Styles.Wrapper>
  )
}

export default ApplicantCardList
