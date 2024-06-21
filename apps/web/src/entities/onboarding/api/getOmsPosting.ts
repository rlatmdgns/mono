import { API_URL } from '@/shared/constants'
import { nestHttp } from '@/shared/lib/http'
import { OmsPostings } from '@/entities/onboarding/types/posting'

export const getOmsPosting = async () => await nestHttp.get<OmsPostings>(API_URL.OMS_POSTING)
