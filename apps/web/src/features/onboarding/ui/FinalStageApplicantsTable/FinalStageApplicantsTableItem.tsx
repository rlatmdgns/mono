import { tableBodyItem, tableBodyItemCell } from './styles.css'
import { Controller } from 'react-hook-form'
import { CheckBox } from '@repo/ui'
import {
  FinalStageApplicant,
  FinalStageApplicantControl,
} from '@/entities/onboarding/types/finalStageApplicant'
import { addFinalStageApplicantDate } from '@/entities/onboarding/lib'

interface FreshManTableBodyProps {
  control: FinalStageApplicantControl
  finalStageApplicant: FinalStageApplicant
}

export const FinalStageApplicantsTableItem = ({
  finalStageApplicant,
  control,
}: FreshManTableBodyProps) => {
  const { name, posting_title, phone, email } = finalStageApplicant

  const isSelected = (applicants: FinalStageApplicant[]) =>
    applicants.some((applicants: FinalStageApplicant) => applicants.id === finalStageApplicant.id)
  const filterApplicants = (applicants: FinalStageApplicant[]) =>
    applicants
      .filter((applicants: FinalStageApplicant) => applicants.id !== finalStageApplicant.id)
      .map((applicant) => {
        return addFinalStageApplicantDate(applicant)
      })

  const handleChange = (
    value: FinalStageApplicant[],
    onChange: (applicants: FinalStageApplicant[]) => void,
  ) => {
    if (isSelected(value)) {
      return onChange(filterApplicants(value))
    }
    onChange([...value, addFinalStageApplicantDate(finalStageApplicant)])
  }

  return (
    <div className={tableBodyItem}>
      <Controller
        name="freshmen"
        control={control}
        render={({ field }) => {
          return (
            <CheckBox
              isChecked={isSelected(field.value)}
              onChange={() => handleChange(field.value, field.onChange)}
            />
          )
        }}
      />
      <span className={tableBodyItemCell}>{name}</span>
      <span className={tableBodyItemCell}>{posting_title}</span>
      <span className={tableBodyItemCell}>{phone}</span>
      <span className={tableBodyItemCell}>{email}</span>
    </div>
  )
}
