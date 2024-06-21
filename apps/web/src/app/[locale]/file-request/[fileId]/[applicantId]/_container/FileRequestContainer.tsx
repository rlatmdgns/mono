'use client'
import FileRequestBody from '@/app/[locale]/file-request/[fileId]/[applicantId]/_components/FileRequestBody'
import FileRequestFooter from '@/app/[locale]/file-request/[fileId]/[applicantId]/_components/FileRequestFooter'
import FileRequestHeader from '@/app/[locale]/file-request/[fileId]/[applicantId]/_components/FileRequestHeader'
import { RequestFile, RequestFilesResponse } from '@/interface/requestFiles'
import Link from 'next/link'
import { FormProvider, useForm } from 'react-hook-form'
import * as Styles from './styles'
import { PAGE } from '@/shared/constants'
import { useTranslations } from 'next-intl'

interface FileRequestContainerProps {
  requestFileData: RequestFilesResponse
}

type FormData = {
  file_list: RequestFile[]
}
const FileRequestContainer = ({ requestFileData }: FileRequestContainerProps) => {
  const { request_file: files } = requestFileData
  const $t = useTranslations()
  const methods = useForm<FormData>({
    defaultValues: {
      file_list: files,
    },
  })

  return (
    <FormProvider {...methods}>
      <Styles.FileRequestWrap>
        <Styles.FileRequestBox>
          <FileRequestHeader />
          <FileRequestBody />
          <FileRequestFooter />
        </Styles.FileRequestBox>
        <Styles.BackgroundText>
          {$t('send_mail.description')}
          <Styles.PoweredText>
            powered by <Link href={PAGE.POWERED_BY}>Stead</Link>
          </Styles.PoweredText>
        </Styles.BackgroundText>
      </Styles.FileRequestWrap>
    </FormProvider>
  )
}

export default FileRequestContainer
