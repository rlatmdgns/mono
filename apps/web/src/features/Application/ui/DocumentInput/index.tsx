'use client'

import { ApplicantNote, FileInput } from '@/shared/ui'
import { Icon } from '@repo/ui'
import { useFormContext } from 'react-hook-form'
import { DOCUMENT_TITLE_MAX_LENGTH } from '../../constants'
import * as Styles from './styles'
import React from 'react'

interface DocumentInputProps {
  documentsIndex: number
  documentIndex: number
  onContentChange: (key: string, value: string) => void
}

export const DocumentInput = ({
  documentsIndex,
  documentIndex,
  onContentChange,
}: DocumentInputProps) => {
  const { watch } = useFormContext()

  const document = `applicant_list.${documentsIndex}.documents.${documentIndex}`
  const documentItem = watch(document)
  const value = documentItem?.title
  const isCanView = documentItem?.is_canview
  const isRequired = documentItem?.is_required

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      event.preventDefault()
    }
  }

  return (
    <Styles.Wrapper>
      <Styles.TextBox>
        {!isCanView && <Icon icon="icon/lock-line" />}
        <Styles.QuestionBox>
          {!value && (
            <Styles.Placeholder>
              항목 명을 입력해주세요. (최대 100자)
              <Icon icon="icon/edit-line" color="neutralGray400" />
              {isRequired && <Styles.RequiredMark />}
            </Styles.Placeholder>
          )}
          <Styles.Input
            value={watch(`${document}.title`)}
            onChange={(event) => onContentChange('document_title', event.target.value)}
            maxLength={DOCUMENT_TITLE_MAX_LENGTH}
            onKeyDown={(event) => handleKeyDown(event)}
          />
          {value && isRequired && <Styles.RequiredMark />}
        </Styles.QuestionBox>
      </Styles.TextBox>
      <ApplicantNote
        isNote={documentItem?.is_note}
        note={documentItem?.note}
        onInputChange={(value) => onContentChange('document_note', value)}
      />
      <FileInput />
    </Styles.Wrapper>
  )
}
