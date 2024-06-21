'use client'

import { AWARD_DEFAULT_VALUE } from '@/features/Application/constants'
import { AwardInputList, AwardRadio } from '@/features/Application/ui'
import { ApplicantFormLabel, ApplicantNote } from '@/shared/ui'
import { useEffect } from 'react'
import { useFieldArray, useFormContext } from 'react-hook-form'
import * as Styles from './styles'
import { ApplicantRequest } from '@/entities/Application/types/ApplicantRequest'

interface AwardFormProps {
  controllerName: string
  isCanView: boolean
  isRequired: boolean
  isNote: boolean
  note: string
  isSelected: boolean
  onContentChange: (key: string, value: string) => void
}

const AwardForm = ({
  isCanView,
  isRequired,
  isNote,
  note,
  isSelected,
  onContentChange,
}: AwardFormProps) => {
  const { control } = useFormContext<ApplicantRequest>()

  const {
    append,
    fields: awards,
    update,
    remove,
    replace,
  } = useFieldArray<ApplicantRequest, 'awards', 'id'>({
    control,
    name: `awards`,
  })

  const IsAwardOnLastItem = awards[0]?.is_award
  const emptyData = { is_award: false }

  const onRadioChange = (state: boolean) => {
    if (!state) return replace([emptyData])
    replace([AWARD_DEFAULT_VALUE])
  }

  const onNoteChange = (value: string) => {
    onContentChange('note', value)
  }

  const onAppend = () => {
    append(AWARD_DEFAULT_VALUE)
  }

  useEffect(() => {
    replace([emptyData])
  }, [])

  return (
    <Styles.Wrapper $isSelected={isSelected}>
      <Styles.Inner>
        <ApplicantFormLabel title={'수상'} isRequired={isRequired} isCanView={isCanView} />
        <ApplicantNote isNote={isNote} note={note} onInputChange={onNoteChange} />
        <AwardRadio hasAward={IsAwardOnLastItem} onChange={onRadioChange} />
        <AwardInputList
          hasAward={IsAwardOnLastItem}
          awards={awards}
          onAppend={onAppend}
          update={update}
          remove={remove}
        />
      </Styles.Inner>
    </Styles.Wrapper>
  )
}

export default AwardForm
