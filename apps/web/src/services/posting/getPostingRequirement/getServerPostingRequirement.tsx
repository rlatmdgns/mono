import { API_URL } from '@/shared/constants'
import { serverHttp } from '@/shared/lib/serverHttp'
import { PostingRequirementResponse } from '@/services/posting/getPostingRequirement/getPostingRequirement.interface'

export const getServerPostingRequirement = () => {
  return serverHttp.get<PostingRequirementResponse>(API_URL.POSTING_REQUIREMENT)
}
