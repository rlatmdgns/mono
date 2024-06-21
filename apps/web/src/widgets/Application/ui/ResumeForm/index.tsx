'use client'

import { useFileUpload } from '@/shared/hooks/useFileUpload'
import { fileSizeValidation } from '@/shared/lib/utils'
import { ApplicantFormLabel, ApplicantNote, FileInput } from '@/shared/ui'
import { useState } from 'react'
import * as Styles from './styles'
import { useFormContext } from 'react-hook-form'
import React from 'react'

interface ResumeFormProps {
  controllerName: string
  isCanView: boolean
  isRequired: boolean
  isSelected: boolean
  isNote: boolean
  note: string
  value?: string
  onContentChange: (key: string, value: string) => void
}

const ResumeForm = ({
  isCanView,
  isRequired,
  isNote,
  note,
  isSelected,
  onContentChange,
}: ResumeFormProps) => {
  const { fileUpload } = useFileUpload()
  const [files, setFiles] = useState<FileList>()
  const { setValue } = useFormContext()

  const handleChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!event.target.files) return

    const isFileValid = fileSizeValidation({
      file: event.target.files[0],
    })

    if (!isFileValid) return
    setFiles(event.target.files)

    const { file_name } = await fileUpload(event.target.files[0])
    setValue('resume', file_name)
  }

  const handleRemoveFile = () => {
    setFiles(undefined)
    setValue('resume', null)
  }

  const onInputChange = (value: string) => {
    onContentChange('note', value)
  }

  return (
    <Styles.Wrapper $isSelected={isSelected}>
      <Styles.Inner>
        <ApplicantFormLabel title={'이력서'} isRequired={isRequired} isCanView={isCanView} />
        <ApplicantNote isNote={isNote} note={note} onInputChange={onInputChange} />
        <FileInput files={files} onChange={handleChange} onRemove={handleRemoveFile} />
      </Styles.Inner>
    </Styles.Wrapper>
  )
}

export default ResumeForm
