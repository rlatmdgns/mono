import { serverHttp } from '@/shared/lib/serverHttp'
import { API_URL } from '@/shared/constants'
import { FoldersResponse } from '@/services/getFolders/getFolders.interface'

const getServerFolders = () => {
  return serverHttp.get<FoldersResponse>(API_URL.FOLDER)
}

export default getServerFolders
