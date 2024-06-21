import './styles.css'
import * as Styles from './styles'
import ReactQuill from 'react-quill'
import { useMemo, useRef, useState } from 'react'
import { formats, module_mention } from '@/features/Editor/consts/MailEditor.constants'
import { EditorVariable } from '@/features/Editor/ui/EditorVariable'
import { ReactQuillBase } from '@/shared/ui/Editor'
import { useTranslations } from 'next-intl'

interface InnerEditorProps {
  value?: string
  onChange?: (value: string) => void
  placeholder?: string
}

export const InnerEditor = ({ placeholder, value, onChange }: InnerEditorProps) => {
  const ref = useRef<ReactQuill>(null)
  const [focused, setFocused] = useState(false)

  const $t = useTranslations('mail_variable')

  const onFocus = () => setFocused(true)
  const onBlur = () => setFocused(false)

  const modules = useMemo(() => {
    return {
      toolbar: false,
      ...module_mention,
    }
  }, [ref])

  return (
    <Styles.Wrapper className="inner-editor">
      <ReactQuillBase
        id="inner-editor"
        forwardedRef={ref}
        value={value}
        onChange={onChange}
        modules={modules}
        formats={formats}
        placeholder={placeholder}
        onFocus={onFocus}
        onBlur={onBlur}
      />
      {focused && (
        <Styles.VariableBox>
          <Styles.VariableBoxTitle>{$t('add_variable')}</Styles.VariableBoxTitle>
          <EditorVariable forwardedRef={ref} />
        </Styles.VariableBox>
      )}
    </Styles.Wrapper>
  )
}
