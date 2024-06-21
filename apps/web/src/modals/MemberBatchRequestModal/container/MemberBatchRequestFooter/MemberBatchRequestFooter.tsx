import * as Styles from './styles'
import { Button } from '@/shared/ui'
import { useInviteEnterpriseMember } from '@/shared/hooks'
import { useRecoilValue } from 'recoil'
import { RequestMembersAtom } from '@/modals/MemberBatchRequestModal/recoil/atom'
import { useFormContext } from 'react-hook-form'
import { useTranslations } from 'next-intl'

interface MemberBatchRequestFooterProps {
  onClose: () => void
}

const MemberBatchRequestFooter = ({ onClose }: MemberBatchRequestFooterProps) => {
  const $t = useTranslations()
  const { getValues } = useFormContext()

  const requestMember = useRecoilValue(RequestMembersAtom)
  const { inviteEnterpriseMemberMutate } = useInviteEnterpriseMember(onClose)

  const onSubmit = () => {
    const invite_member = []
    for (let value in getValues()) {
      invite_member.push({
        email: getValues()[value].email,
        user_authority: getValues()[value].user_authority.value,
      })
    }

    if (!invite_member) return
    inviteEnterpriseMemberMutate({ invite_member })
  }

  const isNotRequestMember = requestMember.length === 0

  return (
    <Styles.SendEmailFooter>
      <Button
        size="sm"
        width="50px"
        text={$t('common.cancel')}
        state="standard"
        style="mono"
        onClick={onClose}
      />
      <Button
        size="sm"
        width="100px"
        text={$t('setting.member_setting.request_member')}
        disabled={isNotRequestMember}
        onClick={onSubmit}
      />
    </Styles.SendEmailFooter>
  )
}

export default MemberBatchRequestFooter
