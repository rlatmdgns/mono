import * as Styles from './styles'
import { PostingMember } from '@/interface/posting'
import MemberItem from '@/modals/evaluation/UpdateEvaluationMemberModal/components/MemberItem'

interface MemberListProps {
  postingMembers: PostingMember[]
  isSelected: (id: string) => boolean
  onSelect: (id: string) => void
}

const MemberList = ({ postingMembers, isSelected, onSelect }: MemberListProps) => {
  return (
    <Styles.Wrapper>
      {postingMembers.map((member) => (
        <MemberItem
          key={member.identification}
          identification={member.identification}
          user_authority={member.user_authority}
          user_name={member.user_name}
          user_profile={member.user_profile}
          isSelected={isSelected}
          onSelect={onSelect}
        />
      ))}
    </Styles.Wrapper>
  )
}

export default MemberList
