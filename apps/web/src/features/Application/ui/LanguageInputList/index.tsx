'use client'

import { UseFieldArrayRemove, UseFieldArrayUpdate } from 'react-hook-form'
import { AddMultipleInputButton } from '../AddMultipleInputButton'
import { LanguageInputItem } from './LanguageInputItem'
import * as Styles from './styles'
import { ApplicantRequest, Language } from '@/entities/Application/types/ApplicantRequest'

interface LanguageInputListProps {
  hasLanguage: boolean
  languages: Language[]
  onAppend: () => void
  update: UseFieldArrayUpdate<ApplicantRequest, 'languages'>
  remove: UseFieldArrayRemove
}

export const LanguageInputList = ({
  hasLanguage,
  languages,
  onAppend,
  update,
  remove,
}: LanguageInputListProps) => {
  const isAddDisabled = !languages[languages?.length - 1]?.is_language

  if (!hasLanguage) return null

  return (
    <Styles.Wrapper>
      {languages?.map((language, language_index) => (
        <LanguageInputItem
          key={`language_${language_index}`}
          languageIndex={language_index}
          language={language}
          update={update}
          remove={remove}
        />
      ))}
      <AddMultipleInputButton text="어학 추가" isAddDisabled={isAddDisabled} onClick={onAppend} />
    </Styles.Wrapper>
  )
}
