import React from 'react'
import { MailType } from '@/interface/mail'
import MailSidebar from '@/app/[locale]/mail/_container/MailSidebar'
import { getServerMailBox } from '@/services/mail/getMailBox'

interface MailLayoutProps {
  children: React.ReactNode
  type: MailType
}

const MailSidebarLayout = async ({ children, type }: MailLayoutProps) => {
  const mailCounts = await getServerMailBox()
  return (
    <div style={{ display: 'flex' }}>
      <MailSidebar type={type} mailCounts={mailCounts} />
      {children}
    </div>
  )
}

export default MailSidebarLayout
