'use client'

import { CareerInputList, CareerRadio } from '@/features/Application/ui'
import { ApplicantFormLabel, ApplicantNote } from '@/shared/ui'
import * as Styles from './styles'
import { useFieldArray, useFormContext } from 'react-hook-form'
import { useEffect } from 'react'
import { ApplicantRequest } from '@/entities/Application/types/ApplicantRequest'

interface CareerFormProps {
  controllerName: string
  isRequired: boolean
  isCanView: boolean
  isSelected: boolean
  isNote: boolean
  note: string
  onContentChange: (key: string, value: string) => void
  index: number
}

const CareerForm = ({
  isRequired,
  isCanView,
  isSelected,
  isNote,
  note,
  onContentChange,
  index,
}: CareerFormProps) => {
  const { control } = useFormContext<ApplicantRequest>()

  const {
    append,
    fields: careers,
    update,
    remove,
    replace,
  } = useFieldArray<ApplicantRequest, 'careers', 'id'>({
    control,
    name: `careers`,
  })
  const hasCareer = careers[0]?.experience_type === '경력'

  const emptyData = { experience_type: '신입' }
  const formData = {
    experience_type: '경력',
    company_name: '',
    working_status: '재직 중',
    start_date: null,
    end_date: null,
    employment_type: '',
    department: '',
    position: '',
    role: '',
  }

  const onChange = (state: boolean) => {
    if (!state) return replace([emptyData])
    replace([formData])
  }
  const onAppend = () => {
    append(formData)
  }
  const onInputChange = (value: string) => {
    onContentChange('note', value)
  }

  useEffect(() => {
    replace([emptyData])
  }, [])

  return (
    <Styles.Wrapper $isSelected={isSelected}>
      <Styles.Inner>
        <ApplicantFormLabel title={'경력 사항'} isRequired={isRequired} isCanView={isCanView} />
        <ApplicantNote isNote={isNote} note={note} onInputChange={onInputChange} />
        <CareerRadio hasCareer={hasCareer} onChange={onChange} />
        <CareerInputList
          hasCareer={hasCareer}
          index={index}
          careers={careers}
          onAppend={onAppend}
          update={update}
          remove={remove}
        />
      </Styles.Inner>
    </Styles.Wrapper>
  )
}

export default CareerForm
