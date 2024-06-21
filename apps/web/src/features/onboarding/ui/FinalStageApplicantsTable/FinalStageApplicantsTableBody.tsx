import {
  FinalStageApplicant,
  FinalStageApplicantControl,
} from '@/entities/onboarding/types/finalStageApplicant'
import { FinalStageApplicantsTableItem } from './FinalStageApplicantsTableItem'

interface FinalStageApplicantsTableBodyProps {
  finalStageApplicants: FinalStageApplicant[]
  control: FinalStageApplicantControl
}

export const FinalStageApplicantsTableBody = ({
  finalStageApplicants,
  control,
}: FinalStageApplicantsTableBodyProps) => {
  return (
    <div>
      {finalStageApplicants.map((applicant, index) => (
        <FinalStageApplicantsTableItem
          key={`final_stage_applicant_${index}`}
          finalStageApplicant={applicant}
          control={control}
        />
      ))}
    </div>
  )
}
