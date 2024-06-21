'use client'

import { EnterPriseHeader } from '@/entities/enterprise'
import useEnterprise from '@/entities/enterprise/hooks/useEnterprise'
import { OnBoardingNavigator } from '@/entities/onboarding'
import { EnterpriseInformationResponse } from '@/interface/enterpriseInformation'
import { sidebar } from '@/widgets/onboarding/ui/OnboardingSidebarLayout/styles.css'
import { usePathname } from 'next/navigation'

interface OnboardingSidebarProps {
  initialData?: EnterpriseInformationResponse
}

const OnboardingSidebar = ({ initialData }: OnboardingSidebarProps) => {
  const { data } = useEnterprise(initialData)
  const pathname = usePathname() as string
  return (
    <div className={sidebar}>
      <EnterPriseHeader
        image={data?.enterprise.enterprise_logo}
        title={data?.enterprise.enterprise_name}
      />
      <OnBoardingNavigator pathname={pathname} />
    </div>
  )
}

export default OnboardingSidebar
