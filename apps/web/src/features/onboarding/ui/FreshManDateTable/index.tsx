import { table } from './styles.css'
import { FreshManDateTableHeader } from './FreshManDateTableHeader'
import { FreshManDateTableBody } from './FreshManDateTableBody'
import { FinalStageApplicantControl } from '@/entities/onboarding/types/finalStageApplicant'

interface FreshManDateTableProps {
  control: FinalStageApplicantControl
  isBatchUpdate: boolean
}

export const FreshManDateTable = ({ control, isBatchUpdate }: FreshManDateTableProps) => {
  return (
    <div className={table}>
      <FreshManDateTableHeader isBatchUpdate={isBatchUpdate} />
      <FreshManDateTableBody control={control} isBatchUpdate={isBatchUpdate} />
    </div>
  )
}
