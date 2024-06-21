import { API_URL } from '@/shared/constants'
import { http } from '@/shared/lib/http'

const createFolder = (name: string) => {
  return http.post(API_URL.FOLDER, {
    folder_name: name,
  })
}

export default createFolder
