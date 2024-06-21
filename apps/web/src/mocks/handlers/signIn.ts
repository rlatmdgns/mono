import { http, HttpResponse } from 'msw'
import { signInResultMockData } from '@/mocks/model/signIn'

export const signInHandler = [
  http.post('/api/sign-in', () => {
    return HttpResponse.json(signInResultMockData)
  }),
]
