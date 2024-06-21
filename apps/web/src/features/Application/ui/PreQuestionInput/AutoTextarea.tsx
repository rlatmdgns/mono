import { Icon } from '@repo/ui'
import React, { useEffect, useRef } from 'react'
import { QUESTION_NAME_MAX_LENGTH } from '../../constants'
import * as Styles from './styles'

interface AutoTextareaProps {
  questionName: string
  onChange: (value: string) => void
  isRequired?: boolean
}

export const AutoTextarea = ({ questionName, onChange, isRequired }: AutoTextareaProps) => {
  const textAreaRef = useRef<HTMLTextAreaElement>(null)

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = event.target?.value
    if (value?.split('\n').length > 3) return
    onChange(value)
  }

  const handleKeyDown = (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (event.key === 'Enter') {
      if (event.nativeEvent.isComposing) return
      event.preventDefault()
      if (questionName.split('\n').length > 3) return
      onChange(questionName + '\n')
    }
  }

  const resizeTextarea = () => {
    if (!textAreaRef.current) return
    textAreaRef.current.style.height = '0px'
    const scrollHeight = textAreaRef.current.scrollHeight
    textAreaRef.current.style.height = scrollHeight + 'px'
  }

  useEffect(() => {
    resizeTextarea()
  }, [textAreaRef, questionName])

  return (
    <Styles.TextareaWrapper>
      {!questionName && (
        <Styles.Placeholder>
          질문 내용을 입력해주세요. (최대 200자)
          <Icon icon="icon/edit-line" color="neutralGray400" />
          {isRequired && <Styles.RequiredMark />}
        </Styles.Placeholder>
      )}
      <Styles.Textarea
        ref={textAreaRef}
        value={questionName}
        onChange={(event) => handleChange(event)}
        onKeyDown={(event) => handleKeyDown(event)}
        $hasValue={!!questionName}
        maxLength={QUESTION_NAME_MAX_LENGTH}
        rows={1}
      />
    </Styles.TextareaWrapper>
  )
}
