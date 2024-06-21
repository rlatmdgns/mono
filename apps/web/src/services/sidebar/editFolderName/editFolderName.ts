import { http } from '@/shared/lib/http'
import { API_URL } from '@/shared/constants'

interface Folder {
  folderId: string
  folderName: string
}

const editFolderName = async ({ folderId, folderName }: Folder) => {
  try {
    await http.put(API_URL.FOLDER_NAME, {
      folder_id: folderId,
      folder_name: folderName,
    })
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error.message)
    }
  }
}

export default editFolderName
