import * as Styles from './styles'
import InviteMemberList from '@/modals/MemberRequestModal/components/InviteMemberList'
import RegisterOrMemberList from '@/modals/MemberRequestModal/components/RegisterOrMemberList'

const MemberRequestForm = () => {
  return (
    <Styles.Wrapper>
      <RegisterOrMemberList />
      <InviteMemberList />
    </Styles.Wrapper>
  )
}
export default MemberRequestForm
