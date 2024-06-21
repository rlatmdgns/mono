import * as Styles from './styles'
import { Icon } from '@repo/ui'
import { useTranslations } from 'next-intl'

const ModifyScheduleSendMailHeader = () => {
  const $t = useTranslations('schedule_mail')
  return (
    <Styles.Header>
      <Styles.ImageWrap>
        <Icon icon="icon/mail-solid" color="blue500" size={36} />
      </Styles.ImageWrap>
      <Styles.Title>{$t('schedule_change_mail_send_confirm')}</Styles.Title>
      <Styles.Desc>{$t('send_mail_choice_description')}</Styles.Desc>
    </Styles.Header>
  )
}
export default ModifyScheduleSendMailHeader
