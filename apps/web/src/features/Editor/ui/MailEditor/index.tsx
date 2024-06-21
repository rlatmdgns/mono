import { formats, module_mention } from '@/features/Editor/consts/MailEditor.constants'
import { http } from '@/shared/lib/http'
import 'quill-mention'
import { useCallback, useMemo, useRef } from 'react'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'
import './styles.css'
import { ReactQuillBase } from '@/shared/ui/Editor/ReactQuillBase'
import { EditorVariable } from '@/features/Editor/ui/EditorVariable'
import { EditorToolBar } from '@/shared/ui/Editor'

interface EditorProps {
  value?: string
  onChange?: (value: string) => void
  placeholder?: string
  width?: string
}

export const MailEditor = ({ placeholder, width, value, onChange }: EditorProps) => {
  const ref = useRef<ReactQuill>(null)

  const handleImage = useCallback(() => {
    const input = document.createElement('input')
    input.setAttribute('type', 'file')
    input.setAttribute('accept', 'image/*')
    input.click()
    input.onchange = async () => {
      const file = input.files ? input.files[0] : null
      if (!file) return
      const formData = new FormData()
      formData.append('image_file', file)
      const quillObj = ref.current?.getEditor()
      const range = quillObj?.getSelection()!
      try {
        const res: any = await http.postForm('/image_upload', formData)
        quillObj?.insertEmbed(range.index, 'image', `${res.image_utl}`)
        quillObj?.formatText(range.index, 1, 'width', '100%')
      } catch (error) {
        console.error(error)
      }
    }
  }, [ref])

  const modules = useMemo(() => {
    return {
      toolbar: {
        container: '#toolbar',
        handlers: {
          image: handleImage,
        },
      },
      ...module_mention,
    }
  }, [ref, handleImage])

  return (
    <div style={{ width: width || '100%' }}>
      <EditorVariable forwardedRef={ref} />
      <EditorToolBar />
      <ReactQuillBase
        forwardedRef={ref}
        value={value}
        onChange={onChange}
        modules={modules}
        formats={formats}
        placeholder={placeholder}
      />
    </div>
  )
}
