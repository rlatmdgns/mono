import { Member } from '../Member'
import { PostingMember } from '@/interface/posting'
import * as Style from './styles'

interface MemberListProps {
  members: PostingMember[]
}

export const MemberList = ({ members }: MemberListProps) => {
  return (
    <Style.Wrapper>
      {members?.map((member, index) => (
        <Member
          key={`${member.user_name}_${index}`}
          name={member.user_name}
          image={member.user_profile}
          isPadding
        />
      ))}
    </Style.Wrapper>
  )
}
