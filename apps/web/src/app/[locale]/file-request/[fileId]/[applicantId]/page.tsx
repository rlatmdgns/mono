import FileRequestContainer from '@/app/[locale]/file-request/[fileId]/[applicantId]/_container'
import getRequestFile from '@/services/requestFile/getRequestFile'

interface FileRequestPageProps {
  params: {
    fileId: string
    applicantId: string
  }
}

export default async function FileRequestPage({ params }: FileRequestPageProps) {
  const fileId = params.fileId
  const applicantId = params.applicantId

  const requestFileData = await getRequestFile(fileId, applicantId)
  return <FileRequestContainer requestFileData={requestFileData} />
}
