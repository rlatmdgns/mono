import { http, HttpResponse } from 'msw'
import { tokenMockData } from '@/mocks/model'

export const tokenHandler = [
  http.get('/token', () => {
    return HttpResponse.json(tokenMockData)
  }),
]
