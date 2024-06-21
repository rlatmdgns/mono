'use client'

import { UseFieldArrayRemove, UseFieldArrayUpdate } from 'react-hook-form'
import { DEFAULT_DATA, GRADE_TYPES } from '@/features/Application/constants'
import { Button, Select } from '@/shared/ui'
import { EducationDetailSelect } from './EducationDetailSelect'
import * as Styles from './styles'
import { ApplicantRequest, Education } from '@/entities/Application/types/ApplicantRequest'

interface EducationInputItemProps {
  update: UseFieldArrayUpdate<ApplicantRequest, 'educations'>
  remove: UseFieldArrayRemove
  educationIndex: number
  education: Education
}

export const EducationInputItem = ({
  update,
  remove,
  educationIndex,
  education,
}: EducationInputItemProps) => {
  const gradeValue = GRADE_TYPES.find((grade) => grade.dataValue === String(education.grade))

  const handleChange = (key: string, value: string | boolean | Date | null) => {
    const isOnSchool = key === 'period_graduation' && value === '재학 중'
    const newValues = isOnSchool
      ? { period_graduation: value, graduation_date: '' }
      : { [key]: value }
    const newItem = {
      ...education,
      ...newValues,
    } as Education

    update(educationIndex, newItem)
  }

  const handleEducationTypeChange = (value: string, classfication?: string) => {
    const isMajor = value === 'univ_list'
    const isNone = value === '해당없음' || value === ''

    if (isNone) {
      update(educationIndex, {
        education_type: value,
      })
      return
    }
    update(educationIndex, {
      ...DEFAULT_DATA,
      education_type: value,
      is_major: isMajor,
      classfication: classfication,
    })
  }

  const handleRemoveSchool = (index: number) => {
    remove(index)
  }

  return (
    <Styles.EducationInputItemWrapper>
      {!!educationIndex && (
        <Styles.RemoveButtonWrapper>
          <Button
            text="삭제하기"
            size="xs"
            style="mono"
            state="standard"
            width="fit-content"
            onClick={() => handleRemoveSchool(educationIndex)}
          />
        </Styles.RemoveButtonWrapper>
      )}
      <Styles.SchoolFieldWrapper>
        <Styles.SectionTitle>학력</Styles.SectionTitle>
        <Styles.SectionWrapper>
          <Select
            value={gradeValue}
            options={GRADE_TYPES}
            placeholder={'학력사항을 선택해주세요.'}
            onChange={(option) => handleEducationTypeChange(option.dataValue, option.classfication)}
            closeMenuOnScroll
          />
          <EducationDetailSelect
            educationIndex={educationIndex}
            education={education}
            onChange={handleChange}
          />
        </Styles.SectionWrapper>
      </Styles.SchoolFieldWrapper>
    </Styles.EducationInputItemWrapper>
  )
}
