import React from 'react'
import * as Styles from './styles'
import MailItem from '@/app/[locale]/mail/_components/MailItem'
import { Mail, MailType } from '@/interface/mail'
import { convertDateFormat } from '@/shared/lib/utils'

interface MailListProps {
  id?: string
  mails?: Mail[]
  type: MailType
}

const MailList = ({ id: currentId, mails, type }: MailListProps) => {
  return (
    <Styles.List>
      {mails?.map((mail) => (
        <MailItem
          key={mail.mail_id}
          id={mail.mail_id}
          type={type}
          name={mail.mail_from.name}
          subject={mail.mail_subject}
          typeIndex={mail.mail_type}
          date={convertDateFormat(mail.mail_send_date)}
          isSelected={currentId === String(mail.mail_id)}
          isRead={mail.mail_reader === 1}
        />
      ))}
    </Styles.List>
  )
}

export default MailList
