import * as Styles from '@/modals/MemberBatchRequestModal/container/MemberBatchList/styles'
import { InviteMember, Tooltip } from '@/shared/ui'
import { Icon } from '@repo/ui'
import { useRecoilValue } from 'recoil'
import { RegisterOrInvitedMembersAtom } from '@/modals/MemberBatchRequestModal/recoil/atom'
import { useTranslations } from 'next-intl'

const RegisterOrMemberList = () => {
  const $t = useTranslations('setting.member_setting')
  const registerOrInvitedMember = useRecoilValue(RegisterOrInvitedMembersAtom)
  if (registerOrInvitedMember.length === 0) return
  return (
    <Styles.MemberList>
      <Styles.Title>
        {$t('not_request')} ({registerOrInvitedMember.length})
        <Tooltip text={$t('waiting_member_description')} direction="right">
          <Icon icon="icon/warning-solid" color="red500" />
        </Tooltip>
      </Styles.Title>

      {registerOrInvitedMember.map((data: any, index: number) => {
        return (
          <InviteMember
            key={`invite_member_${index}`}
            formKey={`invite_member_${index}`}
            data={data}
            isChange={false}
            isDelete={false}
          />
        )
      })}
    </Styles.MemberList>
  )
}
export default RegisterOrMemberList
