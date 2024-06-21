import EvaluationStatusMemberList from '@/features/Evaluation/components/EvaluationStatusMemberList'
import EvaluationResultMemberList from '@/features/Evaluation/components/EvaluationResultMemberList'
import { IndividualResult } from '@/services/evaluation/getEvaluationMembersResult/getEvaluationMembersResult.interface'

interface EvaluationMemberListProps {
  isSummary: boolean
  isClosed: boolean
  membersResult: IndividualResult[]
}

const EvaluationMemberList = ({
  isSummary,
  isClosed,
  membersResult,
}: EvaluationMemberListProps) => {
  if (isSummary) return null
  return (
    <>
      <EvaluationStatusMemberList isClosed={isClosed} membersResult={membersResult} />
      <EvaluationResultMemberList isClosed={isClosed} membersResult={membersResult} />
    </>
  )
}

export default EvaluationMemberList
