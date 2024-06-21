import { nestHttp } from '@/shared/lib/http'
import { API_URL } from '@/shared/constants'

export const createApplicant = (postingId: string, data: any) => {
  return nestHttp.post(API_URL.APPLICANT(postingId), data)
}
