import React from 'react'
import { MailToWithFrom } from '@/interface/mail'
import * as Style from './styles'

interface EmailListProps {
  mails?: MailToWithFrom | MailToWithFrom[]
}

const EmailList = ({ mails }: EmailListProps) => {
  if (!mails) {
    return null
  }

  if (!Array.isArray(mails)) {
    return <Style.UserEmail>{`${mails.name}<${mails.email}>`}</Style.UserEmail>
  }

  return (
    <Style.UserEmail>
      {mails?.map((mail) => `${mail.name}<${mail.email}>`).join(', ')}
    </Style.UserEmail>
  )
}

export default EmailList
