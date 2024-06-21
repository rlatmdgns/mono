import { FolderSortRequest, FolderSortResponse } from './updateFolderSort.interface'
import { API_URL } from '@/shared/constants'
import { http } from '@/shared/lib/http'

const updateFolderSort = async (folder: FolderSortRequest): Promise<FolderSortResponse> =>
  await http.put(API_URL.FOLDER_SORT, folder)

export default updateFolderSort
