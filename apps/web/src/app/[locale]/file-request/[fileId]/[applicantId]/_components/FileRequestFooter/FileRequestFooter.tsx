import { SuccessStatusAtom } from '@/app/[locale]/file-request/[fileId]/[applicantId]/_recoil/atom'
import { Button, Toast } from '@/shared/ui'
import { RequestFileData, RequestFileWatch } from '@/interface/requestFiles'
import submitFile from '@/services/interview/submitFile'
import { useParams } from 'next/navigation'
import { FieldValues, useFormContext } from 'react-hook-form'
import { useRecoilState } from 'recoil'
import * as Styles from './styles'
import { useTranslations } from 'next-intl'

const FileRequestFooter = () => {
  const pathname = useParams()
  const { watch, handleSubmit } = useFormContext()
  const fileListWatch = watch('file_list')
  const isFileStatus = !fileListWatch.every((list: RequestFileWatch) => list?.attached_file_url)
  const [successStatus, setFileSuccess] = useRecoilState(SuccessStatusAtom)
  const $t = useTranslations()

  const handleFileSubmit = async (value: FieldValues) => {
    const applicantId = pathname?.applicantId as string
    const fileId = pathname?.fileId as string

    const postData: RequestFileData[] = fileListWatch.map((list: RequestFileWatch) => {
      return {
        file_title: list.attached_file_name,
        file_url: list.attached_file_url,
      }
    })
    const response = await submitFile(fileId, applicantId, {
      file_list: postData,
    })
    if (!response.success) {
      Toast.error($t('messages.document_submit_fail'))
      return
    }

    setFileSuccess(true)
  }
  if (!successStatus) {
    return (
      <Styles.SelectScheduleFooter>
        <Button
          text={$t('file_request.company_submit_document')}
          onClick={handleSubmit(handleFileSubmit)}
          disabled={isFileStatus}
        />
      </Styles.SelectScheduleFooter>
    )
  }
}
export default FileRequestFooter
