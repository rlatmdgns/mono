'use client'

import { useEffect } from 'react'
import { useFieldArray, useFormContext } from 'react-hook-form'
import { EducationInputItem } from './EducationInputItem'
import { AddMultipleInputButton } from '../AddMultipleInputButton'
import * as Styles from './styles'
import { usePathname } from 'next/navigation'
import { ApplicantRequest, Education } from '@/entities/Application/types/ApplicantRequest'

interface EducationInputListProps {
  hasEducation?: boolean
}

export const EducationInputList = ({ hasEducation = true }: EducationInputListProps) => {
  const pathname = usePathname()
  const { control } = useFormContext<ApplicantRequest>()

  const {
    append,
    fields: educations,
    update,
    remove,
  } = useFieldArray<ApplicantRequest, 'educations', 'id'>({
    control,
    name: `educations`,
  })

  const educationLastItemType = educations[educations.length - 1]?.education_type
  const isAddDisabled = !educationLastItemType || educationLastItemType === '해당없음'

  const isBuild = !pathname.includes('recruit')
  const isFixed = isBuild && educations.length > 0

  const appendEducationType = () => {
    append({
      education_type: '',
    })
  }
  const handleEducationAdd = () => {
    appendEducationType()
  }

  useEffect(() => {
    if (isFixed) return
    appendEducationType()
  }, [])

  if (!hasEducation) return null
  return (
    <Styles.Wrapper>
      {educations?.map((education: Education, education_index) => (
        <EducationInputItem
          key={`education_${education_index}`}
          educationIndex={education_index}
          education={education}
          update={update}
          remove={remove}
        />
      ))}
      <AddMultipleInputButton
        isAddDisabled={isAddDisabled}
        text="학교 추가"
        onClick={handleEducationAdd}
      />
    </Styles.Wrapper>
  )
}
