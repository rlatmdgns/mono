import { nestHttp } from '@/shared/lib/http'
import { API_URL } from '@/shared/constants'
import { PostingApplicationFormResponse } from '@/entities/recruit/types/PostingApplicationForm'

export const getPostingApplicantForm = (id: string) => {
  return nestHttp.get<PostingApplicationFormResponse>(API_URL.POSTING_APPLICANT_FORM(id))
}
