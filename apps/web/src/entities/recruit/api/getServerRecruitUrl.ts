import { serverHttp } from '@/shared/lib/serverHttp'
import { API_URL } from '@/shared/constants'
import { RecruitUrl } from '@/entities/recruit/types/recruit'

export const getServerRecruitUrl = async () =>
  await serverHttp.get<RecruitUrl[]>(API_URL.RECRUIT_URLS)
