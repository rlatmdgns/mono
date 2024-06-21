import { API_URL } from '@/shared/constants'
import { nestHttp } from '@/shared/lib/http'
import { FreshMenResponse } from '@/entities/onboarding/types'

export const getFreshMen = async (page: number, limit: number) =>
  await nestHttp.get<FreshMenResponse>(API_URL.FRESHMEN(page, limit))
