import { useRecoilValue } from 'recoil'
import { RequestMembersAtom } from '@/modals/MemberRequestModal/recoil/atom'
import { useInviteEnterpriseMember } from '@/shared/hooks'
import { Button } from '@/shared/ui'
import * as Styles from './styles'
import { useFormContext } from 'react-hook-form'
import { useTranslations } from 'next-intl'

interface MemberRequestFooterProps {
  onClose: () => void
}

const MemberRequestFooter = ({ onClose }: MemberRequestFooterProps) => {
  const { getValues } = useFormContext()
  const { inviteEnterpriseMemberMutate } = useInviteEnterpriseMember(onClose)

  const requestMember = useRecoilValue(RequestMembersAtom)
  const isDisabled = requestMember.length < 1
  const $t = useTranslations()
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

  return (
    <Styles.SendEmailFooter>
      <Button
        size="sm"
        width="50px"
        state="standard"
        style="mono"
        text={$t('common.cancel')}
        onClick={onClose}
      />
      <Button
        size="sm"
        width="100px"
        text={$t('setting.member_setting.request_member')}
        onClick={onSubmit}
        disabled={isDisabled}
      />
    </Styles.SendEmailFooter>
  )
}

export default MemberRequestFooter
