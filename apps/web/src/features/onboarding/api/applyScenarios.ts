import { nestHttp } from '@/shared/lib/http'
import { API_URL } from '@/shared/constants'
import { ApplyScenarioForFreshmenRequest } from '@/entities/onboarding/types'

export const applyScenarios = async (id: number, data: ApplyScenarioForFreshmenRequest) =>
  await nestHttp.post(API_URL.SCENARIOS_ID(id), data)
