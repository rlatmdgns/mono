import { nestHttp } from '@/shared/lib/http'
import { API_URL } from '@/shared/constants'
import { DeleteFreshMenRequest } from '@/entities/onboarding/types'

export const deleteFreshman = async (ids: DeleteFreshMenRequest) =>
  await nestHttp.delete(API_URL.FRESHMAN(), ids)
