import { http } from '@/shared/lib'

export const connectSlack = () => {
  return http.get('/api/callback/slack')
}
