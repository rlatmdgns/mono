'use client'

import SettingTitle from '@/app/[locale]/settings/_components/SettingTitle'
import AccountFooter from '@/app/[locale]/settings/account/_components/AcoountFooter'
import MailAlarm from '@/app/[locale]/settings/account/_components/MailAlarm'
import MyAccountInfo from '@/app/[locale]/settings/account/_components/MyAccountInfo/MyAccountInfo'
import useUserInfo from '@/app/[locale]/settings/account/_hooks/useUser'
import { User } from '@/interface/user'
import * as Styles from './styles'
import { useTranslations } from 'next-intl'
import { ChangeLocaleBtns } from '@/features/ChangeLocaleBtns'

interface AccountContainerProps {
  result: User
}

const AccountContainer = ({ result }: AccountContainerProps) => {
  const { user } = useUserInfo(result)
  const $t = useTranslations('setting.my_account')

  return (
    <Styles.Wrapper>
      <SettingTitle title={$t('title')} />
      <MyAccountInfo initialUserInfo={user} />
      <MailAlarm
        can_alert_new_applicants={user.can_alert_new_applicants}
        can_alert_interview_reminders={user.can_alert_interview_reminders}
        can_alert_interview_fixed={user.can_alert_interview_fixed}
        can_alert_applicant_responses={user.can_alert_applicant_responses}
      />
      {/* TODO : 다국어 컴포넌트  */}
      <ChangeLocaleBtns />
      <AccountFooter />
    </Styles.Wrapper>
  )
}

export default AccountContainer
