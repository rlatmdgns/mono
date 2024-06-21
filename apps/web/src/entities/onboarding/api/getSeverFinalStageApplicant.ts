import { serverNestHttp } from '@/shared/lib/serverHttp'
import { API_URL } from '@/shared/constants'
import { FinalStageApplicantResponse } from '@/entities/onboarding/types'

export const getSeverFinalStageApplicant = async () =>
  await serverNestHttp.get<FinalStageApplicantResponse>(API_URL.FINAL_STAGE_APPLICANT(1, 20))
