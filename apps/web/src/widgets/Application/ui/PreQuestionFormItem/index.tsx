'use client'

import { MultipleItemHandler, PreQuestionInput } from '@/features/Application/ui'
import * as Styles from './styles'
import { useRecoilState } from 'recoil'
import { SelectedDocumentIndexAtom } from '@/pageModules/build-application/recoil'
import React from 'react'

interface PreQuestionFormItemProps {
  questionsIndex: number
  questionIndex: number
  isSelected: boolean
  onMoveUp: (index: number) => void
  onMoveDown: (index: number) => void
  onDelete: (index: number) => void
  onContentChange: (key: string, value: string) => void
  length: number
}

const PreQuestionFormItem = ({
  questionsIndex,
  questionIndex,
  isSelected,
  onMoveUp,
  onMoveDown,
  onDelete,
  onContentChange,
  length,
}: PreQuestionFormItemProps) => {
  const [selectedDocumentIndex, setSelectedDocumentIndex] =
    useRecoilState(SelectedDocumentIndexAtom)

  const isQuestionSelected = isSelected && questionIndex === selectedDocumentIndex

  const handleClick = (event: React.MouseEvent<HTMLElement, MouseEvent>) => {
    if (event.target instanceof HTMLButtonElement) {
      return event.stopPropagation()
    }
    setSelectedDocumentIndex(questionIndex)
  }

  return (
    <Styles.Wrapper
      $isQuestionSelected={isQuestionSelected}
      onClick={handleClick}
      data-type="question"
    >
      <MultipleItemHandler
        index={questionIndex}
        isDeletable={true}
        onMoveUp={onMoveUp}
        onMoveDown={onMoveDown}
        onDelete={onDelete}
        isSelected={isQuestionSelected}
        length={length}
      />
      <PreQuestionInput
        questionsIndex={questionsIndex}
        questionIndex={questionIndex}
        onContentChange={onContentChange}
      />
    </Styles.Wrapper>
  )
}

export default PreQuestionFormItem
