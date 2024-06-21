import { http, HttpResponse } from 'msw'
import { postingMockData } from '@/mocks/model/posting'

export const postingHandler = [
  http.get('/posting/:id', () => {
    return HttpResponse.json(postingMockData)
  }),
]
