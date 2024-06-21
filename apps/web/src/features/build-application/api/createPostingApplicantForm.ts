import { API_URL } from '@/shared/constants'
import { nestHttp } from '@/shared/lib/http'
import { CreatePostingApplicantFormRequest } from '@/features/build-application/types'

export const createPostingApplicantForm = async (
  posting_id: string,
  data: CreatePostingApplicantFormRequest,
): Promise<CreatePostingApplicantFormRequest> =>
  await nestHttp.post(API_URL.POSTING_APPLICANT_FORM(posting_id), data)
