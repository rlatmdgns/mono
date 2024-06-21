import { useMemo, useRef } from 'react'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'
import './styles.css'
import 'quill-mention'
import { formats, module_mention } from '@/features/Editor/consts/MailEditor.constants'
import { MemoEditorToolBar, ReactQuillBase } from '@/shared/ui/Editor'

interface EditorProps {
  value?: string
  onChange?: (value: string) => void
  placeholder?: string
}

export const MemoEditor = ({ placeholder, value, onChange }: EditorProps) => {
  const ref = useRef<ReactQuill>(null)
  const modules = useMemo(() => {
    return {
      toolbar: {
        container: '#toolbar',
      },
      ...module_mention,
    }
  }, [ref])
  return (
    <div className="memo-editor">
      <ReactQuillBase
        forwardedRef={ref}
        value={value}
        onChange={onChange}
        modules={modules}
        formats={formats}
        placeholder={placeholder}
      />
      <MemoEditorToolBar />
    </div>
  )
}
