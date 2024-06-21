import { API_URL } from '@/shared/constants'
import { serverNestHttp } from '@/shared/lib/serverHttp'
import { FreshMenResponse } from '@/entities/onboarding/types'

export const getServerFreshMen = async () =>
  await serverNestHttp.get<FreshMenResponse>(API_URL.FRESHMEN(1, 20))
