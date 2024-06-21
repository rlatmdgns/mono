import FileUpload from '@/app/[locale]/file-request/[fileId]/[applicantId]/_components/FileUpload'
import { useFieldArray, useFormContext } from 'react-hook-form'
import * as Styles from './style'
import { useRecoilValue } from 'recoil'
import { SuccessStatusAtom } from '@/app/[locale]/file-request/[fileId]/[applicantId]/_recoil/atom'
import { useEffect } from 'react'
import { Toast } from '@/shared/ui'
import { useTranslations } from 'next-intl'

const FileRequestBody = () => {
  const successStatus = useRecoilValue(SuccessStatusAtom)
  const { control } = useFormContext()
  const $t = useTranslations()

  const { fields } = useFieldArray({
    control,
    name: 'file_list',
  })

  useEffect(() => {
    if (!successStatus) return
    Toast.success($t('messages.document_submit_success'))
  }, [successStatus])

  if (successStatus) return

  return (
    <Styles.RequestBody>
      {fields.map((item: any, index) => (
        <FileUpload
          title={item.file_title}
          notice={item.file_notice}
          index={index}
          key={`file-upload-${index}`}
        />
      ))}
    </Styles.RequestBody>
  )
}

export default FileRequestBody
