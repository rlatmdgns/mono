import { getCheckIcon } from './EvaluationStatusMemberItem.functions'
import { Avatar } from '@/shared/ui'
import { Icon } from '@repo/ui'
import EvaluationMemberInfo from '../EvaluationMemberInfo'
import EvaluationMemberScore from '../EvaluationMemberScore'
import EvaluationMemberViewerAuthority from '../EvaluationMemberViewerAuthority'
import * as Styles from './styles'

interface EvaluationStatusMemberItemProps {
  userName: string
  userProfile: string
  userAuthority: string
  canView: boolean
  totalScore: number
  score: number
  isMemberEvaluationSubmitted: boolean
  identification: string
  isMe: boolean
}

const EvaluationStatusMemberItem = ({
  userName,
  userProfile,
  userAuthority,
  canView,
  score,
  isMemberEvaluationSubmitted,
  identification,
  isMe,
}: EvaluationStatusMemberItemProps) => {
  const { iconSource, iconColor } = getCheckIcon(isMemberEvaluationSubmitted)

  return (
    <Styles.Member $isMemberEvaluationSubmitted={isMemberEvaluationSubmitted}>
      <Styles.LeftContainer>
        <Styles.Avatar>
          <Avatar src={userProfile} size="lg" alt={userName} />
          <Styles.IconBox>
            <Icon icon={iconSource} color={iconColor} />
          </Styles.IconBox>
        </Styles.Avatar>
        <Styles.MemberInfo>
          <EvaluationMemberInfo userName={userName} userAuthority={userAuthority} isMyself={isMe} />
          <EvaluationMemberViewerAuthority access={canView} />
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

export default EvaluationStatusMemberItem
