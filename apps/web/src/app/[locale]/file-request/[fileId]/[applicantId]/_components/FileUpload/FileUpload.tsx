import temporaryFile from '@/services/temporaryFile'
import React from 'react'
import { useFieldArray, useFormContext } from 'react-hook-form'
import { fileSizeValidation } from '@/shared/lib/utils'

import * as Styles from './styles'
import { FileInput } from '@/shared/ui'
import { useTranslations } from 'next-intl'

interface FileUploadProps {
  title: string
  notice: string
  index: number
}

const FileUpload = ({ title, notice, index }: FileUploadProps) => {
  const { watch, control } = useFormContext()
  const { replace } = useFieldArray({
    control,
    name: 'file_list',
  })

  const $t = useTranslations('common')
  const saveFiles = (newFile: any) => {
    return watch('file_list').map((file: any) => {
      if (file.file_title === title) {
        return { ...file, ...newFile }
      }
      return file
    })
  }

  const handleFileUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!event.target.files) return
    if (
      !fileSizeValidation({
        file: event.target.files[0],
      })
    )
      return

    const formData = new FormData()
    formData.append('file', event.target.files[0])

    const result = await temporaryFile(formData)
    const newFile = {
      attached_file_name: title,
      attached_file_url: result.temporary.url,
      files: event.target.files,
    }
    replace(saveFiles(newFile))
  }

  const handleRemoveFile = () => {
    const newFile = {
      attached_file_name: null,
      attached_file_url: null,
      files: null,
    }
    replace(saveFiles(newFile))
  }

  return (
    <Styles.FileUploadContainer>
      <Styles.FileLabel>
        <Styles.FileTitle>{title}</Styles.FileTitle>
        <Styles.FileNotice>{notice}</Styles.FileNotice>
      </Styles.FileLabel>

      <FileInput
        files={watch('file_list')[index]?.files}
        placeholder={$t('file_upload_placeholder')}
        onChange={handleFileUpload}
        onRemove={handleRemoveFile}
      />
    </Styles.FileUploadContainer>
  )
}

export default FileUpload
