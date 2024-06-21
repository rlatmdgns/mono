import { API_URL } from '@/shared/constants'
import { http } from '@/shared/lib/http'
import { UploadType } from '@/features/streamdocs/type'

export const uploadStreamDocs = async (id: number, type: UploadType) => {
  if (!id) {
    throw new Error('id is required')
  }
  return await http.post(API_URL.APPLICANT_FILE_STREAMDOC(id), {
    upload_type: type,
  })
}
