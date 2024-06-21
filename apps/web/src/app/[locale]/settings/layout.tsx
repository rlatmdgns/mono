import SettingLayout from '@/app/[locale]/settings/_container/SettingLayout'
import getServerUser from '@/entities/user/api/getServerUser'
import React from 'react'

interface SettingsPageLayoutProps {
  children: React.ReactNode
}

export default async function SettingsPageLayout({ children }: SettingsPageLayoutProps) {
  const result = await getServerUser()
  return <SettingLayout authority={result.user_authority}>{children}</SettingLayout>
}
