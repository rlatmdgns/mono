import { serverNestHttp } from '@/shared/lib/serverHttp'
import { API_URL } from '@/shared/constants'
import { PostingApplicationFormResponse } from '@/entities/recruit/types/PostingApplicationForm'

export const getSeverPostingApplicationForm = async (id: string, enterprise_recruit_url: string) =>
  await serverNestHttp.get<PostingApplicationFormResponse>(
    API_URL.POSTING_APPLICATION_FORM_PAGE(id, enterprise_recruit_url),
  )
