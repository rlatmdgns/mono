import { http, HttpResponse } from 'msw'
import { sidebarMockData } from '@/mocks/model'
import { API_URL } from '@/shared/constants'

export const sidebarHandler = [
  http.get(API_URL.SIDE_BAR, () => {
    return HttpResponse.json(sidebarMockData)
  }),
]
