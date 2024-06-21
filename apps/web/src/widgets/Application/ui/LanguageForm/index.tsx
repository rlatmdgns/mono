'use client'

import { LANGUAGE_DEFAULT_VALUE } from '@/features/Application/constants/languageTypes'
import { LanguageInputList, LanguageRadio } from '@/features/Application/ui'
import { ApplicantFormLabel, ApplicantNote } from '@/shared/ui'
import { useEffect } from 'react'
import { useFieldArray, useFormContext } from 'react-hook-form'
import * as Styles from './styles'
import { ApplicantRequest } from '@/entities/Application/types/ApplicantRequest'

interface LanguageFormProps {
  isRequired: boolean
  isCanView: boolean
  isSelected: boolean
  isNote: boolean
  note: string
  onContentChange: (key: string, value: string) => void
}

const LanguageForm = ({
  isRequired,
  isCanView,
  isSelected,
  isNote,
  note,
  onContentChange,
}: LanguageFormProps) => {
  const { control } = useFormContext<ApplicantRequest>()

  const {
    append,
    fields: languages,
    update,
    remove,
    replace,
  } = useFieldArray<ApplicantRequest, 'languages', 'id'>({
    control,
    name: `languages`,
  })

  const hasLanguage = !!languages[0]?.is_language
  const emptyData = { is_language: false }

  const onAppend = () => {
    append(LANGUAGE_DEFAULT_VALUE)
  }

  const onNoteChange = (value: string) => {
    onContentChange('note', value)
  }

  const onRadioChange = (state: boolean) => {
    if (!state) return replace([emptyData])
    replace([LANGUAGE_DEFAULT_VALUE])
  }

  useEffect(() => {
    replace([emptyData])
  }, [])

  return (
    <Styles.Wrapper $isSelected={isSelected}>
      <Styles.Inner>
        <ApplicantFormLabel title={'어학'} isRequired={isRequired} isCanView={isCanView} />
        <ApplicantNote isNote={isNote} note={note} onInputChange={onNoteChange} />
        <LanguageRadio hasLanguage={hasLanguage} onChange={onRadioChange} />
        <LanguageInputList
          hasLanguage={hasLanguage}
          languages={languages}
          onAppend={onAppend}
          update={update}
          remove={remove}
        />
      </Styles.Inner>
    </Styles.Wrapper>
  )
}

export default LanguageForm
