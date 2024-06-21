import {
  container,
  onboardingSidebarLayout,
} from '@/widgets/onboarding/ui/OnboardingSidebarLayout/styles.css'
import React from 'react'
import getServerEnterpriseInformation from '@/entities/enterprise/api/getServerEnterpriseInformation'

const OnboardingSidebar = React.lazy(
  () => import('@/widgets/onboarding/ui/OnboardingSidebarLayout/OnboardingSidebar'),
)

interface OnboardingSidebarLayoutProps {
  children: React.ReactNode
}

export const OnboardingSidebarLayout = async ({ children }: OnboardingSidebarLayoutProps) => {
  const initialData = await getServerEnterpriseInformation()
  return (
    <div className={onboardingSidebarLayout}>
      <OnboardingSidebar initialData={initialData} />
      <div className={container}>{children}</div>
    </div>
  )
}
