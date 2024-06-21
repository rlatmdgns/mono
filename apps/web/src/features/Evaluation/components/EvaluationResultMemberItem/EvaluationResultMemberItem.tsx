import { Avatar } from '@/shared/ui'
import { Icon } from '@repo/ui'
import EvaluationMemberInfo from '../EvaluationMemberInfo'
import EvaluationMemberScore from '../EvaluationMemberScore'
import * as Styles from './styles'

interface EvaluationResultMemberItemProps {
  userName: string
  userProfile: string
  userAuthority: string
  totalScore: number
  score: number
  isMemberEvaluationSubmitted: boolean
  identification: string
  isMe: boolean
}

const EvaluationResultMemberItem = ({
  userName,
  userProfile,
  userAuthority,
  score,
  isMemberEvaluationSubmitted,
  identification,
  isMe,
}: EvaluationResultMemberItemProps) => {
  return (
    <Styles.Member $isMemberEvaluationSubmitted={isMemberEvaluationSubmitted}>
      <Styles.LeftContainer>
        <Avatar src={userProfile} size="lg" alt="" />
        <Styles.MemberInfo>
          <EvaluationMemberInfo userName={userName} userAuthority={userAuthority} isMyself={isMe} />
          {isMemberEvaluationSubmitted && <Icon icon="icon/check-solid" color="blue500" />}
        </Styles.MemberInfo>
      </Styles.LeftContainer>
      {isMemberEvaluationSubmitted && (
        <Styles.RightContainer>
          <EvaluationMemberScore score={score} identification={identification} />
        </Styles.RightContainer>
      )}
    </Styles.Member>
  )
}

export default EvaluationResultMemberItem
