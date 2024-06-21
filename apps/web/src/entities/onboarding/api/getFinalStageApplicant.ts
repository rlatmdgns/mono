import { API_URL } from '@/shared/constants'
import { nestHttp } from '@/shared/lib/http'
import { FinalStageApplicantResponse } from '@/entities/onboarding/types'

export const getFinalStageApplicant = async (page: number, limit: number, posting_id?: number) =>
  await nestHttp.get<FinalStageApplicantResponse>(
    API_URL.FINAL_STAGE_APPLICANT(page, limit, posting_id),
  )
