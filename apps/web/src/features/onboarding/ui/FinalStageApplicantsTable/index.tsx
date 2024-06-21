import { table } from './styles.css'
import {
  FinalStageApplicant,
  FinalStageApplicantControl,
} from '@/entities/onboarding/types/finalStageApplicant'
import { FinalStageApplicantsTableHeader } from './FinalStageApplicantsTableHeader'
import { FinalStageApplicantsTableBody } from './FinalStageApplicantsTableBody'
import { OmsPostings } from '@/entities/onboarding/types'

interface FinalStageApplicantsTableProps {
  finalStageApplicants: FinalStageApplicant[]
  control: FinalStageApplicantControl
  onFilterPosting: (posting_id?: number) => void
  postings?: OmsPostings
}

export const FinalStageApplicantsTable = ({
  finalStageApplicants,
  control,
  postings,
  onFilterPosting,
}: FinalStageApplicantsTableProps) => {
  return (
    <div className={table}>
      <FinalStageApplicantsTableHeader
        finalStageApplicants={finalStageApplicants}
        control={control}
        postings={postings}
        onFilterPosting={onFilterPosting}
      />
      <FinalStageApplicantsTableBody
        finalStageApplicants={finalStageApplicants}
        control={control}
      />
    </div>
  )
}
