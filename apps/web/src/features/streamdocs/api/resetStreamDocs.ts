import { API_URL } from '@/shared/constants'
import { http } from '@/shared/lib/http'

export const resetStreamDocs = async (id: number) => {
  if (!id) {
    throw new Error('id is required')
  }
  return await http.patch(API_URL.APPLICANT_FILE_STREAMDOC(id), {
    file_type: 'masking',
  })
}
