import { API_URL } from '@/shared/constants'
import { http } from '@/shared/lib/http'
import { FoldersResponse } from '@/services/getFolders/getFolders.interface'

const getFolders = () => {
  return http.get<FoldersResponse>(API_URL.FOLDER)
}

export default getFolders
