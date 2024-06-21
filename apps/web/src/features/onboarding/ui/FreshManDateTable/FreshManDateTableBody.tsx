import { tableBody, row, cell, cellInput } from './styles.css'
import { useFieldArray, useFormContext } from 'react-hook-form'
import { FinalStageApplicantControl } from '@/entities/onboarding/types/finalStageApplicant'
import { CreateFreshManRequest } from '@/features/onboarding/type'
import { FreshManDateInput } from './FreshManDateInput'
import { ChangeEvent, useEffect, useState } from 'react'

interface FreshManDateTableProps {
  control: FinalStageApplicantControl
  isBatchUpdate: boolean
}

export const FreshManDateTableBody = ({ control, isBatchUpdate }: FreshManDateTableProps) => {
  const { setFocus } = useFormContext()
  const { fields, replace } = useFieldArray<CreateFreshManRequest, 'freshmen', 'id'>({
    control,
    name: 'freshmen',
  })
  const [focusName, setFocusName] = useState<string>('')

  const handleUpdateStartDate = (event: ChangeEvent<HTMLInputElement>, name: string) => {
    const newFields = fields.map((field) => ({
      ...field,
      employment_date: Number(event.target.value),
    }))
    replace(newFields)
    setFocusName(name)
  }

  const setFocusing = () => {
    if (!setFocusName || !focusName) return
    setFocus(focusName)
  }

  useEffect(() => {
    setFocusing()
  }, [fields, focusName, setFocus])

  return (
    <div className={tableBody}>
      {fields?.map((field, index) => (
        <div className={row} key={field.id}>
          <span className={cell}>{field.name}</span>
          <span className={cell}>{field.posting_title}</span>
          <span className={cell}>{field.email}</span>
          <span className={cell}>{field.phone}</span>
          <span className={cellInput}>
            <FreshManDateInput name={`freshmen.${index}.pass_date`} />
          </span>
          <span className={cellInput}>
            <FreshManDateInput
              name={`freshmen.${index}.employment_date`}
              isBatchUpdate={isBatchUpdate}
              onUpdateStartDate={handleUpdateStartDate}
            />
          </span>
        </div>
      ))}
    </div>
  )
}
