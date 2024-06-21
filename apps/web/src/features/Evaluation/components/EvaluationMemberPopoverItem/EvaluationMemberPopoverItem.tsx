import * as Styles from './styles'
import { Avatar } from '@/shared/ui'
import EvaluationMemberInfo from '../EvaluationMemberInfo'
import EvaluationMemberViewerAuthority from '../EvaluationMemberViewerAuthority'

interface EvaluationMemberPopoverItemProps {
  userProfile: string
  userName: string
  userAuthority: string
  access?: boolean
}

const EvaluationMemberPopoverItem = ({
  userProfile,
  userName,
  userAuthority,
  access,
}: EvaluationMemberPopoverItemProps) => {
  return (
    <Styles.Item>
      <Styles.Info>
        <Avatar src={userProfile} alt={userName} size="xs" />
        <EvaluationMemberInfo userName={userName} userAuthority={userAuthority} size="sm" />
      </Styles.Info>
      <Styles.View>
        <EvaluationMemberViewerAuthority access={access} />
      </Styles.View>
    </Styles.Item>
  )
}

export default EvaluationMemberPopoverItem
