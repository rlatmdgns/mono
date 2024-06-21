import { http, HttpResponse } from 'msw'
import { tokenMockData, userMockData } from '@/mocks/model'
import { API_URL } from '@/shared/constants'

export const userHandler = [
  http.get(API_URL.USER, () => {
    return HttpResponse.json(userMockData)
  }),
]
