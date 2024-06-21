import { nestHttp } from '@/shared/lib/http'
import { API_URL } from '@/shared/constants'
import { CreateFreshManRequest } from '@/entities/onboarding/types'

export const createAtsFreshMan = async (data: CreateFreshManRequest[]) =>
  await nestHttp.post(API_URL.CREATE_ATS_FRESHMAN, data)
