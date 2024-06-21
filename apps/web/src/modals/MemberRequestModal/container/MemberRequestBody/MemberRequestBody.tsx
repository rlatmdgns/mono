import * as Styles from './styles'
import InviteMember from '@/modals/MemberRequestModal/components/InviteMemberForm'
import { useTranslations } from 'next-intl'

const MemberRequestBody = () => {
  const $t = useTranslations('setting.member_setting')
  return (
    <Styles.Wrap>
      <Styles.Title>{$t('request_mail_title')}</Styles.Title>
      <InviteMember />
    </Styles.Wrap>
  )
}

export default MemberRequestBody
