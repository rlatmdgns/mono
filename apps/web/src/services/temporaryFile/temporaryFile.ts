import { nestHttp } from '@/shared/lib/http'
import { API_URL } from '@/shared/constants'
import { TemporaryFileResponse } from '@/services/temporaryFile/temporaryFile.interface'

const temporaryFile = (data: FormData) => {
  return nestHttp.postForm<TemporaryFileResponse>(API_URL.TEMPORARY_FILE, data)
}

export default temporaryFile
