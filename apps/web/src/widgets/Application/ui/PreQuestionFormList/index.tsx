'use client'

import * as Styles from './styles'
import PreQuestionFormItem from '@/widgets/Application/ui/PreQuestionFormItem'
import { useFormContext } from 'react-hook-form'
import { RecruitMultipleItem } from '@/entities/build-application/types/applicationItem'

interface PreQuestionFormListProps {
  index: number
  isSelected: boolean
  onContentChange: (key: string, value: string) => void
  onMoveUp: (index: number, type?: 'documents' | 'questions') => void
  onMoveDown: (index: number, type?: 'documents' | 'questions') => void
  onDelete: (index: number, type?: 'documents' | 'questions') => void
}

const PreQuestionFormList = ({
  index,
  isSelected,
  onContentChange,
  onMoveUp,
  onMoveDown,
  onDelete,
}: PreQuestionFormListProps) => {
  const { watch } = useFormContext()
  const questions: RecruitMultipleItem[] = watch(`applicant_list.${index}.questions`)
  const questionsIndexArray = questions?.map((_, index) => index)
  const isEmpty = !questions || questions.length < 1

  const handleMoveUp = (question_index: number) => {
    onMoveUp(question_index, 'questions')
  }
  const handleMoveDown = (question_index: number) => {
    onMoveDown(question_index, 'questions')
  }
  const handleDelete = (question_index: number) => {
    onDelete(question_index, 'questions')
  }

  if (isEmpty) return null
  return (
    <Styles.Wrapper $isSelected={isSelected}>
      <Styles.Inner>
        {questionsIndexArray?.map((question_index) => (
          <PreQuestionFormItem
            key={`questions_${question_index}`}
            questionsIndex={index}
            questionIndex={question_index}
            isSelected={isSelected}
            length={questions.length}
            onMoveUp={handleMoveUp}
            onMoveDown={handleMoveDown}
            onDelete={handleDelete}
            onContentChange={onContentChange}
          />
        ))}
      </Styles.Inner>
    </Styles.Wrapper>
  )
}

export default PreQuestionFormList
