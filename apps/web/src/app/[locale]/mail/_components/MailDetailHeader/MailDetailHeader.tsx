import React from 'react'
import * as Styles from './styles'
import { MailToWithFrom } from '@/interface/mail'
import EmailList from '@/app/[locale]/mail/_components/EmailList.tsx'
import { useTranslations } from 'next-intl'

interface MailDetailHeaderProps {
  title?: string
  sender?: MailToWithFrom
  recipients?: MailToWithFrom[]
  carbonCopy?: MailToWithFrom[]
  blindCarbonCopy?: MailToWithFrom[]
}

const MailDetailHeader = ({
  title,
  sender,
  recipients,
  carbonCopy,
  blindCarbonCopy,
}: MailDetailHeaderProps) => {
  const isCarbonCopy = carbonCopy && carbonCopy?.length > 0
  const isBlindCarbonCopy = blindCarbonCopy && blindCarbonCopy?.length > 0
  const $t = useTranslations('mail')
  return (
    <Styles.Header>
      <Styles.Title>{title}</Styles.Title>
      <Styles.Option>
        <Styles.OptionItem>
          <Styles.OptionName>{$t('recipient')}</Styles.OptionName>
          <EmailList mails={recipients} />
        </Styles.OptionItem>
        <Styles.OptionItem>
          <Styles.OptionName>{$t('sender')}</Styles.OptionName>
          <EmailList mails={sender} />
        </Styles.OptionItem>
        {isCarbonCopy && (
          <Styles.OptionItem>
            <Styles.OptionName>{$t('cc')}</Styles.OptionName>
            <EmailList mails={carbonCopy} />
          </Styles.OptionItem>
        )}
        {isBlindCarbonCopy && (
          <Styles.OptionItem>
            <Styles.OptionName>{$t('bcc')}</Styles.OptionName>
            <EmailList mails={blindCarbonCopy} />
          </Styles.OptionItem>
        )}
      </Styles.Option>
    </Styles.Header>
  )
}

export default MailDetailHeader
