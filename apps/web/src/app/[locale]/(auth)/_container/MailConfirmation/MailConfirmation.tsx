import { IMAGES } from '@/shared/constants'
import Image from 'next/image'
import * as Styles from './styles'
import { useLocale, useTranslations } from 'next-intl'

interface SignUpMailAuthenticationProps {
  email: string
}

const MailConfirmation = ({ email }: SignUpMailAuthenticationProps) => {
  const $t = useTranslations('inquiry_password')
  const currentLocale = useLocale()
  return (
    <Styles.Container>
      <Image src={IMAGES.MAIL_OPEN_BLUE} alt="icon" width={64} height={64} />
      <Styles.Title>{$t('mail_check')}</Styles.Title>
      <Styles.Desc>
        <Styles.Mail>“{email}”</Styles.Mail>
        {currentLocale === 'ko' ? '로' : ''}
        <br />
        {$t('send_email_title')}
      </Styles.Desc>
      <Styles.RepeatRequestBox>
        <Styles.RequestInfo>
          {$t('send_email_description_line_01')}
          <br />
          {$t('send_email_description_line_02')}
        </Styles.RequestInfo>
        <Styles.RequestButton type="submit">{$t('resend_mail')}</Styles.RequestButton>
      </Styles.RepeatRequestBox>
    </Styles.Container>
  )
}

export default MailConfirmation
