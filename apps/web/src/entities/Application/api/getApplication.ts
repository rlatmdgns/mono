import { API_URL } from '@/shared/constants'
import { ApplicationResponse } from '@/entities/Application/types'
import { nestHttp } from '@/shared/lib/http'

export const getApplication = async (applicant_id: string): Promise<ApplicationResponse> =>
  await nestHttp.get<ApplicationResponse>(API_URL.APPLICATION(applicant_id))
