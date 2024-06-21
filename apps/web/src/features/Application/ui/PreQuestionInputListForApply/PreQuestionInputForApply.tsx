import { RequiredText, Textarea } from '@/shared/ui'
import * as Styles from './styles'
import { useFormContext } from 'react-hook-form'
import React, { useState } from 'react'
import { RecruitMultipleItem } from '@/entities/build-application/types/applicationItem'
import { useTranslations } from 'next-intl'

interface PreQuestionInputItemForApplyProps {
  preQuestion: RecruitMultipleItem
  preQuestionIndex: number
}

export const PreQuestionInputItemForApply = ({
  preQuestion,
  preQuestionIndex,
}: PreQuestionInputItemForApplyProps) => {
  const $t = useTranslations('pre_question')

  const [textAreaCount, setTextAreaCount] = useState(0)

  const { setValue } = useFormContext()
  const onChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setTextAreaCount(event.target.value?.length)
    setValue(`pre_questions.${preQuestionIndex}.description`, event.target.value)
  }

  return (
    <Styles.Item>
      <RequiredText title={preQuestion.title} isRequired={preQuestion.is_required} />
      {preQuestion.note && <Styles.Note>{preQuestion.note}</Styles.Note>}
      <Textarea onChange={onChange} placeholder={$t('answer_placeholder')} maxLength={2000} />
      <Styles.Footer>
        <Styles.CountWrapper>
          <Styles.Count>{textAreaCount}</Styles.Count> / 2000자
        </Styles.CountWrapper>
      </Styles.Footer>
    </Styles.Item>
  )
}
