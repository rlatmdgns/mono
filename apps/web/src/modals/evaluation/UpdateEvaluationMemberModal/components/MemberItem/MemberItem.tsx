import * as Styles from './styles'
import { Avatar, AuthorityBadge, CheckBoxIcon } from '@/shared/ui'
import { AUTHORITY } from '@/shared/constants'

interface MemberItemProps {
  identification?: string
  user_authority?: string
  user_name: string
  user_profile: string
  isSelected: (id: string) => boolean
  onSelect: (id: string) => void
}

const MemberItem = ({
  identification,
  user_authority,
  user_name,
  user_profile,
  isSelected,
  onSelect,
}: MemberItemProps) => {
  if (!identification || !user_authority) return null
  const isEvaluator = user_authority === AUTHORITY.EVALUATOR

  return (
    <Styles.Wrapper disabled={!isEvaluator} onClick={() => onSelect(identification)} type="button">
      <CheckBoxIcon checked={isSelected(identification)} />
      <Styles.Content>
        <Avatar alt={user_name} src={user_profile} size="xs" />
        <Styles.Name>{user_name}</Styles.Name>
        <AuthorityBadge authority={user_authority} />
      </Styles.Content>
    </Styles.Wrapper>
  )
}

export default MemberItem
