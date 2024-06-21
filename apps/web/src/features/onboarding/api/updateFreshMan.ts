import { nestHttp } from '@/shared/lib/http'
import { API_URL } from '@/shared/constants'
import { UpdateFreshManRequest } from '@/entities/onboarding/types'

export const updateFreshMan = async (id: number, data: UpdateFreshManRequest) =>
  await nestHttp.patch(API_URL.FRESHMAN(id), data)
