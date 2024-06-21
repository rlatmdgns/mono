import { nestHttp } from '@/shared/lib/http'
import { API_URL } from '@/shared/constants'
import { PostingApplicationFormResponse } from '@/entities/recruit/types/PostingApplicationForm'

export const getPostingApplicationForm = async (id: string, enterprise_recruit_url: string) =>
  await nestHttp.get<PostingApplicationFormResponse>(
    API_URL.POSTING_APPLICATION_FORM_PAGE(id, enterprise_recruit_url),
  )
