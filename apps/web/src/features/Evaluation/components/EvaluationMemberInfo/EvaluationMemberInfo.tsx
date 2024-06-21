import { AuthorityBadge } from '@/shared/ui'
import * as Styles from './styles'

interface EvaluationMemberInfoProps {
  userName: string
  userAuthority: string
  isMyself?: boolean
  size?: 'sm' | 'md'
}

const EvaluationMemberInfo = ({
  userName,
  userAuthority,
  isMyself,
  size = 'md',
}: EvaluationMemberInfoProps) => {
  return (
    <Styles.Info>
      <Styles.Name $size={size}>{userName}</Styles.Name>
      <AuthorityBadge authority={userAuthority} />
      {isMyself && <Styles.Myself>MY</Styles.Myself>}
    </Styles.Info>
  )
}

export default EvaluationMemberInfo
