import { http, HttpResponse } from 'msw'
import { API_URL } from '@/shared/constants'
import { homeDashBoardMockData } from '@/mocks/model'

export const homeHandler = [
  http.get(API_URL.HOME, () => {
    return HttpResponse.json(homeDashBoardMockData)
  }),
]
