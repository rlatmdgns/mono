import * as Styles from './styles'
import { Avatar, AuthorityBadge } from '@/shared/ui'
import EvaluationTableMemberViewBox from '@/modals/evaluation/EvaluationSettingModal/components/EvaluationTableMemberViewBox'

interface EvaluationTableMemberItemProps {
  index: number
  update: (index: number, item: object) => void
  user_name?: string
  user_profile?: string
  user_authority?: string
  can_view?: boolean
}

const EvaluationTableMemberItem = ({
  index,
  update,
  user_name,
  user_profile,
  user_authority,
  can_view,
}: EvaluationTableMemberItemProps) => {
  if (!user_name || !user_profile || !user_authority) return null
  return (
    <Styles.Wrapper>
      <Styles.Container>
        <Avatar alt={user_name} src={user_profile} />
        <Styles.Content>
          <Styles.Name>{user_name}</Styles.Name>
          <AuthorityBadge authority={user_authority} />
        </Styles.Content>
      </Styles.Container>
      <EvaluationTableMemberViewBox
        authority={user_authority}
        can_view={can_view}
        index={index}
        update={update}
      />
    </Styles.Wrapper>
  )
}

export default EvaluationTableMemberItem
