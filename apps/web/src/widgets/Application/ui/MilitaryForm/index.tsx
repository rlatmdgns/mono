'use client'

import { MilitaryInput, MilitaryRadio } from '@/features/Application/ui'
import { ApplicantFormLabel, ApplicantNote } from '@/shared/ui'
import { useState } from 'react'
import { useFormContext } from 'react-hook-form'
import * as Styles from './styles'
import { Military } from '@/entities/Application/types/ApplicantRequest'

interface MilitaryFormProps {
  isRequired: boolean
  isCanView: boolean
  isSelected: boolean
  isNote: boolean
  note: string
  name: string
  value: Military
  onContentChange: (key: string, value: string) => void
}

const MilitaryForm = ({
  isNote,
  note,
  isRequired,
  isCanView,
  isSelected,
  value,
  name,
  onContentChange,
}: MilitaryFormProps) => {
  const [hasMilitary, setHasMilitary] = useState(value?.is_military || false)
  const [dischargeSelect, setDischargeSelect] = useState(value?.type || '')

  const { setValue, getValues } = useFormContext()
  const values = getValues(name)

  const handleChange = (value: boolean) => {
    if (!values) {
      setValue(name, {
        is_military: value,
      })
      setHasMilitary(value)
      return
    }
    setValue(name, {
      is_military: value,
      type: '',
      rank: '',
      discharge: '',
      enlistment_date: null,
      discharge_date: null,
    })
    setHasMilitary(value)
  }

  const onInputChange = (key: string, value: string | boolean | Date | null) => {
    setValue(name, {
      ...values,
      [key]: value,
    })
  }

  const handleDischargeSelect = (value: string) => {
    setDischargeSelect(value)
    if (value === '직접 입력') return
    setValue(name, {
      ...values,
      discharge: value,
    })
  }

  const onNoteChange = (value: string) => {
    onContentChange('note', value)
  }

  return (
    <Styles.Wrapper $isSelected={isSelected}>
      <Styles.Inner>
        <ApplicantFormLabel title={'병역 사항'} isRequired={isRequired} isCanView={isCanView} />
        <ApplicantNote isNote={isNote} note={note} onInputChange={onNoteChange} />
        <MilitaryRadio hasMilitary={hasMilitary} onChange={handleChange} />
        <MilitaryInput
          hasMilitary={hasMilitary}
          dischargeSelect={dischargeSelect}
          enlistmentDate={value?.enlistment_date}
          dischargeDate={value?.discharge_date}
          onChange={onInputChange}
          onDischargeSelect={handleDischargeSelect}
        />
      </Styles.Inner>
    </Styles.Wrapper>
  )
}

export default MilitaryForm
