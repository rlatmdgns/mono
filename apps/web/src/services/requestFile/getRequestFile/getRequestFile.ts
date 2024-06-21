import { API_URL } from '@/shared/constants'
import { RequestFilesResponse } from '@/interface/requestFiles'
import { serverHttp } from '@/shared/lib/serverHttp'

const getRequestFile = async (fileRequestId: string, applicantId: string) => {
  return await serverHttp.get<RequestFilesResponse>(
    `${API_URL.REQUEST_FILE(fileRequestId, applicantId)}`,
  )
}

export default getRequestFile
