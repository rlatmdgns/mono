import * as Styles from './styles'
import EvaluationStatusMemberItem from '../EvaluationStatusMemberItem'
import { IndividualResult } from '@/services/evaluation/getEvaluationMembersResult/getEvaluationMembersResult.interface'

interface EvaluationStatusMemberListProps {
  membersResult: IndividualResult[]
  isClosed: boolean
}

const EvaluationStatusMemberList = ({
  membersResult,
  isClosed,
}: EvaluationStatusMemberListProps) => {
  if (isClosed) return null
  return (
    <Styles.Wrapper>
      <Styles.Members>
        {membersResult.map((member) => (
          <EvaluationStatusMemberItem
            key={member.identification}
            userName={member.user_name}
            userProfile={member.user_profile}
            userAuthority={member.user_authority}
            canView={member.can_view}
            totalScore={member.total_score}
            score={member.score}
            isMemberEvaluationSubmitted={member.is_member_evaluation_submitted}
            identification={member.identification}
            isMe={member.is_me}
          />
        ))}
      </Styles.Members>
    </Styles.Wrapper>
  )
}

export default EvaluationStatusMemberList
