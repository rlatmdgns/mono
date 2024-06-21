import { useRecoilState } from 'recoil'
import { RequestMembersAtom } from '@/modals/MemberRequestModal/recoil/atom'
import * as Styles from './styles'
import * as WrapperStyle from '@/modals/MemberRequestModal/styles'
import { InviteMember, Toast } from '@/shared/ui'
import { useTranslations } from 'next-intl'

const InviteMemberList = () => {
  const $t = useTranslations('messages')
  const [requestMembers, setRequestMembers] = useRecoilState(RequestMembersAtom)

  const handleDeleteMember = (email: string) => {
    const containMember = requestMembers.filter((member) => member.email !== email)
    setRequestMembers(containMember)
    Toast.success($t('member_delete_success'))
  }

  if (requestMembers.length === 0) return null

  return (
    <Styles.InviteMemberWrap>
      <WrapperStyle.Title>초대 ({requestMembers.length})</WrapperStyle.Title>
      <Styles.InviteMemberList>
        {requestMembers.map((member, index) => {
          return (
            <InviteMember
              key={`invite_member_${index}`}
              formKey={`invite_member_${index}`}
              data={member}
              isChange={true}
              isDelete={true}
              onDelete={() => handleDeleteMember(member.email)}
            />
          )
        })}
      </Styles.InviteMemberList>
    </Styles.InviteMemberWrap>
  )
}

export default InviteMemberList
