import React from 'react'
import MemberContainer from '@/app/[locale]/settings/member/_container/MemberContainer'
import getServerUser from '@/entities/user/api/getServerUser'

interface MemberPageLayoutProps {
  children: React.ReactNode
}

export default async function MemberPageLayout({ children }: MemberPageLayoutProps) {
  const { user_authority } = await getServerUser()

  return <MemberContainer authority={user_authority}>{children}</MemberContainer>
}
