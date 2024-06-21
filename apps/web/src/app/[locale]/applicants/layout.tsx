import React from 'react'
import SidebarLayout from '@/widgets/SidebarLayout'
import { Header } from '@/shared/ui'
import ApplicantsMenu from '@/app/[locale]/applicants/_components/ApplicantsMenu'
import { useTranslations } from 'next-intl'

export default function ApplicantsLayout({ children }: { children: React.ReactNode }) {
  const $t = useTranslations()

  return (
    <SidebarLayout>
      <Header title={$t('page.talent_pool')} description={$t('talent_pool.description')}>
        <ApplicantsMenu />
      </Header>
      {children}
    </SidebarLayout>
  )
}
