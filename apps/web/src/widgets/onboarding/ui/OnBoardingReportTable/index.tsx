import { Reports } from '@/entities/onboarding/types/reports'
import OnBoardingReportRowList from '@/features/onboarding/ui/OnBoardingReportRowList'
import { OnBoardingReportRowHeader } from '@/entities/onboarding'
import { reportWrapper } from './styles.css'

interface OnBoardingReportTableProps {
  reports: Reports
}

export const OnBoardingReportTable = ({ reports }: OnBoardingReportTableProps) => {
  const freshmen = reports.freshmen
  return (
    <div className={reportWrapper}>
      <OnBoardingReportRowHeader />
      <OnBoardingReportRowList freshmen={freshmen} />
    </div>
  )
}
