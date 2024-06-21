import React from 'react'
import * as Styles from './styles'
import { useMailEditorVariableConstants } from '@/features/Editor/hooks/useMailEditorVariableConstants'

interface EditorVariableProps {
  forwardedRef: any
}

export const EditorVariable = ({ forwardedRef }: EditorVariableProps) => {
  const { VARIABLES } = useMailEditorVariableConstants()
  const handleClick = (value: string, id: string) => {
    if (!forwardedRef?.current) return
    const quill = forwardedRef.current?.getEditor()

    if (!quill.getSelection()) return
    const cursorPosition = quill.getSelection().index

    const mention = {
      denotationChar: '',
      value: value,
      blotName: `mention-${id}`,
    }

    quill.insertText(cursorPosition, '\u00A0')
    quill.setSelection(cursorPosition)
    quill.getModule('mention').insertItem(mention, true)
  }

  return (
    <Styles.Wrapper>
      {VARIABLES.map((variable) => (
        <Styles.Variable
          type="button"
          key={variable.value}
          $color={variable.color}
          $backgroundColor={variable.backgroundColor}
          onClick={() => handleClick(variable.value, variable.id)}
        >
          {variable.value}
        </Styles.Variable>
      ))}
    </Styles.Wrapper>
  )
}
