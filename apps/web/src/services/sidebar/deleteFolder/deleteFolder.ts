import { http } from '@/shared/lib/http'
import { API_URL } from '@/shared/constants'

const deleteFolder = async (folderId: string) => {
  try {
    await http.delete(API_URL.DELETE_FOLDER(folderId))
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error.message)
    }
  }
}

export default deleteFolder
