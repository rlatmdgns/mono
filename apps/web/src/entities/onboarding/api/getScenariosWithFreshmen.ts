import { API_URL } from '@/shared/constants'
import { nestHttp } from '@/shared/lib/http'
import { ScenarioWithFreshmenResponse } from '@/entities/onboarding/types'

export const getScenariosWithFreshmen = async (id: number) =>
  await nestHttp.get<ScenarioWithFreshmenResponse[]>(API_URL.SCENARIOS_ID(id))
