import * as Styles from './styles'
import { UseFormRegisterReturn } from 'react-hook-form'
import { InputContent } from '@/shared/ui/FileInput/InputContent'
import { FileContent } from '@/shared/ui/FileInput/FileContent'
import React from 'react'
import { isPDFValidation } from '@/shared/lib'

interface FileInputProps {
  files?: File[] | FileList
  register?: UseFormRegisterReturn
  onRemove?: () => void
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
  accept?: string
  placeholder?: string
  isReadOnly?: boolean
}

export const FileInput = ({
  files,
  register,
  onRemove,
  onChange,
  accept,
  placeholder,
  isReadOnly = false,
}: FileInputProps) => {
  const file = files?.[0]

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!onChange) return
    if (!event.target.files) return
    if (!accept) {
      if (!isPDFValidation({ file: event.target.files[0] })) return
    }

    onChange(event)
  }
  return (
    <Styles.Wrapper>
      <InputContent
        file={file}
        register={register}
        accept={accept}
        placeholder={placeholder}
        onChange={handleChange}
        isReadOnly={isReadOnly}
      />
      <FileContent file={file} onClick={onRemove} />
    </Styles.Wrapper>
  )
}
