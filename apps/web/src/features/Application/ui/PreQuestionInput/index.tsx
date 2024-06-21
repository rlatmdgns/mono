'use client'

import { ApplicantNote } from '@/shared/ui'
import { Icon } from '@repo/ui'
import { useFormContext } from 'react-hook-form'
import { AutoTextarea } from './AutoTextarea'
import * as Styles from './styles'
import React from 'react'
import { useTranslations } from 'next-intl'

interface PreQuestionInputProps {
  questionsIndex: number
  questionIndex: number
  onContentChange: (key: string, value: string) => void
}

export const PreQuestionInput = ({
  questionsIndex,
  questionIndex,
  onContentChange,
}: PreQuestionInputProps) => {
  const $t = useTranslations('pre_question')
  const { watch } = useFormContext()

  const question = watch(`applicant_list.${questionsIndex}.questions.${questionIndex}`)
  const isCanView = question.is_canview
  const isRequired = question?.is_required

  return (
    <Styles.Wrapper>
      <Styles.QuestionBox>
        {!isCanView && <Icon icon="icon/lock-line" />}
        <AutoTextarea
          questionName={question.title}
          onChange={(value) => onContentChange('question_title', value)}
          isRequired={isRequired}
        />
        {question.title && isRequired && <Styles.RequiredMark />}
      </Styles.QuestionBox>
      <ApplicantNote
        isNote={question.is_note}
        note={question.note}
        onInputChange={(value) => onContentChange('question_note', value)}
      />
      <Styles.Answer placeholder={$t('answer_placeholder')} />
      <Styles.FullCount>
        <Styles.Count>0</Styles.Count>/ 2000자
      </Styles.FullCount>
    </Styles.Wrapper>
  )
}
