import { useRecoilValue } from 'recoil'
import { RegisterOrInvitedMembersAtom } from '@/modals/MemberRequestModal/recoil/atom'
import { InviteMember, Tooltip } from '@/shared/ui'
import { Icon } from '@repo/ui'
import * as Styles from './styles'
import * as WrapperStyle from '@/modals/MemberRequestModal/styles'
import { useTranslations } from 'next-intl'

const RegisterOrMemberList = () => {
  const $t = useTranslations('setting.member_setting')
  const registerOrInvitedMember = useRecoilValue(RegisterOrInvitedMembersAtom)

  if (registerOrInvitedMember.length < 1) return null

  return (
    <Styles.InviteMemberWrap>
      <WrapperStyle.Title>
        {$t('not_request')} ({registerOrInvitedMember.length})
        <Tooltip text={$t('waiting_member_description')} direction="right">
          <Icon icon="icon/warning-solid" color="red500" />
        </Tooltip>
      </WrapperStyle.Title>
      <Styles.InviteMemberList>
        {registerOrInvitedMember.map((member, index) => {
          return (
            <InviteMember
              key={`registed_or_invited_member_${index}`}
              formKey={`registed_or_invited_member_${index}`}
              data={member}
              isChange={false}
              isDelete={false}
            />
          )
        })}
      </Styles.InviteMemberList>
    </Styles.InviteMemberWrap>
  )
}

export default RegisterOrMemberList
