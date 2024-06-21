import { API_URL } from '@/shared/constants'
import { http } from '@/shared/lib/http'
import { RequestFileData } from '@/interface/requestFiles'

interface SubmitFileResponse {
  success: boolean
}

interface SubmitFileRequest {
  file_list: RequestFileData[]
}

const submitFile = async (
  request_file_id: string,
  applicantId: string,
  fileList: SubmitFileRequest,
) => {
  return await http.post<SubmitFileRequest, SubmitFileResponse>(
    API_URL.REQUEST_FILE(request_file_id, applicantId),
    fileList,
  )
}

export default submitFile
