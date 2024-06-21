'use client'

import * as Styles from './styles'
import * as AccountStyles from '@/app/[locale]/settings/account/_container/styles'
import { MAIL_ALARM_LIST } from '@/app/[locale]/settings/account/_components/MailAlarm/MailAlarm.constants'
import { Switch } from '@/shared/ui'
import useUpdateMailAlarm from '@/app/[locale]/settings/account/_hooks/useUpdateMailAlarm'
import { updateMailAlarmRequest } from '@/services/auth/updateMailAlarm/interface'
import { useLocale, useTranslations } from 'next-intl'
import { Icon } from '@repo/ui'

interface MailAlarmProps {
  can_alert_new_applicants: boolean
  can_alert_interview_reminders: boolean
  can_alert_interview_fixed: boolean
  can_alert_applicant_responses: boolean

  [key: string]: boolean
}

const MailAlarm = ({
  can_alert_new_applicants,
  can_alert_interview_reminders,
  can_alert_interview_fixed,
  can_alert_applicant_responses,
}: MailAlarmProps) => {
  const { updateMailMutate } = useUpdateMailAlarm()
  const currentLocale = useLocale()
  const $t = useTranslations('setting.mail_alarm')

  const handleChangeToggle = (
    type:
      | 'can_alert_new_applicants'
      | 'can_alert_interview_reminders'
      | 'can_alert_interview_fixed'
      | 'can_alert_applicant_responses',
  ) => {
    const postData: updateMailAlarmRequest = {
      alarm_type: type,
    }
    updateMailMutate(postData)
  }

  const initData: MailAlarmProps = {
    can_alert_new_applicants,
    can_alert_interview_reminders,
    can_alert_interview_fixed,
    can_alert_applicant_responses,
  }

  return (
    <Styles.MailAlarmWrap>
      <AccountStyles.Title>{$t('title')}</AccountStyles.Title>
      <Styles.MailAlarmList>
        {MAIL_ALARM_LIST.map((list: any) => {
          return (
            <Styles.MailAlarmItem key={list.type}>
              <Styles.ToggleWrap>
                <Styles.ToggleText>
                  <Styles.IconBox>
                    <Icon icon={list.image} color="blue500" />
                  </Styles.IconBox>
                  {list[currentLocale]}
                </Styles.ToggleText>
                <Switch
                  size="sm"
                  isChecked={initData[list.type]}
                  onChange={() =>
                    handleChangeToggle(
                      list.type as
                        | 'can_alert_new_applicants'
                        | 'can_alert_interview_reminders'
                        | 'can_alert_interview_fixed'
                        | 'can_alert_applicant_responses',
                    )
                  }
                />
              </Styles.ToggleWrap>
            </Styles.MailAlarmItem>
          )
        })}
      </Styles.MailAlarmList>
    </Styles.MailAlarmWrap>
  )
}
export default MailAlarm
