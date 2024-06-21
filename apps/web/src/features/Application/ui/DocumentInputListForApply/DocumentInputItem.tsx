import * as Styles from './styles'
import { ApplicantFormLabel, FileInput } from '@/shared/ui'
import { useFormContext } from 'react-hook-form'
import { useFileUpload } from '@/shared/hooks/useFileUpload'
import { useState } from 'react'
import { fileSizeValidation } from '@/shared/lib/utils'
import { Document } from '@/entities/Application/types/ApplicantRequest'
import React from 'react'

interface DocumentInputItemProps {
  isRequired: boolean
  note?: string
  title: string
  id?: number
}

export const DocumentInputItem = ({ isRequired, note, title, id }: DocumentInputItemProps) => {
  const { setValue, watch } = useFormContext()
  const { fileUpload } = useFileUpload()
  const [files, setFiles] = useState<FileList>()

  const handleChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!event.target.files) return

    const isFileValid = fileSizeValidation({
      file: event.target.files[0],
    })

    if (!isFileValid) return
    setFiles(event.target.files)

    const { file_name } = await fileUpload(event.target.files[0])

    const newDocumentList = watch('documents').map((document: any) => {
      return {
        ...document,
        file_url:
          document.posting_applicant_form_document_id === id ? file_name : document.file_url,
      }
    })

    setValue('documents', newDocumentList)
  }

  const handleRemoveFile = () => {
    setFiles(undefined)
    const documents = watch('documents')?.map((document: Document) => {
      return {
        ...document,
        file_url:
          document.posting_applicant_form_document_id === `${id}` ? null : document.file_url,
      }
    })
    setValue('documents', documents)
  }

  return (
    <Styles.Item>
      <ApplicantFormLabel title={title} isRequired={isRequired} isCanView={true} />
      {note && <Styles.Note>{note}</Styles.Note>}
      <FileInput files={files} onChange={handleChange} onRemove={handleRemoveFile} />
    </Styles.Item>
  )
}
