'use client'

import { wrapper } from './styles.css'
import { OnBoardingReportCount } from '@/entities/onboarding'
import { Reports } from '@/entities/onboarding/types/reports'
import { OnBoardingReportTable } from '@/widgets/onboarding'
import { OnBoardingReportSelect } from '@/features/onboarding'

interface OnBoardingReportsPageProps {
  initialData: Reports
}

export const OnBoardingReportsPage = ({ initialData }: OnBoardingReportsPageProps) => {
  const count = initialData.freshmen.length
  return (
    <section className={wrapper}>
      <OnBoardingReportCount count={count} />
      <OnBoardingReportSelect />
      <OnBoardingReportTable reports={initialData} />
    </section>
  )
}
