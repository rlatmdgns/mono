import React from 'react'
import SidebarLayout from '@/widgets/SidebarLayout'
import MailSidebarLayout from '@/app/[locale]/mail/_container/MailSidebarLayout'
import { MailType } from '@/interface/mail'

export default function MailLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: { type: MailType }
}) {
  return (
    <SidebarLayout>
      <MailSidebarLayout type={params.type}>{children}</MailSidebarLayout>
    </SidebarLayout>
  )
}
