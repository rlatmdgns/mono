'use client'

import { EducationInputList } from '@/features/Application/ui'
import { ApplicantFormLabel, ApplicantNote } from '@/shared/ui'
import * as Styles from './styles'

interface EducationFormProps {
  isRequired: boolean
  isCanView: boolean
  isSelected: boolean
  index: number
  isNote: boolean
  note: string
  onContentChange: (key: string, value: string) => void
}

const EducationForm = ({
  isNote,
  note,
  isRequired,
  isCanView,
  isSelected,
  onContentChange,
}: EducationFormProps) => {
  const onInputChange = (value: string) => {
    onContentChange('note', value)
  }

  return (
    <Styles.Wrapper $isSelected={isSelected}>
      <Styles.Inner>
        <ApplicantFormLabel title="학력 사항" isRequired={isRequired} isCanView={isCanView} />
        <ApplicantNote isNote={isNote} note={note} onInputChange={onInputChange} />
        <EducationInputList />
      </Styles.Inner>
    </Styles.Wrapper>
  )
}

export default EducationForm
