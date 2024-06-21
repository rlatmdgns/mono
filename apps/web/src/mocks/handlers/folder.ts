import { http, HttpResponse } from 'msw'
import { API_URL } from '@/shared/constants'
import { folderMockData } from '@/mocks/model/folder'

export const folderHandler = [
  http.get(API_URL.FOLDER, () => {
    return HttpResponse.json(folderMockData)
  }),

  http.post(API_URL.FOLDER, (req) => {
    return HttpResponse.json({ success: true })
  }),
]
