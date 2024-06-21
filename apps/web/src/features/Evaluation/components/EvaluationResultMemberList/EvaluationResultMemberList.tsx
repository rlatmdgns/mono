import * as Styles from './styles'
import EvaluationResultMemberItem from '../EvaluationResultMemberItem'
import { IndividualResult } from '@/services/evaluation/getEvaluationMembersResult/getEvaluationMembersResult.interface'

interface EvaluationResultMemberListProps {
  membersResult: IndividualResult[]
  isClosed: boolean
}

const EvaluationResultMemberList = ({
  membersResult,
  isClosed,
}: EvaluationResultMemberListProps) => {
  if (!isClosed) return null
  return (
    <Styles.Wrapper>
      <Styles.Members>
        {membersResult?.map((member) => (
          <EvaluationResultMemberItem
            key={member.identification}
            userName={member.user_name}
            userProfile={member.user_profile}
            userAuthority={member.user_authority}
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

export default EvaluationResultMemberList
